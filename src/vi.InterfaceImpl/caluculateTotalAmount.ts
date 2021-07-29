
export interface IOrder {
  calculateTotal(): number
}

export function calculateTotalAmount(order: IOrder) {
    let total = order.calculateTotal();
    const discount = total * 0.1;
    const tax = total * 0.5;
    total = total - discount + tax;
    return total;
}