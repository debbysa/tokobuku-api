import { DataTypes } from "sequelize";
import sequelize from "../../utils/database";
import productModel from "../product/product.model";
import userModel from "../user/user.model";
import { OrderInstance } from "./order.type";

const orderModel = sequelize.define<OrderInstance>(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.STRING,
    },
    id_product: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM("pending", "success", "failed"),
      defaultValue: "pending",
    },
  },
  { timestamps: false, tableName: "order" }
);

orderModel.belongsTo(userModel, { foreignKey: "id_user" });
orderModel.belongsTo(productModel, { foreignKey: "id_product" });
export default orderModel;
