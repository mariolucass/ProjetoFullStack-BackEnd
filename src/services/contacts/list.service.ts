import { contactRepository } from "../../utils/repositories";
import { IContactArray, IContactReturn } from "./../../interface";
import {
  contactArray,
  contactArrayOmitCustomer,
  contactReturn,
} from "./../../schemas";

export const listAllContacts = async (): Promise<IContactArray> => {
  const contacts = await contactRepository.find({
    relations: {
      customer: true,
    },
  });

  const returnContacts = contactArray.parse(contacts);

  return returnContacts;
};

export const listContactsByCustomer = async (
  customerId: string
): Promise<any> => {
  const contacts = await contactRepository.findBy({
    customer: {
      id: customerId,
    },
  });

  const returnContacts = contactArrayOmitCustomer.parse(contacts);

  return returnContacts;
};

export const listContactsById = async (
  contactId: string
): Promise<IContactReturn> => {
  const contact = await contactRepository.findOne({
    where: { id: contactId },
    relations: { customer: true },
  });

  const returnContacts = contactReturn.parse(contact);

  return returnContacts;
};
