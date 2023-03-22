import { Contact } from "../../entities";
import { DeepPartial, Repository } from "typeorm";

export type IContactUpdate = DeepPartial<Contact>;
export type IContact = Repository<Contact>;

export interface IContactCreate {
  name: string;
  email: string;
  phone: string;
}
