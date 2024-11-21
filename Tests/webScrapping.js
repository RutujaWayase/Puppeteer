/*
const puppeteer = require("puppeteer");


async function run() {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://google.com");
    const title = await page.title();
    console.log(title);
    const heading = await page.$eval('h1', (Element) => Element.textContent);
    console.log(heading);
    await page.screenshot({path: webbrowser.png});
    await page.pdf({path: 'example.pdf', format: 'A4'});
    await browser.close();
    
}
run();
*/
const puppeteer = require("puppeteer");

describe('Interacting with Input Box', () => {
    it('Launch the Browser', async function() {

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://pptr.dev/");
    const title = await page.title();
    console.log(title);
    const heading = await page.$eval('h1', (Element) => Element.textContent);
    console.log(heading);
    await page.screenshot({path: 'webbrowser.png'});
    await page.pdf({path: 'example.pdf', format: 'A4'});
    await browser.close();
    
    })
})