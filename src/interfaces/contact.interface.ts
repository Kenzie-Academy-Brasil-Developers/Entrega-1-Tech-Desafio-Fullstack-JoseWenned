import { z } from "zod";
import Contact from "../entities/Contact.entity";
import { contactReadSchema, contactReturnSchema, createContactSchema } from "../schemas/contact.schema";
import { Repository } from "typeorm";

export type ContactCreate = z.infer<typeof createContactSchema>

export type ContactBodyUpdate = Partial<ContactCreate>

export type ContactReturn = z.infer<typeof contactReadSchema>

export type ContactReturnCreate = z.infer<typeof contactReturnSchema>

export type ContactReadReturn = ContactReturn[]

export type ContactRead = Array<Contact>

export type ContactRepo = Repository<Contact>