var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { db } from "./firebaseConfig";
import { collection, addDoc, onSnapshot, Timestamp, query, where, orderBy } from "firebase/firestore";
export class Chatroom {
    constructor(room, username) {
        this.unsubscribe = null;
        this.chats = collection(db, "chats");
        this.room = room;
        this.username = username;
    }
    addChat(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = new Date();
            const chatdata = {
                message,
                username: this.username,
                room: this.room,
                createdAt: Timestamp.fromDate(now)
            };
            try {
                yield addDoc(this.chats, chatdata);
            }
            catch (err) {
                console.error("Error adding chate :", err);
                throw err;
            }
        });
    }
    getChats(callback) {
        const qry = query(this.chats, where('room', "==", this.room), orderBy('createdAt'));
        this.unsubscribe = onSnapshot(qry, (docSnap) => {
            docSnap.docChanges().forEach((item) => {
                if (item.type === "added") {
                    callback(item.doc.data());
                }
            });
        });
    }
    updateRoom(room) {
        this.room = room;
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }
    updateName(username) {
        this.username = username;
        localStorage.setItem("username", username);
    }
}
