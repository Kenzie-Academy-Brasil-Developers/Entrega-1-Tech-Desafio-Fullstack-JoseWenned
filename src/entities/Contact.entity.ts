import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("contacts")
export default class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 50, unique: true })
    full_name: string

    @Column({ length: 100, unique: true })
    email: string

    @Column({ length: 20, unique: true })
    telephone: number

    @Column({ type: "date"})
    date_register: Date
}