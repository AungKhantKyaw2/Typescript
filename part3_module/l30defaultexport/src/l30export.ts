//default export , no need {}

//=> method 1 

// const employeeinfos  = {

//     name:"Hnin Hnin",
//     age:25
// }  

//  export default employeeinfos;

// => method 2 

// export default {
//     name:"Linn Linn",
//     age:30
// }

//method 3 (with multi export)

const userdatas={
    name:"Kyaw Kyaw",
    age:20
};


 function getname({name}:{name:string}){
    return name;
 }

 function getage({age}:{age:number}){
     return age;
 }

 export default {userdatas,getname,getage}