import { DataTypes } from "sequelize";
import sequelize from "../../utils/database";
import { ProductInstance } from "./product.type";

const productModel = sequelize.define<ProductInstance>(
  "product",
  {
    id_product: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false, tableName: "product" }
);

export default productModel;
