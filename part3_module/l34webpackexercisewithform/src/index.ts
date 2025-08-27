import './style.css';
import {formData} from './components/formhandler';
import {ValiationSchema,validateForm} from './components/validator';
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

const schema:ValiationSchema={
    name:{required:true,minLength:3,maxLength:5},
    email:{required:true,type:"email"},
    age:{required:true,type:"number"}
}

form?.addEventListener("submit",(e)=>{
            e.preventDefault();

            if(!form) return; //saftey guard
            // console.log("Hello");

            const datas=formData(form);
            // console.log("Form Data: ",datas);

            const errors = validateForm(datas,schema);
            // console.log(errors);

            if(Object.keys(errors).length > 0 ){
                console.error("Validation Error : ",errors);
                showErrors(errors);
            }
            else{
   //clear all previous errors div
   document.querySelectorAll(".error").forEach(errdiv=>errdiv.remove());
              
               

                console.log("Form Data:" ,datas);
                alert("Form submitted successfully");
                form.reset();
            }
        });

function showErrors(errors:Record<string,string>){
        //clear all previous errors div

        document.querySelectorAll(".error").forEach(errdiv=>errdiv.remove());

        for(const field in errors){
            const input = document.querySelector<HTMLInputElement>(`#${field}`);

            if(input){
                const errEl=document.createElement("div");
                errEl.className="error";
                errEl.style.color="red";
                errEl.style.fontSize="12px";
                errEl.textContent=errors[field];

               input.insertAdjacentElement("afterend",errEl);
            }
        }
}


//27VD