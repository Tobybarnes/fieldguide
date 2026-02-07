const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function screenshot(htmlPath, outputPath, options = {}) {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: options.viewport || { width: 1200, height: 800 }
  });

  const absoluteHtmlPath = path.resolve(htmlPath);
  await page.goto(`file://${absoluteHtmlPath}`);

  // Wait for fonts and content to load
  await page.waitForTimeout(500);

  await page.screenshot({
    path: outputPath,
    fullPage: options.fullPage || false
  });

  await browser.close();
  console.log(`Screenshot saved: ${outputPath}`);
}

// Get args
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node screenshot.js <html-file> <output-path> [width] [height]');
  process.exit(1);
}

const [htmlFile, outputFile, width, height] = args;
const viewport = width && height ? { width: parseInt(width), height: parseInt(height) } : undefined;

screenshot(htmlFile, outputFile, { viewport }).catch(console.error);
