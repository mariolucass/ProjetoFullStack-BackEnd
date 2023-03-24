import z from "zod";
import { Repository } from "typeorm";
import { Contact } from "./../../entities/contact.entity";
import * as schemas from "../../schemas";

export type IContactRequest = z.infer<typeof schemas.contactCreate>;

export type IContactReturn = z.infer<typeof schemas.contactReturn>;

export type IContactUpdate = z.infer<typeof schemas.contactUpdate>;

export type IContactArray = z.infer<typeof schemas.contactArray>;

export type IContact = Repository<Contact>;
