import { Request, Response } from "express";
import { loginClientService } from "../services/loginClient.service";

export const loginClientController = async ( req: Request, res: Response ): Promise<Response> => {
    
    const token = await loginClientService(req.body)

    return res.status(200).json(token)
    
}