import { DataTypes } from "sequelize";
import { format } from "sequelize/types/lib/utils";
import sequelize from "../../utils/database";
import { UserStatic } from "./user.type";

const userModel = <UserStatic>sequelize.define(
  "user",
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
