import { AppError } from "./../../errors";
import { IContactUpdate } from "./../../interface";
import { contactRepository } from "../../utils/repositories";
import { Contact } from "../../entities";

export const updateContact = async (
  contactId: string,
  data: IContactUpdate
): Promise<Contact> => {
  const contact = await contactRepository.findOneByOrFail({
    id: contactId,
  });

  const contactUpdated = contactRepository.create({
    ...contact,
    ...data,
  });

  await contactRepository.save(contactUpdated);

  return contact;

  //   const returnContacts = await contactReturn.parse(contacts);
};
