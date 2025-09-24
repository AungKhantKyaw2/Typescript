export const regexObj ={
    name:/^[a-zA-Z ]{3,30}$/, //only letter & spaces 3, to 30 chars
    email:/^[\w. ]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/,  //email pattern
    phone: /^\d{10}$/   //10digit
};


//=> method 1 (by passed) **********

export function validaorField(field:string,value:string):boolean{

    //type error (we need to change with any as pretend)
    // const pattern = regexObj[field];//Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ name: RegExp; email: RegExp; phone: RegExp; }'. No index signature with a parameter of type 'string' was found on type '{ name: RegExp; email: RegExp; phone: RegExp; }'.

    const pattern =(regexObj as any)[field];

    if(!pattern) return true;
    return pattern.test(value);//true or false

}

//=> method 2

// type Field = keyof typeof regexObj; //"name" | "email" "phone"

// export function validaorField(field:Field,value:string):boolean{



//     const pattern =regexObj[field];

//     if(!pattern) return true;
//     return pattern.test(value);//true or false

// }
