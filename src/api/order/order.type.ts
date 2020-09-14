import { Model, Optional } from "sequelize";

export interface OrderAttributes {
  //   id_order: number;
  id_user: number;
  id_product: number;
  quantity: number;
  price: number;
  status: number;
}

export interface OrderCreationAttributes
  extends Optional<OrderAttributes, "status"> {}

export interface OrderInstance
  extends Model<OrderAttributes, OrderCreationAttributes>,
    OrderAttributes {}
