const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://app.freeinvoicebuilder.com/#build", {
    waitUntil: "networkidle2",
  });
  await page.pdf({ path: "invoice.pdf", format: "a4" });

  await browser.close();
})();

// Firebase refrence URl
// https://test-mode-b30-default-rtdb.europe-west1.firebasedatabase.app/
