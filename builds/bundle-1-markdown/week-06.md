# Week 6: Remember (Practice 03: Daily Log)

*Week 6 of Field Guide. You've built a personal page and a link catcher. This week: a daily log. Not for productivity tracking—for remembering what you noticed.*

---

## Daily Practice

Gary Snyder kept journals throughout his life—recording observations, thoughts, work done. Not for publication (though they eventually were). For practice.

The daily log you're building serves the same purpose. Not to perform productivity. Not to track metrics. To create a record of what you noticed, what you thought, what happened.

Snyder: "The real work is to make the world as real as it is, and to find ourselves as real as we are within it."

Writing daily makes you real to yourself. You see patterns you might otherwise miss. You remember what matters. You practice attention.

The tool makes writing easier. Remove friction, increase practice. Simple as that.

---

## Practice 03: Remember

**Build:** Daily Log
**Principle:** Writing as attention practice

### Why Build This?

You might already use Day One, Notion, Bear, or any of the dozens of journaling apps. They're polished. They have beautiful typography. They sync across devices. They offer prompts, templates, mood tracking, and habit streaks.

They also gamify your thoughts. Streak counters create guilt when you skip a day. Prompts channel your thinking into predefined patterns. Feature bloat makes the interface busy. Subscription models mean your journal might disappear if you stop paying.

This tool respects the practice. No prompts telling you what to write. No streaks making you feel bad about natural rhythms. No features you didn't ask for. No subscription that might end.

Just a text box, a timestamp, and your thoughts. Stored locally. Always available. Completely private.

The simplicity removes friction. When there's nothing between you and the blank page—no UI to navigate, no features to consider—you're more likely to actually write. The tool disappears. The practice remains.

### What You'll Build

A simple journal where you write daily entries. Text and timestamps. No prompts. No streaks. No gamification. Just a place to dump thoughts.

Features:
- Write an entry with today's date auto-filled
- See all your past entries (most recent first)
- Search through entries
- Optional: calendar view showing which days you wrote
- Storage: localStorage (all data stays on your device)

### Why This Tool

Most journaling apps are loaded with features you never asked for: prompts, mood tracking, streaks, sharing, premium tiers. They try to turn journaling into something you optimize.

This tool lets you write and see what you've written.

The practice lives in showing up to write. The tool gets out of the way.

### Step 01: Describe what you want

**Prompt to copy:**

```
I want to build a daily journal as a single HTML file.

Features:
- Text area at the top to write an entry
- Button to save the entry with today's date
- Display all saved entries below, most recent first
- Each entry shows: date, text, and a delete button
- Add a search box that filters entries in real-time
- Store everything in localStorage
- Keep the design clean and minimal

Make it work as a standalone file I can open in my browser.
```

### Step 02: Test the basics

Claude will generate the code. Save it as `journal.html` and open it.

Try:
- Writing an entry and saving it
- Writing another entry
- Refreshing the page (your entries should persist)
- Searching for a word in your entries
- Deleting an entry

Does it work? Good. Now refine.

### Step 03: Add date navigation

Go back to Claude:

**Prompt to copy:**

```
Add a calendar view that:
- Shows the current month
- Highlights days where I wrote entries
- When I click a highlighted day, show only that day's entries
- Add "Previous Month" and "Next Month" buttons
```

Test this. Can you navigate to past months? Can you see which days you wrote?

### Step 04: Improve the writing experience

**Prompt to copy:**

```
Make these improvements to the text area:
- Auto-focus the text area when the page loads
- Add character count below the text area
- Make the text area bigger (taller)
- Add a keyboard shortcut: Cmd+Enter (Mac) or Ctrl+Enter (Windows) to save
```

Test: Open the page. Is your cursor already in the text area? Can you save with the keyboard shortcut?

### Step 05: Polish the visual design

**Prompt to copy:**

```
Update the design:
- Use a warm, paper-like background color (#FFF8F0)
- Make the text area look like a notepad with subtle lines
- Use a serif font for entries (like Georgia or Merriweather)
- Add subtle shadows to make entries feel like cards
- Increase spacing between elements
```

This is where the tool starts to feel like yours. Adjust colors, fonts, spacing until it feels right.

### Extensions (Optional)

If you want to keep building:

**Entry metadata:**
```
Add timestamps (not just dates) to each entry.
Show "Written at 3:24 PM" below each entry.
```

**Export functionality:**
```
Add a button to export all entries as a .txt file.
Each entry should be formatted as:
Date - Time
Entry text
---
```

**Word count stats:**
```
Add a stats section showing:
- Total entries
- Total words written
- Longest entry
- Writing streak (consecutive days)
```

**Tags:**
```
Let me add optional tags to entries.
Show all tags used across all entries.
Let me filter entries by tag.
```

**Entry editing:**
```
Add an "Edit" button to each entry.
When clicked, load the entry text into the text area.
Replace "Save Entry" with "Update Entry" when editing.
```

## Troubleshooting

**Problem:** All journal entries disappear when I refresh the page
**Likely cause:** localStorage is blocked or not working in your browser
**Solution:** Check the browser console (press F12) for errors. Make sure you're opening the file with the `file://` protocol. Some browsers block localStorage for local files—if this is the issue, ask Claude: "Set up a simple local server so localStorage works properly."

**Problem:** Calendar doesn't highlight days that have entries
**Likely cause:** Date format mismatch between saved entries and calendar display
**Solution:** Ask Claude: "Debug why the calendar isn't highlighting days with entries. Make sure the date format matches between saving and displaying."

**Problem:** Can't find entries when searching
**Likely cause:** Search is case-sensitive or only searches titles (not content)
**Solution:** Ask Claude: "Make the search case-insensitive and search both titles and entry content so I can find 'writing' when I search for 'Writing'."

**Problem:** Text area is too small on mobile devices
**Likely cause:** Fixed sizing doesn't adapt to screen size
**Solution:** Ask Claude: "Make the text area responsive—bigger on desktop, still usable on mobile. It should resize based on screen width."

**Problem:** Lost all my entries and can't recover them
**Likely cause:** localStorage was cleared or the browser cache was deleted
**Solution:** There's no built-in backup. Ask Claude to add: "Add an export button that saves all entries to a JSON file. Also add an import button to restore from backup."

**Problem:** Want to write entries for past dates
**Likely cause:** Date picker defaults to today
**Solution:** Ask Claude: "Let me select any date when creating an entry, not just today. Add a date picker to the entry form."

**Problem:** Entries are saved but show up in wrong order
**Likely cause:** Sorting logic isn't working correctly
**Solution:** Ask Claude: "Sort entries by date in reverse chronological order (newest first). Make sure the date comparison works properly."

## Reflection

Gary Snyder wrote about "the common work of the tribe"—the daily tasks that keep you whole. Writing is about noticing, not performance.

This tool makes writing easier. The practice is still yours.

Some questions:
- Will you actually use this daily?
- What makes the difference between a tool you use and a tool you abandon?
- Is there something missing that would make you write more often?

The best tools disappear. You stop thinking about the tool and just do the thing. If this journal feels invisible—if you just write without thinking about the interface—it's working.

## Next Week

Practice 04: Move. You'll build a training log for tracking workouts. Sets, reps, progress over time. Same loop, different domain.

---

**Note:** If you're not a journaler, don't force it. Build this as practice with the loop, then move on. Not every tool you build needs to become a daily habit. Some are just learning exercises.
