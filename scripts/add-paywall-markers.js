#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Paywall marker to insert
const PAYWALL_MARKER = `---

<!-- PAYWALL: Paid subscribers only beyond this point -->

**🔒 The rest of this post is for paid subscribers.**

Subscribe to get:
- Complete step-by-step instructions
- All troubleshooting guidance
- Copyable prompts and templates
- Extension ideas and advanced features

**Not ready to subscribe?** Get Weeks 1-12 as a downloadable package for $39 (one-time payment).

---

`;

// Directory containing the markdown files
const CONTENT_DIR = path.join(__dirname, '../fieldguide-substack-content/substack-posts-REVISED');

// Files to process (weeks 5-21)
const WEEKS_TO_PROCESS = Array.from({ length: 17 }, (_, i) => {
  const weekNum = String(i + 5).padStart(2, '0');
  return `week-${weekNum}-REVISED.md`;
});

function findInsertionPoint(content) {
  // Look for the first occurrence of a step heading or main content section
  // Patterns to match various heading levels and formats
  const stepPatterns = [
    /^## Step \d+/m,
    /^### Step \d+/m,
    /^## \d+\./m,
    /^### \d+\./m,
    /^## STEP \d+/m,
    /^### STEP \d+/m,
    /^## Step 0\d:/m,
    /^### Step 0\d:/m,
  ];

  let earliestMatch = -1;

  for (const pattern of stepPatterns) {
    const match = content.match(pattern);
    if (match && match.index !== undefined) {
      if (earliestMatch === -1 || match.index < earliestMatch) {
        earliestMatch = match.index;
      }
    }
  }

  // If no step heading found, look for common section patterns
  if (earliestMatch === -1) {
    const fallbackPatterns = [
      /^## The Practice/m,
      /^### The Practice/m,
      /^## Building It/m,
      /^## How to Build/m,
      /^## The Real Question/m,
      /^## Research as Practice/m,
      /^## When to Use/m,
      /^## Patterns/m,
      /^## Review Your/m,
      /^## Iteration vs/m,
      /^## The Cost/m,
      /^## When One Agent/m,
      /^## Jean Boulton/m,
      /^## Masahiro Mori/m,
      /^## Understanding/m,
      /^## Your Pattern/m,
      /^## Fragility and Interconnection/m,
      /^## Guide 04/m,
      /^## Two Meanings of Craft/m,
      /^## The Daemon Tradition/m,
      /^## From Practices to Classes/m,
      /^## Stewart Brand/m,
      /^## What Makes a Class/m,
    ];

    for (const pattern of fallbackPatterns) {
      const match = content.match(pattern);
      if (match && match.index !== undefined) {
        earliestMatch = match.index;
        break;
      }
    }
  }

  return earliestMatch;
}

function addPaywallMarker(filePath, dryRun = false) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Check if paywall already exists
  if (content.includes('<!-- PAYWALL')) {
    console.log(`⚠️  Skipping ${path.basename(filePath)} - paywall already exists`);
    return false;
  }

  const insertionPoint = findInsertionPoint(content);

  if (insertionPoint === -1) {
    console.log(`❌ Could not find insertion point in ${path.basename(filePath)}`);
    return false;
  }

  // Insert the paywall marker
  const before = content.slice(0, insertionPoint);
  const after = content.slice(insertionPoint);
  const newContent = before + PAYWALL_MARKER + after;

  if (dryRun) {
    console.log(`✓ Would insert paywall in ${path.basename(filePath)} at position ${insertionPoint}`);
    // Show context around insertion
    const contextStart = Math.max(0, insertionPoint - 100);
    const contextEnd = Math.min(content.length, insertionPoint + 100);
    console.log('Context:', content.slice(contextStart, contextEnd).replace(/\n/g, '\\n').slice(0, 150));
    return true;
  }

  // Write the updated content
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`✅ Added paywall to ${path.basename(filePath)}`);
  return true;
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const testOnly = args.includes('--test');

  console.log('🔒 Paywall Marker Script\n');

  if (dryRun) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }

  if (testOnly) {
    console.log('🧪 TEST MODE - Processing week-05 only\n');
    const testFile = path.join(CONTENT_DIR, 'week-05-REVISED.md');

    if (!fs.existsSync(testFile)) {
      console.error(`❌ Test file not found: ${testFile}`);
      process.exit(1);
    }

    addPaywallMarker(testFile, dryRun);
    process.exit(0);
  }

  // Process all weeks 5-21
  console.log(`Processing ${WEEKS_TO_PROCESS.length} files...\n`);

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const filename of WEEKS_TO_PROCESS) {
    const filePath = path.join(CONTENT_DIR, filename);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filename}`);
      errorCount++;
      continue;
    }

    const result = addPaywallMarker(filePath, dryRun);
    if (result === false && !fs.readFileSync(filePath, 'utf8').includes('<!-- PAYWALL')) {
      errorCount++;
    } else if (result === false) {
      skipCount++;
    } else {
      successCount++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ⚠️  Skipped: ${skipCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);

  if (!dryRun && successCount > 0) {
    console.log(`\n✓ Complete! ${successCount} files updated.`);
  }
}

// Run the script
main();
