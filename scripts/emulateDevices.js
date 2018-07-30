const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

async function helloWorld() {
  const browser = await puppeteer.launch({headless: false,slowMo: 250});
  const page = await browser.newPage();

  await page.goto('https://demo.mahara.org/');
  await page.emulate(devices['iPhone 6'])
  await page.screenshot({path: 'iphone.png', fullPage: true})
  await page.emulate(devices['iPad'])
  await page.screenshot({path: 'iPad.png', fullPage: true})
  console.log(await page.title())
  browser.close()
}

helloWorld();