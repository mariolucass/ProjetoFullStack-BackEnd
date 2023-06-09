import "dotenv/config";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors";
import { Request, Response, NextFunction } from "express";

export const verifyAuthPermissions = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let authorization = req.headers.authorization;

  if (!authorization) {
    throw new AppError("Not authorized", 401);
  }

  authorization = authorization.split(" ")[1];

  jwt.verify(authorization, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 400);
    }
    req.user = {
      id: decoded.sub,
      isActive: decoded.isActive,
    };
  });
  return next();
};
