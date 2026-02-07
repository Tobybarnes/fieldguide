---
num: "07"
slug: gather
title: Gather
build: Personal Dashboard
principle: Bring scattered things together
---

## Overview

Every morning you check the weather, your calendar, your tasks, maybe a quote or news feed. That's five tabs, five apps, five moments of friction. A dashboard brings what matters into one view. This is your home screen—curated by you, for you.

## What You'll Build

A personal dashboard with widgets for weather, time, a daily quote, your todo list, and whatever else you want to see at a glance. Make it your browser's new tab page.

## Steps

### 01. Start with the essentials

Begin with time, date, and a greeting.

```prompt
Build me a personal dashboard. Show current time, today's date, and a greeting based on time of day (good morning/afternoon/evening). Clean, minimal design with lots of whitespace.
```

> **Tip:** Start simple. You can add widgets one at a time.

![Personal dashboard with time, weather, todos, quote, and quick links](/screenshots/practice-07-gather/01-dashboard.png)

### 02. Add weather

See the weather at a glance.

```prompt
Add current weather for [YOUR CITY]. Use a free weather API. Show temperature, conditions, and a simple icon. No hourly forecast—just right now.
```

> **Tip:** You'll need an API key. Ask Claude how to get one from OpenWeatherMap or similar.

### 03. Add a daily quote

Start the day with inspiration (or just something interesting).

```prompt
Add a daily quote section. Fetch a random quote from a free API, or let me add my own quotes and rotate through them.
```

### 04. Add a quick todo

Keep your tasks visible.

```prompt
Add a simple todo list. Let me type a task and hit enter to add it. Click to mark complete. Store in localStorage. Show only incomplete tasks by default.
```

### 05. Add links

Your most-used bookmarks.

```prompt
Add a section for my frequently used links. Let me add and remove links. Show them as simple text, not fancy icons.
```

### 06. Make it your new tab page

Export as a single HTML file. Set it as your browser's homepage or new tab page. (Each browser does this differently—search for yours.)

## Additional Prompts

### Calendar integration
When you want to see your schedule at a glance (requires API setup).
```prompt
Add my calendar events for today from Google Calendar
```

### Focus mode
When you need to eliminate distractions.
```prompt
Add a focus mode that hides everything except the time and one task
```

### Quick notes
When you need to jot something down fast.
```prompt
Add a notes section for quick capture
```

### Sun times
When you want to track daylight.
```prompt
Show sunset/sunrise times
```

### Keyboard shortcuts
When you want faster interaction.
```prompt
Add keyboard shortcuts for common actions
```

## Troubleshooting

### Weather not loading
Check your API key. Check that you're allowing the request in your browser.

### Quotes repeat too often
Use a larger quote source, or add more of your own.

### Todos don't persist
localStorage issue. Check browser settings.

### Design looks cluttered
Remove things. A good dashboard is mostly empty space.

## Reflection

- What do you actually look at on your dashboard?
- What did you add that you never use?
- Has this changed how you start your day?
- What's missing that you wish you had?

## Extensions

- Add Pomodoro timer
- Integrate with Notion or other tools
- Add habit tracker
- Create multiple dashboard layouts for different contexts
- Add ambient sounds or music integration
