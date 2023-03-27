import { Request, Response } from "express";
import * as services from "../../services";

export const updateCustomerController = async (req: Request, res: Response) => {
  const data = [req.params.id, req.body];
  const info = await services.updateCustomer(data[0], data[1]);

  return res.status(200).json(info);
};
