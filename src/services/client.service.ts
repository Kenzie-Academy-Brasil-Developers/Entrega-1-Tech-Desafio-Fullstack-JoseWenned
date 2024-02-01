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

export const updateClientService = async (client: Client, data: Partial<Client>): Promise<Client> => {
    
    return await clientRepo.save({...client, ...data})
    
}

export const deleteClientService = async (client: Client): Promise<void> => {

    await clientRepo.remove(client)

}

