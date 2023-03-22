import { z } from "zod";
import { customerReturn } from "./../customers/customers.schema";

export const contactReturn = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  created_at: z.string(),
  updated_at: z.string(),

  customer: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    phone: z.string(),
    created_at: z.string(),
    updated_at: z.string(),
  }),
});

export const contactCreate = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  password: z.string(),
});

export const contactUpdate = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  password: z.string(),
});
