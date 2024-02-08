import Client from "../entities/Client.entity";
import { clientRepo } from "../repositories";
import { ClientCreate, ClientReturn } from "../interfaces/client.interface";
import { clientReturnSchema } from "../schemas/client.schema";

export const createClientService = async ( data: ClientCreate ): Promise< ClientReturn > => {

    const client: Client = clientRepo.create( data )

    await clientRepo.save( client )

    return clientReturnSchema.parse( client )

}

export const readAllClientsService = async (): Promise<Client[]> => {

    const clients: Client[] = await clientRepo.find()

    return clients
    
}

export const updateClientService = async (client: Client, data: Partial<Client>): Promise<Client> => {
    
    return await clientRepo.save({...client, ...data})
    
}


export const deleteClientService = async (client: Client): Promise<void> => {

    await clientRepo.remove(client)

}

