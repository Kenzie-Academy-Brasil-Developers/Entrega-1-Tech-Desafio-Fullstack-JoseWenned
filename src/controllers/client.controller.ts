import { Request, Response } from "express";
import Client from "../entities/Client.entity";
import { createClientService, deleteClientService, readClientIdService, readClientsService } from "../services/client.service";

export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    
    const client: Client = await createClientService(req.body)

    return res.status(201).json(client)

}

export const readClientsController = async (req: Request, res: Response): Promise<Response> => {
    
    const clients: Client[] = await readClientsService()

    return res.status(200).json(clients)
    
}

export const readByIdClientController = async (req: Request, res: Response): Promise<Response> => {
    
    const clients: Client = await readClientIdService(Number(req.params.id))

    return res.status(200).json(clients)
    
}

export const deleteClientController = async (req: Request, res: Response): Promise<Response> => {
    
    await deleteClientService(Number(req.params.id))

    return res.status(204).json()
    
}