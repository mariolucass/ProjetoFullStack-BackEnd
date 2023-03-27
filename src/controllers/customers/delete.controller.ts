import { Request, Response } from "express";
import * as services from "../../services";

export const deleteCustomerController = async (req: Request, res: Response) => {
  const data = req.params.id;
  await services.deleteCustomer(data);

  return res.status(204);
};
