// --------------Scope ------------------
//Global Scope
//Function Scope (var)
//Block Scope (let,cosnt)


//=>Global Scope

var globalVar:string= "I am a global var";
var globalLet:string ="I am a global let";
const globalConst:string = "I am a global const";


function accessglobalscope(){
    console.log(globalVar);//accessible
    console.log(globalLet);//accessible
    console.log(globalConst);//accessible
}

accessglobalscope();

console.log(globalVar);//accessible
console.log(globalLet);//accessible
console.log(globalConst);//accessible


//=>Local Scope


function accesslocalscope(){

    
var localVar:string= "I am a local var";
let localLet:string ="I am a local let";
const localConst:string = "I am a local const";

    console.log(localVar);//accessible
    console.log(localLet);//accessible
    console.log(localConst);//accessible
}

accesslocalscope();

// console.log(localVar);//accessible
// console.log(localLet);//accessible
// console.log(localConst);//accessible


//Block Scope

function accessblockscope(){
    if(true){
           
var blockVar:string= "I am a block var";
let blockLet:string ="I am a block let";
const blockConst:string = "I am a block const";

    console.log(blockVar);//accessible
    console.log(blockLet);//accessible
    console.log(blockConst);//accessible
    }

    
    console.log(blockVar);//accessible
    // console.log(blockLet);//error
    // console.log(blockConst);//error

}


accessblockscope();

//28SC
