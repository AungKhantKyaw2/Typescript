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
    renderli(dataobj):void{

        // console.log(dataobj);

        // const when = dateFns.formatDistance(dataobj.createdAt.toDate(),new Date(),{addSuffix:true}); // {addSuffix:true} = ago
        const htmllitag = `
            <li class="list-group-item">
                <span class="username">${dataobj.username}</span>
                <span class="message">${dataobj.message}</span>

            </li>
        `;

        this.ul.innerHTML += htmllitag; 
    }

}


