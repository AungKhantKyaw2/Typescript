import { formatDistance } from "date-fns";
export class MessageUI {
    constructor(ul) {
        this.ul = ul;
    }
    clearli() {
        this.ul.innerHTML = "";
    }
    renderli(dataobj) {
        const when = formatDistance(dataobj.createdAt.toDate(), new Date(), { addSuffix: true });
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
