# Puppeteer
Puppeteer Project

# Steps to install puppeteer:
1) npm init
2) npm install -g puppeteer
3) npm install mocha chai => It will install chromium, mocha, chai
4) npm install puppeteer
5) npm i puppeteer-core

# To Run tests:
1) Initialize path in package.json file -> scripts -> test

eg:

"scripts": {
    "test": "node ./node_modules/mocha/bin/mocha --timeout=25000 ./Tests"
  },
  "aut

2) npm test

# headles or headed mode
specify headless as true for headless and false for headed mode

const browser = await puppeteerVar.launch({headless:false})

# For developer mode
const browser = await puppeteerVar.launch({headless:false, slowMo: 500, devtools:true})

To Launch in firfox browser:
const browser = await puppeteerVar.launch({headless:false, 
            product: 'firefox',
            args:[
                'wait-for-browser'
            ],
            executablePath: 'C:/Program Files/Mozilla Firefox/firefox.exe'
        })

To launch/run specific file: spedify it in test

 "scripts": {
    "test": "node ./node_modules/mocha/bin/mocha --timeout=30000 ./Tests/takeScreenshot.js"
  },


//"test": "echo \"Error: no test specified\" && exit 1"
