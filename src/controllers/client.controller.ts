import { Request, Response } from "express";
import Client from "../entities/Client.entity";
import { createClientService, readClientsService } from "../services/client.service";

export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    
    const client: Client = await createClientService(req.body)

    return res.status(201).json(client)

}

export const readClientController = async (req: Request, res: Response): Promise<Response> => {
    
    const clients: Client[] = await readClientsService()

    return res.status(200).json(clients)
    
}