import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import Client from "./Client.entity";

@Entity("contacts")
export default class Contact {
    
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 120 })
    full_name: string

    @Column({ length: 120, unique: true })
    email: string

    @Column({ length: 15, unique: true })
    telephone: string

    @CreateDateColumn({ type: "date" })
    date_register: string

    @ManyToOne(() => Client, (client) => client.contacts)
    @JoinColumn({name: "clientId"})
    client: Client

}