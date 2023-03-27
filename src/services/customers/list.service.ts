import { customerRepository } from "../../utils/repositories";
import { customerReturn, customerArray } from "./../../schemas";
import { ICustomerArray, ICustomerReturn } from "./../../interface";

export const listAllCustomers = async (): Promise<ICustomerArray> => {
  const customers = await customerRepository.find();

  const returnCustomers = customerArray.parse(customers);

  return returnCustomers;
};

export const listCustomerById = async (
  customerId: string
): Promise<ICustomerReturn> => {
  const customer = await customerRepository.findOneByOrFail({ id: customerId });

  const returnCustomer = customerReturn.parse(customer);

  return returnCustomer;
};
