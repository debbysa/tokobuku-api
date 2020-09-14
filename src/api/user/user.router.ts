import { Router } from "express";
import UserController from "./user.controller";

const userRouter = Router();
const userController = new UserController();

const baseURL = "/user";

userRouter.post(`${baseURL}`, userController.store);
userRouter.post(`${baseURL}/authenticate`, userController.authenticate);

export default userRouter;
