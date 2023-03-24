import { z } from "zod";

export const customerLogin = z.object({
  email: z.string().email(),
  password: z.string(),
});
