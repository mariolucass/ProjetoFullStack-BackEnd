import { Contact } from "../../entities";
import { IContact } from "./../../interface";
import { contactReturn } from "./../../schemas/";
import { contactRepository } from "../../utils/repositories";

export const listAllContacts = async (): Promise<Contact[]> => {
  const contacts = contactRepository.find();

  //   const returnContacts = await contactReturn.parse(contacts);

  return contacts;
};

// export const listContactsByCustomer = async (
//   customerId: string
// ): Promise<Contact[]> => {
//   const contacts = contactRepository.find({
//     where: { customer.id: customerId },
//     relations: {
//       customer: true,
//     },
//   });
//     const returnContacts = await contactReturn.parse(contacts);
//   return contacts;
// };
