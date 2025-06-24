//Basic Types

//=>void Type

let country:void;
console.log(country);//undefined


let brandname:string ="";


let phone =(brand:string):void=>{
    brandname=brand;
}

console.log(phone("I phone"));//undefined (because the function is void)

console.log(brandname);//iPhone

let points:number;

function userpoints(cashdown: boolean):number{
    if(cashdown){
        return points =100;
    }
    else{
        return points=0;
    }
}

let user1 = userpoints(true);

let user2 = userpoints(false);


let user3 = userpoints(null);//StrictNUllchecks:"false"

let user4 = userpoints(undefined);//StrictNUllchecks:"false"

console.log(user1);//100
console.log(user2);//0

// console.log(user3);//0  //StrictNUllchecks:"false"
// console.log(user4);//0 //StrictNUllchecks:"false"



let age1:undefined =undefined;
// let age2:undefined=null ;//error
// let age3:undefined =25; //error
// let age4:undefined ="Hay"; //error

let age5:undefined | null =null;
let age6: undefined | number = 25;
let age7: undefined |string="Hay";

console.log(age1); //undefined
console.log(age5);//null
console.log(age6);//25
console.log(age7);//Hay


//=>Type Alias

let cashback:number =1000;
cashback =500;
console.log(cashback);//500

type Promotion =number; //Note : this is not value ! It is just type
let cashreturn:Promotion= 2000;
console.log(cashreturn);


const price:300 |500 |700 = 700;
console.log(price);//700

type FixedPrice =300| 500 |700;
const itemprice:FixedPrice =500;
console.log(itemprice);//500


type DLTClassType ="zoom" | "vdo";
const newcourse:DLTClassType= "vdo";
console.log(newcourse);// vdo

type PersonInfo={
    name:string,
    gender:string,
    age:number
}

const student:PersonInfo={
    name:"Aung Aung",
    gender:"male",
    age:25,
}

// student.hascar =false; //error

console.log(student);//{ name: 'Aung Aung', gender: 'male', age: 25 }


//26BT


//=> Recursive Type

type NestedArray= number | NestedArray[];
// let numberarrs:NestedArray= [10,20];
// let numberarrs:NestedArray= [10,20,[30,40]];
let numberarrs:NestedArray= [10,20,[30,40,[500,600]]];
console.log(numberarrs);//[ 10, 20, [ 30, 40, [ 500, 600 ] ] ]

//=> Type Assertion 

type Employee ={
    id:number;
    name:string;
    department:string;
};

const officestaff:Employee={
    id:1001,
    name:"Yu Yu",
    department:"Accounting"
};


console.log(officestaff);//{ id: 1001, name: 'Yu Yu', department: 'Accounting' }
console.log(typeof officestaff);//object

const newstaff =JSON.stringify(officestaff);

console.log(newstaff);//{"id":1001,"name":"Yu Yu","department":"Accounting"}
console.log(typeof newstaff);//string


function staffinfo(newstaffjson:string):Employee{
    // return JSON.parse(newstaffjson);
    //Old Method
    // return (<Employee>JSON.parse(newstaffjson));
    //New Method
    return(JSON.parse(newstaffjson) as Employee);
}

console.log(staffinfo(newstaff));//{ id: 1001, name: 'Yu Yu', department: 'Accounting' }
console.log(staffinfo(newstaff).id);//1001
console.log(staffinfo(newstaff).name);//Yu Yu
console.log(staffinfo(newstaff).department);//Accounting

// => Union Type
let luckynumber:number|string ="777";
console.log(luckynumber);

//=> Union Type in functions

function userinfo(name:string,age:number|string){
    console.log(`My name is ${name}. I am ${age} years old`);

}
userinfo("Tun Tun","20");


//exercise , Type Guards
function getinput(val:string|number){
      if(typeof val === "string"){
            return val.toUpperCase();
      }
      else{
         return val*2;
      }
     
}

console.log(getinput("hi"));//HI
console.log(getinput(20));//40


let dinner =(amount:number,servicefee:string|number):number=>{
      if(typeof servicefee=="number"){
        return amount +servicefee;
      }
      else{
        return amount + parseInt(servicefee);
      }
};

console.log(dinner(3000,500));//3500
console.log(dinner(3000,"200"));//3200
console.log(dinner(3000,"100 usd"));//3100
console.log(dinner(3000,"usd 50"));//NaN


let lunch =(amount:number,servicefee:string|100|300|500):number=>{
    if(typeof servicefee=="number"){
      return amount +servicefee;
    }
    else{
      return amount + parseInt(servicefee);
    }
};

