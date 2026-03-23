export{};//prevent global redeclare, if not export (global script) , after export ts assume(module file ) , (module file= private scope)

// UI 
const sendbtn = document.getElementById("send-btn") as HTMLButtonElement;
const userinput = document.getElementById("userinput") as HTMLTextAreaElement;
const displaybox = document.getElementById("displaybox") as HTMLDivElement;
const clearhistory = document.getElementById("clear-history") as HTMLAnchorElement;
const spinner = document.getElementById("loading-spinner") as HTMLDivElement;

type HistoyItem={
    role:"user-input" | "ai-response";
    content:string
}
let lastMessageDiv : HTMLDivElement | null = null;
let isNewInput:boolean = true;

function wsURL(pathname:string){
     
     const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
     if(isLocal) return `ws://localhost:9000${pathname}`; //ws://locathost:9000/ws
     return `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.hostname}${pathname}`; // wss://dataland.com/ws
}

const ws  = new WebSocket(wsURL('/wstext'));

ws.onopen = function(){
     console.log("WebSocket connection established");
};

ws.onerror = ()=>{spinner.style.display ="none"}
ws.onclose=()=>{spinner.style.display="none"};

ws.onmessage=(event)=>{

    const message = String(event.data);

    //remove initial placeholder
    if(displaybox.querySelector("small")) displaybox.innerHTML = "";
    if(lastMessageDiv && !isNewInput){
        // to localStorage
    }else{

        //create div

         const div =document.createElement("div");
         div.className="p-3 ms-3 chat-message ai-response";
         div.textContent = message;
         div.appendChild(div);

         saveToLocal("ai-response",message);
    }

  
    //auto scroll to bottom
    displaybox.scrollTop= displaybox.scrollHeight;
    spinner.style.display = "none";

}

sendbtn.addEventListener('click',(e)=>{

    e.preventDefault();

    const input = userinput.value.trim();

    if(!input) return;

    if(displaybox.querySelector("small")) displaybox.innerHTML= "";

    const userDiv =document.createElement("div");
    userDiv.className = "p-3 ms-3 chat-message user-input";
    userDiv.textContent = input;
    displaybox.appendChild(userDiv);

    ws.send(input);

    saveToLocal('user-input',input);

    userinput.value="";
    userinput.focus();

    lastMessageDiv = null;
    isNewInput = true;
    //auto scroll to bottom
    displaybox.scrollTop= displaybox.scrollHeight;
    spinner.style.display="block";


});


window.onload=()=>{
    // const stored = JSON.parse(localStorage.getItem("chathistory") || "[]") as Array<{
    //     role:string,
    //     content:string
    // }>
    const stored = JSON.parse(localStorage.getItem("chathistory") || "[]") as HistoyItem[];

console.log(stored);
    if(stored.length === 0) return;

    displaybox.innerHTML= "";

    let curRole:HistoyItem["role"] | null = null;
    let curContent:string  = "";

    stored.forEach((item)=>{
         
         if(item.role === curRole) curContent += item.content;

         else{
              if(curRole) appendMessage(curRole,curContent);

              curRole = item.role;
              curContent = item.content;
         }

         appendMessage(curRole,curContent);
    });

        //auto scroll to bottom
        displaybox.scrollTop= displaybox.scrollHeight;
}



function appendMessage(role:string,content:string){
        const newdiv = document.createElement("div");
        newdiv.className = "p-3 ms-3 chate-message" + role;
        newdiv.textContent= content;
        displaybox.appendChild(newdiv);
}

function saveToLocal(role:HistoyItem["role"],content:string){
     let arr = JSON.parse(localStorage.getItem("chathistory") || "[]") as HistoyItem[];
   arr.push({role:role,content:content});
   localStorage.setItem("chathistory",JSON.stringify(arr));
}




clearhistory.addEventListener('click',()=>{
    localStorage.removeItem("chathistory");
    location.reload();
});



// for localhost
// let ws = new WebSocket("ws://localhost:8000/ws");

// for cloud server https deployment
// let websocketstring = '';

// if(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
//     websocketstring = `ws://localhost:8000/ws`; // local
// }else{
//     websocketstring = `wss://${window.location.hostname}/ws`; // https deployment
// }

// let ws = new WebSocket(websocketstring);


// let lastmessagediv = null;
// let isnewinput = true;

// ws.onopen = function(){
//     console.log("WebSocket connection established");
// };

// ws.onerror = function(err){
//     console.log("WebSocket connection error:",err);
//     document.getElementById("loading-spinner").style.display = "none";
// };


// ws.onclose = function(event){
//     console.log("WebSocket connection closed:",event);
//     document.getElementById("loading-spinner").style.display = "none";
// };


// ws.onmessage = function(event){

//     let message = event.data;
//     // console.log(event);
//     // console.log(message);

//     if(lastmessagediv && !isnewinput){

//         lastmessagediv.textContent += message;

//         savetolocal("ai-response",message); // to localstorage

//     }else{
//         let messagediv = document.createElement("div");
//         messagediv.className = "p-3 ms-3 chat-message ai-response";
//         messagediv.textContent = message;
//         displaybox.appendChild(messagediv);

//         lastmessagediv = messagediv;
//         isnewinput = false;

//     }

//     document.getElementById("loading-spinner").style.display = "none";

// }


// sendbtn.addEventListener("click",function(e){
//     e.preventDefault();
    
//     let getinputval = userinput.value.trim();
    
//     if(getinputval){

//         let userinputdiv = document.createElement("div");
//         userinputdiv.className = "p-3 ms-3 chat-message user-input";
//         userinputdiv.textContent = getinputval;
//         displaybox.appendChild(userinputdiv);

//         ws.send(getinputval); // to websocket
//         savetolocal("user-input",getinputval); // to localstorage

//         userinput.value = "";
//         userinput.focus();


//         lastmessagediv = null;
//         isnewinput = true;

//         document.getElementById("loading-spinner").style.display = "block";
    
//     }
// });



// window.onload = function(){
//     let storagedatas = JSON.parse(localStorage.getItem("chathistory") || "[]");

//     if(storagedatas.length > 0){

//         let currole = null;
//         let curcontent = '';

//         storagedatas.forEach((storagedata,idx)=>{

//             if(storagedata.role === currole){
//                 curcontent += storagedata.content;
//             }else{
//                 // console.log(currole); // undefined

//                 if(currole){
//                     let messagediv = document.createElement("div");
//                     messagediv.className = "p-3 ms-3 chat-message "+ currole;
//                     messagediv.textContent = curcontent;
//                     displaybox.appendChild(messagediv);
//                 }

//                 // start new message
//                 currole = storagedata.role;
//                 curcontent = storagedata.content;

//                 // console.log(currole); // user-input , ai-response
//             }

//             // console.log(curcontent);

//             if(idx === storagedatas.length - 1){
//                 let messagediv = document.createElement("div");
//                 messagediv.className = "p-3 ms-3 chat-message "+ currole;
//                 messagediv.textContent = curcontent;
//                 displaybox.appendChild(messagediv);
//             }

//         });

//     }else{
//         displaybox.innerHTML = `<small class="text-muted">How can I help you?</small>`;
//     }
// };

// function savetolocal(role,content){
//     let getdatas = JSON.parse(localStorage.getItem("chathistory") || "[]");
//     getdatas.push({role:role,content:content});
//     localStorage.setItem("chathistory",JSON.stringify(getdatas));
// }

// clearhistory.addEventListener('click',function(){
//     localStorage.removeItem("chathistory");
//     location.reload();
// });