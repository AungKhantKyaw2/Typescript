export class MessageUI{

    constructor(ul){
        this.ul = ul
    }

    // clear li 
    clearli(){
        this.ul.innerHTML = "";
    }


    // render li
    renderli(dataobj){

        // console.log(dataobj);

        const when = dateFns.formatDistance(dataobj.createdAt.toDate(),new Date(),{addSuffix:true}); // {addSuffix:true} = ago
        const htmllitag = `
            <li class="list-group-item">
                <span class="username">${dataobj.username}</span>
                <span class="message">${dataobj.message}</span>
                <div class="time">${when}</div>
            </li>
        `;

        this.ul.innerHTML += htmllitag; 
    }

}


