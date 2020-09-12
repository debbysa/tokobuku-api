import { BuildOptions, Model } from "sequelize/types";

export interface User {
  email: string;
  password: string;
}
export type UserStatic = typeof Model & {
  new: (values?: object, option?: BuildOptions) => User;
};
