import { Request, Response } from "express";
import * as services from "../../services";

export const createContactController = async (req: Request, res: Response) => {
  const data = [req.user.id, req.body];

  const info = await services.createContact(data[0], data[1]);

  return res.status(201).json(info);
};
