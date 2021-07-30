/*

Typescript merges multiple declartion with same name into single declaration

interface1 + interface2 = Merged Interface
Namespace1 + Namespace2 = Merged Namespace
Modules are augmented(modified)
*/



// lets assume this interface is declared somewhere in third party library that we can't touch

//////
interface Cart {
    calcualteTotal(): number;
}
//////

// lets create our own interfaces with same name
interface Cart {
    x: number;
}

interface Cart {
    calcualteTotal(options: {discountCode: number}): number; // overide third party method
}


let myCart: Cart = {
    x: 100,
    calcualteTotal(options?: {discountCode: number}) {

        if(options && options.discountCode) {
            // apply discount
        }
        return this.x;
    }
}

// here type script merge all three interfaces into one 


// the below is third party name space that we canpt touch
///////

namespace MyNameSpace {
    export const x: number = 10;
    export interface SomeInterface {
        y: number
    }
}

/////

// so we cretaed namespace with same name with our own details

namespace MyNameSpace {
    export const getX = () => x;
    export interface SomeInterface {
        x: number;
    }
}

MyNameSpace.x; // original third party x
MyNameSpace.getX(); // our added method

const someInterface: MyNameSpace.SomeInterface = {
    x: 1, // third party proprty
    y: 2 // our own property
}


function someFn() {
    return 10;
}

// add some property to namespace someFn

namespace someFn {
    export const x = 20;
}

someFn.x;

enum Vegetables {
    Tomato = 'Tomato',
    Onion = 'Onion'
}

namespace Vegetables {
    export function makeSalad() {
        return Vegetables.Tomato + Vegetables.Onion;
    }
}


const salad = Vegetables.makeSalad();

// namespace is used to add additional info to third party packages.


// module augment

import * as React from 'react';

declare module 'react' {
    interface Component {
        helloWorld(): string;
    }
}


// inorder to get rid of below errro remove react.d.ts file 
// because that is not orignal recat type definition file
React.Component.prototype.helloWorld = function(){
   return "Hello World";
}

class MyComponent  extends React.Component {
    render() {
        return <div>{this.helloWorld()}</div>
    }
}

import { renderToString } from 'react-dom';

console.log(renderToString(<MyComponent />))

/*

namespace is used to add additional properties to third party libraries.
augmented modules are also for same use. 


*/


