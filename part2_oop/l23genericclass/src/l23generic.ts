//Basic Class

class NumberStore{
    private datas:number[]=[];

    add(val:number):void{
        this.datas.push(val);
    }

    getdats():number[]{
        return this.datas;
    }
}

const numberstoreObj = new NumberStore();
numberstoreObj.add(10);
numberstoreObj.add(20);
// numberstoreObj.add("hello");//error
console.log(numberstoreObj.getdats());//[10]


//Generic class


class Store<T>{

    private datas:T[]=[];
    add(val:T):void{
        this.datas.push(val);
    }

    getdatas():T[]{
        return this.datas;
    }
}

const storeObj1 = new Store<number>();
storeObj1.add(80);
storeObj1.add(90);
// storeObj1.add("hello");//error
console.log(storeObj1.getdatas());//[ 80, 90 ]



const storeObj2 = new Store<string>();
// storeObj2.add(80);//error
// storeObj2.add(90);//error
storeObj2.add("ni ni");
storeObj2.add("aye aye");
console.log(storeObj2.getdatas());//[ 'ni ni', 'aye aye' ]

const storeObj3 = new Store<boolean>();
// storeObj3.add(80);//error
// storeObj3.add(90);//error
// storeObj3.add("ni ni");//error
// storeObj3.add("aye aye");//error
storeObj3.add(true);
storeObj3.add(false);
console.log(storeObj3.getdatas());//[ true, false ]



//=>Exercise 1

class Student<T1,T2,T3>{

    constructor(
        public name:T1,
        public age:T2,
        public city:T3
    ){

    }
}

const studentobj1 = new Student<string,number,string>("Nilar",18,"Yangon");
console.log(studentobj1);//Student { name: 'Nilar', age: 18, city: 'Yangon' }
const studentobj2 = new Student<string,string,string>("Nilar","17 years old","Bago");
console.log(studentobj2);//Student { name: 'Nilar', age: '17 years old', city: 'Bago' }



//=>Exercise 2 with Interface 

interface SetId{
    id:number;
}

class Storages<T extends SetId>{
     private datas:T[]=[];

     add(val:T):void{
        this.datas.push(val);
     }

     getdatas(id:number):T | undefined{   // should add undefined because for considering the data which is not included in this class add Method 
        return this.datas.find(singledata=> singledata.id ===id);
     }
}

const storagesObj = new Storages<{id:number;name:string}>();

storagesObj.add({id:1,name:"Aung Aung"});
storagesObj.add({id:2,name:"Hla Hla"});
storagesObj.add({id:3,name:"Kyaw Kyaw"});

console.log(storagesObj.getdatas(1));//{ id: 1, name: 'Aung Aung' }
console.log(storagesObj.getdatas(3));//{ id: 3, name: 'Kyaw Kyaw' }


// why should add undefined in line number 96
const users =[
   {id:1,name:"hla hla"},
   {id:2,name:"ni ni"}
];

const singleuser = users.find(user=>user.id ===3);
console.log(singleuser);//undefined



//25CD
