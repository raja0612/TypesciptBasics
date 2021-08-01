/*

Some type  +  Utility Type(Transformation) = New Type

*/

interface Person {
    name: string;
    age: number;
}

// Partial - will make interface properties to optional

//Partial<T>

let partialPerson: Partial<Person> = {
    name: 'Raj'
}

//Required<T> - make given interface propties to mandatory

interface Vote {
    age?: number;
}

let voteRequiered: Required<Vote>  = {
     age: 18
}

// Readonly<T> - make given interface properites to read only

interface MyUser {
    username: string;
}

let readOnlyUser: Readonly<MyUser> = {
    username: 'raj'
}

readOnlyUser.username = 'Raja' // error because we can't update value again after initialization

// Record<Key, String> it is used to descripr map type of data structure in Typescript

const aRecord: Record<string, number> = {
    apples: 10,
    oranges: 20
}

const digitsRecord: Record<number, string> = {
    1: "One",
    2: "Two"
}

interface Person1 {
    name: string;
    age: number;
}

const personRecord: Record<string, Person1> = {
    "raj": {
        name: "Raj",
        age: 31
    },
    "srujan": {
        name: "srujan",
        age: 31
    }

}

console.log(personRecord.raj);

//Pick<T, K> - it is used to pick the specified properties from given interface

interface Z {
    x: number;
    y: number;
    z: number;
}

let pickXY: Pick<Z, "x"|"z">= {
    x: 1,
    z: 3
}

interface Comapnies {
    facebook: string
    amazon: string;
    netflix: string;
    google: string;
}

type facebookOnly = Pick<Comapnies, 'facebook'>;

const fb:facebookOnly = {
  facebook: "get it"
}


// Omit<T, K> . it is opposite to Pick, it will omit the specified properties from giiven interface
interface Society {
    cars: string[];
    mansions: string[];
    money: number;
    dogs: string[];
    coffee: string[];
    job: string;
    familyandfriends: string[];
}

type Happiness = Omit<Society, 'cars'| 'mansions' | 'money'>;

const realHappiness:Happiness = {
    dogs: ['max', 'remo', 'Hachi'],
    coffee: ['dark roast','decaf'],
    familyandfriends: ['family', 'friends'],
    job: 'That"s all you need'

}

//Exclude<T, U> -- subtract one union type 'U' from other type 'T'

type unionTypeWithUndefined  = string | string[] | undefined;

type unionTypeWithOutUndefined = Exclude<unionTypeWithUndefined, undefined>;

type MovieGenres = 'action' | 'comedy' | 'thriller' | 'sci-fi';

type FavoriteGeneres = 'comedy' | 'sci-fi';

type NonfavoriteGeneres = Exclude<MovieGenres, FavoriteGeneres>

const nonfavoriteGeneres: NonfavoriteGeneres = "action" || "thriller";

//Extract <T, U> -- it is opposite it to Exclude, it includes union of  T & U

type drinks = 'tea' | 'coffee' | 'orange juice' | 'beer' | 'whiskey' | 'wine';

type childrenDrinks =  'tea' | 'orange juice' | 'milk';

type adultDrinks = Exclude<drinks, childrenDrinks>;

type commonDrinks = Extract<drinks, childrenDrinks>

//NonNullable<T> it creates new typeby removing null and undefined

type NullableType = string | string[] | null | undefined;

type NonNullableTypee =  NonNullable<NullableType>;

interface PaintColors {
    color?: 'red' | 'green' | 'blue';
}


function paint(color: PaintColors) {
    console.log(color);
}

paint(undefined);

function paint2(color: NonNullable<PaintColors['color']>) {
    console.log(color);
}

//inorder to check null error here we need to enable true on strictNullChecks: true in tsconfig.json
paint2(undefined);


//ReturnType<T> - T is typeof function

function myFn() {
   return "Hello World";
}

type myFnReturnType = ReturnType<typeof myFn>; // string

function myPerson(){
    return {
        name: 'Raj',
        agee: 31
    }
}

type myPersonType = ReturnType<typeof myPerson>;

//InstanceType<T> -  T is typeof function


class Car {
    name: string;

    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log(`${this.name} is driving`);
    }

    static buildCar() {
        //instantiate caree with some  featurees
    }
}

type CarInstanceType = InstanceType<typeof Car>; // Car

//ThisType<T>






