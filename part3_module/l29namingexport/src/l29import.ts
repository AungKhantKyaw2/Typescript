// naming export is need {}


//=>method 1,method 2

// import {getname} from "./l29export"
// console.log(getname({name:"Hsu Hsu"}));


//method 3 (with alias)
// import {GetNaming} from "./l29export"
// console.log(GetNaming({name:"NU NU"}));

//method 4 (with multi export)

// import {userdatas,getage,getname} from "./l29export"


// console.log(getname(userdatas));
// console.log(getage(userdatas));



//exe 1 (from suppliers.ts)
// import {userdatas,getage,getname} from "./l29suppliers"


// console.log(getname(userdatas));
// console.log(getage(userdatas));


//exe 2 (from suppliers.ts)

import {studentarrs,buyerobjs} from "./l29suppliers"

console.log(studentarrs);
console.log(buyerobjs);