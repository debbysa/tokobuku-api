import { Sequelize } from "sequelize";
import productModel from "./product.model";
import {
  ProductAttribute,
  ProductCreationAttributes,
  ProductInstance,
} from "./product.type";

export default class ProductService {
  getAllProduct() {
    return productModel.findAll({
      attributes: ["productName", "stock", "price"],
    });
  }

  getProductByProductName(productName: string) {
    return productModel.findAll({ where: { productName: productName } });
  }

  orderProduct(id_product: number) {
    return productModel.update(
      // @ts-ignore
      { stock: Sequelize.literal("stock -1") },
      { where: { id_product } }
    );
  }
}
