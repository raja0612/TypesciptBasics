//generic functions

function genericFunction<T>(x: T): T {
    console.log(typeof x)
    let y: T;
    return x;
}

genericFunction(1);
genericFunction("raj");

//generic arrow function

const genericArrowFunc = <T>(x: T) => x;

//Generic Interfaces

interface GenericInterface<T> {
   (a: T): T;
    x: T;
}

interface GenericInterface<T>{
    <U>(a: U) : U;
    someProp: T;
}

//Generic classes
class GenericClass<P> {
    constructor(public props: P){
    }
    getProps(): P {
        return this.props;
    }

    static A : P; // error

    static someMethod(p: P){} // error
}

// generci types can be used with instance side not with static side.

interface Expirable {
    expiryDate: Date;
}
interface ChocolateCakes extends Expirable {
}

interface BananaCakes extends Expirable  {
}

let chocolateCakes: ChocolateCakes[] = [
    {expiryDate: new Date()}
];


let bananaCakes: BananaCakes[] = [
    {expiryDate: new Date()}
];

const getExpiredItems = <Item extends Expirable> (items: Array<Item>) => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate)
}

const expiredChocolateCakes = getExpiredItems(chocolateCakes);
const expiredBananaCakes = getExpiredItems(bananaCakes);

//Generic Tyepe fucntions.

interface GetExpiredItemsFunction {
    <Item extends Expirable>(items:Array<Item>): Array<Item>
}

const getExpiredItems2:GetExpiredItemsFunction = (items) => {
    const currentDate = new Date().getTime();
    return items.filter(item => item.expiryDate.getDate() < currentDate)
}

const expiredChocolateCakes2 = getExpiredItems<ChocolateCakes>(chocolateCakes);
const expiredBananaCakes2 = getExpiredItems<BananaCakes>(bananaCakes);

// Generic Inteerface

interface ShoppingCart<ItemId, Item> {
    items: Array<Item>
    addItem(this:ShoppingCart<ItemId, Item>,item: Item): void;
    getItemById(this:ShoppingCart<ItemId, Item>, id: ItemId): Item | void;
}

interface Item {
    id: number;
    pricee: number;
}

const cart: ShoppingCart<number, Item> = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find(item => item.id === id);
    }

} 




