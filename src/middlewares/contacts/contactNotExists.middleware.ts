import { AppError } from "../../errors/appError";
import { contactRepository } from "../../utils/repositories";
import { Request, Response, NextFunction } from "express";

export const verifyContactNotExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contact = await contactRepository.findOneBy({
    email: req.body.email,
  });

  if (contact) {
    throw new AppError("Contact already exists", 400);
  }

  return next();
};
