import { Request, Response } from "express";
import * as services from "../../services";

export const listAllCustomersController = async (
  req: Request,
  res: Response
) => {
  const info = await services.listAllCustomers();

  return res.status(200).json(info);
};

export const listCustomerController = async (req: Request, res: Response) => {
  const data = req.params.id;
  const info = await services.listCustomerById(data);

  return res.status(200).json(info);
};

export const listProfileController = async (req: Request, res: Response) => {
  const data = req.user.id;
  const info = await services.listCustomerById(data);

  return res.status(200).json(info);
};
