# Week 10: Gather (Practice 07: Dashboard)

*Week 10 of Field Guide. You've built individual tools—each one focused on a specific task. This week: bring them together into a single home screen.*

---

## Finding Your Place

Gary Snyder: "Find your place on the planet. Dig in, and take responsibility from there."

He means this literally—choose a location, learn it deeply, commit to it. Know the watershed, the weather patterns, the plants and animals. Become native to where you are.

Your dashboard is the digital equivalent. It's your home screen. Your daily starting point. What you see when you open a browser.

Most people's home screen: whatever Google or their browser decided for them. Generic news. Trending topics. Someone else's idea of what matters.

Your dashboard: what YOU need to see. The weather where you are. Your tasks. Your links. Maybe a quote that grounds you.

This is taking responsibility for your digital place. Curating what you encounter daily instead of accepting defaults.

Small? Yes. But Snyder's entire philosophy is: small, consistent choices about how you live matter more than grand gestures.

Your dashboard is one of those choices.

---

## Practice 07: Gather

**Build:** Personal Dashboard
**Principle:** Curating your digital home

### Why Build This?

Your browser's default homepage shows: Google search, trending news, ads disguised as articles, "recommendations" based on your browsing history, weather for a city you don't live in.

Start page services exist: Momentum, Tabliss, Dayboard. They're prettier than the defaults. They show inspirational quotes, beautiful photos, time and weather. They also track your data, require accounts, show ads, or cost $5/month.

Most people never question this. They accept that opening a browser means seeing whatever Google or some startup decided to show them.

This tool changes that. When you open your browser, you see exactly what you put there. Your weather. Your links. Your tasks. Maybe a quote you chose. Nothing algorithmic. Nothing trending. Nothing trying to capture your attention for someone else's benefit.

Practical effect: you reclaim the most frequent moment in your digital life—opening a browser tab. Instead of being thrown into someone else's attention economy, you land in a space you designed.

Set it as your homepage. Every new tab becomes your space. Calm. Intentional. Yours.

### What You'll Build

A customizable start page that shows what matters to you when you open your browser.

Features:
- Weather for your location
- Quick links (the links you actually use)
- Today's date
- Simple task list
- Optional: time, quote of the day, calendar, notes
- Storage: localStorage for tasks and links
- Set as your browser's homepage

### Why This Tool

Browser homepages are real estate. Most people give it away to Google or their browser's new tab page. You get news you never requested, trending searches, sponsored content.

Your dashboard is yours. No ads. No algorithms. Just what you want to see every day.

This is about starting your day with intention instead of distraction.

### Step 01: Describe the basic layout

**Prompt to copy:**

```
I want to build a personal dashboard as a single HTML file.

Layout:
- Top: current date and time
- Left side: weather for Portland, Oregon (use a free weather API)
- Center: quick links section with my most-used websites
- Right side: simple task list
- Bottom: optional quote of the day

Features:
- Save links and tasks to localStorage
- Auto-update time every second
- Refresh weather every hour
- Clean, minimal design with calm colors
- Should work as browser homepage

Make it work as a standalone file.
```

### Step 02: Test the structure

Save as `dashboard.html` and open it.

Check:
- Does the time update?
- Does weather load? (You might need an API key—Claude will tell you how to get one)
- Can you add links and tasks?
- Do they persist after refresh?

### Step 03: Customize for your location and needs

**Prompt to copy:**

```
Updates:
- Change weather to my location: [Your City, State/Country]
- Add these quick links:
  [List your actual links: Gmail, Calendar, GitHub, etc.]
- Change color scheme to:
  Background: warm beige (#F5F1E8)
  Text: dark brown (#3E3022)
  Accents: forest green (#4A7C59)
```

Test: Does it feel like yours now? Does the weather match where you are?

### Step 04: Add widgets

**Prompt to copy:**

```
Add these optional sections:
- Mini calendar showing current month
- Notes section for quick thoughts
- Countdown to an important date I set
- Last updated timestamp for weather
```

Pick what you'll actually use. Don't add complexity you don't need.

### Step 05: Make it your browser homepage

This depends on your browser:

**Chrome/Edge:**
1. Settings → On startup → Open a specific page
2. Add `file:///path/to/your/dashboard.html`

**Firefox:**
1. Settings → Home → Homepage and new windows
2. Custom URLs → Add your file path

**Safari:**
1. Preferences → General → Homepage
2. Set to your file path

