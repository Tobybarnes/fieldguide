# Week 13: Make Your Own + The Prompt Library

*Week 13 of Field Guide. The final practice. No template. No requirements. Build whatever you want.*

---

## The Common Work of Your Tribe

Gary Snyder identified with ancient values—"the common work of the tribe."

What's the common work of your tribe?

Tribe as: the people whose lives intersect with yours. Your household. Your coworkers. Your collaborators. The people you help and who help you.

What work do you share? What problems do you all face? What would make that work easier?

Maybe your tribe needs:
- A way to coordinate schedules
- A shared recipe collection
- A tool for tracking group expenses
- Something else nobody thought to build

This is your prompt: **Build something for the common work of your tribe.**

For the people you actually work alongside, not for the market or validation.

Snyder spent decades building a community in the mountains. Physical infrastructure: houses, gardens, water systems. Social infrastructure: gatherings, shared meals, collective care.

You're building digital infrastructure for your version of that. Smaller scale, different medium, same principle: create what your people need.

---

## Small Acts in Complex Systems

Jean Boulton writes about "small, compassionate acts" mattering in interconnected systems. Field Guide is about small tools, not grand platforms.

The traditional tech narrative: identify a massive problem, build a venture-backed solution, scale to billions of users. Change the world.

Most real problems are small and personal. You need to track something specific. You want to organize something your way. You wish a certain interaction was faster.

These are Tuesday afternoon problems, not billion-dollar problems.

The tools that solve them need to work for you, not impress anyone.

**The practice:**
- Notice a small friction
- Build a small tool
- Use it for a small while
- Adjust as needed
- Move on

No grand vision required. No startup formation. No pitch deck. Just: I need this, so I make it.

Boulton structures her book as 73 networked pieces because complex understanding doesn't come from linear progression—it emerges from connecting small insights.

Field Guide teaches the same way. Nine small practices. Each one complete. Together they add up to capability.

Build many small tools. The capability emerges from the practice, not from any single creation.

---

## Practice 09: Make Your Own

**Build:** Whatever you want  
**Principle:** You know what you need

### What You'll Build

This is open-ended. You've learned the loop. You've built eight tools. Now build something that doesn't fit any template.

Ideas to spark thinking:

