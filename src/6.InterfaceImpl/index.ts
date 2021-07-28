import { calculateTotalAmount } from "./caluculateTotalAmount";
import { Order } from "./Order";
import { ShoppingCart } from "./ShoppingCart";


const cart = new ShoppingCart();

console.log(`The cart total is ${calculateTotalAmount(cart)}`);

const order = new Order();

console.log(`The order total is ${calculateTotalAmount(order)}`);