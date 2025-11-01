import {db} from "./firebaseconfig.js";
import {collection,addDoc,onSnapshot,Timestamp,query,where} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

export class Chatroom{

    constructor(room,username){
        this.room = room;
        this.username = username;
        this.chats = collection(db,"chats");
        this.unsubscribe = null;
    }


    // create chat message
    async addChat(message){

        const now = new Date();
        const chatdata = {
            message,
            username:this.username,
            room:this.room,
            createdAt:Timestamp.fromDate(now)
        }

        try{

            const response = await addDoc(this.chats,chatdata);
            return response;

        }catch(err){
            console.error("Error adding chate :",err);
            throw err;
        }


    }


    // get chat messages
    getChats(callback){

        this.unsubscribe = onSnapshot(query(this.chats,where('room',"==",this.room)),docSnap=>{

            docSnap.docChanges().forEach(item=>{

                // console.log(item);

                if(item.type === "added"){
                    callback(item.doc.data());
                }

            });

        });

    }


    // change chat room
    updateRoom(room){

        this.room = room;

        // console.log("room updated = ",this.room);

        if(this.unsubscribe){
            this.unsubscribe();
        }

    }


    // update user name 
    updateName(username){

        // method 1
        // this.username = username;
        // localStorage.setItem("username",username);


        // method 2
        return new Promise(resolve=>{
            this.username = username;
            localStorage.setItem("username",username);
            resolve();
        });
    }

}