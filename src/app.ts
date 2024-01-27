import  express, { Application, json } from "express";
import { routes } from "./routers/routers";
import "express-async-errors";
import { handleErros } from "./middlewares/handleErrors.middleware";

export const app: Application = express();

app.use(json());

app.use("/", routes)

app.use(handleErros)

