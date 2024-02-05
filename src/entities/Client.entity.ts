import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import Contact from "./Contact.entity";

@Entity("clients")
export default class Client {

    @PrimaryGeneratedColumn( "increment" )
    id: number

    @Column({ length: 120 })
    full_name: string

    @Column({ length: 120, unique: true })
    email: string

    @Column({ length: 200 })
    password: string

    @Column({ unique: true })
    telephone: string

    @CreateDateColumn({ type: "date" })
    date_register: string

    @OneToMany(()=> Contact, (contact) => contact.client)
    contacts: Contact[]

}