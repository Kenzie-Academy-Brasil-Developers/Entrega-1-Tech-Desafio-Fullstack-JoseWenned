import { z } from "zod";
import { clientLoginSchema, clientReturnSchema, createClientSchema } from "../schemas/client.schema";
import { DeepPartial, Repository } from "typeorm";
import Client from "../entities/Client.entity";

export type ClientCreate = z.infer<typeof createClientSchema>

export type ClientBodyUpdate = Omit<ClientCreate, "admin">

export type ClientUpdate = DeepPartial<ClientBodyUpdate>

export type ClientReturn = z.infer<typeof clientReturnSchema>

export type ClientReadReturn = ClientReturn[]

export type ClientLogin = z.infer<typeof clientLoginSchema>

export type LoginReturn = { token: string }

export type ClientRepo = Repository<Client>

