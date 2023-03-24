import z from "zod";
import * as schemas from "../../schemas";

export type ICustomerLogin = z.infer<typeof schemas.customerLogin>;
