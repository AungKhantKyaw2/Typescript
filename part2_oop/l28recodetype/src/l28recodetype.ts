//Record Types

//exe 1

const countryObj:Record<string,string>={
        MM:"Myanmar",
        TH:"Thailand",
        SLK:"Srilanka"
}
console.log(countryObj.MM);//Myanmar
console.log(countryObj.TH);//Thailand



//exe 2 
                
type RoleType = "admin" |"user" |"guest";
// must include "admin" |"user" |"guest" in RoleType and value is "string"
                                const permissionObj:Record<RoleType,string> = {
        admin:"full access",
        user:"limited access",
        guest:"read only",
        // vip: "special access" // vip is not included in RoleType
};

console.log(permissionObj.admin);// full access
console.log(permissionObj.user);// limited access


//exe 3 

type UserRoleType = "teacher" | "student";

type InfoType = {
        name:string;
        age:number;
        email?:string; // optional property
}

const userObj:Record<UserRoleType,InfoType>={
        teacher:{
                name:"Mr.Tun TUn",
                age:30
        },
        student:{
                name:"Ms.July",
                age:18,
                email:"ms.july@gmail.com"
        }

}


console.log(userObj.teacher.name);//Mr.Tun Tun
console.log(userObj.student.name);//Ms.July
console.log(userObj.student.email);//ms.july@gmail.com


//exe 4


enum Language{
        Myanmar="mm",
        English ="en",
        Thailand="th"
};

const greetingObj:Record<Language,string>={
        mm:"Mingalaba",
        en:"Hello",
        th:"Sawasdee",
        // japan:"Konnichiwa" // japan is not included in Language
};


console.log(greetingObj.mm);//Mingalaba
console.log(greetingObj.th);//Sawasdee

//exe 5 

type OperationType ="add" | "substract";

const calculateObj:Record<OperationType,(num1:number ,num2:number)=>number>={

        add:(num1,num2) =>num1+ num2 ,
        substract:(num1,num2) => num1 -num2



}

console.log(calculateObj.add(10,20));//30
console.log(calculateObj.substract(100,20));//80


//exe 6 (Nested Record Type)

type CategoryType = "Fruits" | "Snacks";
type ItemType ="Apple" | "Orange" |"Jelly";

const inventorObj:Record<CategoryType,Record<ItemType,number>>={
        Fruits:{
                Apple:10,
                Orange:50,
                Jelly:0
        },
        Snacks:{
                Apple:0,
                Orange:0,
                Jelly:100
        }

};

console.log(inventorObj.Fruits.Apple);//10
console.log(inventorObj.Snacks.Jelly);//100

//30RT