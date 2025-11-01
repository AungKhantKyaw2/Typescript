import {Chatroom} from "./Chatroom";
import {MessageUI} from "./MesssageUi";

// get UI
const chatsidebar = document.querySelector(".chat-sidebars")as HTMLElement;
const updatemsg = document.querySelector(".update-msg")as HTMLElement;
const newnameform = document.querySelector(".new-nameform")as HTMLFormElement;
const chatlistgroup = document.querySelector(".chat-lists")as HTMLElement;
const newchatform = document.querySelector(".new-chatform")as  HTMLFormElement;

const username = localStorage.username ? localStorage.username : "Guest";

// instance Chatroom obj & MesssageUI
const chatroomObj = new Chatroom("general",username);
const messageuiObj = new MessageUI(chatlistgroup);


// add new message
newchatform.addEventListener('submit',async (e:Event)=>{
    e.preventDefault();

    const input = newchatform.querySelector("#message") as HTMLInputElement;
    const message =input.value.trim();
    // console.log(message);

    if(!message) return ;


  try{

    await chatroomObj.addChat(message);
    newchatform.reset();

  }catch(err){
    console.log(err);
  }


});


// change chat room
chatsidebar.addEventListener('click',(e:Event)=>{

    const target =e.target as HTMLElement;

    if(target.tagName === "BUTTON"){
        // console.log("i am btn");
        // console.log(e.target.getAttribute('id'));

        messageuiObj.clearli();

        const roomid = target.getAttribute('id'); ;
      
        if(roomid){
            chatroomObj.updateRoom(roomid);
            chatroomObj.getChats(data=>messageuiObj.renderli(data));
        }
   
    }

}); 




// get chat & render li 
chatroomObj.getChats((data)=>{
    // console.log(data);

    messageuiObj.renderli(data);

});




// update username
newnameform.addEventListener('submit',(e:Event)=>{
    e.preventDefault();

    const input = newnameform.querySelector("#name") as HTMLInputElement;
    const newname = input.value.trim();
    // console.log(newname);

    if(!newname) return;

    // method 1
    // chatroomObj.updateName(newname);
    // newnameform.reset();

    // method 2
    chatroomObj.updateName(newname)
        .then(()=>newnameform.reset())
        .catch(err=>console.log(err));

    updatemsg.innerText = `Your name was update to ${newname}`;
    setTimeout(()=>updatemsg.innerText='',3000);
});






