import { Request, Response } from "express";
import Client from "../entities/Client.entity";
import { createClientService, deleteClientService, readAllClientsService, updateClientService } from "../services/client.service";
import { ClientReturn } from "../interfaces/client.interface";

export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    
    const client: ClientReturn = await createClientService(req.body)

    return res.status(201).json(client)

}

export const readClientsController = async (req: Request, res: Response): Promise<Response> => {
    
    const clients: Client[] = await readAllClientsService()

    return res.status(200).json(clients)
    
}

export const readByIdClientController = async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json(res.locals.foundClient)
    
}

export const updateClientController = async (req: Request, res: Response): Promise<Response> => {
    
    const { foundClient } = res.locals

    const client: Client = await updateClientService(foundClient, req.body)

    return res.status(200).json(client)
    
}

export const deleteClientController = async (req: Request, res: Response): Promise<Response> => {
    
    await deleteClientService(res.locals.foundClient)

    return res.status(204).json()
    
}