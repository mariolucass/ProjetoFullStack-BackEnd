import { Request, Response } from "express";
import * as services from "../../services";

export const listAllContactsController = async (
  req: Request,
  res: Response
) => {
  const info = await services.listAllContacts();

  return res.status(200).json(info);
};

export const listContactsByIdController = async (
  req: Request,
  res: Response
) => {
  const data = req.params.id;
  const info = await services.listContactsById(data);

  return res.status(200).json(info);
};

export const listContactsCustomerController = async (
  req: Request,
  res: Response
) => {
  const data = req.user.id;
  const info = await services.listContactsByCustomer(data);

  return res.status(200).json(info);
};
