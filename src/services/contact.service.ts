import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import Contact from "../entities/Contact.entity";
import AppError from "../errors/AppErrors.error";

export const createContactService = async (data: Omit<Contact, "id">): Promise<Contact> => {
    
    const repo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact = await repo.save(data)

    return contact

}

export const readContactsService = async (): Promise<Contact[]> => {
    
    const repo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contacts: Contact[] = await repo.find()

    return contacts
    
}

export const readContactIdService = async (contactId: number): Promise<Contact> => {
    
    const repo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact | null = await repo.findOne( { where: { id: contactId } } )

    if(!contact){
        throw new AppError("Contact not found", 404)
    }

    return contact
    
}

export const deleteContactService = async (contactId: number): Promise<void> => {
    
    const repo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact | null = await repo.findOne( { where: { id: contactId } } )

    if(!contact){
        throw new AppError("Contact not found", 404)
    }

    await repo.remove(contact)
    
}