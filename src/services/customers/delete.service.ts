import { AppError } from "./../../errors";
import { contactRepository } from "../../utils/repositories";

export const deleteCustomer = async (customerId: string): Promise<void> => {
  const contact = await contactRepository.findOneByOrFail({
    id: customerId,
  });

  if (!contact.isActive) {
    throw new AppError("Contact already inactive", 400);
  }

  //   const returnContacts = await contactReturn.parse(contacts);
};
