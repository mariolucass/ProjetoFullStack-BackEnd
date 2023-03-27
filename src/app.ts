import "express-async-errors";
import "reflect-metadata";
import cors from "cors";

import express from "express";
import * as routers from "./routes";
import { errorHandler } from "./errors/handleError";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", routers.sessionRoutes);

app.use("/contacts", routers.contactRoutes);
app.use("/customers", routers.customerRoutes);

app.use(errorHandler);

export default app;
