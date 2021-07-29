interface Animal {
    name: string;
    group: string | undefined;
    setGroup(gropu:string): void;
}

class Cat implements Animal {
    name: string;
    group: string | undefined;
    constructor(name: string) {
     this.name = name;
    }
    setGroup(group: string) {
        this.group = group;
    }
}


class Dog implements Animal {
    name: string;
    group: string | undefined;
    constructor(name: string) {
     this.name = name;
    }
    setGroup(group: string) {
        this.group = group;
    }

    bark(){

    }
}


interface AnimalConstructor<T> {
    new (name: string): T;
}


// T extends Animal constarint make sure T is the type of Animal
function initializeAnimal<T extends Animal>(Animal: AnimalConstructor<T>, name: string) {
    const animal = new Animal(name);
    animal.setGroup("Mammals");
    return animal;
}


let cat = initializeAnimal<Cat>(Cat, 'Ladveddar');
let dog = initializeAnimal<Dog>(Dog, 'Max');
dog.bark();