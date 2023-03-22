import { AppError } from "../../errors/appError";
import { customerRepository } from "../../utils/repositories";
import { Request, Response, NextFunction } from "express";

export const verifyCustomerNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customer = await customerRepository.findOneBy({
    email: req.body.email,
  });

  if (customer) {
    throw new AppError("Contact already exists", 400);
  }

  return next();
};
