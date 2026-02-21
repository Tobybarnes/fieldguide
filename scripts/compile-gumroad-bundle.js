#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONTENT_DIR = path.join(__dirname, '../fieldguide-substack-content/substack-posts-REVISED');
const BUILDS_DIR = path.join(__dirname, '../builds');
const TEMPLATES_DIR = path.join(__dirname, '../builds/templates');

// Bundle configurations
const BUNDLES = {
  '1': {
    name: 'Foundation',
    weeks: Array.from({ length: 12 }, (_, i) => i + 1),
    price: 39,
    description: 'Weeks 1-12: Foundation practices and core concepts',
  },
  '2': {
    name: 'Advanced',
    weeks: Array.from({ length: 9 }, (_, i) => i + 13), // Weeks 13-21
    price: 39,
    description: 'Weeks 13-21: Advanced agent orchestration and projects',
  },
};

// Ensure directories exist
function ensureDirectories() {
  [BUILDS_DIR, TEMPLATES_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

// Create cover page
function createCoverPage(bundleNum) {
  const bundle = BUNDLES[bundleNum];
  const weekRange = `Weeks ${bundle.weeks[0]}-${bundle.weeks[bundle.weeks.length - 1]}`;

  return `---
title: "Field Guide ${bundle.name}"
subtitle: "${weekRange}"
author: "Toby Barnes"
date: "${new Date().getFullYear()}"
---

# Field Guide ${bundle.name}

**${weekRange}**

${bundle.description}

---

## What's Inside

${bundle.weeks.map(w => {
  const filename = `week-${String(w).padStart(2, '0')}-REVISED.md`;
  const filepath = path.join(CONTENT_DIR, filename);
  if (fs.existsSync(filepath)) {
    const content = fs.readFileSync(filepath, 'utf8');
    const titleMatch = content.match(/^# (.+)/m);
    return titleMatch ? `- Week ${w}: ${titleMatch[1].replace(/^Week \d+:\s*/, '')}` : null;
  }
  return null;
}).filter(Boolean).join('\n')}

---

## How to Use This Guide

Each week builds on the previous one. Start with Week ${bundle.weeks[0]} and work through sequentially.

Each practice includes:
- **Overview**: Why build this tool
- **Steps**: Clear instructions for building
- **Prompts**: Copy-paste prompts for Claude
- **Troubleshooting**: Common issues and solutions
- **Extensions**: Ways to expand your tool

Take your time. Build the actual tools. The practice is in the building.

---

\\newpage

`;
}

// Combine markdown files
function combineMarkdownFiles(bundleNum) {
  const bundle = BUNDLES[bundleNum];
  const coverPage = createCoverPage(bundleNum);
  const weekContents = [];

  console.log(`📚 Combining ${bundle.weeks.length} weeks into Bundle ${bundleNum}...`);

  for (const weekNum of bundle.weeks) {
    const filename = `week-${String(weekNum).padStart(2, '0')}-REVISED.md`;
    const filepath = path.join(CONTENT_DIR, filename);

    if (!fs.existsSync(filepath)) {
      console.warn(`⚠️  Warning: ${filename} not found, skipping`);
      continue;
    }

    let content = fs.readFileSync(filepath, 'utf8');

    // Remove paywall markers for the bundle (they get the full content)
    content = content.replace(/---\s*\n\s*<!-- PAYWALL:.*?-->\s*\n.*?\n---\s*\n/gs, '');

    // Add page break before each week (except first)
    if (weekContents.length > 0) {
      weekContents.push('\\newpage\n\n');
    }

    weekContents.push(content);
    console.log(`  ✓ Added Week ${weekNum}`);
  }

  const combined = coverPage + weekContents.join('\n\n');
  const outputPath = path.join(BUILDS_DIR, `bundle-${bundleNum}-combined.md`);
  fs.writeFileSync(outputPath, combined, 'utf8');

  console.log(`✅ Combined markdown saved: ${path.basename(outputPath)}`);
  return outputPath;
}

// Convert to PDF using Pandoc
function convertToPDF(markdownPath, bundleNum) {
  const bundle = BUNDLES[bundleNum];
  const pdfPath = path.join(BUILDS_DIR, `field-guide-${bundle.name.toLowerCase()}.pdf`);

  console.log(`\n📄 Converting to PDF...`);

  try {
    // Check if pandoc is installed
    try {
      execSync('which pandoc', { stdio: 'ignore' });
    } catch (e) {
      console.error('❌ Pandoc not installed. Install with: brew install pandoc');
      console.log('   Or download from: https://pandoc.org/installing.html');
      return null;
    }

    // Pandoc command with custom options
    const pandocCommand = [
      'pandoc',
      `"${markdownPath}"`,
      '-o', `"${pdfPath}"`,
      '--pdf-engine=xelatex',
      '--toc',
      '--toc-depth=2',
      '-V', 'geometry:margin=1in',
      '-V', 'fontsize=11pt',
      '-V', 'linestretch=1.3',
      '-V', 'colorlinks=true',
      '-V', 'linkcolor=black',
      '-V', 'urlcolor=black',
      '--highlight-style=tango',
    ].join(' ');

    console.log(`Running: ${pandocCommand}`);
    execSync(pandocCommand, { stdio: 'inherit' });

    const stats = fs.statSync(pdfPath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);

    console.log(`✅ PDF created: ${path.basename(pdfPath)} (${sizeMB} MB)`);
    return pdfPath;

  } catch (error) {
    console.error(`❌ Error creating PDF: ${error.message}`);
    return null;
  }
}

// Create quick reference card
function createQuickReference(bundleNum) {
  const bundle = BUNDLES[bundleNum];

  const content = `# Field Guide ${bundle.name} - Quick Reference

## Essential Commands

### Starting a New Tool
\`\`\`
Describe what you want > Claude generates code > Save as HTML > Open in browser
\`\`\`

### The Loop
1. **Describe**: Tell Claude what you want (not how to build it)
2. **Generate**: Copy the code into your editor
3. **Test**: Open in browser, does it work?
4. **Refine**: Tell Claude what to fix, repeat

### Best Practices
- Start simple, add features one at a time
- Test after each change
- Save working versions before major changes
- Store data in localStorage for personal tools
- Keep tools as single HTML files when possible

## Common Prompts

### Fix styling
\`\`\`
Make the [element] look more [description]
\`\`\`

### Add functionality
\`\`\`
Add a [feature] that [does what]. [Additional requirements].
\`\`\`

### Debug issues
\`\`\`
This [feature] isn't working: [describe problem]. [What you expected].
\`\`\`

### Improve UX
\`\`\`
Make it easier to [task]. Show [feedback] when [action].
\`\`\`

---

**Remember:** You don't need to become a developer. You just need to build what you need.

`;

  const outputPath = path.join(BUILDS_DIR, `bundle-${bundleNum}-quick-reference.md`);
  fs.writeFileSync(outputPath, content, 'utf8');

  console.log(`✅ Quick reference created: ${path.basename(outputPath)}`);
  return outputPath;
}

// Create individual markdown archive
function createMarkdownArchive(bundleNum) {
  const bundle = BUNDLES[bundleNum];
  const archiveDir = path.join(BUILDS_DIR, `bundle-${bundleNum}-markdown`);

  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir, { recursive: true });
  }

  console.log(`\n📦 Creating markdown archive...`);

  for (const weekNum of bundle.weeks) {
    const filename = `week-${String(weekNum).padStart(2, '0')}-REVISED.md`;
    const sourcePath = path.join(CONTENT_DIR, filename);

    if (fs.existsSync(sourcePath)) {
      let content = fs.readFileSync(sourcePath, 'utf8');
      // Remove paywall markers
      content = content.replace(/---\s*\n\s*<!-- PAYWALL:.*?-->\s*\n.*?\n---\s*\n/gs, '');

      const destPath = path.join(archiveDir, filename.replace('-REVISED', ''));
      fs.writeFileSync(destPath, content, 'utf8');
    }
  }

  console.log(`✅ Markdown files copied to ${path.basename(archiveDir)}/`);
  return archiveDir;
}

