import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import Contact from "./Contact.entity";
import { getRounds, hashSync } from "bcryptjs";

@Entity("clients")
export default class Client {

    @PrimaryGeneratedColumn( "increment" )
    id: number

    @Column( { length: 120 } )
    full_name: string

    @Column( { length: 120, unique: true } )
    email: string

    @Column( { length: 200 } )
    password: string

    @Column( { default: false } )
    admin: boolean

    @Column( { length: 15, unique: true } )
    telephone: string

    @CreateDateColumn( { type: "date" } )
    date_register: string

    @OneToMany(()=> Contact, ( contact ) => contact.client )
    contacts: Array<Contact>

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword = () => {

        const hasRounds: number = getRounds( this.password )
        
        if( !hasRounds ) {

            this.password = hashSync( this.password, 10 )

        }

    }

}