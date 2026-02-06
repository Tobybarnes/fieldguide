---
num: "03"
slug: remember
title: Remember
build: Daily Log
principle: Write it down or lose it
---

## Overview

Your brain isn't a storage device—it's a processor. The things that matter need to live somewhere outside your head. This is a simple daily journal: text and timestamps, nothing else. No prompts asking how you feel on a scale of 1-10. No streaks. Just a place to dump thoughts at the end of each day.

## What You'll Build

A daily log where you write an entry, it saves with today's date, and you can browse back through past entries. Everything stored locally on your computer.

## Steps

### 01. Start with the core

Ask Claude for a simple daily journal. Don't ask for search or export yet—just the basics.

```prompt
Build me a daily journal web app. I want a text area where I can write today's entry, a save button, and a list of past entries below showing the date and content. Use localStorage to save entries. Each entry should be tied to a specific date.
```

> **Tip:** Don't ask for search or export yet. Just the basics.

### 02. Write your first entry

Write something real. What happened today? What are you thinking about? The app only becomes useful when you use it.

### 03. Add date navigation

Let yourself edit past entries and navigate by date.

```prompt
Let me click on a date in the past entries list to edit that day's entry. If I navigate away and come back, show today's entry by default.
```

> **Tip:** If editing feels weird, tell Claude what you expected to happen instead.

### 04. Add a calendar view

See at a glance which days have entries.

```prompt
Add a small monthly calendar that shows which days have entries (maybe with a dot). Let me click a date to jump to that entry.
```

### 05. Add search

Find past entries by keyword.

```prompt
Add a search box that filters entries to show only those containing my search text. Highlight the matching words.
```

> **Tip:** If search is slow, you probably don't have enough entries yet for it to matter.

### 06. Add export

Back up your journal.

```prompt
Add an Export button that downloads all my entries as a single text file, with dates as headers.
```

## Additional Prompts

### Word count
When you want to track how much you write.
```prompt
Add word count for each entry
```

### Writing streak
When you want gentle accountability without pressure.
```prompt
Show how many consecutive days I've written (but don't make it feel like a streak I need to maintain)
```

### Random past entry
When you want to revisit and reflect on the past.
```prompt
Add a "random past entry" button that shows me something I wrote before
```

### Tags
When you want to categorize and find themed entries.
```prompt
Let me add tags to entries and filter by tag
```

## Troubleshooting

### Entries disappear
localStorage might be cleared. Ask Claude to add an export reminder after 10 entries.

### Wrong date showing
Check your timezone handling. Ask Claude to use your local date.

### Calendar doesn't update
Refresh the page, or ask Claude to update the calendar when you save.

### Text formatting lost
You're probably saving plain text. If you want formatting, ask for a rich text editor (more complex).

## Reflection

- What time of day do you actually write?
- Are you writing for yourself or for a future reader?
- What would you lose if these entries disappeared?
- Has writing changed what you notice during the day?

## Extensions

- Add end-of-week summary prompts
- Email yourself a weekly digest
- Add mood or energy indicators (if that's useful to you)
- Encrypt entries for privacy
- Sync across devices (requires backend)
