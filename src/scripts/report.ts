import pdf from "html-pdf"
import fs from "fs"
import { Response } from "express"
import path from "path"
import handlebars from "handlebars"
import Client from "../entities/Client.entity"
import Contact from "../entities/Contact.entity"

export const generatePDF = ( res: Response ) => {
    
    try {

        const htmlPath = path.join( __dirname, "index.html" )

        const html = fs.readFileSync(htmlPath).toString()

        const template = handlebars.compile(html)

        const templateData = {
            clientName: Client.name,
            clientEmail: Client.email,
            clientTelephone: Client.telephone,
            clientDateRegister: Client.date_Register,
            contactName: Contact.name,
            contactEmail: Contact.email,
            contactTelephone: Contact.telephone,
            contactDateRegister: Contact.date_Register,
        };

        const filledHtml = template(templateData);

        const options: pdf.CreateOptions = {

            type: "pdf",
            format: "A4",
            orientation: "portrait"
            
        }

        pdf.create( filledHtml, options ).toBuffer( ( err, buffer ) => {

            if( err ) {

                console.error( "Error reading html file:", err )

                return res.status( 500 ).json( { err: "Error create pdf." })

            } 

            res.end( buffer )

        })

    } catch ( error ) {

        console.error( "Error reading html file:", error )

        return res.status(500).json( { error: "Error processing the file." } )
    }

}