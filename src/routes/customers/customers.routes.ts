import * as controllers from "../../controllers";
import * as middlewares from "../../middlewares";
import * as customersSchemas from "./../../schemas/customers/customers.schema";

import { Router } from "express";
export const customerRoutes = Router();

customerRoutes.get(
  "/",
  middlewares.verifyAuthPermissions,
  controllers.listAllCustomersController
);

customerRoutes.get(
  "/contacts",
  middlewares.verifyAuthPermissions,
  controllers.listContactsCustomerController
);

customerRoutes.get(
  "/profile",
  middlewares.verifyAuthPermissions,
  controllers.listProfileController
);

customerRoutes.get(
  "/:id",
  middlewares.verifyAuthPermissions,
  middlewares.verifyCustomerExists,
  controllers.listCustomerController
);

customerRoutes.patch(
  "/:id",
  middlewares.verifyCustomerExists,
  middlewares.verifyEmailCustomerNotExists,
  middlewares.verifyAuthPermissions,
  middlewares.validateSchemaMiddleware(customersSchemas.customerUpdateRequest),
  middlewares.verifyCustomerOwner,
  controllers.updateCustomerController
);

customerRoutes.delete(
  "/:id",
  middlewares.verifyAuthPermissions,
  middlewares.verifyCustomerExists,
  middlewares.verifyCustomerOwner,
  controllers.deleteCustomerController
);
