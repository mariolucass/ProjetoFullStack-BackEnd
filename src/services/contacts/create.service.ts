import { contactReturn } from "./../../schemas/";
import { contactRepository } from "../../utils/repositories";
import { IContactCreate, IContact } from "./../../interface";
import { Contact } from "../../entities";

export const createContact = async (data: IContactCreate): Promise<Contact> => {
  const contact = contactRepository.create(data);

  await contactRepository.save(contact);

  //   const returnContact = await contactReturn.parse(contact);

  return contact;
};
