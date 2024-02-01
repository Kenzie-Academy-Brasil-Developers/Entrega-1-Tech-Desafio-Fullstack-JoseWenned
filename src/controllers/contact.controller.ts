import { Request, Response } from "express";
import Contact from "../entities/Contact.entity";
import { createContactService, deleteContactService, readContactIdService, readContactsService } from "../services/contact.service";

export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    
    const contact: Contact = await createContactService(req.body)

    return res.status(201).json(contact)

}

export const readContactsController = async (req: Request, res: Response): Promise<Response> => {
    
    const contacts: Contact[] = await readContactsService()

    return res.status(200).json(contacts)
    
}

export const readByIdContactController = async (req: Request, res: Response): Promise<Response> => {
    
    const contacts: Contact = await readContactIdService(Number(req.params.id))

    return res.status(200).json(contacts)
    
}

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    
    await deleteContactService(Number(req.params.id))

    return res.status(204).json()
    
}