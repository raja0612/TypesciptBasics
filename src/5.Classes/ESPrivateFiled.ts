class Siddu {
    #name: string; // #varible denotes ecma script private field

    constructor(name: string) {
        this.#name = name;
    }
    getName(){
        return `I am father of ${this.#name}`;
    }
}

class Raj extends Siddu {
    #name: string;

    constructor(name: string){
        super(name);
        this.#name = name;
    }

    getChildName() {
        return `I am son of ${this.#name}`;
    }

}

let raj = new Raj("Raj");
console.log('from parent',raj.getName());
console.log('from parent',raj.getChildName());