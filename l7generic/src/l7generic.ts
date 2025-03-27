


let colorregarrs:string[]=["red","green","blue"];
let numregarrs:number[]=[10,20,30];
let mixregarrs:(string|number|boolean)[]=[100,200,300,"red","green","blue"];

//nested number

let greetregarrs:string[][]=[["hi"],["hello"],["hifi","zoho"]];


//nested number

let evenumsregarrs:number[][]=[[2,4],[6,8],[10,12]];

//nested string,number,boolean array
let inforegarrs:(string|number|boolean)[][]=[[
  "aungaung"],["age",28],["hobby","sport","reading"],["hascar",false]];


  //fixed value
  const productdetails:[string,number]=["Redbull",2500];
  type NestedArray =number | NestedArray[];
  let numbers:NestedArray=[1,2,[30,40]];





// => Generic Array

//Array Notation => T[]
//Generic Array Type => Array<T>

let colorgenarrs:Array<string>=["red","green","blue"];
console.log(colorgenarrs);//

let numgenarrs:Array<number>=[10,20,30];
let boolgenarrs:Array<boolean>=[true,false];
let mingenarrs:Array<string|number|boolean> =[100,200,300,"red",false,"green","blue",true];
console.log(mingenarrs);

// => Nested number type array

let evengenarrs:Array<Array<number>> =[[2,4],[6,8],[10,12]];
console.log(evengenarrs);

//=>nest number type array
let mixgenarrs:Array<Array<string|number|boolean>>=[["aung"],["age",28],["hobby","sport","reading"],["hascar",false]];
console.log(mingenarrs);
// 12GN


// => Generic Function for Arrays 

//Syntax

//function funname<T>(parameter:T):T{

  // return parameter; 
// }

// T IS A TYPE parameter that acts as a placeholder
//T is used as type for the function parameter and return type.
//Following function works for any types, such as number,string, or boolean .. etc.

function genfunone<T>(value:T):T{
       return value;
}

console.log(genfunone("hello"));//hello
console.log(genfunone(1500));//1500
console.log(genfunone(true));//true
console.log(genfunone(["happy","sad"]));

console.log(genfunone<string>("hello"));//hello T is string
console.log(genfunone<number>(1500));//1500     T is number
console.log(genfunone<boolean>(false));//false  T is boolean



//exe 2
function mygenfun<T>(arrs:T[]):T{
  return arrs[0];
}

console.log(mygenfun(["red","green","blue"]));//red
console.log(mygenfun([10,20,30])); //10


//exe3

function genfunthree<T>(val:Array<T>):T{
  return val[2];
}

let strresult = genfunthree<string>(["aung aung","maung maung","tun tun","kyaw kyaw"]);
console.log(strresult);// tun tun

let numresult = genfunthree<number>([10,20,30,40]);
console.log(numresult);//30

let boolresult = genfunthree<boolean>([true,false,true,false]);
console.log(boolresult);//true


//=>Functions with two generic types

function genfunfour<T1,T2>(val1:T1,val2:T2):[T1,T2]{
      return [val1,val2];
}

console.log(genfunfour<string,number>("Hsu Hsu",28));//[ 'Hsu Hsu', 28 ]
console.log(genfunfour<string,boolean>("Hsu Hsu",false));//[ 'Hsu Hsu', false ]



function genfunsix<T1,T2>(val1:T1,val2:T2):{"test":T1,"hi":T2}{
  return {"hi":val2,"test":val1};
}
console.log(genfunsix<string,number>("Hello",42));

function genfunfive<T=string>(value:T):T{
    return value;
}

console.log(genfunfive(""));
console.log(genfunfive("Hello"));//Hello
console.log(genfunfive(100));//100
console.log(typeof genfunfive(100));//number
console.log(genfunfive(true));//true
console.log(typeof genfunfive(true));//boolean


// Generic Object Type

//syntax 

// type ObjectType<T>={
//     key1:T,
//     key2:T
// };

type Book<T>={
    title:T;
    content:T;
    price:T;
};

const Article:Book<string>={
  title:"Article 1",
  content:"This is the story of article 1.",
  price:"20 USD"
}

const Post:Book<number>={
  title:2,
  content:2,
  price:20
}

console.log(Article);
// =>Generic Object with Multiple Properties

// syntax 

// type ObjectType<T1,T2>={
//       first:T1;
//       second:T2;
// };

type Product<T1,T2>={
    name:T1;
    price:T2;
}

const item:Product<string,number>={
    name:"Redbull",
    price:2500
};
console.log(item);

const item2:Product<string,string>={
    name:"Sponsor",
    price:"FOC"
};

console.log(item2);

//=>Generic Set

let myset = new Set([10,20,30,10,20]);
console.log(myset);//Set(3) { 10, 20, 30 }
console.log(myset.size);//3

console.log(myset.has(20));//true
console.log(myset.has(70));//false



//=>Generic Set
let numberset:Set<number>= new Set([1,2,3,1,3]);
console.log(numberset);//Set(3) { 1, 2, 3 }

let nameset:Set<string> = new Set(["aung aung","kyaw kyaw","tun tun"]);
console.log(nameset);// Set(3) { 'aung aung', 'kyaw kyaw', 'tun tun' }


let mixdatas: Set<string|number> = new Set([1,"2","Three"]);
console.log(mixdatas);//Set(3) { 1, '2', 'Three' }


//=>COmmon Set Methods with Generics

const numset:Set<number>= new Set();

numset.add(1);
numset.add(2);
numset.add(3);
numset.add(4);
numset.add(5);
numset.add(3);

console.log(numset);//Set(5) { 1, 2, 3, 4, 5 }
console.log(numset.has(2));//true

numset.delete(4);
console.log(numset);////Set(4) { 1, 2, 3, 5 }

numset.clear();
console.log(numset);//Set(0) {}


//=> Iterating Generic Set
const colorset:Set<string> = new Set(["Red","Green","Blue","White","Black"]);


for(let color of colorset){
  console.log(color);//Red Green Blue White Black
}


colorset.forEach(color=>{
    console.log(color);//Red Green Blue White Black
})


//Generice Set with Object


type User={
  id:number;
  name:string;
  age:number;
}

const userset:Set<User>=new Set([
{id:1,name:"Hsu Hsu",age:20},
{id:2,name:"Hsu Hsu",age:20},
{id:3,name:"Hsu Hsu",age:20},
  
]);

userset.add({id:4,name:"Hsu Hsu",age:16});

console.log(userset);