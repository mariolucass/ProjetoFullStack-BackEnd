import { AppError } from "./../../errors/appError";
import { contactRepository } from "../../utils/repositories";

export const deleteContact = async (contactId: string): Promise<void> => {
  const contact = await contactRepository.findOneByOrFail({
    id: contactId,
  });

  if (!contact.isActive) {
    throw new AppError("Cannot delete this contact", 400);
  }

  const contactDeleted = contactRepository.create({
    ...contact,
    isActive: false,
  });

  await contactRepository.save(contactDeleted);
};
