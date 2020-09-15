import { NextFunction, Request, Response } from "express";
import HttpException from "../../utils/httpException";
import ProductService from "./product.service";
const productService = new ProductService();

export default class ProductController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await productService.getAllProduct();
      res.send(result);
    } catch (error) {
      next(new HttpException(error.statusCode || 500, error.message));
    }
  }

  async search(req: Request, res: Response, next: NextFunction) {
    try {
      const productName = req.query.productName?.toString();
      if (!productName) throw new HttpException(403, "product name not found");
      const result = await productService.getProductByProductName(productName);
      res.send(result);
    } catch (error) {}
  }
}
