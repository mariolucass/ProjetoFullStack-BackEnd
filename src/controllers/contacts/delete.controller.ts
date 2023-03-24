import { Request, Response } from "express";
import * as services from "../../services";

export const deleteContactController = async (req: Request, res: Response) => {
  const data = req.params.id;
  await services.deleteContact(data);

  return res.status(204).json({});
};
