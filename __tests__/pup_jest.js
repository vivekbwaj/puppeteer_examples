const puppeteer = require('puppeteer');

describe('on page load',()=>{
    test('loads correctly',async()=>{
        let browser = await puppeteer.launch({headless:false,slowMo:250});
        let page = await browser.newPage();
    })
})