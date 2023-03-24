import { contactReturn } from "../../schemas";
import { contactRepository } from "../../utils/repositories";
import { IContactUpdate, IContactReturn } from "./../../interface";

export const updateContact = async (
  contactId: string,
  data: IContactUpdate
): Promise<IContactReturn> => {
  const contact = await contactRepository.findOne({
    relations: {
      customer: true,
    },
    where: {
      id: contactId,
    },
  });

  const contactUpdated = contactRepository.create({
    ...contact,
    ...data,
  });

  await contactRepository.save(contactUpdated);

  const returnContacts = contactReturn.parse(contactUpdated);

  return returnContacts;
};
