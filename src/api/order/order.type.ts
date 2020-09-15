import { Model, Optional } from "sequelize";

export interface OrderAttributes {
  id: number;
  id_user: number;
  id_product: number;
  quantity: number;
  price: number;
  status: "pending" | "success" | "failed";
}

export interface OrderCreationAttributes
  extends Optional<OrderAttributes, "status" | "id"> {}

export interface OrderInstance
  extends Model<OrderAttributes, OrderCreationAttributes>,
    OrderAttributes {}
