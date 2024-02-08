import Client from "../entities/Client.entity";
import { clientRepo } from "../repositories";
import { ClientCreate, ClientReadReturn, ClientReturn, ClientUpdate } from "../interfaces/client.interface";
import { clientReturnListSchema, clientReturnSchema } from "../schemas/client.schema";

export const createClientService = async ( data: ClientCreate ): Promise< ClientReturn > => {

    const client: Client = clientRepo.create( data )

    await clientRepo.save( client )

    return clientReturnSchema.parse( client )

}

export const readAllClientsService = async (): Promise<ClientReadReturn> => {

    const clients: Client[] = await clientRepo.find()

    return clientReturnListSchema.parse( clients )
    
}

export const updateClientService = async ( data: ClientUpdate, client: Client ): Promise<ClientReturn> => {
    
    const clientUpdate: Client = await clientRepo.save( { ...client, ...data } )

    return clientReturnSchema.parse(clientUpdate)
    
}


export const deleteClientService = async (client: Client): Promise<void> => {

    await clientRepo.softRemove(client)

}

