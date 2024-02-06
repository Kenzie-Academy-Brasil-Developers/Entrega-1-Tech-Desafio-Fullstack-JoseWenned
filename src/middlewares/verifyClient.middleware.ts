import { Response, Request, NextFunction } from "express";
import { clientRepo } from "../repositories";
import AppError from "../errors/AppErrors.error";
import  Client  from "../entities/Client.entity"

export const verifyClientIdExits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const foundClient = await clientRepo.findOneBy( { id: Number( req.params.id ) } );

    if( !foundClient ){
        throw new AppError( "Client not found.", 404 )
    }
    
    res.locals = { ...res.locals, foundClient }

    return next()
    
}

export const verifyClientEmailExits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { email } = req.body

    const clientEmail: Client | null = await clientRepo.findOneBy( { email } )
    
    if( clientEmail ) throw new AppError( "E-mail alread exists", 409)

    return next()

}

export const verifyClientTelephoneExits = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { telephone } = req.body

    const clientTelephone: Client | null = await clientRepo.findOneBy( { telephone } )
    
    if( clientTelephone ) throw new AppError( "Telephone alread exists", 409)

    return next()

}
