//import puppeteer from 'puppeteer';
const puppeteerVar = require('puppeteer-core');

describe('My First Test Firefox', () => {
    it('Launch the Firfox Browser', async function() {
        //const browser = await puppeteerVar.launch({headless:false})
        //const browser = await puppeteerVar.launch({headless:true})
        const browser = await puppeteerVar.launch({headless:false, 
            product: 'firefox',
            args:[
                'wait-for-browser'
            ],
            executablePath: 'C:/Program Files/Mozilla Firefox/firefox.exe'
        })
        const page = await browser.newPage()
        await page.goto("https://www.google.com")
        //await page.waitForTimeout(3000)
        await page.reload();
        await page.goto("https://www.blazedemo.com")
        await browser.close();
        
    })
})