import { Response, Request, NextFunction } from "express";
import { contactRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";

export const verifyContactIdExits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const foundContact = await contactRepo.findOneBy( {id: Number( req.params.id ) } );

    if(!foundContact){
        throw new AppError("Contact not found.", 404)
    }
    
    res.locals = { ...res.locals, foundContact }

    return next()
    
}
