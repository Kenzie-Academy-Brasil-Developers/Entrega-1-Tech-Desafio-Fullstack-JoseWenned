import { Router } from "express";
import { createContactController, deleteContactController, readAllContactsController, readByIdContactController, updateContactController } from "../controllers/contact.controller";
import { verifyContactEmailExits, verifyContactIdExits, verifyContactTelephoneExits } from "../middlewares/verifyContact.middleware";
import { pagination } from "../middlewares/pagination.middleware";
import { validateBody, verifyToken } from "../middlewares/global.middleware";
import { verifyClientIdExits } from "../middlewares/verifyClient.middleware";
import { createContactSchema, updateContactSchema } from "../schemas/contact.schema";

export const contactRouter: Router = Router()

contactRouter.post("/", 

    verifyToken,
    validateBody(createContactSchema),
    verifyContactEmailExits, 
    verifyContactTelephoneExits, 
    verifyClientIdExits,
    createContactController

)

contactRouter.get("/", 

    verifyToken,
    pagination, 
    readAllContactsController

)

contactRouter.use("/:id", verifyContactIdExits)

contactRouter.get("/:id", readByIdContactController)

contactRouter.patch("/:id", 

    verifyToken,
    validateBody(updateContactSchema),
    verifyContactEmailExits, 
    verifyContactTelephoneExits, 
    updateContactController

)

contactRouter.delete("/:id", verifyToken, deleteContactController)