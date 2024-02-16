import { Router } from "express";
import { createClientController, deleteClientController, readByIdClientController, readClientsController, updateClientController } from "../controllers/client.controller";
import { verifyClientEmailExits, verifyClientIdExits, verifyClientTelephoneExits } from "../middlewares/verifyClient.middleware";
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/global.middleware";
import { createClientSchema, updateClientSchema } from "../schemas/client.schema";

export const clientRouter: Router = Router()

clientRouter.post("/",

    validateBody(createClientSchema),
    verifyClientEmailExits, 
    verifyClientTelephoneExits, 
    createClientController
    
)

clientRouter.get("/", verifyToken, verifyAdmin, readClientsController)

clientRouter.use("/:id", verifyClientIdExits)

clientRouter.get("/:id", verifyToken, verifyClientIdExits, verifyAdmin, readByIdClientController)

clientRouter.patch("/:id", 

    validateBody(updateClientSchema),
    verifyToken,
    verifyPermissions,
    updateClientController

)

clientRouter.delete("/:id", verifyToken, verifyClientIdExits, verifyPermissions, verifyAdmin, deleteClientController)