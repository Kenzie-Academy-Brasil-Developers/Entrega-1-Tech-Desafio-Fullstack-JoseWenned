import { Router } from "express";
import { createContactController, deleteContactController, readByIdContactController, readContactsController } from "../controllers/contact.controller";

export const contactRouter: Router = Router()

contactRouter.post("/", createContactController)
contactRouter.get("/", readContactsController)
contactRouter.get("/:id", readByIdContactController)
// contactRouter.patch("/:id",)
contactRouter.delete("/:id", deleteContactController)