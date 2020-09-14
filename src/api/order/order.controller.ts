import { NextFunction, Request, Response } from "express";
import HttpException from "../../utils/httpException";
import UserRequest from "../user/userRequest.type";
import OrderService from "./order.service";
const orderService = new OrderService();

export default class OrderController {
  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const id_user = req.params.id;
      const result = await orderService.getOrderByUser(id_user);
      res.send(result);
    } catch (error) {
      next(new HttpException(error.statusCode || 500, error.message));
    }
  }
  async store(req: UserRequest, res: Response, next: NextFunction) {
    try {
      const id_user = req.user.id_user;
      console.log(id_user);
      const { id_product, quantity, price } = req.body;
      const order = await orderService.createOrder({
        id_user,
        id_product,
        quantity,
        price,
      });
      res.send(order);
    } catch (error) {
      next(new HttpException(error.statusCode || 500, error.message));
    }
  }
}
