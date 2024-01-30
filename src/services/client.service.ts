import { AppDataSource } from "../data-source";
import Client from "../entities/Client.entity";
import { Repository } from "typeorm";
import AppError from "../errors/AppErrors.error";

export const createClientService = async (data: Omit<Client, "id">): Promise<Client> => {
    
    const repo: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client = await repo.save(data)

    return client

}

export const readClientsService = async (): Promise<Client[]> => {
    
    const repo: Repository<Client> = AppDataSource.getRepository(Client)

    const clients: Client[] = await repo.find()

    return clients
    
}

export const readClientIdService = async (clientId: number): Promise<Client> => {
    
    const repo: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await repo.findOne( { where: { id: clientId } } )

    if(!client){
        throw new AppError("Client not found", 404)
    }

    return client
    
}

export const deleteClientService = async (clientId: number): Promise<void> => {
    
    const repo: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await repo.findOne( { where: { id: clientId } } )

    if(!client){
        throw new AppError("Client not found", 404)
    }

    await repo.remove(client)

}

