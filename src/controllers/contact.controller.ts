import { Request, Response } from "express";
import Contact from "../entities/Contact.entity";
import { createContactService, deleteContactService, readContactsService, updateContactService } from "../services/contact.service";

export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    
    const contact: Contact = await createContactService(req.body)

    return res.status(201).json(contact)

}

export const readContactsController = async (req: Request, res: Response): Promise<Response> => {
    
    const contacts: Contact[] = await readContactsService()

    return res.status(200).json(contacts)
    
}

export const readByIdContactController = async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json(res.locals.foundContact)
    
}

export const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    
    const { foundContact } = res.locals

    const contact: Contact = await updateContactService(foundContact, req.body)

    return res.status(200).json(contact)
    
}

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    
    await deleteContactService(res.locals.foundContact)

    return res.status(204).json()
    
}