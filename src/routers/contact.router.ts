import { Router } from "express";
import { createContactController, deleteContactController, readByIdContactController, readContactsController } from "../controllers/contact.controller";

export const contactRouter: Router = Router()

contactRouter.post("/contacts", createContactController)
contactRouter.get("/contacts", readContactsController)
contactRouter.get("/contacts/:id", readByIdContactController)
// contactRouter.patch("/contacts/:id",)
contactRouter.delete("/contacts/:id", deleteContactController)