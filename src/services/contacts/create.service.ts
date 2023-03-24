import { customerRepository } from "./../../utils/repositories/index";
import { contactReturn } from "./../../schemas";
import { contactRepository } from "../../utils/repositories";
import { IContactRequest, IContactReturn } from "./../../interface";

export const createContact = async (
  customerId: string,
  data: IContactRequest
): Promise<IContactReturn> => {
  const customer = await customerRepository.findOneByOrFail({ id: customerId });

  const contact = contactRepository.create({
    ...data,
    customer: customer,
  });

  await contactRepository.save(contact);

  const returnContact = contactReturn.parse(contact);

  return returnContact;
};
