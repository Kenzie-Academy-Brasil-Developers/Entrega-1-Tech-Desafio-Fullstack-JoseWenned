import { Router } from "express";
import { createClientController, deleteClientController, readByIdClientController, readClientsController, updateClientController } from "../controllers/client.controller";
import { verifyClientIdExits } from "../middlewares/verifyClientIdExits.middleware";

export const clientRouter: Router = Router()

clientRouter.post("/", createClientController)
clientRouter.get("/", readClientsController)

clientRouter.use("/:id", verifyClientIdExits)

clientRouter.get("/:id", readByIdClientController)
clientRouter.patch("/:id", updateClientController)
clientRouter.delete("/:id", deleteClientController)