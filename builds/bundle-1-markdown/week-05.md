# Week 5: Practice 02 - Capture (Link Catcher)

*You've built your first tool and learned the loop. This week we're building something more complex: a link catcher that actually saves, searches, and organizes your bookmarks.*

---

**Build:** Link Catcher
**Principle:** Don't let things slip away

## Why Build This?

You have 47 browser tabs open right now. Maybe more. Each one represents something you thought was worth keeping: an article to read later, a tool to explore, a reference you might need.

Browser bookmarks exist. But bookmarks become graveyards. You bookmark things and never look at them again. They sync everywhere you don't want them. The folders get messy. There's no way to add context about why you saved something or what you were thinking at the time.

Link management apps exist too. Pocket, Raindrop, Instapaper. They're polished and feature-rich. They also want your data, show you algorithmic recommendations, require accounts, cost money, and might disappear when the company pivots or shuts down.

This tool forces intention. When you save a link, you add a note about why it matters. You tag it with your own taxonomy. You search with your own words. The tool works exactly how you think, because you built it for yourself.

Also: you own the data. It's in localStorage on your computer. Export it whenever you want. The tool costs nothing, requires no account, tracks nothing, and will keep working as long as you have the HTML file.

## What You'll Build

A simple web app where you can:
- Paste a URL and give it a title
- Add notes and tags
- See all your saved links in a list
- Filter by tag or search
- Delete links you no longer need

Everything stored locally on your computer. No sync, no cloud, no tracking.

---

## Step 01: Start with the basics

Ask Claude for a simple link-saving app. Don't ask for tags or search yet—start with the core.

**Prompt:**
```
Build me a single-page web app for saving links. I want to paste a URL, add a title and optional notes, then see all my saved links in a list below the form. Use HTML, CSS, and vanilla JavaScript. Store links in localStorage so they persist.
```

**Tip:** Start simple. Add more later. Focus the first version on doing one thing well.

Save the code as `link-catcher.html` and open it in your browser.

---

## Step 02: Test and observe

Add 3-4 real links you've been meaning to save. Notice what's missing. What's annoying? What do you wish it did? Write these down.

This is the most important step. You need to actually use the thing before you know what it needs.

---

## Step 03: Add tags

Tags let you categorize without folders. Ask Claude to add tagging.

**Prompt:**
```
Add a tags field to the link form. Let me type comma-separated tags when saving a link. Show tags as small pills under each link in the list. When I click a tag, filter the list to show only links with that tag.
```

**Tip:** If the tags look ugly, tell Claude what you want them to look like. "Make the tags smaller" or "use a subtle background color" works.

---

## Step 04: Add search

When you have more than a dozen links, you'll want search.

**Prompt:**
```
Add a search box above the link list. As I type, filter the links to show only those where the title, notes, or tags contain my search text. Make it filter in real-time as I type.
```

Test it. Search for something. Does it find what you expect?

---

## Step 05: Add timestamps and delete

Know when you saved something. Remove what you don't need.

**Prompt:**
```
Show the date each link was saved, formatted like "Jan 15, 2024". Add a delete button for each link. When I click delete, show a confirmation before removing it.
```

**Tip:** If the date format isn't what you want, just tell Claude: "Format dates like '2 days ago' instead" or "Just show the month and day".

---

## Step 06: Make it yours

Change the colors. Adjust the spacing. Add your own fields. This is yours now.

Maybe you want a "priority" field. Maybe you want to group links by project. Maybe you want the most recent links at the top.

Ask for what you want. See what Claude builds. Refine until it feels right.

---

## Additional Prompts

**Export your data:**
```
Add an "Export" button that downloads all my saved links as a JSON file. Name the file "links-backup-[date].json".
```
*Use when you want to back up your links or move them to another computer.*

**Keyboard shortcuts:**
```
Add keyboard shortcuts: Cmd+V (or Ctrl+V on Windows) should focus the URL field. Escape should clear any active filters and search. Cmd+K should focus the search box.
```
*Use when you're a keyboard person and want faster interaction.*

**Sortable list:**
```
Let me sort the link list by date saved (newest or oldest first) or alphabetically by title. Add small buttons or a dropdown to switch between sort orders.
```
*Use when you want to find your oldest saves or browse alphabetically.*

**Bookmarklet:**
```
Create a bookmarklet I can drag to my browser bookmarks bar. When I click it on any page, it should open my Link Catcher with the current page's URL and title pre-filled.
```
*Use when you want to save links without manually copying URLs.*

**Import from browser:**
```
Add an "Import" button that accepts a browser bookmarks HTML file and imports all the links with their titles.
```
*Use when you want to migrate your existing bookmarks.*

---

## When Things Break

**Problem:** All saved links disappear after closing the browser
**Likely cause:** localStorage isn't working in your browser or you're in private/incognito mode
**Solution:** Check the browser console (press F12) for errors. Some browsers disable localStorage for local files or in private mode. Try opening the file normally (not private mode) or ask Claude: "Check if localStorage is working correctly. Add console logs to show when data is saved and loaded."

**Problem:** The delete button removes the wrong link
**Likely cause:** Each link doesn't have a unique ID being passed to the delete function
**Solution:** Ask Claude: "Make sure each delete button knows which specific link to delete. Each link needs a unique ID that gets passed to the delete function."

**Problem:** Tags don't filter the links properly
**Likely cause:** Case sensitivity or extra whitespace in tag comparison
**Solution:** Ask Claude: "Show me the filter logic for tags. Make it case-insensitive and trim whitespace so 'design' matches 'Design' and ' design '."

**Problem:** Styling looks wrong or elements are misaligned
**Likely cause:** CSS isn't loading properly or there's a layout conflict
**Solution:** Take a screenshot and share it with Claude. Say: "This doesn't look right. The [specific element] should be [what you want]. Here's what it looks like now: [attach screenshot]."

**Problem:** Search is slow when I have many links
**Likely cause:** Search filters on every keystroke without delay
**Solution:** You probably don't have enough links for this to matter yet. But if it's slow, ask Claude: "Debounce the search so it only filters 300ms after I stop typing."

**Problem:** Can't add links with certain special characters in the URL
**Likely cause:** URL isn't being encoded or validated properly
**Solution:** Ask Claude: "Validate and properly encode URLs before saving them. Handle special characters and ensure the URL format is correct."

**Problem:** Links open in the same tab instead of a new tab
**Likely cause:** Links don't have the target="_blank" attribute
**Solution:** Ask Claude: "Make all saved links open in a new tab when clicked."

---

## Reflection

After you've used your link catcher for a few days, consider:
- What did you actually end up saving? Does it match what you thought you'd save?
- Did you add any fields or features Claude didn't suggest?
- How is this different from your browser bookmarks? Better? Worse? Just different?
- What would make you actually use this instead of leaving tabs open?

---

## Going Further

Ideas if you want to keep building:
- Sync across devices (requires a backend—this is a bigger project)
- Auto-fetch page titles and descriptions from URLs
- Generate a weekly digest email of your saved links
- Add "read later" status and mark links as read
- Group links by project or topic with drag-and-drop
- Add favicons for each link automatically

---

**Next week:** Practice 03 - Remember (Daily Log). A simple journal where you write an entry each day and browse back through past entries. No prompts. No streaks. Just a place to dump thoughts.

See you then.
