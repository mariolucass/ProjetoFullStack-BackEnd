import { Request, Response } from "express";

export const listAllContactsController = async (
  req: Request,
  res: Response
) => {
  const info = "";

  return res.status(200).json(info);
};

export const listContactsController = async (req: Request, res: Response) => {
  const customerId = req.user.id;
  const info = "";

  return res.status(200).json(info);
};
