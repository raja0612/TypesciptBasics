
//to import named exports we use {}

import TS, {multiply, multiplyByTwo} from "./i.Modules/multiply";

//to import all exports
import * as multiplyModule from './i.Modules/multiply';


// alias for named exports
import  { multiplyByTwo as mulBy2 } from "./i.Modules/multiply";

//import ts interface
import  { HelloWorld }  from "./i.Modules/multiply";

const a = 4;
const b = 3;

console.log(`${a} * ${b} = ${multiply(a, b)}`);

console.log(`${a} * 2 = ${multiplyByTwo(a)}`);

console.log(TS())

console.log(`Default export ${multiplyModule.default()}`);
console.log(`5 * 3= ${multiplyModule.multiply(5, 3)}`);
console.log(`14 * 2 = ${multiplyModule.multiplyByTwo(14)}`);


console.log(mulBy2(100))