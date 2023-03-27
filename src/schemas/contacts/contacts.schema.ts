import { customerReturn } from "./../customers/customers.schema";
import { z } from "zod";

export const contactCreate = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

export const contactReturn = contactCreate.extend({
  id: z.string(),
  isActive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  customerId: z.string().optional(),
  customer: customerReturn.omit({ contacts: true, customerId: true }),
});

export const contactUpdateRequest = contactCreate.partial();
export const contactUpdate = contactCreate.partial().required();

export const contactArray = contactReturn.array();
export const contactArrayOmitCustomer = contactReturn
  .omit({ customer: true })
  .array();
