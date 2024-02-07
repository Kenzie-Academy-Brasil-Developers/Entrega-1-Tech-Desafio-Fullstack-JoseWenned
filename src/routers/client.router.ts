import { Router } from "express";
import { createClientController, deleteClientController, readByIdClientController, readClientsController, updateClientController } from "../controllers/client.controller";
import { verifyClientEmailExits, verifyClientIdExits, verifyClientTelephoneExits } from "../middlewares/verifyClient.middleware";
import { validateBody, verifyToken } from "../middlewares/global.middleware";
import { createClientSchema } from "../schemas/client.schema";

export const clientRouter: Router = Router()

clientRouter.post("/",

    validateBody(createClientSchema),
    verifyClientEmailExits, 
    verifyClientTelephoneExits, 
    createClientController
    
)

clientRouter.get("/", verifyToken, readClientsController)

clientRouter.use("/:id", verifyClientIdExits)

clientRouter.get("/:id", readByIdClientController)

clientRouter.patch("/:id", 

    validateBody,
    verifyToken,
    verifyClientEmailExits, 
    verifyClientTelephoneExits,
    updateClientController

)

clientRouter.delete("/:id", verifyToken, deleteClientController)