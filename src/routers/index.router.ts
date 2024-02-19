import { Router } from "express";
import { clientRouter } from "./client.router";
import { contactRouter } from "./contact.router";
import { loginRouter } from "./login.router";
import { reportRouter } from "./report.router";

export const routes: Router = Router()

routes.use("/clients", clientRouter)
routes.use("/contacts", contactRouter)
routes.use("/login", loginRouter)
routes.use("/generate-pdf", reportRouter)