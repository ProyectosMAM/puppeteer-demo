const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https:ocmjerez.org');
  await page.screenshot({path: 'example.png'});
  console.log(path);

  await browser.close();
})();