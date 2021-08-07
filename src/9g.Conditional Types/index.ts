/*

conditional type is a type whihc either one type from two types based on given condition

type someType =  T extends U ? X : Y;

here T is type and U is union type


*/

type SomeType = string;
type MyConditionalType = SomeType extends string ? string : number;


function someFunction<T>(value: T) {
    const someOtherFunction = (someArg: T extends boolean ? 'TYPE A': 'TYPE B') => {};
    return someOtherFunction;
}

const innerFunctionType1 = someFunction('');
const innerFunctionTyp2 = someFunction(true);

//Type script Exclude utility type
// type Exclude<T, U> = T extends U ? never : T;

type ResultType = Exclude<'a'| 'b' | 'c', 'a'| 'b'>;

/*
'a' extends 'a' | 'b' ? never : 'a' => never
'b' extends 'a' | 'b' ? never : 'b' => never
'c' extends 'a' | 'b' ? never : 'c' => c
*/

type MyType<T> = T extends string | number ? T : never;
type MyResult = MyType<string| number | boolean >

const MyResultValue1: MyResult = "Raj";
const MyResultValue2: MyResult = 31;

/*

infer is keyword which infer the whole type or some part of type

type someType = T extends infer U ? U : Y

T extends {a: infer A , b: infer B} : A & B : any
T extends (a: infer Arg1) => any ? Arg1 : any

*/

type MyInferType<T> =  T extends infer U ? U : any;
type Inferred =  MyInferType<'I am a string'>;

type MyInferType2<T> =  T extends { a: infer A, b: number } ? A : any; 
type Inferred2 =  MyInferType2<{a: "Some A Value", b: 20}>;
type Inferred3 =  MyInferType2<{a: "Some A Value"}>;

//infer multiple types
type MyInferType3<T> =  T extends { a: infer A, b: infer B } ? A & B : any; 
type Inferred4 =  MyInferType3<{a: {someAProp: 1}, b: {someBProp: 'Some B Value'}}>;
type Inferred5 =  MyInferType3<{a: {someAProp: 1}}>;



//Type script utility ReturnType
type MyFuncReturnTypeValue = ReturnType<() => true>;


// In type script Utilitu types implemented using conditional types
//Exclude, Extract, NonNullable, ReturnType, InstanceType




