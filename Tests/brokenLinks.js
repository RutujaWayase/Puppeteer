const puppeteer = require('puppeteer');
describe('Broken Links Test', () => {
    it('Find Broken Links on Page', async function() {
        try{
            const browser = await puppeteer.launch({headless:false});
            const page = await browser.newPage();

            await page.goto("https://www.amazon.in/");
            const links = await page.$$eval('a', anchors => anchors.map(a => a.href));
            const brokenLinks = {};
            for(const link of links){
                const response = await page.goto(link, {waitUntil: 'networkidle0', timeout: 5000})
                if(response.status() >=400){
                    brokenLinks.push({link, status: response.status});
                }
            }
            console.log("Broken Links", brokenLinks);
            await browser.close();
        }
        catch(e){
            console.log('unable to check for broken links', e);
        }

    })
})