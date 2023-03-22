import { Customer } from "../../entities";
import { AppError } from "./../../errors";
import { ICustomerUpdate } from "./../../interface";
import { customerRepository } from "../../utils/repositories";

export const updateCustomer = async (
  customerId: string,
  data: ICustomerUpdate
): Promise<Customer> => {
  const customer = await customerRepository.findOneByOrFail({
    id: customerId,
  });

  const customerUpdated = customerRepository.create({
    ...customer,
    ...data,
  });

  await customerRepository.save(customerUpdated);

  return customer;

  //   const returnContacts = await contactReturn.parse(contacts);
};
