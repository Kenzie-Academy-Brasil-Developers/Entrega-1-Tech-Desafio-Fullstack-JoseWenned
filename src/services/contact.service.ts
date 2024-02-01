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

export const readContactIdService = async (contactId: number): Promise<Contact> => {

    const contact: Contact | null = await contactRepo.findOne( { where: { id: contactId } } )

    if(!contact){
        throw new AppError("Contact not found", 404)
    }

    return contact
    
}

export const updateContactService = async (contact: Contact, data: Partial<Contact>): Promise<Contact> => {

    return await contactRepo.save({ ...contact, ...data})
    
}

export const deleteContactService = async (contactId: number): Promise<void> => {

    const contact: Contact | null = await contactRepo.findOne( { where: { id: contactId } } )

    if(!contact){
        throw new AppError("Contact not found", 404)
    }

    await contactRepo.remove(contact)
    
}