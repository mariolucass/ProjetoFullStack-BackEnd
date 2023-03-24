// import * as services from "../../services";
import { Request, Response } from "express";
import * as services from "../../services";

export const loginCustomerController = async (req: Request, res: Response) => {
  const data = req.body;
  const info = await services.loginCustomer(data);

  return res.status(200).json(info);
};

export const registerCustomerController = async (
  req: Request,
  res: Response
) => {
  const data = req.body;
  const info = await services.registerCustomer(data);

  return res.status(201).json(info);
};
