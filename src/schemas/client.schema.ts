import { z } from "zod"

export const clientSchema = z.object({

    id: z.number().positive(),
    full_name: z.string().max(120),
    email: z.string().email().max(120),
    password: z.string().max(200),
    admin: z.boolean().default(false),
    telephone: z.string().max(15),
    date_regster: z.string()

})

export const createClientSchema = clientSchema.pick( { 

    id: true,
    full_name: true,
    email: true,
    admin: true,
    telephone: true,
    date_register: true,

} )

export const clientWithoutAdmin = createClientSchema.omit( { admin: true } )

export const updateClientSchema = clientWithoutAdmin.partial()

export const clientReturnSchema = clientSchema.omit( { password: true } )

export const clientReadSchema = clientReturnSchema.array()

export const clientLoginSchema = clientSchema.pick( { 

    email: true, 
    password: true 

} )
