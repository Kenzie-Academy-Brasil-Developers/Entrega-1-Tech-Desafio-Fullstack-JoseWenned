import { Router } from "express";
import { createClientController, deleteClientController, readByIdClientController, readClientsController } from "../controllers/client.controller";

export const clientRouter: Router = Router()

clientRouter.post("/clients", createClientController)
clientRouter.get("/clients", readClientsController)
clientRouter.get("/clients/:id", readByIdClientController)
// clientRouter.patch("/clients/:id",)
clientRouter.delete("/clients/:id", deleteClientController)