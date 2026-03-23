"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const http_1 = require("http");
const ws_1 = require("ws");
const openaiClient_js_1 = require("./openaiClient.js");
const PORT = Number(process.env.PORT || 9000);
const CHAT_MODEL = String(process.env.CHAT_MODEL || "gpt-4.1");
const IMAGE_MODEL = String(process.env.IMAGE_MODEL || "dall-e-3");
const IMAGE_SIZE = String(process.env.IMAGE_SIZE || "1024x1024");
const app = (0, express_1.default)();
const OPENAIKEY = String(process.env.OPENAI_API_KEY);
console.log(OPENAIKEY);
const AI = new openaiClient_js_1.AIClient(String(process.env.OPENAI_API_KEY));
const PUBLIC_DIR = path_1.default.join(process.cwd(), "public");
const STATIC_DIR = path_1.default.join(PUBLIC_DIR, "static");
console.log(PUBLIC_DIR);
console.log(STATIC_DIR);
app.use(express_1.default.static(PUBLIC_DIR));
app.use("/static", express_1.default.static("static"));
app.get("/", (_req, res) => {
    res.sendFile(path_1.default.join(PUBLIC_DIR, "index.html"));
});
app.get("/image", (_req, res) => {
    res.sendFile(path_1.default.join(PUBLIC_DIR, "image.html"));
});
function createChatLogs() {
    return [
        {
            role: "system",
            content: "You are a friend of DLT., Also , you know everything about general knowledge."
        }
    ];
}
const server = (0, http_1.createServer)(app);
const wssText = new ws_1.WebSocketServer({ noServer: true });
const wssImage = new ws_1.WebSocketServer({ noServer: true });
wssText.on('connection', (ws) => {
    const chatLogs = createChatLogs();
    ws.on("message", async (data) => {
        const prompt = data.toString().trim();
        if (!prompt)
            return;
        try {
            await AI.generateText(prompt, chatLogs, CHAT_MODEL, (token) => {
                console.log("WS readyState :", ws.readyState);
                if (ws.readyState === 1)
                    ws.send(token);
            });
        }
        catch (err) {
            console.log(" SERVER ERROR:", err?.message);
            if (ws.readyState != 1)
                ws.send(`Error: ${err?.message || String(err)} `);
        }
    });
});
wssImage.on('connection', (ws) => {
    ws.on("message", async (data) => {
        const prompt = data.toString().trim();
        if (!prompt)
            return;
        try {
            const url = await AI.generateImage(prompt, IMAGE_MODEL, IMAGE_SIZE);
            if (ws.readyState === 1)
                ws.send(url);
        }
        catch (err) {
            console.log(" SERVER ERROR:", err?.message);
            if (ws.readyState === 1)
                ws.send(`Error: ${err?.message || String(err)}`);
        }
    });
});
server.on('upgrade', (request, socket, head) => {
    const { pathname } = new URL(request.url || "/", 'wss://base.url');
    if (pathname === '/wstext') {
        wssText.handleUpgrade(request, socket, head, function done(ws) {
            wssText.emit('connection', ws, request);
        });
    }
    else if (pathname === '/wsimage') {
        wssImage.handleUpgrade(request, socket, head, function done(ws) {
            wssImage.emit('connection', ws, request);
        });
    }
    else {
        socket.destroy();
    }
});
server.listen(PORT, () => {
    console.log(`Server running : http://localhost:${PORT}`);
    console.log(`Text Generate Page : http://localhost:${PORT}/`);
    console.log(`Image Generate Page : http://localhost:${PORT}/image`);
    console.log(`ws Text : ws://localhost:${PORT}/wstext`);
    console.log(`ws Image : ws://localhost:${PORT}/wsimage`);
});
