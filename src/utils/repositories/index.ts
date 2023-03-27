import { AppDataSource } from "../../data-source";
import { Contact, Customer } from "../../entities";

export const contactRepository = AppDataSource.getRepository(Contact);
export const customerRepository = AppDataSource.getRepository(Customer);
