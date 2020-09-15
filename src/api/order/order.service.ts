import ProductService from "../product/product.service";
import orderModel from "./order.model";
import {
  OrderAttributes,
  OrderCreationAttributes,
  OrderInstance,
} from "./order.type";

const productService = new ProductService();

export default class OrderService {
  getOrderByUser(id_user: string) {
    return orderModel.findAll({ where: { id_user: id_user } });
  }

  getRandomizedStatus(): OrderAttributes["status"] {
    const arrayStatus: OrderAttributes["status"][] = ["success", "failed"];
    const randomNumber = Math.floor(Math.random() * arrayStatus.length);
    return arrayStatus[randomNumber];
  }

  finalizeOrderStatus(id: number) {
    return orderModel.update(
      { status: this.getRandomizedStatus() },
      { where: { id } }
    );
  }

  createOrder(order: OrderCreationAttributes) {
    return new Promise<OrderInstance>(async (resolve, reject) => {
      try {
        const orderCreate = await orderModel.create({
          id_user: order.id_user,
          id_product: order.id_product,
          quantity: order.quantity,
          price: order.price,
        });
        await productService.orderProduct(orderCreate.id_product);
        setTimeout(() => {
          this.finalizeOrderStatus(orderCreate.id);
        }, 30000);
        resolve(orderCreate);
      } catch (error) {
        reject(error);
      }
    });
  }
}
