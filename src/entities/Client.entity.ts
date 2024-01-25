import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("clients")
export default class Client {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 50, unique: true })
    full_name: string

    @Column({ length: 100, unique: true })
    email: string

    @Column({ length: 200, unique: true })
    password: string

    @Column({ length: 15, unique: true })
    telephone: string

    @Column({ type: "date"})
    date_register: Date
}