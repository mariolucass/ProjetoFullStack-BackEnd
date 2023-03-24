import { customerReturn } from "./../../schemas";
import { customerRepository } from "../../utils/repositories";
import { ICustomerUpdate, ICustomerReturn } from "./../../interface";

export const updateCustomer = async (
  customerId: string,
  data: ICustomerUpdate
): Promise<ICustomerReturn> => {
  const customer = await customerRepository.findOneByOrFail({
    id: customerId,
  });

  const customerUpdated = customerRepository.create({
    ...customer,
    ...data,
  });

  await customerRepository.save(customerUpdated);

  const returnCustomer = customerReturn.parse(customerUpdated);

  return returnCustomer;
};
