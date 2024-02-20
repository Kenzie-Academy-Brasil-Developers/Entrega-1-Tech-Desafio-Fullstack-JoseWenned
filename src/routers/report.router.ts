import { Router, Request, Response } from "express"
import  ejs  from "ejs"
import path from "path"
import  puppeteer from "puppeteer"

export const reportRouter: Router = Router()

const client = [
    {
        name: "José",
        email: "jos@gmail.com",
        telephone: "(88)99872-6545",
        contact: [
            {
                name: "Contato1",
                email: "contato1@gmail.com",
                telephone: "(88)12345-6789",
            },
            {
                name: "Contato2",
                email: "contato2@gmail.com",
                telephone: "(88)98765-4321",
            }
        ]
    }
];

reportRouter.get("/pdf", async (request: Request, response: Response) => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto("http://localhost:3000", {

        waitUntil: "networkidle0"

    })

    const pdf = await page.pdf({
        printBackground: true,
        format: "letter",
        margin: {
            top: "20px",
            bottom: "40px",
            left: "20px",
            right: "20px"
        }
    })

    await browser.close()

    response.contentType("application/pdf")

    response.setHeader("Content-Disposition", "attachment; filename=report.pdf");

    return response.send(pdf)

})

reportRouter.get("/", (resquest, response) => {

    const filePath = path.join(__dirname, "print.ejs")

    ejs.renderFile(filePath, { client }, (err, html) => {
        
        if(err){
            return response.send("Error Reading the file.")
        }

        return response.send(html)

    })

})
