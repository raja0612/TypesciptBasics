import { IOrder } from "./caluculateTotalAmount";


export class ShoppingCart implements IOrder {
    calculateTotal() {
        return 100;
    }
}