Test: Open a new browser window. Does your dashboard appear?

### Extensions (Optional)

**RSS feeds:**
```
Add RSS feed reader showing latest posts from blogs I follow.
Let me add/remove feeds.
Show last 5 posts from each feed.
```

**Pomodoro timer:**
```
Add work/break timer.
25-minute work sessions, 5-minute breaks.
Play sound when time is up.
```

**Habit tracker:**
```
Daily checkboxes for habits I'm tracking.
Shows streak count.
Resets at midnight.
```

**Bookmarks from your link catcher:**
```
Pull in recent links from your link catcher tool.
Show most recent 10.
Click to open in new tab.
```

**GitHub/work integration:**
```
Show my open pull requests.
Show today's calendar events.
Requires API setup.
```

## Troubleshooting

**Problem:** Weather widget shows an error or doesn't load
**Likely cause:** Missing or invalid API key for the weather service
**Solution:** Free weather APIs require an API key. Claude will tell you which API it's using. Get a free key from that service, then tell Claude: "Replace the weather API key with this one: [paste your key]."

**Problem:** Dashboard doesn't load when set as browser homepage
**Likely cause:** Incorrect file path in browser settings
**Solution:** You need the full `file://` path. On Mac: right-click the file and select "Get Info" to copy the full path. On Windows: shift+right-click and select "Copy as path." Paste this complete path into your browser's homepage setting.

**Problem:** Clock doesn't update or shows wrong time
**Likely cause:** JavaScript error preventing the time update function
**Solution:** Open the browser console (press F12) and check for errors. Copy any error messages and ask Claude: "The time isn't updating. Here's the error I'm seeing: [paste error]."

**Problem:** Dashboard takes 10+ seconds to load
**Likely cause:** Making too many API calls every time the page loads
**Solution:** Ask Claude: "Cache API data so it doesn't fetch on every load. Only refresh weather if more than 1 hour has passed. Cache other data appropriately."

**Problem:** Links to other tools don't work
**Likely cause:** Wrong file paths or links weren't updated after moving files
**Solution:** Make sure all your tool HTML files are in the same folder. Ask Claude: "Update all links to use relative paths so they work regardless of where I move the folder."

**Problem:** Dashboard looks wrong on mobile
**Likely cause:** Layout isn't responsive or components don't scale
**Solution:** Ask Claude: "Make the dashboard fully responsive. Stack widgets vertically on mobile instead of side-by-side. Ensure text and buttons are readable on small screens."

**Problem:** Want to add/remove widgets but don't know how
**Likely cause:** Need to understand the dashboard structure
**Solution:** Ask Claude: "Show me how to add a new widget to the dashboard. Explain the structure so I can customize which widgets appear."

**Problem:** Weather shows wrong location
**Likely cause:** Using IP-based location detection or hardcoded coordinates
**Solution:** Ask Claude: "Let me set my location manually. Add a settings section where I can enter my city or zip code for weather."

## Reflection

Snyder's work was about place-based practice. Living somewhere long enough to know it deeply. Taking responsibility for that specific location.

Your dashboard is the same idea, digital. It's not trying to show you everything. It's showing you what matters in your specific life.

Some questions:
- What do you actually need to see every day?
- What's on your dashboard that you never look at?
- Is this more useful than a blank page, or less?

The best dashboards evolve. What you need in January might not be what you need in July. Let it change.

The worst dashboards try to do everything. Focus, task list, calendar, news, weather, email, social feeds—it becomes noise.

Keep it simple. Show what grounds you. Remove what doesn't.

## Integration of Perspectives

Snyder: "The mercy of the West has been social revolution; the mercy of the East has been individual insight into the basic self/void. We need both."

When you deploy a tool online, you choose between:
- **Western approach:** Scale it, share it, make it public, change the world
- **Eastern approach:** Keep it private, use it yourself, refine through personal practice

Both are valid. Do what serves the tool's purpose.

Your dashboard is intensely personal. It probably works best staying local—on your computer, not online. But if you want it accessible from multiple devices, deploying makes sense.

The question is: does shipping serve the tool?

Ship when it makes the tool more useful to you or the people you care about.

## Next Week

Guide 04: Shipping. How to deploy your tools online using Vercel (free). When to deploy, when to keep things local, and how to make tools accessible from anywhere.

---

**Note:** Not everyone needs a dashboard. If opening a blank page feels better than seeing widgets, that's valid. The practice here is about intentional choice—whatever you choose, choose it deliberately.
