// Interfaces
interface A {
    someProp: number;
}

let aImpl: A = {
    someProp : 1
}

interface Profile {
    readonly name: string;
    age: number;
}

let profile: Profile = {
    name: "raj",
    age: 31
}

//profile.name = "Raja";

//Index signature allows us to create dynamic properties on object like js
const a1: any = {};
a1.x = 1;
a1.y = 2;

interface A2 {
    [key: string]: number;
}

const a2: A2 = {}
a2.x = 10;
a2.y = 20;

interface A3 {
    someProp: string; // this type must macth index type 
    [key: string]: number | string;
}

const a3: A3 = {
   someProp: "abc"
}

a3.x = 12;
a3.y = 14;

// call signature
// we also use interfaces to describe functions

interface Sum {
   (a: number, b: number): number;
    x: string;
}

let sum:Sum = (a, b) => a + b;
sum(1, 2);
sum.x = "abc";

// extending interfaces

interface Parent {
    x:string;
}

interface Parent2 {
    y: string;
}

interface Parent3 {
    z: string;
}

interface Child extends Parent, Parent2, Parent3 {} 


let child: Child = {
    x: "abc",
    y: "def",
    z: "ghi"
}

