// Modifier    Main Class   Sub Class  Outside
// public        yes          yes        yes
//protected      yes          yes        no
//private        yes          no         no


//=>Public (default)


class User{
  public name:string;
    constructor(name:string){
        this.name=name;

    }
    public content():void{
        console.log("Phone is available");
    }
}

const userObj= new User("Kyaw Kyaw");
console.log(userObj.name); //Kyaw Kyaw
userObj.content()//Phone is available 
userObj.name ="Naw Naw";
console.log(userObj.name);//Naw Naw


//Protected

class People{
    protected name:string;

    constructor(name:string){
        this.name =name;
    }
}


class Employee extends People{

    greeting():void{
        console.log(`Hello ${this.name}`);
    }
   
}

const employeeObj = new Employee("Tun Tun");
employeeObj.greeting();
// console.log(employeeObj.name);//error because Property `name` is protected



//=>Private 

class BankAccount{
    private balance:number;

    constructor(balance:number){
        this.balance=balance;
    }

    showbalance():void{
        console.log(`Main Balance is =${this.balance}`);
    }
}

const bankObj = new BankAccount(2500);
// console.log(bankObj.balance);//error because Proerty `balance` is private
bankObj.showbalance();//



// =>Exercise 

class Student{
    // public readonly id:number;
    // public name:string;
    // private age:number;// Required params come before optional ones
    // protected phone?:string;

    // constructor(id:number,name:string,age:number,phone?:string){
    //     this.id =id;
    //     this.name=name;
    //     this.age=age;
    //     this.phone =phone;
    // }

    constructor(
        public readonly id:number,
        public name:string,
        private age:number,
        protected phone?:string
    ){
            this.id =id;
            this.name=name;
            this.age=age;
            this.phone =phone;
    }

    content():void{
        console.log("Email is available");
    }
    getage():number{
        return this.age;
    }

    getphone():string|undefined{
        return this.phone;

    }


 
}

const studentObj = new Student(1001,"Su Su ",18);
studentObj.name ="Hsu Hsu";
console.log(studentObj.name);

// studentObj.id =1002; //error ,readonly
// console.log(studentObj.age);//error ,private
// console.log(studentObj.phone);//error ,protected

studentObj.content();

console.log(studentObj.getage());

const studentObj2 = new Student(1003,"Tun Tun",20,"0912345");
console.log(studentObj2.getphone());//0912345

//4AM