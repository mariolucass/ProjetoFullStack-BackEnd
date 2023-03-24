import { AppError } from "../../errors/appError";
import { Request, Response, NextFunction } from "express";
import { contactRepository } from "../../utils/repositories";

export const verifyEmailContactNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.email) {
    return next();
  }

  const contact = await contactRepository.findOneBy({
    email: req.body.email,
  });

  if (contact) {
    throw new AppError("Contact already exists", 400);
  }

  return next();
};
