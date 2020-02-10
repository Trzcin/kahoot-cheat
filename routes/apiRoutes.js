const express = require("express");
const router = express.Router();
const puppeteer = require("puppeteer");

router.post("/init", (req, res) => {
  const pin = req.body.pin;
  const name = req.body.name;
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://kahoot.it/");
    await page.waitFor("#game-input");
    await page.type('#game-input', pin);
    await page.$eval("button[type=submit]", e => e.click());
    await page.waitFor("#nickname");
    await page.type('#nickname', name);
    await page.$eval("button[type=submit]", e => e.click());
    await page.waitForNavigation();
    await page.screenshot({path: 'screen.png'});
    await browser.close();
  })();
});

module.exports = router;
