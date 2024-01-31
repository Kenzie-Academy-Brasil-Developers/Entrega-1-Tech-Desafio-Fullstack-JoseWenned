import { Repository } from "typeorm";
import Client from "./entities/Client.entity";
import { AppDataSource } from "./data-source";
import Contact from "./entities/Contact.entity";

export const clientRepo: Repository<Client> = AppDataSource.getRepository(Client)

export  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)