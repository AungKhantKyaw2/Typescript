import {Authorize} from "./Authorize";

// UI elements 
const resetform = document.getElementById("passwordresetform") as HTMLFormElement | null;
const msgElement = document.getElementById("msg") as HTMLElement | null; 
const googleloginbtn = document.getElementById("googleloginbtn") as HTMLButtonElement | null;

const authObj = new Authorize();

if(!resetform || ! msgElement || !googleloginbtn){
     throw new Error("Required DOM elemennts not found");
}

// reset
resetform.addEventListener("submit",(e:SubmitEvent)=>{
    e.preventDefault();

    const emailinput = document.getElementById("signinemail")as HTMLInputElement | null;
    if(!emailinput){
         alert("Form input not found");
         return
    }

    const email:string =emailinput.value.trim();
    authObj.resetPassword(email,msgElement);
});

// google login 
googleloginbtn.addEventListener("click",()=>{
    authObj.googleLogin();
})