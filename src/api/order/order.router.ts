import { Router } from "express";
import OrderController from "./order.controller";

const orderRouter = Router();
const orderController = new OrderController();

const baseURL = "/order";

orderRouter.get(`${baseURL}/:id`, orderController.show);
orderRouter.post(`${baseURL}`, orderController.store);

export default orderRouter;
