import { AppError } from "../../errors/appError";
import { contactRepository } from "../../utils/repositories";
import { Request, Response, NextFunction } from "express";

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
