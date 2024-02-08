import { Request, Response } from "express";
import Client from "../entities/Client.entity";
import { createClientService, deleteClientService, readAllClientsService, readByIdClientService, updateClientService } from "../services/client.service";
import { ClientReturn } from "../interfaces/client.interface";
import AppError from "../errors/AppErrors.error";

export const createClientController = async (req: Request, res: Response): Promise<Response> => {
    
    const client: ClientReturn = await createClientService(req.body)

    return res.status(201).json(client)

}

export const readClientsController = async (req: Request, res: Response): Promise<Response> => {
    
    const clients = await readAllClientsService()

    return res.status(200).json(clients)
    
}

export const readByIdClientController = async (req: Request, res: Response): Promise<Response> => {

    const clientId = res.locals.foundClient.id

    const client = await readByIdClientService(clientId);

    if(!client) throw new AppError("Client not found", 404)

    return res.status(200).json(client);
    
}

export const updateClientController = async (req: Request, res: Response): Promise<Response> => {
    
    const { foundClient } = res.locals

    const client = await updateClientService(foundClient, req.body)

    return res.status(200).json(client)
    
}

export const deleteClientController = async (req: Request, res: Response): Promise<Response> => {
    
    await deleteClientService(res.locals.foundClient)

    return res.status(204).json()
    
}