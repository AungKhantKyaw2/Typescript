//=> Pick Map Type

//exe 1 


type ProductType={
        id:number;
        title:string;
        price:number;
};
                        //choose the    "title" from User Type
type PickTitleOnly = Pick<ProductType,"title">;


const ProductObj:PickTitleOnly ={
        title:"Redbull"
        // price :1000 // this will cause an error because "id" and "price" are not included in PickTitleOnly
}


//exe 2 

type UserType={
        id:number;
        name:string;
        age:number;
        email:string;
}
                     //choose the    "name"|"age" from User Type
type PickUserInfo = Pick<UserType,"name"|"age">;

const userObj:PickUserInfo={
        name:"Bo BO",
        age:25,

        // email:"bobo@gmail.com"// // this will cause an error because "id"  and "email" are not included in PickTitleOnly
}

//Pick for Function Params

type EmployeeType={
        id:number;
        name:string;
        position:string;
        salary:number;
};

type PickEmployeeInfo = Pick<EmployeeType,"name" | "position">;

function Employeefun(obj:PickEmployeeInfo){
        console.log(`${obj.name} = ${obj.position}`);
}

Employeefun({
        name:"Ko Ko",
        position:"Developer"
})
