import "dotenv/config";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { AppError } from "../../errors/appError";
import { ICustomerLogin } from "./../../interface";
import { customerRepository } from "./../../utils/repositories/index";

export const loginCustomer = async (
  data: ICustomerLogin
): Promise<{ token: string }> => {
  const customer = await customerRepository.findOneBy({
    email: data.email,
  });

  if (!customer) {
    throw new AppError("User or password invalid", 403);
  }

  const passwordMatch = await compare(data.password, customer.password);
  if (!passwordMatch) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign(
    { isActive: customer.isActive },
    process.env.SECRET_KEY!,
    { subject: customer.id, expiresIn: "24h" }
  );

  return { token: token };
};
