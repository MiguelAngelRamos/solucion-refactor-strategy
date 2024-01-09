export default interface IOrderPresentationStrategy {
  presentOrder(items: string[], quantities: number[], prices: number[]):void;
}