import { z } from "zod"

export const contactSchema = z.object({

    id: z.number().positive(),
    full_name: z.string().max(120),
    email: z.string().email().max(120),
    telephone: z.string().max(15),
    date_register: z.string(),
    clientId: z.number().int().positive()

})

export const createContactSchema = contactSchema.omit( { 

    id: true,

})

export const contactReadSchema = contactSchema.array()

export const updateContactSchema = contactSchema.partial()