// Main function
function main() {
  const args = process.argv.slice(2);
  const bundleNum = args[0];

  console.log('📦 Field Guide Bundle Compiler\n');

  if (!bundleNum || !BUNDLES[bundleNum]) {
    console.error('Usage: node compile-gumroad-bundle.js [1|2]');
    console.error('\nBundles:');
    Object.entries(BUNDLES).forEach(([num, bundle]) => {
      console.error(`  ${num}: ${bundle.name} (Weeks ${bundle.weeks[0]}-${bundle.weeks[bundle.weeks.length - 1]})`);
    });
    process.exit(1);
  }

  ensureDirectories();

  const bundle = BUNDLES[bundleNum];
  console.log(`Building Bundle ${bundleNum}: ${bundle.name}`);
  console.log(`Weeks: ${bundle.weeks[0]}-${bundle.weeks[bundle.weeks.length - 1]}`);
  console.log(`Price: $${bundle.price}\n`);

  // Step 1: Combine markdown
  const combinedPath = combineMarkdownFiles(bundleNum);

  // Step 2: Convert to PDF
  const pdfPath = convertToPDF(combinedPath, bundleNum);

  // Step 3: Create quick reference
  const refPath = createQuickReference(bundleNum);

  // Step 4: Create markdown archive
  const archivePath = createMarkdownArchive(bundleNum);

  console.log('\n🎉 Bundle compilation complete!');
  console.log('\nGenerated files:');
  console.log(`  - PDF: ${path.basename(pdfPath || 'Failed')}`);
  console.log(`  - Quick Reference: ${path.basename(refPath)}`);
  console.log(`  - Markdown Archive: ${path.basename(archivePath)}/`);
  console.log(`\nAll files in: ${BUILDS_DIR}/`);
}

// Run
main();
