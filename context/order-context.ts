import IOrderPresentationStrategy from "../interface/order-presentation-strategy";

export default class OrderContext {
  private readonly items: string[];
  private readonly quantities: number[];
  private readonly prices: number[];
  private presentationStrategy: IOrderPresentationStrategy;
  constructor(presentationStrategy: IOrderPresentationStrategy) {
    this.items = [];
    this.quantities = [];
    this.prices = [];
    this.presentationStrategy = presentationStrategy;
  }
  addItem(item: string, quantity: number, price: number): void {
    this.items.push(item);
    this.quantities.push(quantity);
    this.prices.push(price);
  }
  processOrder():void {
    console.log("Procesando el pedido...");
    // Aquí iria lógica de negocio para procesar el pedido
  }
  completeOrder(): void {
    this.processOrder(); // Procesar la lógica de negocio
    this.presentationStrategy.presentOrder(this.items, this.quantities, this.prices);
  }
  setPresentationStrategy(presentationStrategy: IOrderPresentationStrategy): void {
    this.presentationStrategy = presentationStrategy;
  }

}