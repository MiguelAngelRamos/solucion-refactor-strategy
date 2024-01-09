import IOrderPresentationStrategy from "../interface/order-presentation-strategy";

export default class ConsoleOrderPresentationStrategy  implements IOrderPresentationStrategy{
  presentOrder(items: string[], quantities: number[], prices: number[]): void {
    console.log("Detalles del Pedido:");
    for(let i=0; i< items.length; i++) {
      console.log(`${items[i]}: ${quantities[i]} x ${prices[i]}`);
    }
  }

}