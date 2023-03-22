import { Customer } from "../../entities";
import { customerReturn } from "./../../schemas";
import { customerRepository } from "../../utils/repositories";
import { ICustomerCreate, ICustomer } from "./../../interface";

export const createCustomer = async (
  data: ICustomerCreate
): Promise<Customer> => {
  const customer = customerRepository.create(data);

  await customerRepository.save(customer);

  //   const returnCustomer = await customerReturn.parse(customer);

  return customer;
};
