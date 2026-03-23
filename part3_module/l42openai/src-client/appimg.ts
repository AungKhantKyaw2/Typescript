export{};//prevent global redeclare, if not export (global script) , after export ts assume(module file ) , (module file= private scope)

// UI 
const sendbtn = document.getElementById("send-btn") as HTMLButtonElement;
const userinput = document.getElementById("userinput") as HTMLTextAreaElement;
const displaybox = document.getElementById("displaybox") as HTMLDivElement;
const clearhistory = document.getElementById("clear-history") as HTMLAnchorElement;
const spinner = document.getElementById("loading-spinner") as HTMLDivElement;

type imgHistoyItem={
     role:"user-input" | "ai-response";
     content:string
}

function wsURL(pathname:string){
     
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    if(isLocal) return `ws://localhost:9000${pathname}`; //ws://locathost:9000/ws
    return `${window.location.protocol === "https:" ? "wss" : "ws"}://${window.location.hostname}${pathname}`; // wss://dataland.com/ws
}

// const ws  = new WebSocket(wsURL('/wsimage'));

const ws  = new WebSocket(('ws://localhost:9000/wsimage'));

ws.onopen = function(){
    console.log("WebSocket connection established");
};

ws.onerror = ()=>{spinner.style.display ="none"}
ws.onclose=()=>{spinner.style.display="none"};

ws.onmessage=(event)=>{

    const message = String(event.data);

    //remove initial placeholder
    if(displaybox.querySelector("small")) displaybox.innerHTML = "";

    //if server returns Error Text
//20:37
    if(message.startsWith("Error")){
         const div = document.createElement("div");
         div.className ="p-3 ms-3 chat-message ai-response";
         div.textContent=message;
         displaybox.appendChild(div);
         saveToLocal("ai-response",message);
         spinner.style.display = "none";    
         return;
    }

    //normal image
    const img= document.createElement("img");
    img.src = message;
    img.className="responseimg";

    displaybox.appendChild(img);

    saveToLocal("ai-response",message);


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


    spinner.style.display="block";


});


window.onload=()=>{
    const stores = JSON.parse(localStorage.getItem("imghistory") || "[]") as Array<{
        role:string,
        content:string
    }>

    if(stores.length === 0) return;

    displaybox.innerHTML= "";


    stores.forEach(store=>{
    
        if(store.role==="user-input"){
              //user input
              const div =document.createElement("div");
              div.className="p-3 ms-3 chat-message user-input";
              div.textContent=store.content;
              displaybox.appendChild(div);
        }else{
                //ai-response , can be image URL OR error text

                if(store.content.startsWith("Error")){
                    const div =document.createElement("div");
                    div.className="p-3 ms-3 chat-message ai-response";
                    div.textContent=store.content;
                    displaybox.appendChild(div);
                }else{
                    const img=document.createElement("img");
                    img.src=store.content;
                    img.className="responseimg";
                    displaybox.appendChild(img);
                }
        }
    });
   
}






function saveToLocal(role:imgHistoyItem["role"],content:string){
    let arr = JSON.parse(localStorage.getItem("imghistory") || "[]") as imgHistoyItem[];
  arr.push({role:role,content:content});
  localStorage.setItem("imghistory",JSON.stringify(arr));
}




clearhistory.addEventListener('click',()=>{
   localStorage.removeItem("imghistory");
   location.reload();
});








// for localhost
// let ws = new WebSocket("ws://localhost:8000/image");

// for cloud server https deployment
// let websocketstring = '';

// if(window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
//     websocketstring = `ws://localhost:8000/image`; // local
// }else{
//     websocketstring = `wss://${window.location.hostname}/image`; // https deployment
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

//     let img = document.createElement("img");
//     img.src = message;
//     img.className = "responseimg";
//     displaybox.appendChild(img);

//     savetolocal("ai-response",message); // to localstorage

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

//         document.getElementById("loading-spinner").style.display = "block";
    
//     }
// });



// window.onload = function(){
//     let storagedatas = JSON.parse(localStorage.getItem("imghistory") || "[]");

//     if(storagedatas.length > 0){

//         let currole = null;
//         let curcontent = '';

//         storagedatas.forEach((storagedata,idx)=>{

//             if(storagedata.role === currole){
//                 curcontent += storagedata.content;
//             }else{
//                 // console.log(currole); // undefined

//                 if(currole){

//                     if(currole === "user-input"){
//                         let messagediv = document.createElement("div");
//                         messagediv.className = "p-3 ms-3 chat-message "+ currole;
//                         messagediv.textContent = curcontent;
//                         displaybox.appendChild(messagediv);
//                     }else if(currole === "ai-response"){
//                         let img = document.createElement("img");
//                         img.src = curcontent;
//                         img.className = "responseimg";
//                         displaybox.appendChild(img);
//                     }
                    
//                 }

//                 // start new message
//                 currole = storagedata.role;
//                 curcontent = storagedata.content;

//                 // console.log(currole); // user-input , api-response
//             }

//             // console.log(curcontent);

//             if(idx === storagedatas.length - 1){
//                 let img = document.createElement("img");
//                 img.src = curcontent;
//                 img.className = "responseimg";
//                 displaybox.appendChild(img);
//             }

//         });

//     }else{
//         displaybox.innerHTML = `<small class="text-muted">No image available.</small>`;
//     }
// };




// function savetolocal(role,content){
//     let getdatas = JSON.parse(localStorage.getItem("imghistory") || "[]");
//     getdatas.push({role:role,content:content});
//     localStorage.setItem("imghistory",JSON.stringify(getdatas));
// }

// clearhistory.addEventListener('click',function(){
//     localStorage.removeItem("imghistory");
//     location.reload();
// });