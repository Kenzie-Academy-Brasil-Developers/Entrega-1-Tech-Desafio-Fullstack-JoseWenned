import { Response, Request, NextFunction } from "express";
import { contactRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import Contact from "../entities/Contact.entity";

export const verifyContactIdExits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const foundContact = await contactRepo.findOneBy( { id: Number( req.params.id ) } );

    if( !foundContact ){
        throw new AppError( "Contact not found.", 404 )
    }
    
    res.locals = { ...res.locals, foundContact }

    return next()
    
}

export const verifyContactEmailExits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { email } = req.body

    const contactEmail: Contact | null = await contactRepo.findOneBy( { email } )
    
    if( contactEmail ) throw new AppError( "Contact alread exists", 409)

    return next()

}

export const verifyContactTelephoneExits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { telephone } = req.body

    const contactTelephone: Contact | null = await contactRepo.findOneBy( { telephone } )
    
    if( contactTelephone ) throw new AppError( "Telephone alread exists", 409)

    return next()

}
