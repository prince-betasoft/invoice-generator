const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(
    "http://localhost:5001/test-mode-b30/us-central1/api/fetch-user-data",
    {
      waitUntil: "networkidle2",
    }
  );
  await page.pdf({ path: "invoice_build.pdf", format: "a4" });

  await browser.close();
})();
