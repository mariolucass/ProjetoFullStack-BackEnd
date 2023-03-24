import { ZodError } from "zod";
import { AppError } from "./appError";
import { Request, Response, NextFunction } from "express";

export const errorHandler = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    console.log(error);
    return res.status(400).json({ message: error.flatten().fieldErrors });
  }

  console.log(error);

  return res.status(500).json({
    message: "Internal server error",
  });
};
