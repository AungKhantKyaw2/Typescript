import {db} from "./firebaseConfig";
import {collection,addDoc,onSnapshot,Timestamp,query,where, Unsubscribe, orderBy} from "firebase/firestore";


export interface chatMessage{
    message:string,
    username:string,
    room:string;
    createdAt:Timestamp
}

export class Chatroom{
    private room:string;
    private username:string;
    // private unsubscribe:null | (()=>void) = null;
    private unsubscribe:null |  Unsubscribe = null;
    
    private chats = collection(db,"chats");

    constructor(room:string,username:string){
        this.room = room;
        this.username = username;


    }


    // create chat message
    async addChat(message:string):Promise<void>{

        const now = new Date();
        const chatdata:chatMessage = {
            message,
            username:this.username,
            room:this.room,
            createdAt:Timestamp.fromDate(now)
        }

        try{

           await addDoc(this.chats,chatdata);
  

        }catch(err){
            console.error("Error adding chate :",err);
            throw err;
        }


    }


    // get chat messages  ************
    getChats(callback:(data:chatMessage)=>void):void{

        const qry = query(this.chats,where('room',"==",this.room),orderBy('createdAt'));

        this.unsubscribe = onSnapshot(qry,(docSnap:any)=>{

            docSnap.docChanges().forEach((item:any)=>{

                // console.log(item);

                if(item.type === "added"){
                    callback(item.doc.data());
                }

            });

        });

    }


    // change chat room
    updateRoom(room:string):void{

        this.room = room;

        // console.log("room updated = ",this.room);

        if(this.unsubscribe){
            this.unsubscribe();
        }

    }


    // update user name 
    updateName(username:string){

        // method 1
        this.username = username;
        localStorage.setItem("username",username);


        // method 2
        // return new Promise(resolve=>{
        //     this.username = username;
        //     localStorage.setItem("username",username);
        //     resolve();
        // });
    }

}










//5WP