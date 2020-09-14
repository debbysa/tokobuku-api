import { INTEGER } from "sequelize/types";
import { any } from "sequelize/types/lib/operators";
import orderModel from "./order.model";
import { OrderCreationAttributes, OrderInstance } from "./order.type";

export default class OrderService {
  getOrderByUser(id_user: string) {
    return orderModel.findAll({ where: { id_user: id_user } });
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
        const timer = (time: number) => {
          new Promise((resolve) => setTimeout(resolve, time));
        };
        const listStatus = [2, 3];
        const randomListStatus = Math.floor(Math.random() * (3 - 2)) + 2;
        await timer(30000);
        orderModel.update(
          {
            status: randomListStatus,
          },
          {
            where: {
              id_product: orderCreate.id_product,
            },
          }
        );
        resolve(orderCreate);
      } catch (error) {
        reject(error);
      }
    });
  }
}
