import { Model, Optional } from "sequelize";

export interface ProductAttribute {
  id_product: number;
  productName: string;
  stock: number;
  price: number;
}

export interface ProductCreationAttributes
  extends Optional<ProductAttribute, "id_product"> {}

export interface ProductInstance
  extends Model<ProductAttribute, ProductCreationAttributes>,
    ProductAttribute {}
