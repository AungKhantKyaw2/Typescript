var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Chatroom } from "./Chatroom";
import { MessageUI } from "./MesssageUi";
import "../css/style.css";
const chatsidebar = document.querySelector(".chat-sidebars");
const updatemsg = document.querySelector(".update-msg");
const newnameform = document.querySelector(".new-nameform");
const chatlistgroup = document.querySelector(".chat-lists");
const newchatform = document.querySelector(".new-chatform");
const username = localStorage.username ? localStorage.username : "Guest";
const chatroomObj = new Chatroom("general", username);
const messageuiObj = new MessageUI(chatlistgroup);
newchatform.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const input = newchatform.querySelector("#message");
    const message = input.value.trim();
    if (!message)
        return;
    try {
        yield chatroomObj.addChat(message);
        newchatform.reset();
    }
    catch (err) {
        console.log(err);
    }
}));
chatsidebar.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === "BUTTON") {
        messageuiObj.clearli();
        const roomid = target.getAttribute('id');
        ;
        if (roomid) {
            chatroomObj.updateRoom(roomid);
            chatroomObj.getChats(data => messageuiObj.renderli(data));
        }
    }
});
chatroomObj.getChats((data) => {
    messageuiObj.renderli(data);
});
newnameform.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = newnameform.querySelector("#name");
    const newname = input.value.trim();
    if (!newname)
        return;
    chatroomObj.updateName(newname);
    newnameform.reset();
    updatemsg.innerText = `Your name was update to ${newname}`;
    setTimeout(() => updatemsg.innerText = '', 3000);
});
