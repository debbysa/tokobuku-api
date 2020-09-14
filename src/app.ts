import express, { Request, Response } from "express";
import cors from "cors";
import userRouter from "./api/user/user.router";
import verifyToken from "./middleware/verifyToken";
import productRouter from "./api/product/product.router";

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);

app.use(verifyToken);
app.get("/hello", (req: Request, res: Response) => {
  res.json({
    isSucces: true,
    message: "Hello, World!",
  });
});

app.use(productRouter);

export default app;
