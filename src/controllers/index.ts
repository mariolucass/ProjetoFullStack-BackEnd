export {
  loginCustomerController,
  registerCustomerController,
} from "./session/session.controller";

export {
  listAllContactsController,
  listContactsCustomerController,
  listContactsByIdController,
} from "./contacts/list.controller";
export { createContactController } from "./contacts/create.controller";
export { updateContactController } from "./contacts/update.controller";
export { deleteContactController } from "./contacts/delete.controller";

export {
  listAllCustomersController,
  listCustomerController,
} from "./customers/list.controller";
export { updateCustomerController } from "./customers/update.controller";
export { deleteCustomerController } from "./customers/delete.controller";
