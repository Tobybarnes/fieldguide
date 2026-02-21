# Week 8: Practice 05 - Collect (Record Shelf)

*This week: a catalog for your collection. Vinyl, books, tools, plants—whatever you collect. Not a marketplace, not a social app. Just a record of what you have.*

---

**Build:** Record Shelf
**Principle:** Physical things deserve digital memory

## Why Build This?

You collect something. Vinyl records, books, tools, plants, vintage cameras, sneakers, board games. The collection matters to you. Each piece has a story—where you got it, why you wanted it, how it fits with the others.

Discogs exists for records. Goodreads for books. LibraryThing. Cataloging apps. They let you track your collection online, see what others have, compare prices, get recommendations.

They also make your private collection public by default. They use your data to suggest purchases. They show you what your collection is "worth" based on market prices, turning curation into investment tracking. They're designed for collectors who think like traders, not for people who just want to remember what they have.

This tool is private. No one sees your collection unless you show them. No recommendations. No social features. No market prices (unless you specifically want that). Just a catalog that works how you think.

Practical benefits: you can browse your collection from anywhere. You remember what you have before buying a duplicate. You can lend things and remember who has what. You see patterns in what you've collected over time.

But mainly: you're treating your collection with the care it deserves. Digital memory for physical things.

## What You'll Build

A catalog for your collection where you:
- Add items with key details
- Include photos
- Browse and search
- Track what you want but don't have yet

We'll use vinyl records as the example, but you can adapt this to whatever you collect.

---

## Step 01: Define your collection

Tell Claude what you collect and what you want to track about each item.

**Prompt:**
```
Build me a vinyl record catalog. For each record I want to track: artist, album title, year, format (LP/EP/7"), condition, and notes. Show all records in a grid with album art. Store in localStorage.
```

**Tip:** Change the fields to match what YOU collect. Books? Tools? Sneakers? Make it yours.

Save as `record-shelf.html` and open it.

---

## Step 02: Add your first items

Add 5-10 real items from your collection. Take photos if you want. Notice what information matters to you.

Do you care about condition? Original pressing vs reissue? Where you bought it? What fields did you wish you had?

---

## Step 03: Add a want-list

Track what you're looking for but don't have yet.

**Prompt:**
```
Add a separate "Want List" section for records I want but don't own. Same fields, but marked as wanted. Let me move items from want-list to collection when I acquire them.
```

This is useful when you're at a record store or browsing online. You know what you're looking for.

---

## Step 04: Add search and filter

Find things quickly as your collection grows.

**Prompt:**
```
Add search that filters by artist or album title. Add filter buttons for format (show only LPs, only 7"s, etc.).
```

---

## Step 05: Add photos

Make it visual.

**Prompt:**
```
Let me add a photo for each record. Show it as the album cover in the grid view. Store images in localStorage as base64.
```

**Tip:** Large photos will slow things down. Ask Claude to resize them on upload.

---

## Step 06: Add collection stats

See your collection at a glance.

**Prompt:**
```
Show me stats: total records, breakdown by format, by decade, most common artist.
```

---

## Step 07: Connect to Discogs API

Stop typing everything manually. Discogs has a massive database of music releases—use it.

**Prompt:**
```
Add Discogs API integration. Let me search for a record by artist and title, show matching results from Discogs, and when I click one, auto-fill all the fields (artist, album, year, format, label, catalog number). Include the Discogs cover image. I'll need to add my Discogs API token.
```

**Tip:** Get a free Discogs API token at discogs.com/settings/developers. You don't need to create an "app"—just generate a personal token.

---

## Additional Prompts

**Random pick:**
```
Add a "random pick" button that suggests a record to listen to
```
*Use when you can't decide what to play.*

**Ratings:**
```
Let me rate records 1-5 stars and sort by rating
```
*Use when you want to track your favorites.*

**Last played:**
```
Add last played date and sort by least recently played
```
*Use when you want to rediscover forgotten albums.*

**Shareable stats:**
```
Generate a shareable image of my collection stats
```
*Use when you want to show off your collection.*

