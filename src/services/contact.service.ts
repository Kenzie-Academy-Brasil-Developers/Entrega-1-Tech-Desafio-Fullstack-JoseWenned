import Contact from "../entities/Contact.entity";
import AppError from "../errors/AppErrors.error";
import { PaginationParams } from "../interfaces/pagination.interface";
import { contactRepo } from "../repositories";

export const createContactService = async (data: Omit<Contact, "id">): Promise<Contact> => {

    const contact: Contact = await contactRepo.save(data)

    return contact

}

export const readContactsService = async ({nextPage, page, perPage, prevPage, order, sort}: PaginationParams): Promise<any> => {

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