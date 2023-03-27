import * as controllers from "../../controllers";
import * as middlewares from "../../middlewares";
import * as customersSchemas from "./../../schemas/customers/customers.schema";

import { Router } from "express";
export const sessionRoutes = Router();

sessionRoutes.post("/login", controllers.loginCustomerController);

sessionRoutes.post(
  "/register",
  middlewares.validateSchemaMiddleware(customersSchemas.customerCreate),
  middlewares.verifyEmailCustomerNotExists,
  controllers.registerCustomerController
);
