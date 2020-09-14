import productModel from "./product.model";
import { ProductCreationAttributes, ProductInstance } from "./product.type";

export default class ProductService {
  getAllProduct() {
    return productModel.findAll({
      attributes: ["productName", "stock", "price"],
    });
  }
}
