import { z } from "zod";
import Contact from "../entities/Contact.entity";
import { contactReadSchema, createContactSchema } from "../schemas/contact.schema";
import { Repository } from "typeorm";

export type ContactCreate = z.infer<typeof createContactSchema>

export type ContactBodyUpdate = Partial<ContactCreate>

export type ContactReturn = z.infer<typeof contactReadSchema>

export type ContactRead = Array<Contact>

export type ContactRepo = Repository<Contact>