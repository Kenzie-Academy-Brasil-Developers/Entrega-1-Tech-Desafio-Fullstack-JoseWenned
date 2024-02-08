import Client from "../entities/Client.entity";
import { clientRepo } from "../repositories";
import { ClientCreate, ClientReadReturn, ClientReturn, ClientUpdate } from "../interfaces/client.interface";
import { clientReturnListSchema, clientReturnSchema } from "../schemas/client.schema";
import AppError from "../errors/AppErrors.error";

export const createClientService = async ( data: ClientCreate ): Promise< ClientReturn > => {

    const client: Client = clientRepo.create( data )

    await clientRepo.save( client )

    return clientReturnSchema.parse( client )

}

export const readAllClientsService = async (): Promise<ClientReadReturn> => {

    const clients: Client[] = await clientRepo.find()

    return clientReturnListSchema.parse( clients )
    
}

export const readByIdClientService = async (clientId: number): Promise<ClientReturn> => {

    const client: Client | null = await clientRepo.findOneBy( { id: clientId } )

    if(!client) throw new AppError("Client not found", 404)

    return clientReturnSchema.parse(client)

}

export const updateClientService = async (client: Client, data: Partial<Client>): Promise<ClientReturn> => {
    
    const updateClient = await clientRepo.save({...client, ...data})

    return clientReturnSchema.parse(updateClient)
    
}


export const deleteClientService = async (client: Client): Promise<void> => {

    await clientRepo.softRemove(client)

}

