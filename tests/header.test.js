const puppeteer = require('puppeteer');

test('should launch pup', async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
})