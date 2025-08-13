"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    sayhi() {
        console.log(`Hello,my name is ${this.name}`);
    }
}
const personObj = new Person("Aung Aung");
personObj.sayhi();
class MathUtil {
    static square(num) {
        return num * num;
    }
}
console.log(MathUtil.square(2));
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I\'m ${this.name} and I\'m ${this.age} years old`);
    }
    static isover18(age) {
        return age >= 18;
    }
}
const peopleObj = new People('Yoon Yoon', 20);
peopleObj.introduce();
console.log(People.isover18(20));
console.log(People.isover18(15));
class Numcounter {
    static increment() {
        Numcounter.count++;
    }
    static showresult() {
        console.log(`Total Count is = ${Numcounter.count}`);
    }
}
Numcounter.count = 0;
Numcounter.showresult();
Numcounter.increment();
Numcounter.increment();
Numcounter.increment();
Numcounter.increment();
Numcounter.increment();
Numcounter.showresult();
class Staff {
    constructor(name) {
        this.name = name;
        Staff.totalstaff++;
    }
    static showtotal() {
        console.log(`Total Staff = ${Staff.totalstaff}`);
    }
}
Staff.totalstaff = 0;
const staffObj1 = new Staff("Su Su");
const StaffObj2 = new Staff("Yu Yu");
const StaffObj3 = new Staff("Nu Nu");
Staff.showtotal();
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    intro() {
        console.log(`I\'m ${this.name} and I\'m ${this.age} years old.`);
    }
    static agefilter(age) {
        return age >= 18;
    }
}
const employeeObj = new Employee("Hnin Hnin", 20);
employeeObj.intro();
console.log(Employee.agefilter(25));
console.log(Employee.agefilter(17));
