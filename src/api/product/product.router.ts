import { Router } from "express";
import ProductController from "./product.controller";

const productRouter = Router();
const productController = new ProductController();

const baseURL = "/product";

productRouter.get(`${baseURL}`, productController.index);
productRouter.get(`${baseURL}/search`, productController.search);

export default productRouter;
