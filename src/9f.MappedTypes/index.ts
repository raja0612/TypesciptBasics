/*
Mapped types allow us to create new type by iterating over list of properties.
*/

type Properties = 'propA' | 'propB';

type MyMappedType = {
    [P in Properties]: P;
};

type AllowedType  = string | number | symbol;

type MyMappedGenericType<Properties extends AllowedType> = {
    [P in Properties]: P;
}

type MyNewType = MyMappedGenericType<'propA' | 'propB'>;

type MyMappedType2<T> = {
    [P in keyof T]: T[P];
}

//keyof gives us  union of all types in T
//T[P] - holds Type T of value P


// new type with readonly
type MyMappedType3<T> = {
    readonly [P in keyof T]: T[P];
}

// new type with optional
type MyMappedType4<T> = {
    [P in keyof T]?: T[P];
}

type MyNewType2 = MyMappedType2<{a: 'a', b: 'b'}>;

type MyNewType3 = MyMappedType3<{a: 'a', b: 'b'}>;

type MyNewType4 = MyMappedType4<{a: 'a', b: 'b'}>;


type PersonType<T> ={
    [Key in keyof T]: T[Key];
}

type MyPersonType = PersonType<{name: string, age: number}>;

const RAJA: MyPersonType= {
    name: "Raj",
    age: 31
}


// Typescript inbuilt Pick and Record utility types use MappedTypes behind the scenes

// Two parameerts
// 1. type of  T
// 2. list of properties  that we need to pick from type T

//PropertiesFromT extends keyof T constraint makes sure  that properties that belongs to list of T
type Pick1<T, PropertiesFromT extends keyof T> = {
    [P in PropertiesFromT]: T[P];
}

type MyNewType5 = Pick1<{a: 'a', b: 'b'}, 'a'>;

type MyNewType6 = Pick1<{a: 'a', b: 'b'}, 'a'| 'b'>;

type MyNewType7 = Pick1<{a: 'a', b: 'b'}, 'c'>; 
// error because c proprty not presnt in passed type {a: 'a', b: 'b'}

//TS Record Type Definiton

/*
/**
 * Construct a type with a set of properties K of type T
 type Record<K extends keyof any, T> = {
    [P in K]: T;
};
*/

type Record1<K extends keyof any, T> = {
    [P in K]: T
}

const someRecord: Record1<string, number>={}
someRecord.apples = 10;
someRecord.bananas = 20;

// we can use index signature instad of Record type also but there is some limittation with that
// the key in index signature keys cannot be union type

type myIndexSignatureType = {
   [Key: string]: number
}

const myIndexSignature1:myIndexSignatureType = {}

myIndexSignature1.apples = 10;
myIndexSignature1.bananas = 20;

const someRecord2: Record1<string|number, number>={}
someRecord.apples = 10;
someRecord.bananas = 20;
someRecord[1]= 1;

//error
type myIndexSignatureType2 = {
    [Key: string| number]: number
 }


 // what if i want to additional property to mapped type, we cannot directly add some prop to Record type
// but we can use intersection type

 type Record2<K extends keyof any, T> = {
    [P in K]: T;
 } & {someProp: number};

 const RecordIntersctionType: Record2<string, number>={someProp: 20};
 RecordIntersctionType.apples = 10;
 RecordIntersctionType.bananas = 20;






