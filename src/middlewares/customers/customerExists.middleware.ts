import { AppError } from "../../errors/appError";
import { Request, Response, NextFunction } from "express";
import { customerRepository } from "../../utils/repositories";

export const verifyCustomerExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const customer = await customerRepository.findOneBy({
    id: req.params.id,
  });

  if (!customer) {
    throw new AppError("Customer not found", 404);
  }

  return next();
};
