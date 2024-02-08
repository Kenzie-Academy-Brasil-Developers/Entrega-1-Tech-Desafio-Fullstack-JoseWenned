import { Router } from "express";
import { loginClientController } from "../controllers/loginClient.controller";

export const loginRouter: Router = Router()

loginRouter.post("/", loginClientController)