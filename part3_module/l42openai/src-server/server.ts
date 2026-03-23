import "dotenv/config";
import express from "express";
import path from "path";

import {fileURLToPath} from "url";
import { createServer } from 'http';
import { WebSocketServer } from "ws";
import {AIClient, ChateMessage} from "./openaiClient.js";

const PORT = Number(process.env.PORT ||  9000);
const CHAT_MODEL = String(process.env.CHAT_MODEL || "gpt-4.1");
const IMAGE_MODEL = String(process.env.IMAGE_MODEL || "dall-e-3");
const IMAGE_SIZE =String(process.env.IMAGE_SIZE || "1024x1024"); // must be string

const app = express();
 const OPENAIKEY =String(process.env.OPENAI_API_KEY);
 console.log(OPENAIKEY);
const AI = new AIClient(String(process.env.OPENAI_API_KEY));


//paths (helps when using ES6)

// const _filename = fileURLToPath(import.meta.url);
// const _dirname = path.dirname(_filename);

//Middleware

//we need to check
// const PUBLIC_DIR = app.use(express.static(path.join(__dirname,"public")));
// console.log(PUBLIC_DIR);
// const STATIC_DIR =app.use(express.static(path.join(__dirname,"public/static")));

const PUBLIC_DIR = path.join(process.cwd(),"public"); // cwd stands for Current working Directory, //output :// /User/yourname/../l42openai/public 
const STATIC_DIR = path.join(PUBLIC_DIR,"static"); //output :// /User/yourname/../l42openai/public/static

console.log(PUBLIC_DIR);
console.log(STATIC_DIR);
 
//static
app.use(express.static(PUBLIC_DIR));
app.use("/static",express.static("static"));

//routes

app.get("/",(_req,res)=>{
     res.sendFile(path.join(PUBLIC_DIR,"index.html"));
});

app.get("/image",(_req,res)=>{
    res.sendFile(path.join(PUBLIC_DIR,"image.html"))
});


//Pre-connection memory train

function createChatLogs():ChateMessage[]{
     return[
         {
              role:"system",
              content:"You are a friend of DLT., Also , you know everything about general knowledge."
         }
     ];
}

//http Server

const server = createServer(app);
const wssText = new WebSocketServer({ noServer: true });
const wssImage = new WebSocketServer({ noServer: true });

//Multiple Server
wssText.on('connection',(ws)=>{

  const chatLogs = createChatLogs();

    ws.on("message",async(data)=>{
        const prompt = data.toString().trim();
        
        if(!prompt) return;

        try{
         
           
              await AI.generateText(prompt,chatLogs,CHAT_MODEL,(token:string)=>{
                
                console.log("WS readyState :" , ws.readyState);


             if(ws.readyState === 1)   ws.send(token);
                });

              
    
        }catch(err:any){

          console.log(" SERVER ERROR:", err?.message);
          if(ws.readyState === 1)  
             
                ws.send(`Error: ${err?.message || String(err) } `);
        }
    });
});

wssImage.on('connection',(ws)=>{


    ws.on("message",async(data)=>{
        const prompt = data.toString().trim();
        
        if(!prompt) return;

        try{
         
           
                const url = await AI.generateImage(prompt,IMAGE_MODEL,IMAGE_SIZE);

                if(ws.readyState === 1)   ws.send(url);
    
        }catch(err:any){
          console.log(" SERVER ERROR:", err?.message);
          if(ws.readyState === 1)    ws.send(`Error: ${err?.message  || String(err)}`);
        }
    });
});


server.on('upgrade', (request, socket, head)=> {
    const { pathname } = new URL(request.url || "/", 'wss://base.url'); // /wstext or /wsimage
  
    if (pathname === '/wstext') {
      wssText.handleUpgrade(request, socket, head, function done(ws) {
        wssText.emit('connection', ws, request);
      });
    } else if (pathname === '/wsimage') {
      wssImage.handleUpgrade(request, socket, head, function done(ws) {
        wssImage.emit('connection', ws, request);
      });
    } else {
      socket.destroy();
    }
  });

server.listen(PORT,()=>{
    
    console.log(`Server running : http://localhost:${PORT}`);
    console.log(`Text Generate Page : http://localhost:${PORT}/`);
    console.log(`Image Generate Page : http://localhost:${PORT}/image`);
    console.log(`ws Text : ws://localhost:${PORT}/wstext`);
    console.log(`ws Image : ws://localhost:${PORT}/wsimage`);

});


//11IG