import { AppDataSource } from "../data-source";
import Client from "../entities/Client.entity";
import { Repository } from "typeorm";
import AppError from "../errors/AppErrors.error";
import { clientRepo } from "../repositories";

export const createClientService = async (data: Omit<Client, "id">): Promise<Client> => {

    const client: Client = await clientRepo.save(data)

    return client

}

export const readClientsService = async (): Promise<Client[]> => {

    const clients: Client[] = await clientRepo.find()

    return clients
    
}

export const readClientIdService = async (clientId: number): Promise<Client> => {

    const client: Client | null = await clientRepo.findOne( { where: { id: clientId } } )

    if(!client){
        throw new AppError("Client not found", 404)
    }

    return client
    
}

export const deleteClientService = async (clientId: number): Promise<void> => {

    const client: Client | null = await clientRepo.findOne( { where: { id: clientId } } )

    if(!client){
        throw new AppError("Client not found", 404)
    }

    await clientRepo.remove(client)

}

