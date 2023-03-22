import { Customer } from "../../entities";
import { DeepPartial, Repository } from "typeorm";

export type ICustomerUpdate = DeepPartial<Customer>;
export type ICustomer = Repository<Customer>;

export interface ICustomerCreate {
  name: string;
  email: string;
  phone: string;
  password: string;
}
