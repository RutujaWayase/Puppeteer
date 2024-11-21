const puppeteerVar = require('puppeteer');

describe('My First Screenshot through puppeteer', () => {
    it('Take Screenshot', async function(){
        const browser = await puppeteerVar.launch({headless:false})
        const page = await browser.newPage()
        const screenshotOptions ={
            type: 'jpeg',
            path: 'Images/google.jpeg',
            fullpage: true,
            quality: 100,
            omitBackground: true
        }
        await page.goto("https://www.google.com")
        await page.screenshot(screenshotOptions)
        await browser.close();
    })
})