import  express, { Application } from "express";
import { createClientController, readClientController } from "./controllers/client.controller";

export const app: Application = express();

app.use(express.json());

app.post("/clients", createClientController)
app.get("/clients", readClientController)