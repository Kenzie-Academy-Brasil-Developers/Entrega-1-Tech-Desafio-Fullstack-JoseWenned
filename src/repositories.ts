import Client from "./entities/Client.entity";
import { AppDataSource } from "./data-source";
import Contact from "./entities/Contact.entity";
import { ContactRepo } from "./interfaces/contact.interface";
import { ClientRepo } from "./interfaces/client.interface";

export const clientRepo: ClientRepo = AppDataSource.getRepository(Client)

export  const contactRepo: ContactRepo = AppDataSource.getRepository(Contact)