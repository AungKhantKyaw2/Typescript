// Mapped Types

//Indexed Access Type
type Student ={
        name:string,
        age:number
};


type StaffName = Student["name"];

//Index Signature

type People={
        [k:string] :string;
}

const Employee:People ={
        name:"aye aye",
        gender:"female",
        city:"mandalay"
};

//=>Map Type
//Syntax

//type MappedType<T> = {
//  [Key in keyof T]:T[key];
// };


//exe1 

type Original = {
        name:string;
        age:number;
}

type Copied ={
        [Key in keyof Original ]: Original[Key];
}

//exe2 (Mappped type to make all properties optional)

type Person = {
        name:string;
        age:number;
}

type Optional<T> ={
      [Pskey in keyof T] ?:T[Pskey];
}

type OptionalPerson = Optional<Person>;
//Expected :{name?:string ,age?:number}


//exe3 (Mappped type to make all properties optional) Read Only

type ReadonlyType<T> ={
    readonly  [Pskey in keyof T] ?:T[Pskey];
}

type ReadonlyPerson = ReadonlyType<Person>;

//Expected :{ readonly name:string , readonly age:number}
 


//example(before mapped type)

type Member ={
     name:string;
     age:number;
}

const member:Member={
        name:"Ni Ni",
        age:25
};


member.name = "War War";

console.log(member);// { name: 'War War', age: 25 }

//example(after mapped type)

type User ={
        name:string;
        age:number;
}

type Readtype<T>={
        readonly [Key in keyof T] :T[Key];
};

const user:ReadonlyType<User>={
        name:"Su Su",
        age:30
}

// user.name="Yu Yu"; // error can't overtype

console.log(user);//{ name: 'Su Su', age: 30 }


//=>Required Only (Remove Optional Modifier)

//example (before mapped type)

type Guest = {
        name:string;
        age?:number;
        email:string;
        password?:string
}

const guestlogin:Guest={
        name:"Kyaw Kyaw",
        email:"kyawkyaw@gmail.com"
}

console.log(guestlogin);//{ name: 'Kyaw Kyaw', email: 'kyawkyaw@gmail.com' } 

//example (after mapped type)


type Employee = {
        name:string;
        age?:number;
        email:string;
        password?:string
}

type RequireType<T> = {
        [Key in keyof T]-? : T[Key]
};


const emplogin:RequireType<Employee>={
        name:"Nadi",
        age:25,
        email:"kyawkyaw@gmail.com",
        password:"abcd12345"
}

console.log(emplogin);//{    name: 'Nadi',    age: 25,     email: 'kyawkyaw@gmail.com',  password: 'abcd12345' }


//=>Mapped Type with Union Key

type UnionKeys = "name" | "age" | "city";

type MappedTypeWithUnionKeys ={
        [Key in UnionKeys] :string;
}
//Expected :{name:string,age:string ,city:string}

//=> Mapped Type with Conditional Types

type Staff={
        name:string,
        age:number,
        isActive:boolean;
}

type ConditionalMappedType<T>={
        [Key in keyof T] : T[Key] extends number ? string : T[Key];
}

type Conditionalexample = ConditionalMappedType<Staff>;
//Expected :{name:string,age:string ,isActive:boolean}
//=>Mapped Type with Conditional Type (IF Deep Mapping)

type Customer={
        name:string,
        age:number,
        isActive:boolean;
        address:{
                city:string;
                zip:number;
        }
};

type ConditionalDeepMappedType<T>={
        [Key in keyof T] : T[Key] extends number ? string : T[Key] extends object  ? ConditionalDeepMappedType<T[Key]> : T[Key];
        
}

type ConditionalDeepexample = ConditionalDeepMappedType<Customer>;

//Expected :{name:string,age:string ,isActive:boolean; address:{city:string; zip :string}}

// 16MP 
//23MT