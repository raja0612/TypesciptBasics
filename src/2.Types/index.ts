//Boolean
let flag: boolean = true;

// Number
let num: number =  1 + 0b1 + 0o1 + 0x1;

//String

let hello: string = 'Hello';
let world: string = 'World';

let helloWorld = `
   ${hello}
   ${world}
`
//Null and undefined

let n: null = null;
let u: undefined = undefined;

function upperCaseFirstLetter(str: string){
    return str[0].toUpperCase()+ str.substr(1);
}

upperCaseFirstLetter("Hello");
//upperCaseFirstLetter(null);

type primitiveTypes = boolean | number | string | symbol | null | undefined;

const myObj1: Object = {};
const myObj2: Object = [];
const myOb3: Object = new Map();

//Array

let array1: string[] = ['x','y']

let array2: Array<string> = array1;

// Tuple, it represents an array with fixed number of elements
let tuple: [string, number] = ["Raj", 31];


//Enum is a way of giving more friendly names to set of values

// we need to set up a varible with set of choices

enum Color {
    Red,
    Green,
    Blue
}

console.log(Color.Red, Color.Green, Color.Blue)
console.log(Color[0])

enum Gender {
    Male = 'Male',
    Female ='Female',
}

type Pesron  = {
    name: string,
    gender: Gender
}

let person: Pesron = {
    name: 'Raj',
    gender: Gender.Male
}

//Any

let ANY: any;
ANY = 'a';
ANY = 2;

// Type Assertions (Type casting)

let a: string = "3"

let b: number = parseInt(a);

/*const email = document.getElementById('email');

 if(email) {

    email.addEventListener('change', e => {
        const input = e.currentTarget as HTMLInputElement;
        console.log(input.value);
    })

}*/