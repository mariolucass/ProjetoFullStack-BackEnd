import { contactReturn } from "../contacts/contacts.schema";
import { z } from "zod";

export const customerReturn = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  created_at: z.string(),
  updated_at: z.string(),

  contacts: z
    .object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
      phone: z.string(),
      created_at: z.string(),
      updated_at: z.string(),
    })
    .array(),
});

export const customerCreate = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  password: z.string(),
});

export const customerUpdate = z.object({
  name: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  password: z.string().optional(),
});
