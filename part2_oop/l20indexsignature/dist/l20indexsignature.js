"use strict";
class Staff {
}
const staffObj = new Staff();
console.log(staffObj);
staffObj.hasnrc = true;
staffObj.hascar = false;
console.log(staffObj);
const stafftwoObj = new Staff();
console.log(stafftwoObj);
stafftwoObj.hasnrc = true;
stafftwoObj.hascar = false;
stafftwoObj.hasgirlfriend = false;
console.log(stafftwoObj);
class People {
    constructor() {
        this.name = "Maung Maung";
        this.email = "mgmg@gmail.com";
    }
}
const personObj = new People();
console.log(personObj);
personObj.city = "Mandalay";
console.log(personObj);
console.log(personObj.city);
class Employee {
    constructor() {
        this.name = "Yu Yu";
    }
}
const employeeObj = new Employee();
console.log(employeeObj);
employeeObj.hasnrc = true;
employeeObj.hascar = false;
employeeObj.department = "IT Department";
console.log(employeeObj);
console.log(employeeObj.name);
console.log(employeeObj.hasnrc);
console.log(employeeObj.department);
