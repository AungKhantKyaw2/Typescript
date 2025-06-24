//readonly


class Student{
   readonly id:number;
    name:string;
    age:number;
    phone?:string;

    constructor(id:number,name:string,age:number,phone?:string){
        this.id= id;
        this.name =name;
        this.age =age;
        this.phone=phone;
    }
    consent():void{
        console.log("Email is available");
    }
}

const studentObj = new Student(1001,"Su Su",18);

console.log(studentObj);
console.log(typeof studentObj);//object

console.log(studentObj.id);//1001
console.log(studentObj.name);//Su Su
console.log(studentObj.age);//18
console.log(studentObj.phone);//undefined

studentObj.consent();//Email is available

studentObj.phone = "0912345";
console.log(studentObj.phone);//0912345


studentObj.name = "Hsu Hsu";
console.log(studentObj.name);//Hsu Hsu

// stuObj.id =1003 ;// Error it is because of readonly id (line no 5)

const stuObj = new Student(1001,"Tun Tun",20,"099999");
console.log(stuObj.phone);//099999
