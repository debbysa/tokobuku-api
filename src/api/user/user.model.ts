import { DataTypes } from "sequelize";
import sequelize from "../../utils/database";
import { UserInstance } from "./user.type";

const userModel = sequelize.define<UserInstance>(
  "user",
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false, tableName: "user" }
);

export default userModel;
