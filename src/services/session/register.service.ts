import { customerReturn } from "../../schemas";
import { customerRepository } from "../../utils/repositories";
import { ICustomerRequest, ICustomerReturn } from "./../../interface";

export const registerCustomer = async (
  data: ICustomerRequest
): Promise<ICustomerReturn> => {
  const customer = customerRepository.create(data);

  await customerRepository.save(customer);

  const returnCustomer = customerReturn.parse(customer);

  return returnCustomer;
};
