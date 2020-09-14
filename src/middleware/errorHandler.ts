import { Response } from "express";
import httpException from "../utils/httpException";

const errorHandler = (err: httpException, res: Response) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

export default errorHandler;
