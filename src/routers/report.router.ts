import { Router, Request, Response } from "express";
import { generatePDF } from "../scripts/report";


export const reportRouter: Router = Router()

reportRouter.post("/", (req: Request, res: Response) => {

    generatePDF(res);

})
