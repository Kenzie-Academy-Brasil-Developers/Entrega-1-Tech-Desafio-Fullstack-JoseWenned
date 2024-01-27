import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import Contact from "../entities/Contact.entity";

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