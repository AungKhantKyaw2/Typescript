"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
    content() {
        console.log("Phone is available");
    }
}
const userObj = new User("Kyaw Kyaw");
console.log(userObj.name);
userObj.content();
userObj.name = "Naw Naw";
console.log(userObj.name);
class People {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends People {
    greeting() {
        console.log(`Hello ${this.name}`);
    }
}
const employeeObj = new Employee("Tun Tun");
employeeObj.greeting();
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    showbalance() {
        console.log(`Main Balance is =${this.balance}`);
    }
}
const bankObj = new BankAccount(2500);
bankObj.showbalance();
class Student {
    constructor(id, name, age, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    content() {
        console.log("Email is available");
    }
    getage() {
        return this.age;
    }
    getphone() {
        return this.phone;
    }
}
const studentObj = new Student(1001, "Su Su ", 18);
studentObj.name = "Hsu Hsu";
console.log(studentObj.name);
studentObj.content();
console.log(studentObj.getage());
const studentObj2 = new Student(1003, "Tun Tun", 20, "0912345");
console.log(studentObj2.getphone());
