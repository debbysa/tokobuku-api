import HttpException from "../../utils/httpException";
import userModel from "./user.model";
import {
  UserAttributes,
  UserCreationAttributes,
  UserInstance,
} from "./user.type";
import userUtil from "./user.util";
import jwt from "jsonwebtoken";

export default class UserService {
  getAllUser() {
    return userModel.findAll();
  }

  getUserByEmail(email: string) {
    return userModel.findOne({ where: { email: email } });
  }

  createUser(user: UserCreationAttributes) {
    return new Promise<UserInstance>(async (resolve, reject) => {
      try {
        const existingUser = await this.getUserByEmail(user.email);
        if (existingUser) throw new HttpException(401, "email already exist");
        if (!existingUser) {
          const hash = await userUtil.hash(user.password);
          const userCreate = await userModel.create({
            email: user.email,
            password: hash,
          });
          resolve(userCreate);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  authenticateUser(user: UserCreationAttributes) {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const userLogin = await userModel.findOne({
          where: { email: user.email },
        });

        if (!userLogin) throw new HttpException(401, "email or password wrong");

        const isPasswordMatch = await userUtil.compare(
          user.password,
          userLogin.password
        );

        if (!isPasswordMatch)
          throw new HttpException(401, "username or password wrong");

        const token = jwt.sign(
          { email: user.email },
          process.env.JWTSECRET || ""
        );
        resolve(`token = ${token}`);
      } catch (error) {
        reject(error);
      }
    });
  }
}
