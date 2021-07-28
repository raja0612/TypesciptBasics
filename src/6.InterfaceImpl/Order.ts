import { IOrder } from "./caluculateTotalAmount";

export class Order implements IOrder {
    calculateTotal(){
        return 100;
    }
}