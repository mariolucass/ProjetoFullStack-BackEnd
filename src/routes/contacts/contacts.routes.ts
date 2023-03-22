import { Router } from "express";

export const userRoutes = Router();

userRoutes.post("/");

userRoutes.get("/");

userRoutes.get("/:id");

userRoutes.patch("/:id");

userRoutes.delete("/:id");
