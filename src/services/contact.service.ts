import Contact from "../entities/Contact.entity";
import AppError from "../errors/AppErrors.error";
import { contactRepo } from "../repositories";

export const createContactService = async (data: Omit<Contact, "id">): Promise<Contact> => {

    const contact: Contact = await contactRepo.save(data)

    return contact

}

export const readContactsService = async (): Promise<Contact[]> => {

    const contacts: Contact[] = await contactRepo.find()

    return contacts
    
}

export const updateContactService = async (client: Contact, data: Partial<Contact>): Promise<Contact> => {
    
    return await contactRepo.save({...client, ...data})
    
}


export const deleteContactService = async (contact: Contact): Promise<void> => {

    await contactRepo.remove(contact)
    
}