// union type is a type that conatins more than one type
// a value which can be one of several types

function someFn(arg: string |  number) {

    if(typeof arg === 'string') {
        arg.toUpperCase();
    } else {
        arg.toFixed(4)
    }

}


interface Dog {
    bark(): void;
    walk(): void;
}

interface Cat {
    meow(): void;
    walk(): void;
}



function callMyPet(pet: Dog  | Cat) {
    pet.walk();


    if((<Dog>pet).bark) {
        (<Dog>pet).bark();

    } else {
        (<Cat>pet).meow();
    }
}

function isDog(someObj: Dog | Cat): someObj is Dog {
    return (<Dog>someObj).bark !== undefined
}

function callMyPet2(pet: Dog  | Cat) {
    if(isDog(pet)){
        pet.bark();
    } else {
        pet.meow();
    }
}

class Foo {
    foo: number;
    commonProp: string;
}

class Bar {
    bar: number;
    commonProp: string;
}

function foobarFunction(obj: Foo | Bar){
    if(obj instanceof Foo) {
        console.log(obj.foo);
    } else {
        console.log(obj.bar);
    }
}



interface Sailboat {
    sailsCount: number;
    setSail(): boolean;
}
 
interface Car {
    wheelsCount: number;
    startEngine(): boolean;
}
 
function isBoat(vehicle: Sailboat | Car): vehicle is Sailboat {
    //return (<Sailboat>vehicle).sailsCount !== undefined;
    return (vehicle as Sailboat).sailsCount !== undefined;
}
 
function goSomewhere(vehicle: Sailboat | Car) {
    if (isBoat(vehicle)) {
        vehicle.setSail();
    } else {
        vehicle.startEngine();
    }
}