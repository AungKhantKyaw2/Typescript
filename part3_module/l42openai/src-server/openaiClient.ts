import { ca, th } from "date-fns/locale";
import OpenAI from "openai";


export type ChateMessage ={
    role:"system" | "user" | "assistant";
    content:string    
};

export class AIClient{

    private client:OpenAI;

    constructor(apiKey:string)
    {
        if(!apiKey) throw new Error("Missing OPENAI_API_KEY in .env");

        this.client = new OpenAI({apiKey});
    }

    async generateText(userInput:string,chatLogs:ChateMessage[],model:string,callback:(token:string)=>void):Promise<string>{
         
        chatLogs.push({role:"user",content:userInput});

        let fullresponse = "";
        try{

            const completion = await this.client.chat.completions.create({
                model,
                store:false,
                messages:chatLogs,
                temperature:0.6,
                stream:true
            })

            for await (const chunk of completion){
                  const botresponse = chunk.choices?.[0]?.delta?.content  ?? "";

                if(botresponse){
                       fullresponse += botresponse;
                       callback(botresponse);
                }
            }

            chatLogs.push({role:"assistant",content:fullresponse});

            return fullresponse;

         }catch(err:any){
            throw new Error(err?.message);

         }
    }

    async generateImage(prompt:string,model:string,size:string):Promise<string>{

        try{
            
            const completion = await this.client.images.generate({
                 model,
                 prompt,
                 size:size as any,
                 n:1
            })
            const botresponse = completion.data?.[0]?.url;

            if(!botresponse) throw new Error("No image generated");

            return botresponse;

        }catch(err:any){
            throw new Error(err?.message);
        }
    }


}