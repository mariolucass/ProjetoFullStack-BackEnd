import { z } from "zod";

export const contactInCustomer = z
  .object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
  })
  .array();

export const customerCreate = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  password: z.string(),
});

export const customerReturn = customerCreate
  .extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    isActive: z.boolean(),
    contacts: contactInCustomer.optional(),
  })
  .omit({ password: true });

export const customerUpdateRequest = customerCreate.partial();
export const customerUpdate = customerCreate.partial().required();
export const customerArray = customerReturn.array();
