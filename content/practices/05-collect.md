---
num: "05"
slug: collect
title: Collect
build: Record Shelf
principle: Physical things deserve digital memory
---

## Overview

Collections matter. Whether it's vinyl, books, tools, plants, or anything else—the things we accumulate tell a story. But physical collections are hard to browse when you're not home, and easy to forget about. This is your catalog. Not a marketplace, not a social app—just a record of what you have.

## What You'll Build

A catalog for your collection (we'll use vinyl records, but adapt to whatever you collect). Add items with key details, photos, notes. Browse and search. Track what you want but don't have yet.

## Steps

### 01. Define your collection

Tell Claude what you collect and what you want to track about each item.

```prompt
Build me a vinyl record catalog. For each record I want to track: artist, album title, year, format (LP/EP/7"), condition, and notes. Show all records in a grid with album art. Store in localStorage.
```

> **Tip:** Change the fields to match what YOU collect. Books? Tools? Sneakers? Make it yours.

![Record shelf catalog - grid view with filters and search](/screenshots/practice-05-collect/01-record-shelf.png)

### 02. Add your first items

Add 5-10 real items from your collection. Take photos if you want. Notice what information matters to you.

### 03. Add a want-list

Track what you're looking for but don't have yet.

```prompt
Add a separate "Want List" section for records I want but don't own. Same fields, but marked as wanted. Let me move items from want-list to collection when I acquire them.
```

### 04. Add search and filter

Find things quickly as your collection grows.

```prompt
Add search that filters by artist or album title. Add filter buttons for format (show only LPs, only 7"s, etc.).
```

### 05. Add photos

Make it visual.

```prompt
Let me add a photo for each record. Show it as the album cover in the grid view. Store images in localStorage as base64.
```

> **Tip:** Large photos will slow things down. Ask Claude to resize them on upload.

### 06. Add collection stats

See your collection at a glance.

```prompt
Show me stats: total records, breakdown by format, by decade, most common artist.
```

### 07. Connect to Discogs API

Stop typing everything manually. Discogs has a massive database of music releases—use it.

```prompt
Add Discogs API integration. Let me search for a record by artist and title, show matching results from Discogs, and when I click one, auto-fill all the fields (artist, album, year, format, label, catalog number). Include the Discogs cover image. I'll need to add my Discogs API token.
```

> **Tip:** Get a free Discogs API token at discogs.com/settings/developers. You don't need to create an "app"—just generate a personal token.

### 08. Add barcode scanning

Even faster than searching. Scan the barcode on the record and let Discogs identify it.

```prompt
Add barcode scanning using the device camera. When I scan a barcode, search Discogs for that barcode and auto-fill the record details if found. Show a "not found" message if the barcode isn't in the database.
```

> **Tip:** This requires camera access and works best on mobile. The barcode is usually on the back of the sleeve or on a sticker.

## Additional Prompts

### Random pick
When you can't decide what to play.
```prompt
Add a "random pick" button that suggests a record to listen to
```

### Ratings
When you want to track your favorites.
```prompt
Let me rate records 1-5 stars and sort by rating
```

### Last played
When you want to rediscover forgotten albums.
```prompt
Add last played date and sort by least recently played
```

### Shareable stats
When you want to show off your collection.
```prompt
Generate a shareable image of my collection stats
```

### Catalog numbers
When you want to track specific pressings.
```prompt
Add Discogs-style catalog numbers
```

### Discogs collection sync
When you already have a Discogs collection.
```prompt
Add an import feature that pulls my existing collection from Discogs. Use my Discogs username to fetch all releases in my collection and add them to my local catalog.
```

### Price lookup
When you're curious what your records are worth.
```prompt
For each record, show the current median price from Discogs marketplace. Add a "collection value" total to my stats.
```

### Release variants
When you want to track which exact pressing you have.
```prompt
When I search Discogs, show different pressings/variants of the same album (country, year, label). Let me pick the exact one I own.
```

## Troubleshooting

### Images make the app slow
Reduce image quality: "Compress images to max 200KB on upload"

### Can't find items
Make search case-insensitive. Check for typos.

### Running out of localStorage space
localStorage has ~5MB limit. Export and clear old data, or ask about IndexedDB.

### Grid layout looks uneven
Ask Claude to "make all album covers the same size with consistent spacing"

### Discogs API returns "401 Unauthorized"
Your API token is wrong or expired. Go to discogs.com/settings/developers and generate a new personal access token.

### Discogs search returns too many results
Be more specific. Include artist AND album title. Or use the release year to narrow it down.

### Barcode not found in Discogs
Not every release has a barcode in their database. Try searching by artist/title instead, or add it manually.

### CORS errors with Discogs API
You're probably running locally. Either use a proxy server, or ask Claude to add a simple backend to handle the API requests.

## Reflection

- Does cataloging change how you see your collection?
- What items did you forget you had?
- Is your want-list realistic or aspirational?
- What would you tell someone about your collection based on the stats?

## Extensions

- Two-way Discogs sync (changes in your app update Discogs and vice versa)
- Price history charts (track value changes over time)
- Lending tracker (who has your stuff and for how long)
- Print labels for physical organization (spines, dividers)
- Audio fingerprinting to identify unlabeled records
- Export to CSV for spreadsheet analysis
- Integration with Last.fm to auto-track plays
