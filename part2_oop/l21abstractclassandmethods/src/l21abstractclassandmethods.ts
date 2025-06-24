 //=>Abstracat Class

//  class must start with abstract keyword.
// abstract class can't instantiate

//=>Abstract Method
//   An abstract method is a method declared in an abstract class that does not have a ReportBody.It must be implemented in Sub class.


abstract  class People{
    constructor(
        public name:string,
        public age:number
    ){
        
    }
    abstract getrole():string;

    showinfo(){
        console.log(`Name=${this.name},Age=${this.age},Role:${this.getrole()}`);
    }
}

class Student extends People{
    constructor(
        name:string,
        age:number,
        public grade:String
    ){
        super(name,age);// call parent constructor
    }
    getrole():string{
       return "Student";
    }
    study():void{
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }
}

class Staff extends People{
    constructor(
        name:string,
        age:number,
        public department:String
    ){
        super(name,age);// call parent constructor
    }
    getrole():string{
       return "Staff";
    }
    work():void{
        console.log(`${this.name} is working in  ${this.department} department`);
    }
}

class Employee extends People{
    constructor(
        name:string,
        age:number,
        public position:String,
        public salary:number
    ){
        super(name,age);// call parent constructor
    }
    getrole():string{
       return "Employee";
    }
    pay():void{
        console.log(`${this.name} earns $${this.salary} as a ${this.position} `);
    }
}

//const peopleObj = new People("Kyaw Kyaw",20);//error

const studentObj = new Student("Su Su",18,"Grade 11");
studentObj.showinfo();//Name=Su Su,Age=18,Role:Student
studentObj.study();//Su Su is studying in grade Grade 11

const staffObj  = new Staff("Tun Tun",23,"IT");
staffObj.showinfo();//Name=Tun Tun,Age=23,Role:Staff
 staffObj.work();//Tun Tun is working in  IT department

const employeeObj = new Employee("Win Win",25,"Manager",5000);
employeeObj.showinfo();//Name=Win Win,Age=25,Role:Employee
employeeObj.pay();//Win Win earns $5000 as a Manager