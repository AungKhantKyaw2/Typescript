class Student {
    constructor(id, name, age, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    consent() {
        console.log("Email is available");
    }
}
const studentObj = new Student(1001, "Su Su", 18);
console.log(studentObj);
console.log(typeof studentObj);
console.log(studentObj.id);
console.log(studentObj.name);
console.log(studentObj.age);
console.log(studentObj.phone);
studentObj.consent();
studentObj.phone = "0912345";
console.log(studentObj.phone);
studentObj.name = "Hsu Hsu";
console.log(studentObj.name);
const stuObj = new Student(1001, "Tun Tun", 20, "099999");
console.log(stuObj.phone);