console.log(lunch(3000,500));//3500
console.log(lunch(3000,"200"));//3200

// console.log(lunch(3000,200));//error
// console.log(lunch(3000,501));//error
console.log(lunch(3000,"100 usd"));//3100
console.log(lunch(3000,"usd 50"));//NaN












// =>Object Type  with Option (?)
type ComputerUnit={
    readonly brand:string,
    price:number,
    cpu?:string,
    coolingfun?:boolean
};

const desktop:ComputerUnit={
    brand:"MSI",
    price:800,
    cpu:"Intel Core I9",
    coolingfun:false

};

console.log(desktop);


const laptop:ComputerUnit={
    brand:"HP",
    price:600,
    cpu:"Intel Core I7"
};

// laptop.brand="Lenovo";
laptop.cpu="Corei7";

console.log(laptop);


//=>Intersection Types (&)

// exe 1

type Person ={
    name:string;
    age:number;
};

type Staff={
    uid:number;
    department:string;
}

type StaffPerson = Person & Staff;

const newperson:StaffPerson={
    uid:1001,
    name:"Maung Kyaw",
    age:30,
    department:"IT",
  
}

console.log(newperson);



//exe 2 (intersection types with function)


function printpersoninfo(obj:StaffPerson){

    console.log(`ID is ${obj.uid}, Name is ${obj.name},Age is ${obj.age}, Department is ${obj.department}`);
}


printpersoninfo(newperson);


//exe 3 

type Article ={
        id:number;
        title:string;
        price:number;
        type:string
};

type ArticleDescrption ={
    content():void;
}

type ArticleVdoRecord ={
    cloudprovider():void;
}
type ArticlePayment={
    paymentgateway():void;
}

type NewArticle = Article & ArticleDescrption & 
ArticleVdoRecord &ArticlePayment;


const nextjsclass:NewArticle={
    id:1002,
    title:"Nextjs Batch 1",
    price:80000,
    type :"Zoom class",
    content(){

    },
    cloudprovider(){

    },
    paymentgateway(){

    }


}


console.log(nextjsclass);

// =>Function Type ,Default Parameter (=value), Optional Parameter(?)

//exe 1 (Default Parameter)

function greet(name:string,age:number=18):string{
     return `Hello , my name is ${name} and I am ${age} years old`;
}

console.log(greet("Hnin Mya",20));
console.log(greet("Hnin Mya"));


//exe 2 (Optional Parameter)

function greeting(name:string,age?:number):string{
    if(age !== undefined){
    return `Hello , my name is ${name} and I am ${age} years old`;
    }
    else{
        return `Hello , my name is ${name}.`;
    }
}


console.log(greeting("Nyi Nyi",25));
console.log(greeting("Nyaung Nyaung"));


// exe3(i)

let sayhi:Function;

sayhi=(msg:string):string=>{
        return msg;
};

console.log(sayhi("Mingalar Par"));//Mingalar Par


//exe3(ii)

let sayhello:(msg:string,name?:string,content?:string)=>string;


sayhello =(msg,name,content="What are you doing?")=>{
    if(name !== undefined){
        return `Hello ${msg}!,${name}. ${content}`;
    }
    else{
        return `Hello ${msg}!, ${content}`;
    }
};

console.log(sayhello("Min Ga Lar Par","Muyar","How are you."));
console.log(sayhello("Min Ga Lar Par"));


//5BH


// =>Nested Object Type 

type Address={
    street:string;
    city:string;
    country:string;
}

type Customer={
    name:string;
    phone:string;
    address:Address;// Nested object type
}

const vipcu:Customer={
    name:"U Hla",
    phone:"0912345",
    address:{
        street:"123 Main St",
        city:"Mandalay",
        country:"Myanmar"
    }
}

console.log(vipcu);
// Literal Object Type
function employer(owner:{fullname:string}):string{
    return owner.fullname;
}
console.log(employer({fullname:"Mon Mon"}));



// Literal Object Type (Destructuring)

function lawyer({fullname}:{fullname:string}):string{
    return fullname;
}
console.log(lawyer({fullname:"U Ba"}));


// typeof in typescript Typequery 

console.log(typeof "Hello Sir");//string
console.log(typeof 1500);//number
const Animal ={
    name:"Panda",
    age:7
}

type Pet =typeof Animal;

let petone:Pet={
    name:"Cute Cat",
    age:10
}

console.log(petone);//