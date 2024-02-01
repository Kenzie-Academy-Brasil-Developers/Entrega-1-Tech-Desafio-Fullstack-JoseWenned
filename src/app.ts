import  express, { Application, json } from "express";
import "express-async-errors";
import { handleErros } from "./middlewares/handleErrors.middleware";
import { routes } from "./routers/index.router";

export const app: Application = express();

app.use(json());

app.use("/", routes)

app.use(handleErros)

