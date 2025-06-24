

//=>Type widening
let fullname = "Mar Lar";
fullname ="Kyi Pyar";
// type Person ={
//   name:string;
//   age:number;
// }

type Person ={
  name: "Yu Yu";
  age: number;
}

const studuent ={
    name:"Yu Yu" as const, // must be same value as type Person , must contain 'as const'
    age:21
}

function studentname(student:Person){
  return student.name;
}

console.log(studentname(studuent));

