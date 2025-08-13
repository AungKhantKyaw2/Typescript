"use strict";
class NumberStore {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdats() {
        return this.datas;
    }
}
const numberstoreObj = new NumberStore();
numberstoreObj.add(10);
numberstoreObj.add(20);
console.log(numberstoreObj.getdats());
class Store {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas() {
        return this.datas;
    }
}
const storeObj1 = new Store();
storeObj1.add(80);
storeObj1.add(90);
console.log(storeObj1.getdatas());
const storeObj2 = new Store();
storeObj2.add("ni ni");
storeObj2.add("aye aye");
console.log(storeObj2.getdatas());
const storeObj3 = new Store();
storeObj3.add(true);
storeObj3.add(false);
console.log(storeObj3.getdatas());
class Student {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
const studentobj1 = new Student("Nilar", 18, "Yangon");
console.log(studentobj1);
const studentobj2 = new Student("Nilar", "17 years old", "Bago");
console.log(studentobj2);
class Storages {
    constructor() {
        this.datas = [];
    }
    add(val) {
        this.datas.push(val);
    }
    getdatas(id) {
        return this.datas.find(singledata => singledata.id === id);
    }
}
const storagesObj = new Storages();
storagesObj.add({ id: 1, name: "Aung Aung" });
storagesObj.add({ id: 2, name: "Hla Hla" });
storagesObj.add({ id: 3, name: "Kyaw Kyaw" });
console.log(storagesObj.getdatas(1));
console.log(storagesObj.getdatas(3));
const users = [
    { id: 1, name: "hla hla" },
    { id: 2, name: "ni ni" }
];
const singleuser = users.find(user => user.id === 3);
console.log(singleuser);
