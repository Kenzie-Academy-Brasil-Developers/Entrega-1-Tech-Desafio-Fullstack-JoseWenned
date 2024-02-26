import { z } from "zod"

export const clientSchema = z.object({

    id: z.number().positive(),
    full_name: z.string().max(120),
    email: z.string().email().max(120),
    password: z.string().max(200),
    typeAccount: z.string(),
    telephone: z.string().max(15),
    date_register: z.string()

})

export const createClientSchema = clientSchema.pick( { 

    full_name: true,
    email: true,
    password: true,
    confirmPassword: true,
    typeAccount: true,
    telephone: true,
    date_register: true,

} )

export const clientWithoutAdmin = createClientSchema.omit( { typeAccount: true } )

export const updateClientSchema = clientWithoutAdmin.partial()

export const clientReturnSchema = clientSchema.omit( { 

    password: true,
    typeAccount: true,
    
} )

export const clientReturnListSchema = clientReturnSchema.array()

export const clientReadSchema = clientReturnSchema.array()

export const clientLoginSchema = clientSchema.pick( { 

    email: true, 
    password: true 

} )
