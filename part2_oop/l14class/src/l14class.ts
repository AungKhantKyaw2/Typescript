//Properties , Methods


class Student{
    id:number;
    name:string;
    age:number;

    constructor(id:number,name:string,age:number){
        this.id =id;
        this.name = name;
        this.age =age;
    }

    content():void{
        console.log("Phone, Email are not available");
    }
}



const studentObj = new Student(1001,"Su Su", 18);

console.log(studentObj);
console.log(typeof studentObj);


console.log(studentObj.id); //1001
console.log(studentObj.name);//Su Su
console.log(studentObj.age);//18