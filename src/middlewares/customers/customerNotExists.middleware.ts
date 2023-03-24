import { AppError } from "../../errors/appError";
import { Request, Response, NextFunction } from "express";
import { customerRepository } from "../../utils/repositories";

export const verifyCustomerNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customer = await customerRepository.findOneBy({
    email: req.body.email,
  });

  if (customer) {
    throw new AppError("Customer already exists", 400);
  }

  return next();
};
