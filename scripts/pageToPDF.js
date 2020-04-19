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
  let filename;
  let outputDirectory;

  // # Determine what to call the file
  if (process.env.NODE_ENV === 'production') {
    server = 'https://resume.mattshirley.net';
    filename = 'resume.pdf';
    outputDirectory = path.resolve(__dirname, '..', 'public', 'prod');
  } else {
    server = 'http://localhost:8000';
    filename = `Resume - ${Date.now()}.pdf`;
    outputDirectory = path.resolve(__dirname, '..', 'public', 'staging');
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