**For yourself:**
- Reading log (books finished, ratings, notes)
- Meal planner (weekly menus, shopping lists)
- Garden tracker (what's planted where, watering schedule)
- Expense splitter (shared costs with roommates/partners)
- Dream journal (record dreams before you forget them)
- Bird watching log (species, locations, dates)
- Guitar practice tracker (songs learned, techniques mastered)
- Medication reminder (times, dosages, refill dates)

**For your household:**
- Chore rotation (who does what, when)
- Family calendar (events everyone needs to know about)
- Recipe box (family recipes with notes)
- Pet care log (feeding, vet visits, medications)
- Home maintenance tracker (when things were last done)

**For your work:**
- Meeting notes template (consistent format, easy to search)
- Client contact manager (simple CRM)
- Project time tracker (how long things actually take)
- Idea backlog (things to explore later)
- Feedback collector (what people said about your work)

**For your community:**
- Skill sharing directory (who knows what, who can teach)
- Tool library (what tools people have, who's borrowing what)
- Event calendar (community gatherings)
- Carpool coordinator (who's driving when)

Pick something that would actually be useful. Don't pick something to impress anyone—pick something you'd use tomorrow.

### Step 01: Define it clearly

Before talking to Claude, write down:

**What problem does this solve?**  
Not "I want to track my reading" but "I finish 2-3 books a month and always forget what I read. I want to remember titles, authors, when I read them, and one sentence about each."

**Who's it for?**  
Just you? Your family? Your team? Be specific.

**What must it do?** (Core features)
Must-haves, not nice-to-haves. The 3 things it requires to function.

**What should it NOT do?**  
This is important. Define boundaries. "No social features. No sharing. No gamification."

### Step 02: Describe it to Claude

Use everything you've learned. Be specific. One file. localStorage unless you need APIs. Minimal design unless you want otherwise.

**Template prompt:**

```
I want to build [TOOL NAME] as a single HTML file.

Problem it solves:
[Your 2-3 sentence explanation]

Core features:
- [Must-have feature 1]
- [Must-have feature 2]
- [Must-have feature 3]

Optional features (if easy to add):
- [Nice-to-have 1]
- [Nice-to-have 2]

Technical requirements:
- Single file (HTML/CSS/JS)
- Store data in localStorage
- Works offline
- Clean, minimal design

What it should NOT do:
- [Boundary 1]
- [Boundary 2]

Please build this.
```

### Step 03: Build, test, refine

You know the loop:
1. Claude generates code
2. You test it
3. You notice what's wrong or missing
4. You ask for specific changes
5. Repeat until it works

You've done this eight times already.

### Step 04: Use it for real

Actually use it for at least a week after building.

If you skip using it, that's data. It means either:
- The problem was imaginary
- The solution clashes with your workflow
- You need to adjust something

All three are fine. Not every tool you build needs to be permanent.

## The Complete Prompt Library

Below is every prompt pattern you've learned, organized by category. Copy these whenever you need them.

### Getting Started

**Basic page:**
```
Create a simple [PAGE TYPE] as a single HTML file with [FEATURES]. Keep it minimal and clean.
```

**Tool with storage:**
```
Build a [TOOL NAME] that:
- [Feature 1]
- [Feature 2]
- [Feature 3]
- Stores data in localStorage
- Works as a single file
```

### Data & Storage

**Save and display:**
```
Add functionality to:
- Save [DATA TYPE] with [FIELDS]
- Display all saved items in [LAYOUT]
- Sort by [CRITERIA]
```

**Search and filter:**
```
Add search that:
- Filters [ITEMS] in real-time
- Searches [WHICH FIELDS]
- Is case-insensitive
- Shows count of results
```

**Export data:**
```
Add export button that:
- Downloads all data as [FORMAT]
- Includes [WHAT FIELDS]
- Names file with current date
```

**Import data:**
```
Add import functionality:
- Accept [FILE TYPE]
- Parse and validate
- Merge with existing data (or replace)
- Show success/error messages
```

### Visual Design

**Color scheme:**
```
Update colors:
- Background: [COLOR]
- Text: [COLOR]
- Accents: [COLOR]
- Use subtle shadows for depth
```

**Typography:**
```
Improve typography:
- Use [FONT FAMILY] for body text
- Use [FONT FAMILY] for headings
- Increase line spacing to 1.6
- Make text [SIZE]
```

**Layout:**
```
Reorganize layout:
- [SECTION 1] at top
- [SECTION 2] in sidebar
- [SECTION 3] below
- Make it responsive for mobile
```

**Dark mode:**
```
Add dark mode toggle:
- Light theme: [COLORS]
- Dark theme: [COLORS]
- Remember user's choice in localStorage
- Smooth transition between modes
```

### Forms & Inputs

**Better forms:**
```
Improve the form:
- Add placeholder text
- Auto-focus first field
- Clear form after submit
- Add character counter
- Validate before saving
```

**Dropdowns and tags:**
```
Add [FIELD NAME] as:
- Dropdown with options: [LIST]
- Or tag input where user can add custom tags
- Show existing tags as suggestions
```

**Date and time:**
```
Add date picker:
- Default to today
- Allow selecting past/future dates
- Show in format: [MM/DD/YYYY or other]
- Store as ISO string
```

### Interactions

**Confirmation dialogs:**
```
Before deleting, show confirmation:
- "Are you sure you want to delete [ITEM]?"
- Yes/No buttons
- Don't delete if they click No or close dialog
```

**Keyboard shortcuts:**
```
Add keyboard shortcuts:
- [KEY COMBO]: [ACTION]
- [KEY COMBO]: [ACTION]
- Show help text: "Press ? to see shortcuts"
```

**Drag and drop:**
```
Make [ITEMS] draggable:
- Reorder by dragging
- Save new order to localStorage
- Visual feedback while dragging
```

### API Integration

**Fetch data:**
```
Add API integration:
- Fetch from [API URL]
- Parse the response
- Display [WHICH DATA]
- Handle errors gracefully
- Cache results for [TIME PERIOD]
```

**Weather API:**
```
Add weather:
- Use OpenWeatherMap API (or similar)
- Show for [LOCATION]
- Display: temp, conditions, icon
- Refresh every hour
- Handle API failures
```

### Mobile & Responsive

**Mobile-friendly:**
```
Make this work well on mobile:
- Larger touch targets (44px minimum)
- Responsive layout (stack on small screens)
- Readable font sizes (16px+)
- No horizontal scrolling
```

**PWA features:**
```
Make this installable as a web app:
- Add manifest.json
- Add service worker for offline
- Add home screen icon
- Show install prompt
```

### Debugging & Fixes

**Debug errors:**
```
I'm getting this error: [ERROR MESSAGE]

Please debug and fix the issue.
```

**Improve performance:**
```
The page is slow when [SCENARIO].

Optimize performance:
- Reduce unnecessary re-renders
- Debounce search/filter
- Lazy load [DATA/IMAGES]
```

**Browser compatibility:**
```
This doesn't work in [BROWSER].

Fix compatibility issues while keeping modern features where possible.
```

### Advanced Features

**Authentication (basic):**
```
Add password protection:
- Prompt for password on load
- Simple password check (not secure, just basic protection)
- Remember for session
```

**Multi-user:**
```
Add ability to switch between users:
- Store separate data per user
- User selector at top
- Each user has own localStorage namespace
```

**Sync between devices:**
```
Add sync functionality:
- Export data as JSON
- Import data on other device
- Merge (don't overwrite) on import
- Show last sync time
```

## Common Problems & Solutions

**Problem:** I don't know what to build
**Likely cause:** You're waiting for the perfect idea instead of noticing real needs
**Solution:** Watch yourself for one full day. Every time you think "I wish I had a tool for this," write it down. Build the one that comes up most often. Real needs reveal themselves through repeated friction.

**Problem:** My idea feels too complex to build
**Likely cause:** Thinking about the final version instead of the first version
**Solution:** Start with the absolute simplest version. One core feature. Make it work. Add more only if you actually need it. Ask Claude: "What's the simplest possible version of [idea] that would still be useful?"

**Problem:** Not sure if what I want is even possible
**Likely cause:** Unfamiliar with what modern web tools can do
**Solution:** Just ask Claude directly. Say: "Is it possible to [WHAT YOU WANT TO DO]?" Claude will tell you if it's feasible and suggest the best approach.

**Problem:** Tool works but looks terrible
**Likely cause:** Focused on functionality first (which is correct)
**Solution:** Copy the design from one of your other tools that looks good. Or ask Claude: "Make this look more like [OTHER TOOL]. Use a similar layout and color scheme."

**Problem:** Built the tool but don't actually use it
**Likely cause:** The tool doesn't fit your actual workflow or the problem wasn't real
**Solution:** That's valuable data. Not every tool you build will become essential. Ask yourself: "Was the problem imaginary?" or "Does this tool clash with how I actually work?" Either answer is fine—you still learned.

**Problem:** Tool works for me but want to share it with others
**Likely cause:** localStorage and file-based storage don't work across devices
**Solution:** This requires deploying online with a backend for shared data. Ask Claude: "I want to share this tool. What's the simplest way to deploy it so others can use it?" This is a bigger project—see Guide 04: Shipping.

**Problem:** Started building and got completely stuck
**Likely cause:** Encountered an error or concept you don't understand
**Solution:** Copy the full error message and send it to Claude with context: "I'm trying to [what you're doing] and got this error: [paste error]. What's wrong and how do I fix it?"

**Problem:** Tool is built but missing something important
**Likely cause:** Didn't fully think through the use case before building
**Solution:** Use the tool for a week. Note what you wish was there. Then ask Claude to add those specific features one at a time.

## Going Further After Field Guide

You've completed all nine practices. You know the loop. You can build whatever you need.

**What's next?**

**Keep building.** The capability grows through use. Build small tools when you need them. Build imperfect solutions to real problems instead of waiting for the perfect idea.

**Explore deeper.** Pick one tool and make it genuinely excellent. Polish it. Deploy it. Share it. Go from "works for me" to "works beautifully."

**Help others.** Teach someone else what you learned. Build a tool for a friend. The best way to solidify knowledge is to share it.

**Read the source material.** If the philosophy resonated:
- Stewart Brand: *Whole Earth Catalog* (1968)
- Gary Snyder: *Earth House Hold* (1969), *The Real Work* (1980)
- Masahiro Mori: *The Buddha in the Robot* (1974)
- Jean Boulton: *The Dao of Complexity* (2024)

These books inform Field Guide. Reading them will deepen your understanding of why this matters.

## Final Reflection

You started 13 weeks ago learning to describe what you wanted. Now you can describe, generate, test, and refine. You can build.

This is about capability—knowing that when you need a tool, you can make it.

Snyder: "The real work is to make the world as real as it is, and to find ourselves as real as we are within it."

The tools you built are real. Small, yes. Imperfect, probably. But real. Made by you. Used by you. Refined through attention.

Tools that fit your life, made with care, one at a time. That's what matters.

**Thank you for building alongside me.**

If you built something you're proud of, share it. If you got stuck, that's fine too—you still learned something.

The practice continues. Keep building. Keep refining. Keep noticing what you need and making it exist.

---

**This is the end of Field Guide.**

All 13 weeks are complete. You have:
- 4 foundational guides
- 9 complete practices
- The complete prompt library
- The capability to build anything you need

What you do with this capability is up to you.

Build something small today. See what happens.

– Toby
