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

## Troubleshooting

### Images make the app slow
Reduce image quality: "Compress images to max 200KB on upload"

### Can't find items
Make search case-insensitive. Check for typos.

### Running out of localStorage space
localStorage has ~5MB limit. Export and clear old data, or ask about IndexedDB.

### Grid layout looks uneven
Ask Claude to "make all album covers the same size with consistent spacing"

## Reflection

- Does cataloging change how you see your collection?
- What items did you forget you had?
- Is your want-list realistic or aspirational?
- What would you tell someone about your collection based on the stats?

## Extensions

- Barcode scanning to add items (requires camera access)
- Integration with Discogs API for auto-fill
- Value tracking (prices, trends)
- Lending tracker (who has your stuff)
- Print labels for physical organization
