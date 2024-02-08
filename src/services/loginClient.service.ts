import "dotenv/config"
import { compare } from "bcryptjs";
import Client from "../entities/Client.entity";
import AppError from "../errors/AppErrors.error";
import { ClientLogin, LoginReturn } from "../interfaces/client.interface";
import { clientRepo } from "../repositories";
import { sign } from "jsonwebtoken";

export const loginClientService = async ( data: ClientLogin ): Promise<LoginReturn> => {
    
    const { email } = data

    const client: Client | null = await clientRepo.findOneBy( { email } )

    if(!client) throw new AppError("Invalid credentials", 401)

    const comparePassword = await compare(data.password, client.password)

    if(!comparePassword) throw new AppError("Invalid credentials", 401)

    const token: string = sign(

        {
            email: client.email, 
            admin: client.admin,
        },

        process.env.SECRET_KEY!,

        {
            subject: client.id.toString(),
            expiresIn: process.env.EXPIRES_IN!
        }

    )

    return { token }

}