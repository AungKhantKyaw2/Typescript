"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIClient = void 0;
const openai_1 = __importDefault(require("openai"));
class AIClient {
    constructor(apiKey) {
        if (!apiKey)
            throw new Error("Missing OPENAI_API_KEY in .env");
        this.client = new openai_1.default({ apiKey });
    }
    async generateText(userInput, chatLogs, model, callback) {
        chatLogs.push({ role: "user", content: userInput });
        let fullresponse = "";
        try {
            const completion = await this.client.chat.completions.create({
                model,
                store: false,
                messages: chatLogs,
                temperature: 0.6,
                stream: true
            });
            for await (const chunk of completion) {
                const botresponse = chunk.choices?.[0]?.delta?.content ?? "";
                if (botresponse) {
                    fullresponse += botresponse;
                    callback(botresponse);
                }
            }
            chatLogs.push({ role: "assistant", content: fullresponse });
            return fullresponse;
        }
        catch (err) {
            throw new Error(err?.message);
        }
    }
    async generateImage(prompt, model, size) {
        try {
            const completion = await this.client.images.generate({
                model,
                prompt,
                size: size,
                n: 1
            });
            const botresponse = completion.data?.[0]?.url;
            if (!botresponse)
                throw new Error("No image generated");
            return botresponse;
        }
        catch (err) {
            throw new Error(err?.message);
        }
    }
}
exports.AIClient = AIClient;
