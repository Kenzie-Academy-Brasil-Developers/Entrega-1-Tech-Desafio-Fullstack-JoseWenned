import "reflect-metadata"
import "express-async-errors";
import swaggerUiExpress from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import  express, { Application, json } from "express";
import { handleErros } from "./middlewares/handleErrors.middleware";
import { routes } from "./routers/index.router";

export const app: Application = express();

app.use(json());

app.use("/api-documentation", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocument))
app.use("/", routes)


app.use(handleErros)

