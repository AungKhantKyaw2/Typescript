//---this keyword---
//At top level in the browser : "this " refers to 'window'
//In strict mode or in modules, it wille be 'undefined' (in node or ES modules)
console.log(this);


//Object with method using 'this'


const student ={
    info():void{
        console.log(this);
    }
}

student.info(); 


//class with method using 'this'

class Student{
     content():void{
        console.log(this);
     }
}

const studentObj= new Student(); //{ info: [Function: info] }
console.log(studentObj
);//Student {}
studentObj.content();//Student {}


// call(), apply(), bind()


function sayhi(name:string,msg:string):void{
    console.log(this);
    console.log(`Hay,..... ${name}. ${msg}`);
}


sayhi("Hsu Hsu", "How are you!"); //  Hay,..... Hsu Hsu. How are you!

sayhi.call({name:"Yu Yu"});//{ name: 'Yu Yu' } Hay,..... undefined. undefined
sayhi.call("Yu Yu", "How are you!");//[String: 'Yu Yu'] Hay,..... How are you!. undefined
sayhi.call({fullname:"Nu Nu"},"Aye Aye","How are you!");// { fullname: 'Nu Nu' } Hay,..... Aye Aye. How are you!

sayhi.apply({name:'Yu Yu'}); //

// sayhi.apply("Yu Yu","How are you!");//error
// sayhi.apply({fullname:"Nu Nu"},"Aye Aye","How are you!");//error

sayhi.apply({fullname:"Nu Nu"},['Aye Aye','How are you!']);//{ fullname: 'Nu Nu' } Hay,..... Aye Aye,How are you!. undefined


let bindfun= sayhi.bind({fullname:"Zin Zin"},'Aung Aung','How are you!');

bindfun(); //{ fullname: 'Zin Zin' } Hay,..... Aung Aung. How are you!