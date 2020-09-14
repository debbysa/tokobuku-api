import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import UserService from "../api/user/user.service";
import UserRequest from "../api/user/userRequest.type";
import HttpException from "../utils/httpException";

const userService = new UserService();
const verifyToken = (req: UserRequest, res: Response, next: NextFunction) => {
  const JWTSECRET = process.env.JWTSECRET || "";
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) throw new HttpException(403, "token not found");

  jwt.verify(token, JWTSECRET, async (err, payload) => {
    if (err) throw new HttpException(403, err.message);
    if (!payload) throw new HttpException(403, "payload not found");

    const { email } = payload as { email: string };
    const user = await userService.getUserByEmail(email);
    if (!user) throw new HttpException(403, "no user found");
    req.user = user;

    next();
  });
};

export default verifyToken;
