import { Router } from "express";
import { createClientController, readClientController } from "../controllers/client.controller";
import { createContactController, readContactsController } from "../controllers/contact.controller";

export const routes: Router = Router()

// app.post("/clients", createClientController)
// app.get("/clients", readClientController)

// app.post("/contacts", createContactController)
// app.get("/contacts", readContactsController)