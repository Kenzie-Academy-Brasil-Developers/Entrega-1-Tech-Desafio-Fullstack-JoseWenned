import  express, { Application } from "express";
import { createClientController, readClientController } from "./controllers/client.controller";
import { createContactController, readContactsController } from "./controllers/contact.controller";

export const app: Application = express();

app.use(express.json());

app.post("/clients", createClientController)
app.get("/clients", readClientController)

app.post("/contacts", createContactController)
app.get("/contacts", readContactsController)