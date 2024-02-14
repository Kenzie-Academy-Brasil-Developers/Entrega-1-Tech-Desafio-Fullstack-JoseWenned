import Client from "../entities/Client.entity";
import Contact from "../entities/Contact.entity";
import { ContactCreate, ContactReturnCreate } from "../interfaces/contact.interface";
import { PaginationParams } from "../interfaces/pagination.interface";
import { clientRepo, contactRepo } from "../repositories";
import { contactReturnSchema } from "../schemas/contact.schema";

export const createContactService = async ( data: ContactCreate, clientId: number ): Promise<ContactReturnCreate> => {

    const client: Client | null = await clientRepo.findOneBy( { id: clientId } )

    const newContact = ({ ...data, clientId: client })
    
    await contactRepo.save(newContact)

    return contactReturnSchema.parse(newContact)

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
    
    return await contactRepo.save({...client, ...data})
    
}


export const deleteContactService = async (contact: Contact): Promise<void> => {

    await contactRepo.remove(contact)
    
}