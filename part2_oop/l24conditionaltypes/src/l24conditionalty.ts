//Conditional Types

//Basic types
type Ty1= "Hay" extends string ? true: false;// true
type Ty2= "Hay" extends any ? true: false;// true , everything any
type Ty3= "Hay" extends number ? true: false;// false ,no relationship
type Ty4= "Hay" extends unknown ? true: false;// true
type Ty5= string extends "Hay" ? true: false;// false , parent doesn't extend child
type Ty6= 1500 extends string ? true: false;// false , no relationship
type Ty7= 1500 extends number ? true: false;// true
type Ty8= 1500 extends any ? true: false;// true , everything extends any
type Ty9= 1500 extends unknown ? true: false;// true
type Ty10= number extends 1500 ? true: false;// false , parent doesn't extend child
type Ty11= number extends string ? true: false;// false , no relationship
type Ty12= string extends number ? true: false;//  false , no relationship


// unknown check

type Ty13= string extends unknown ? true: false;// true
type Ty14= object extends unknown ? true: false;// true
type Ty15= null extends unknown ? true: false;// true
type Ty16= undefined extends unknown ? true: false;// true
type Ty17= never extends unknown ? true: false;// true
type Ty18= unknown extends number ? true: false;// false

//anycheck

type Ty19= string extends any ? true: false;// true, everything extends any, any is top type
type Ty20= number extends any? true: false;// true
type Ty21= boolean extends any? true: false;// true
type Ty22= false extends any? true: false;// true
type Ty23= unknown extends any? true: false;// true
type Ty24= never extends any? true: false;// true
type Ty25= any extends any? true: false;// true
type Ty26= void extends any? true: false;// true

//boolean check 
type Ty27= true extends boolean? true: false;// true
type Ty28= true extends string? true: false;// false, no relationship
type Ty29= boolean extends true? true: false;// false, parent doesn't extend child

//array check

type Ty30= string[] extends any? true: false;// true
type Ty31= string[] extends any[]? true: false;// true
type Ty32= string[] extends string ? true: false;// false
type Ty33= number[] extends any ? true: false;// true
type Ty34= number[] extends any[]? true: false;// true
type Ty35= number[] extends number? true: false;// false


//Union check
type Ty36= string extends (string|number) ? true: false;// true
type Ty37= (string|number) extends string ? true: false;// false ***

//function check
type Ty38= void extends Function ? true: false;// true

//tuple check
type Ty39= [string,number] extends any[] ? true: false;// true


//never, check(never represents a value that never exists, it's assignable to every ),check
type Ty40= never extends string ? true: false;// true
type Ty41= never extends number? true: false;// true
type Ty42= string extends never ? true: false;// false


//Extract (Utality type)

type MixTypes = "Hay" | 1500 | ["Boy","Girl"] | {brand:"Redbull",price:0} | [10,20,30] | {brand:"Sponsor",price:number} | "Say Hi";

type Strings =Extract<MixTypes,string>;// "Hay" | "Say Hi"
type Numbers =Extract<MixTypes,number>;// 1500
type ProductOne =Extract<MixTypes,{brand:"Redbull",price:0}>;//{brand:"Redbull",price:0}
type ProductTwo = Extract<MixTypes,{price:0}>;//Result :never
type ProductThree = Extract<MixTypes,{stock:0}>;//Result :never , because no such object exists
type ArrayOne = Extract<MixTypes,[]>;//Result : never , `[] is an empty tuple no such type exists in Mix Types`
type ArrayTwo =Extract<MixTypes,string[]>;//["Boy","Girl"]
type ArrayThree=Extract<MixTypes,number[]>;//[10,20,30]
type ArrayFour = Extract<MixTypes,[unknown,unknown]>;// ["Boy","Girl"]  **** important

//Exclude(Utality type)

type NotStrings = Exclude<MixTypes,string>; // 1500 | ["Boy","Girl"] | {brand:"Redbull",price:0} | [10,20,30] | {brand:"Sponsor",price:number} 
type NotNumbers = Exclude<MixTypes,number>;// // "Hay" | ["Boy","Girl"] | {brand:"Redbull",price:0} | [10,20,30] | {brand:"Sponsor",price:number
type NotProductOne=Exclude<MixTypes,{brand:"Redbull",price:0}>;
type NotProductTwo =Exclude<MixTypes,{stock:0}>;//Same as Mixtypes
type NotArrayOne =Exclude<MixTypes,[]>;//Same as Mixtypes
type NotArrayTwo =Exclude<MixTypes,string[]>;// "Hay" | 1500 | {brand:"Redbull",price:0} | [10,20,30] | {brand:"Sponsor",price:number} | "Say Hi";
type NotArrayThree =Exclude<MixTypes,number[]>;//


type NotPrimitives = Exclude<MixTypes,string|number>;//  ["Boy","Girl"] | {brand:"Redbull",price:0} | [10,20,30] | {brand:"Sponsor",price:number}
// type NotArrays =Exclude<MixTypes,any[]>; "Hay" | 1500 |  {brand:"Redbull",price:0} | {brand:"Sponsor",price:number} | "Say Hi"
type Notspecific =Exclude<MixTypes,"Hay" | 1500 |"Say Hi">;// ["Boy","Girl"] | {brand:"Redbull",price:0} | [10,20,30] | {brand:"Sponsor",price:number} 


//2EC