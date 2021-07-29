//intersection type is union of multiple types


let aUnionType: number & string;

interface IA {
    a: number;
}

interface IB {
    b: number;
}

function X(obj: IA & IB){
    console.log(obj.a, obj.b);
}


interface Person {
    name: string;
    age: number;
    sex: string;
}

interface Hobbies {
    hobbies: Array<string>;
    x: number;
}

interface PersonHobbies {
    name: string;
    hobbies: Array<string>
}

function PersonHobbies(obj: Pesron & Hobbies ): PersonHobbies {
     let personHobbies = {
         name: obj.name,
         hobbies: obj.hobbies
     }
     return personHobbies;
}


const obj1 = {a: 1};
const obj2 = {b: 1};

function combine(obj1, obj2){
    return {...obj1, ...obj2}
}

let result = combine(obj1, obj2); // hert result type any

// so we need to use generics



function combine2<obj1, obj2>(obj1: obj1, obj2: obj2) : obj1 & obj2 {
    return {...obj1, ...obj2}
}

let result2 = combine2(obj1, obj2); 

let result3 = combine2("raj", "ram");  // we can pass any type , TS wont give any compilattion error

// obj1 extends object,is constraint so we only pass object type as parameter to this function
function combine3<obj1 extends object, obj2 extends object>(obj1: obj1, obj2: obj2) : obj1 & obj2 {
    return {...obj1, ...obj2}
}

let result4 = combine3(obj1, obj2); 
// let result5 = combine3("raj", "ram"); // error

