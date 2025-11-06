
import {formatDistance} from "date-fns";
import { chatMessage } from "./Chatroom";
export class MessageUI{

    private ul:HTMLElement;
    constructor(ul:HTMLElement){
        this.ul = ul
    }

    // clear li 
    clearli():void{
        this.ul.innerHTML = "";
    }


    // render li
    renderli(dataobj:chatMessage):void{

        // console.log(dataobj);
        // for cdn 
        // const when =(window as any).dateFns.formatDistance(dataobj.createdAt.toDate(),new Date(),{addSuffix:true}); // {addSuffix:true} = ago
     
        //for package
         const when =formatDistance(dataobj.createdAt.toDate(),new Date(),{addSuffix:true}); // {addSuffix:true} = ago
     
        const htmllitag = `
            <li class="list-group-item group">
         

                <span class="username">${dataobj.username} ${dataobj.message}</span>
             
       
                  <span class="time">
                                         ${when}
                                    </span>

            </li>
        `;

        this.ul.innerHTML += htmllitag; 
    }

}


