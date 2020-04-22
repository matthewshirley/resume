const path = require('path');
const mkdirp = require('mkdirp');
const puppeteer = require('puppeteer');

/**
 * Generates a PDF Resume
 *
 * @returns {Promise}
 */
const createPDF = async () => {
  let server;

  const filename = 'resume.pdf';
  const outputDirectory = path.resolve(__dirname, '..', 'public');

  if (process.env.CI) {
    server = 'http://localhost:9000';
  } else {
    server = 'http://localhost:8000';
  }

  await mkdirp(outputDirectory);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  await page.goto(server, { waitUntil: 'networkidle2' });

  await page.pdf({
    path: path.join(outputDirectory, filename),
    scale: 0.775,
    pageRanges: '1',
  });

  return browser.close();
};

createPDF();
