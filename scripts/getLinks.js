const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

async function getLinks_All() {
  const browser = await puppeteer.launch({headless: false,slowMo: 250});
  const page = await browser.newPage();

  await page.goto('https://news.ycombinator.com/news')

  // execute standard javascript in the context of the page.
  const stories = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a.storylink'))
    return anchors.map(anchor => anchor.innerHTML).slice(0, 10)
  })
  console.log(stories)
  await browser.close()
}

getLinks_All();