class A {
    public x: number; // default is public

    constructor(x: number){
        this.x = x;
    }
}

// public members accessed by anywhere outside of a lass

let aObj = new A(10);

console.log(aObj.x);

aObj.x = 20;

console.log(aObj.x);

// protected members accesssed in a class where it is defined and in sub classes but not outside of a class

class B {
    constructor(protected x: number){
        this.x = x; // no need to assign this. TS defaultly does that
    }

    getX() {
        console.log(this.x) 
    }
}


let bObj = new B(25);
console.log(bObj.x) // error  because protecetd members accessed inside a class 
                    //where it is defined and in sub classes
bObj.getX();

class C extends B {

    constructor(x: number){
        super(x);
    }
    getX(){
        console.log(this.x);
    }
}

let cObj = new C(35);
cObj.getX();

//readonly properties

class D {
    readonly x: number;

    constructor(x: number){
        this.x  = x;
        console.log(this.x);
    }

    modifyX(){
        this.x = 200; // error beacsue readonly propertirs only intialized in the constructor
        // we can't modify in other methods
    }
}

let dObj = new D(100);

//private members are accessd only inside a class where it is defined

class E {
    private x: number;

    constructor(x: number){
        this.x = x;
    }

    getPrivateX() {
        console.log(this.x);
    }
}

let eObj = new E(23);

eObj.getPrivateX();
eObj.x = 123; // error we can't access private members outside of a class



// setters and getters

class F {

     /*

     set nameOftheProperty(value: type) {
         this.memberVaribale = value;
     }
    
     the set method name and class member varible name must be different

      get nameOftheProperty() {
         return this.memberVaribale;
     }


     */
    constructor(private _x: number) {
         this._x = _x;
         console.log(this._x);
     }
    set x(value: number){
     this._x = value;
    }
    get x() {
        return this._x;
    }
}

let fObj = new F(90);
fObj.x = 43;
console.log(fObj.x);

// static members

class User {
    _username: string;

    constructor(){

    }

    static usernames = ["raj", "max", "jack"];

    static isUsernameAvailable(input: string) {
        return User.usernames.includes(input);
    }

    set username(input: string){
        if(User.isUsernameAvailable(input)){
            throw new Error(`sorry ${input} is not avilable`)
        }
        this._username = input;
    }
}

let user = new User();
user.username = "raj";

user.username = "Maxum";

console.log(user.username)


