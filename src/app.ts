import "reflect-metadata"
import "express-async-errors";
import  express, { Application, json } from "express";
import { handleErros } from "./middlewares/handleErrors.middleware";
import { routes } from "./routers/index.router";

export const app: Application = express();

app.use(json());

app.use("/", routes)

app.use(handleErros)

