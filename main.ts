import OrderContext from "./context/order-context";
import ConsoleOrderPresentationStrategy from "./strategies/console-order-presentation-strategy";

let presentationStrategy: ConsoleOrderPresentationStrategy = new ConsoleOrderPresentationStrategy();

let order:OrderContext = new OrderContext(presentationStrategy);


// Añadir items y completar la orden
order.addItem('Producto1', 2,9.99);
order.completeOrder();