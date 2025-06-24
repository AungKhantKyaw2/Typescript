"use strict";
let country;
console.log(country);
let brandname = "";
let phone = (brand) => {
    brandname = brand;
};
console.log(phone("I phone"));
console.log(brandname);
let points;
function userpoints(cashdown) {
    if (cashdown) {
        return points = 100;
    }
    else {
        return points = 0;
    }
}
let user1 = userpoints(true);
let user2 = userpoints(false);
let user3 = userpoints(null);
let user4 = userpoints(undefined);
console.log(user1);
console.log(user2);
let age1 = undefined;
let age5 = null;
let age6 = 25;
let age7 = "Hay";
console.log(age1);
console.log(age5);
console.log(age6);
console.log(age7);
let cashback = 1000;
cashback = 500;
console.log(cashback);
let cashreturn = 2000;
console.log(cashreturn);
const price = 700;
console.log(price);
const itemprice = 500;
console.log(itemprice);
const newcourse = "vdo";
console.log(newcourse);
const student = {
    name: "Aung Aung",
    gender: "male",
    age: 25,
};
console.log(student);
let numberarrs = [10, 20, [30, 40, [500, 600]]];
console.log(numberarrs);
const officestaff = {
    id: 1001,
    name: "Yu Yu",
    department: "Accounting"
};
console.log(officestaff);
console.log(typeof officestaff);
const newstaff = JSON.stringify(officestaff);
console.log(newstaff);
console.log(typeof newstaff);
function staffinfo(newstaffjson) {
    return JSON.parse(newstaffjson);
}
console.log(staffinfo(newstaff));
console.log(staffinfo(newstaff).id);
console.log(staffinfo(newstaff).name);
console.log(staffinfo(newstaff).department);
let luckynumber = "777";
console.log(luckynumber);
function userinfo(name, age) {
    console.log(`My name is ${name}. I am ${age} years old`);
}
userinfo("Tun Tun", "20");
function getinput(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    else {
        return val * 2;
    }
}
console.log(getinput("hi"));
console.log(getinput(20));
let dinner = (amount, servicefee) => {
    if (typeof servicefee == "number") {
        return amount + servicefee;
    }
    else {
        return amount + parseInt(servicefee);
    }
};
console.log(dinner(3000, 500));
console.log(dinner(3000, "200"));
console.log(dinner(3000, "100 usd"));
console.log(dinner(3000, "usd 50"));
let lunch = (amount, servicefee) => {
    if (typeof servicefee == "number") {
        return amount + servicefee;
    }
    else {
        return amount + parseInt(servicefee);
    }
};
console.log(lunch(3000, 500));
console.log(lunch(3000, "200"));
console.log(lunch(3000, "100 usd"));
console.log(lunch(3000, "usd 50"));
const desktop = {
    brand: "MSI",
    price: 800,
    cpu: "Intel Core I9",
    coolingfun: false
};
console.log(desktop);
const laptop = {
    brand: "HP",
    price: 600,
    cpu: "Intel Core I7"
};
laptop.cpu = "Corei7";
console.log(laptop);
const newperson = {
    uid: 1001,
    name: "Maung Kyaw",
    age: 30,
    department: "IT",
};
console.log(newperson);
function printpersoninfo(obj) {
    console.log(`ID is ${obj.uid}, Name is ${obj.name},Age is ${obj.age}, Department is ${obj.department}`);
}
printpersoninfo(newperson);
const nextjsclass = {
    id: 1002,
    title: "Nextjs Batch 1",
    price: 80000,
    type: "Zoom class",
    content() {
    },
    cloudprovider() {
    },
    paymentgateway() {
    }
};
console.log(nextjsclass);
function greet(name, age = 18) {
    return `Hello , my name is ${name} and I am ${age} years old`;
}
console.log(greet("Hnin Mya", 20));
console.log(greet("Hnin Mya"));
function greeting(name, age) {
    if (age !== undefined) {
        return `Hello , my name is ${name} and I am ${age} years old`;
    }
    else {
        return `Hello , my name is ${name}.`;
    }
}
console.log(greeting("Nyi Nyi", 25));
console.log(greeting("Nyaung Nyaung"));
let sayhi;
sayhi = (msg) => {
    return msg;
};
console.log(sayhi("Mingalar Par"));
let sayhello;
sayhello = (msg, name, content = "What are you doing?") => {
    if (name !== undefined) {
        return `Hello ${msg}!,${name}. ${content}`;
    }
    else {
        return `Hello ${msg}!, ${content}`;
    }
};
console.log(sayhello("Min Ga Lar Par", "Muyar", "How are you."));
console.log(sayhello("Min Ga Lar Par"));
const vipcu = {
    name: "U Hla",
    phone: "0912345",
    address: {
        street: "123 Main St",
        city: "Mandalay",
        country: "Myanmar"
    }
};
console.log(vipcu);
function employer(owner) {
    return owner.fullname;
}
console.log(employer({ fullname: "Mon Mon" }));
function lawyer({ fullname }) {
    return fullname;
}
console.log(lawyer({ fullname: "U Ba" }));
console.log(typeof "Hello Sir");
console.log(typeof 1500);
const Animal = {
    name: "Panda",
    age: 7
};
let petone = {
    name: "Cute Cat",
    age: 10
};
console.log(petone);
