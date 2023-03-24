import { contactRepository } from "../../utils/repositories";
import { IContactUpdate, IContactReturn } from "./../../interface";

export const updateContact = async (
  contactId: string,
  data: IContactUpdate
): Promise<IContactReturn> => {
  const contact = await contactRepository.findOneByOrFail({
    id: contactId,
  });

  const contactUpdated = contactRepository.create({
    ...data,
    ...contact,
  });

  await contactRepository.save(contactUpdated);

  return contact;

  //   const returnContacts = await contactReturn.parse(contacts);
};
