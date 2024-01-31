import { Router } from "express";
import { clientRouter } from "./client.router";
import { contactRouter } from "./contact.router";

export const routes: Router = Router()

routes.use("/", clientRouter)
routes.use("/", contactRouter)