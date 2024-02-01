import { Router } from "express";
import { createClientController, deleteClientController, readByIdClientController, readClientsController } from "../controllers/client.controller";

export const clientRouter: Router = Router()

clientRouter.post("/", createClientController)
clientRouter.get("/", readClientsController)
clientRouter.get("/:id", readByIdClientController)
// clientRouter.patch("/:id",)
clientRouter.delete("/:id", deleteClientController)