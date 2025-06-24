// Modifier    Main Class   Sub Class  Outside
// public        yes          yes        yes
//protected      yes          yes        no
//private        yes          no         no

//Syntax

// class Myclass{
//     [key:string] :string;
// }

class Staff{
     [info:string]:boolean
}

const staffObj = new Staff();
console.log(staffObj);// Staff{}

staffObj.hasnrc = true;
staffObj.hascar = false;
console.log(staffObj); //Staff { hasnrc: true, hascar: false }


const stafftwoObj = new Staff();
console.log(stafftwoObj)//staff{}

stafftwoObj.hasnrc = true;
stafftwoObj.hascar = false;
stafftwoObj.hasgirlfriend= false;
console.log(stafftwoObj);//Staff { hasnrc: true, hascar: false, hasgirlfriend: false } 

class People {
    [key:string]:string
    name:string = "Maung Maung";
    email:string = "mgmg@gmail.com";
}

const personObj = new People();
console.log(personObj);//

personObj.city = "Mandalay";

console.log(personObj);//People {   name: 'Maung Maung',    email: 'mgmg@gmail.com',    city: 'Mandalay' }
console.log(personObj.city);//Mandalay


//Exercise

class Employee {
      [key:string]:string |boolean
      name:string = "Yu Yu";
}

const employeeObj = new Employee();

console.log(employeeObj);//Employee { name: 'Yu Yu' }

//add dynamic properties

employeeObj.hasnrc = true;
employeeObj.hascar =false;
employeeObj.department = "IT Department";

console.log(employeeObj);

console.log(employeeObj.name);//Yu Yu
console.log(employeeObj.hasnrc);//true
console.log(employeeObj.department);//IT Department



//11ID
