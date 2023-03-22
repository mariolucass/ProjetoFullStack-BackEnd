import { IContact } from "./../../interface";
import { contactReturn } from "./../../schemas/";
import { Contact, Customer } from "../../entities";
import { customerRepository } from "../../utils/repositories";

export const listAllCustomers = async (): Promise<Customer[]> => {
  const customers = customerRepository.find();

  //   const returnContacts = await contactReturn.parse(contacts);

  return customers;
};

export const listCustomerById = async (
  customerId: string
): Promise<Customer> => {
  const customer = await customerRepository.findOneByOrFail({ id: customerId });

  //   const returnContacts = await contactReturn.parse(contacts);

  return customer;
};
