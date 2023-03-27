import z from "zod";
import { Customer } from "../../entities";
import { Repository } from "typeorm";
import * as schemas from "../../schemas";

export type ICustomerRequest = z.infer<typeof schemas.customerCreate>;

export type ICustomerReturn = z.infer<typeof schemas.customerReturn>;

export type ICustomerUpdate = z.infer<typeof schemas.customerUpdate>;

export type ICustomerArray = z.infer<typeof schemas.customerArray>;

export type ICustomer = Repository<Customer>;