**Discogs collection sync:**
```
Add an import feature that pulls my existing collection from Discogs. Use my Discogs username to fetch all releases in my collection and add them to my local catalog.
```
*Use when you already have a Discogs collection.*

**Price lookup:**
```
For each record, show the current median price from Discogs marketplace. Add a "collection value" total to my stats.
```
*Use when you're curious what your records are worth.*

---

## When Things Break

**Problem:** Page loads very slowly or freezes with many items
**Likely cause:** Images stored as base64 are making the app too large
**Solution:** Ask Claude: "Compress uploaded images to max 200KB before storing. Resize images to a maximum width of 800px to reduce file size."

**Problem:** "Quota exceeded" error when adding new items
**Likely cause:** localStorage has a 5-10MB limit and you've hit it
**Solution:** You've stored too much data. Options: (1) Delete old items you don't need, (2) Ask Claude: "Add an export feature and warn me when I'm near the storage limit," or (3) Ask Claude: "Switch from localStorage to IndexedDB for larger storage capacity."

**Problem:** Can't find items even though they're in my collection
**Likely cause:** Search is case-sensitive or only searches titles
**Solution:** Ask Claude: "Make search case-insensitive and search across all fields (title, artist, year, notes). Show partial matches."

**Problem:** Discogs API returns "401 Unauthorized" error
**Likely cause:** API token is missing, incorrect, or expired
**Solution:** Go to discogs.com/settings/developers and generate a new personal access token. Copy it and tell Claude: "Replace the Discogs API token in my code with this new one: [paste token]."

**Problem:** Discogs search returns too many irrelevant results
**Likely cause:** Search query is too broad
**Solution:** Be more specific when searching. Include both artist AND album title. Add the release year if you know it. Example: "Radiohead OK Computer 1997" instead of just "OK Computer."

**Problem:** CORS errors when trying to use Discogs API
**Likely cause:** Browser blocks cross-origin requests from local files
**Solution:** Ask Claude: "Add a simple proxy to handle Discogs API requests so I don't get CORS errors when running locally."

**Problem:** Grid layout looks uneven with different-sized covers
**Likely cause:** Album covers have different aspect ratios
**Solution:** Ask Claude: "Make all album covers display as the same size squares with consistent spacing. Crop images to fit if needed."

**Problem:** Accidentally added the wrong item and can't undo
**Likely cause:** No confirmation before deleting or editing
**Solution:** Ask Claude: "Add a confirmation dialog before deleting items. Also add an edit button so I can fix mistakes without deleting and re-adding."

---

## Reflection

After you've cataloged your collection, consider:
- Does cataloging change how you see your collection?
- What items did you forget you had?
- Is your want-list realistic or aspirational?
- What would you tell someone about your collection based on the stats?

---

## Going Further

Ideas if you want to keep building:

**Barcode scanning (Advanced):**
Scan the barcode on records using your device camera and auto-fill details from Discogs. Note: This requires camera permissions, works best on mobile, and involves CORS considerations when calling the Discogs API. Ask Claude: "Add barcode scanning using the device camera. When I scan a barcode, search Discogs for that barcode and auto-fill the record details."

**Other extensions:**
- Two-way Discogs sync (changes in your app update Discogs and vice versa)
- Price history charts (track value changes over time)
- Lending tracker (who has your stuff and for how long)
- Print labels for physical organization (spines, dividers)
- Audio fingerprinting to identify unlabeled records
- Export to CSV for spreadsheet analysis
- Integration with Last.fm to auto-track plays

---

## On Collecting

Collecting is a form of curation. You choose what matters enough to keep. You organize it. You remember where you got each piece.

Digital catalogs don't replace the physical experience. You still need to flip through the stack, pull something out, hold it. But having a searchable record means you can browse your collection from anywhere. You can remember what you have before you buy a duplicate. You can see patterns in what you've been drawn to over time.

This tool respects the collection. It doesn't try to monetize it or turn it into content. It just helps you remember.

---

**Next week:** Practice 06 - See (Photo Log). A simple visual journal. Take a photo each day. Build up a grid over time. See your life in images.

See you then.
