import { Response, Request, NextFunction } from "express";
import { clientRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";

export const verifyIdExits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const foundClient = await clientRepo.findOneBy( {id: Number( req.params.id ) } );

    if(!foundClient){
        throw new AppError("Client not found.", 404)
    }
    
    res.locals = { ...res.locals, foundClient }

    return next()
    
}