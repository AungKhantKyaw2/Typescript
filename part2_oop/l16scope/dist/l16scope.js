var globalVar = "I am a global var";
var globalLet = "I am a global let";
const globalConst = "I am a global const";
function accessglobalscope() {
    console.log(globalVar);
    console.log(globalLet);
    console.log(globalConst);
}
accessglobalscope();
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
function accesslocalscope() {
    var localVar = "I am a local var";
    let localLet = "I am a local let";
    const localConst = "I am a local const";
    console.log(localVar);
    console.log(localLet);
    console.log(localConst);
}
accesslocalscope();
function accessblockscope() {
    if (true) {
        var blockVar = "I am a block var";
        let blockLet = "I am a block let";
        const blockConst = "I am a block const";
        console.log(blockVar);
        console.log(blockLet);
        console.log(blockConst);
    }
    console.log(blockVar);
}
accessblockscope();
