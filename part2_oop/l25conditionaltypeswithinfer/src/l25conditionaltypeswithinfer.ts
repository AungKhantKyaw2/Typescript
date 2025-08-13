//Conditional Types with infer (Inference Type)


//Synatx

//type Conditional<T> = T extends string ? "String Type" : "Not String Type";

//exe 1

type IsString<T> = T extends string ? true :false;
type Tone = IsString<"hello"> //truel
type Ttwo = IsString<50>;//false


//Infer U (infer can extract the nested array and ordinary array)
//type Conditional><T> = T extends SomePattern<infer U> ? U :Default Type;

//Note : Pattern(infer U)[]
//     :number[] is extract ti number . after(infer U)
        // :is mean  infer we can extract array


//exe1 (Extract Type from Array)
type SomeStructure<T> = T[];
type DefaultType =unknown;

type MyType<T> = T extends SomeStructure<infer U> ? U : DefaultType;


type NumberTyp = MyType<number[]>; //number
type BooleanTyp =MyType<boolean[]>;//boolean
type NoanArrayTyp = MyType<string>;//unknown


//exe 2 (Extract Type from Array)

type ExtractArray<T> = T extends (infer U)[] ? U : "Not an array";


type T1 = ExtractArray<string[]>;//string
type T2 = ExtractArray<number[]>; //number
type T3 = ExtractArray<50>; //"Not an array"



//exe 3 (Extract Type from Array)

type ArrayElementType<T> = T extends (infer U)[] ? U :T ;

type StringsT = ArrayElementType<string[]>;//string
type NumbersT = ArrayElementType<number[]> ;//number
type MixedT = ArrayElementType<Array<number|string>>;// number |string  Array<number |string > mean [1,'hello',3]

type NotanArrayBooleanT = ArrayElementType<boolean>;// boolean
type NotanArrayT = ArrayElementType<50> ;// 50

//=>Nest Infer (Extract Type from Array)

type DeepArray<T> = T[][];


type NstArray<T> = T extends DeepArray<infer U> ? U : T extends (infer V)[] ? V : "Not an Array";


type NestType1 = NstArray<number[][]>; //number
type NestType2 = NstArray<string[]>; //string
type NestType3 = NstArray<number> ; // "Not an array"

//=>Extract Tuple First Type ****


type FirstTuple<T> = T extends [infer F,...any[]] ? F :never; //Note , infer F captures the type of the first element of the tuple
type FType1 = FirstTuple<[number,string,boolean]>;//number
type FType2 = FirstTuple<[boolean]>; // booleam
type FType3 = FirstTuple<[]>;//never


//=>Extract Tuple Last Type *****


type LastTuple<T> = T extends [...any[],infer L] ? L :never; //Note , infer F captures the type of the first element of the tuple
type LType1 = LastTuple<[number,string,boolean]>;//boolean
type LType2 = LastTuple<[boolean]>; // string
type LType3 = LastTuple<[]>;//never

// => EXtract Inner Type from Wrapper 

type Wrapper<T> = {value:T};
type Unwrap<T> = T extends Wrapper<infer U> ? U : "Not a Wrapper";
type WType1 = Unwrap<Wrapper<number>>;//number
type WType2 = Unwrap<Wrapper<string>>;//string
type WType3 = Unwrap<{value:boolean}>;//boolean
type WType4  =Unwrap<number>; //"Not a wrapper"


//=>Extract Promise Value

type GetPromiseValue<T> = T extends Promise<infer U> ? U : T ;

type PType1 = GetPromiseValue<Promise<string>>;//string
type PType2 = GetPromiseValue<Promise<number>>;//number
type PType3 = GetPromiseValue<number>;//number
type PType4 = GetPromiseValue<boolean>;//boolean


//=>Extract Function Return Type

type GetReturnType<T> = T extends (...args:any[])=>infer R ? R: never;


// type GetReturnType<()=>number> = T extends (...args:any[])=>infer ()=>number ? number: never;


type RFtype1 = GetReturnType<()=>number>;//number
type RFtype2 = GetReturnType<()=>string>;//string
type RFtype3 = GetReturnType<(x:number)=>boolean>;//boolean
type RFtype4 = GetReturnType<string>;//never

//T = check if T is a function type
//...args:any[] = Accepts and arguments(we ignore them)
//infer R = Captures the return type into R
//9IF