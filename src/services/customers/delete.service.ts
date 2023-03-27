import { AppError } from "./../../errors";
import { customerRepository } from "../../utils/repositories";

export const deleteCustomer = async (customerId: string): Promise<void> => {
  const customer = await customerRepository.findOneByOrFail({
    id: customerId,
  });

  if (!customer.isActive) {
    throw new AppError("Contact already inactive", 400);
  }
};
