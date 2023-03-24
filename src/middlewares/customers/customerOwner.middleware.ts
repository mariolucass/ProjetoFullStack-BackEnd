import { AppError } from "../../errors/appError";
import { Request, Response, NextFunction } from "express";

export const verifyCustomerOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user.id == req.params.id) {
    return next();
  }

  throw new AppError("Missing permissions", 401);
};
