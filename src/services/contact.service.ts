import Client from "../entities/Client.entity";
import Contact from "../entities/Contact.entity";
import AppError from "../errors/AppErrors.error";
import { ContactCreate } from "../interfaces/contact.interface";
import { PaginationParams } from "../interfaces/pagination.interface";
import { clientRepo, contactRepo } from "../repositories";

export const createContactService = async ( data: ContactCreate ): Promise<Contact> => {

    const client: Client | null = await clientRepo.findOne( { where: { id: data.clientId } } )

    if( !client ) throw new AppError("Client not found.", 404)

    const newContact: Contact = contactRepo.create({
        ...data,
        client: { id: client.id, full_name: client.full_name}
    })

    await contactRepo.save(newContact)

    return newContact

}

export const readAllContactsService = async ({nextPage, page, perPage, prevPage, order, sort}: PaginationParams): Promise<any> => {

    const [contacts, count] = await contactRepo.findAndCount({
        order: { [sort]: order },
        skip: page,
        take: perPage,
    })

    return {
        prevPage: page <= 1 ? null : prevPage,
        nextPage: count - page <= perPage ? null: nextPage,
        data: contacts,
        count
    }
    
}

export const updateContactService = async (client: Contact, data: Partial<Contact>): Promise<Contact> => {
    
    return await contactRepo.save( { ...client, ...data } )
    
}


export const deleteContactService = async (contact: Contact): Promise<void> => {

    await contactRepo.remove(contact)
    
}