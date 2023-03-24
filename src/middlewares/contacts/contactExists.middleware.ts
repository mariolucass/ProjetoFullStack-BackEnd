import { AppError } from "../../errors/appError";
import { Request, Response, NextFunction } from "express";
import { contactRepository } from "../../utils/repositories";

export const verifyContactExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contact = await contactRepository.findOneBy({
    id: req.params.id,
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  return next();
};
