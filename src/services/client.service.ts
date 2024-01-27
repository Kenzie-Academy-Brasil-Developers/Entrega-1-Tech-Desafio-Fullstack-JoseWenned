import { AppDataSource } from "../data-source";
import Client from "../entities/Client.entity";
import { Repository } from "typeorm";

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