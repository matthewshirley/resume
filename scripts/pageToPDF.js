const path = require('path');
const mkdirp = require('mkdirp');
const puppeteer = require('puppeteer');

/**
 * Generates a PDF version of a page using Puppeteer
 *
 * @param {String} server
 * @returns {Promise}
 */
const createPDF = async () => {
  let server;

  const filename = 'resume.pdf';
  const outputDirectory = path.resolve(__dirname, '..', 'public');

  // # Determine what to call the file
  if (process.env.CI) {
    server = 'http://localhost:9000';
  } else {
    server = 'http://localhost:8000';
  }

  // # Create output directory
  await mkdirp(outputDirectory);

  // # Start Chrome
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();

  // # Navigate to Resume
  await page.goto(server, { waitUntil: 'networkidle2' });

  // # Save as PDF
  await page.pdf({
    path: path.join(outputDirectory, filename),
    scale: 0.775,
    pageRanges: '1 - 2',
  });

  return browser.close();
};

createPDF();
