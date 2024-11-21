const puppeteerVar = require('puppeteer');

describe('Interacting with Input Box', () => {
    it('Launch the Browser', async function() {
        const browser= await puppeteerVar.launch({headless:false, slowMo: 100})
        const page = await browser.newPage()
        await page.goto("https://www.google.com")
        var ele = await page.waithForXPath("//input[@name='q']")
        await ele.type("puppeteer", {delay: 500})
        await browser.close();
        
    })
})