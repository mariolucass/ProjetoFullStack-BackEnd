import { AppError } from "../../errors/appError";
import { Request, Response, NextFunction } from "express";
import { contactRepository } from "../../utils/repositories";

export const verifyContactOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contact = await contactRepository.findOne({
    where: {
      id: req.params.id,
    },
    relations: {
      customer: true,
    },
  });

  if (!contact) {
    throw new AppError("Contact not found", 404);
  }

  if (req.user.id === contact.customer.id) {
    return next();
  }

  throw new AppError("Missing permissions", 401);
};
