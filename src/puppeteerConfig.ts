import puppeteer from "puppeteer"

 export const configPuppeteer = async () => {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    return { browser, page}
    
}