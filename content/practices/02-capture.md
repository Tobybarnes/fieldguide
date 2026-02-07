---
num: "02"
slug: capture
title: Capture
build: Link Catcher
principle: Don't let things slip away
---

## Overview

Tabs pile up. Bookmarks become graveyards. Pocket's recommendations drown your actual interests. This is your own link database. No algorithm, no suggestions, just what you saved.

## What You'll Build

A simple web app where you can paste a URL and give it a title, add notes and tags, see all your saved links in a list, filter by tag or search, and delete links you no longer need.

## Steps

### 01. Start with the basics

Ask Claude for a simple link-saving app. Don't ask for tags or search yet—start with the core.

```prompt
Build me a single-page web app for saving links. I want to paste a URL, add a title and optional notes, then see all my saved links in a list below the form. Use HTML, CSS, and vanilla JavaScript. Store links in localStorage so they persist.
```

> **Tip:** Start simple. You can always add more later. The first version should do one thing well.

![Basic link catcher - URL, title, notes, and a save button](/screenshots/practice-02-capture/01-basic.png)

### 02. Test and observe

Add 3-4 real links you've been meaning to save. Notice what's missing. What's annoying? What do you wish it did? Write these down.

### 03. Add tags

Tags let you categorize without folders. Ask Claude to add tagging.

```prompt
Add a tags field to the link form. Let me type comma-separated tags when saving a link. Show tags as small pills under each link in the list. When I click a tag, filter the list to show only links with that tag.
```

> **Tip:** If the tags look ugly, tell Claude what you want them to look like. "Make the tags smaller" or "use a subtle background color" works.

### 04. Add search

When you have more than a dozen links, you'll want search.

```prompt
Add a search box above the link list. As I type, filter the links to show only those where the title, notes, or tags contain my search text. Make it filter in real-time as I type.
```

### 05. Add timestamps and delete

Know when you saved something. Remove what you don't need.

```prompt
Show the date each link was saved, formatted like "Jan 15, 2024". Add a delete button for each link. When I click delete, show a confirmation before removing it.
```

> **Tip:** If the date format isn't what you want, just tell Claude: "Format dates like '2 days ago' instead" or "Just show the month and day".

![Link catcher with tags and search - filter by tag, search in real-time](/screenshots/practice-02-capture/02-with-tags.png)

### 06. Make it yours

Change the colors. Adjust the spacing. Add your own fields. This is yours now.

## Additional Prompts

### Export your data
When you want to back up your links or move them to another computer.
```prompt
Add an "Export" button that downloads all my saved links as a JSON file. Name the file "links-backup-[date].json".
```

### Keyboard shortcuts
When you're a keyboard person and want faster interaction.
```prompt
Add keyboard shortcuts: Cmd+V (or Ctrl+V on Windows) should focus the URL field. Escape should clear any active filters and search. Cmd+K should focus the search box.
```

### Sortable list
When you want to find your oldest saves or browse alphabetically.
```prompt
Let me sort the link list by date saved (newest or oldest first) or alphabetically by title. Add small buttons or a dropdown to switch between sort orders.
```

### Bookmarklet
When you want to save links without manually copying URLs.
```prompt
Create a bookmarklet I can drag to my browser bookmarks bar. When I click it on any page, it should open my Link Catcher with the current page's URL and title pre-filled.
```

### Import from browser
When you want to migrate your existing bookmarks.
```prompt
Add an "Import" button that accepts a browser bookmarks HTML file and imports all the links with their titles.
```

## Troubleshooting

### Links disappear after closing the browser
localStorage might not be working. Ask Claude: "Check if localStorage is being used correctly. Console.log the links array before and after saving." Some browsers in private mode disable localStorage.

### Tags don't filter properly
Ask Claude: "Show me the filter logic for tags. I want to see what's being compared." The issue is usually case sensitivity or extra whitespace.

### Styling looks wrong or broken
Take a screenshot and share it with Claude. Say: "This doesn't look right. The [specific thing] should be [what you want]." Screenshots are worth a thousand words.

### The delete button deletes the wrong link
This usually means the link ID isn't being passed correctly. Ask Claude: "Make sure each delete button knows which specific link to delete. Use a unique ID for each link."

### Search is slow with many links
You probably don't have enough links for this to matter. But if you do: "Debounce the search so it only filters 300ms after I stop typing."

## Reflection

- What did you actually end up saving? Does it match what you thought you'd save?
- Did you add any fields or features Claude didn't suggest?
- How is this different from your browser bookmarks? Better? Worse? Just different?
- What would make you actually use this instead of leaving tabs open?

## Extensions

- Sync across devices (requires a backend—this is a bigger project)
- Auto-fetch page titles and descriptions from URLs
- Generate a weekly digest email of your saved links
- Add "read later" status and mark links as read
- Group links by project or topic with drag-and-drop
- Add favicons for each link automatically
