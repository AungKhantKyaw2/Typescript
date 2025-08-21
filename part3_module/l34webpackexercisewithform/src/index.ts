import './style.css';
import {formData} from './components/formhandler';
// //method 1 
// const form = document.querySelector("form");

// if(form){
//     form.addEventListener("submit",(e)=>{
//         e.preventDefault();
//         console.log("Hello");
//     })
// }

//method 2 

// const form = document.querySelector("form")!; // trust me. i'm sure this won't be null at runtime

// form.addEventListener("submit",(e)=>{
//             e.preventDefault();
//             console.log("Hello");
//         });


//method 3 

// const form = document.querySelector("form");
// form?.addEventListener("submit",(e)=>{
//             e.preventDefault();
//             console.log("Hello");
//         });


//method 4 


const form = document.querySelector<HTMLFormElement>("form");
form?.addEventListener("submit",(e)=>{
            e.preventDefault();

            if(!form) return; //saftey guard
            // console.log("Hello");

            const datas=formData(form);
            console.log("Form Data: ",datas);
        });


