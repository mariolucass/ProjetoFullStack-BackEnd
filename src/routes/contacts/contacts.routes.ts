import * as controllers from "../../controllers";
import * as middlewares from "./../../middlewares";
import * as contactsSchemas from "./../../schemas/contacts/contacts.schema";

import { Router } from "express";
export const contactRoutes = Router();

contactRoutes.post(
  "/",
  middlewares.verifyAuthPermissions,
  middlewares.verifyEmailContactNotExists,
  middlewares.validateSchemaMiddleware(contactsSchemas.contactCreate),
  controllers.createContactController
);

contactRoutes.get(
  "/",
  middlewares.verifyAuthPermissions,
  controllers.listAllContactsController
);

contactRoutes.get(
  "/:id",
  middlewares.verifyAuthPermissions,
  middlewares.verifyContactOwner,
  middlewares.verifyContactExists,
  controllers.listContactsByIdController
);

contactRoutes.patch(
  "/:id",
  middlewares.verifyContactExists,
  middlewares.verifyEmailContactNotExists,
  middlewares.verifyAuthPermissions,
  middlewares.validateSchemaMiddleware(contactsSchemas.contactUpdateRequest),
  middlewares.verifyContactOwner,
  controllers.updateContactController
);

contactRoutes.delete(
  "/:id",
  middlewares.verifyAuthPermissions,
  middlewares.verifyContactExists,
  middlewares.verifyContactOwner,
  controllers.deleteContactController
);
