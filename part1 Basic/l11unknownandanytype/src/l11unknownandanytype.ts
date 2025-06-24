// unknown vs any

// Feature                     Unknown                      any
// Type safety                  Safe                        Unsafe
// Assign to other types        Not allowed without checks Allowed(even if wrong) 


//=>unknown

let sayhi:unknown = "Hello Sir";
let age:unknown =28;

console.log(typeof age);// number

// let getage:number =age;
// console.log(getage); // can't use unknown to number types

//exe1 
let getage:number =typeof age === "number" ? age : 20;
console.log(getage);//28

//exe 2
let phone:unknown = "0912345";
console.log(typeof phone); //string

let getphone:number = typeof phone ==="number" ? phone :119;
console.log(getphone);//119

//exe 3 

let unknownval :unknown ="hello";
unknownval = true;
unknownval =20;

console.log(unknownval); //20
console.log( typeof unknownval); //20

let getval :number = typeof unknownval ==="number" ? unknownval :0;
console.log(getval);// 20 

//------------------------------------------------------------
//->any type

//exe 1 
let fullname: any = "Kyaw Kyaw";
let nickname:number = fullname;
console.log(nickname); //Kyaw Kyaw

//exe 2
let firstname:any ="Hsu";
let lastname:unknown =firstname;
console.log(lastname);//Hsu

//exe 3 
let anyval:any ="hello";
anyval =20;
anyval=true;

console.log(anyval); //true

let getnum:number =anyval;
console.log(getnum); //true no error , even if it is not a number

//------------------------------------------------------------

//=> any with unknown

//Not Recommended

let brand:unknown = "Redbull";
let price:any = brand;


let fee:number =price; //beware : string is working in number type
console.log(fee); //Redbull

//Recommended
let brandname:any ="Sponsor";
let ordinaryprice:unknown = brandname;

// let sellprice:number = ordinaryprice; //error , beware :string  is note worling in number type 

let sellprice:number =typeof ordinaryprice === "number"  ? ordinaryprice :0;
console.log(sellprice);//0


//------------------------------------------------------------
//=> unknown in Union (|) vs Intersetion (&) types

// let productname:unknown |string ="Sponsor"; // unknown |string not oki any|string is oki
// let companyname:string= productname;//error


// let productname:unknown|number =1500; //unknown |number not oki , any|number is oki
// let companyname:number =productname ;//error


// let productname :unknown &string ="Sponsor";
// let companyname:string =productname;
// console.log(companyname);//Sponsor

// let productname :unknown &number =1500;
// let companyname:number =productname;
// console.log(companyname);//1500

// let productname :unknown & string =1500;
// let companyname:number =productname;
// console.log(companyname);//error , because opposite type

//------------------------------------------------------------

