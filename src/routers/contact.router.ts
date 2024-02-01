import { Router } from "express";
import { createContactController, deleteContactController, readByIdContactController, readContactsController, updateContactController } from "../controllers/contact.controller";
import { verifyContactIdExits } from "../middlewares/verifyContactIdExits.middleware";

export const contactRouter: Router = Router()

contactRouter.post("/", createContactController)
contactRouter.get("/", readContactsController)

contactRouter.use("/:id", verifyContactIdExits)

contactRouter.get("/:id", readByIdContactController)
contactRouter.patch("/:id", updateContactController)
contactRouter.delete("/:id", deleteContactController)