# Week 3: Setting Up + Your First Build

*This is the last free post. After today, you'll need a paid subscription to continue with the practices.*

*This week: get your tools ready and build your first thing—a personal page. One HTML file. No complexity. Just something real.*

---

## Part 1: Setting Up

You need three things: a computer, a Claude subscription, and a text editor.

**Claude:** Sign up at claude.ai. The Pro plan ($20/month) gives you the access you need. This is your collaborator—the one who writes the code while you direct.

**Text Editor:** VS Code is free and works great. Download it from code.visualstudio.com. This is where you'll see and manage the code Claude writes.

**Terminal:** Your computer already has one. On Mac, it's called Terminal. On Windows, use PowerShell. This is how you run what you build.

That's it. No frameworks to learn. No languages to memorize. Just these three tools and you're ready.

### Getting Everything Running

1. **Install VS Code** - Download, install, open it. Create a new folder somewhere you'll remember (like Documents/field-guide).

2. **Open the folder in VS Code** - File → Open Folder. This is your workspace.

3. **Find your terminal** - On Mac, search for "Terminal" in Spotlight. On Windows, search for "PowerShell". We'll use this later to run things.

4. **Sign up for Claude Pro** - Go to claude.ai, create an account, upgrade to Pro. You'll use this to generate code.

Don't worry about understanding everything yet. Just get the tools installed. You'll learn what they do by using them.

---

## Part 2: Practice 01 - Starting

**Build:** Personal Page  
**Principle:** Start before you're ready

### The Sacredness of Ordinary Work

Gary Snyder: "Such a round of chores is not a set of difficulties we hope to escape from... it is our path."

He's talking about cutting wood, carrying water, tending gardens. The daily work that keeps a household running. Essential.

Building personal tools is the same kind of work.

You're creating infrastructure for your actual life: a way to save links, track workouts, remember what you notice.

This is humble work. That's the point.

The first tool you build (a personal page) is almost embarrassingly simple. One HTML file. Your name, a bio, some links.

But it's yours. You made it. It exists because you described it and Claude helped you bring it into being.

Snyder would recognize this as real work: taking responsibility for your own needs, one small tool at a time.

### What You'll Build

A single-page personal website with your name, a short bio, and links to your email and social profiles. One file. No hosting yet. Just something real.

This is your first build. No frameworks, no complexity. The goal: see that you can describe something and have it exist. That's the magic we're after.

Start.

### Step 01: Open Claude and describe yourself

Start a conversation with Claude and describe what you want.

**Prompt to copy:**

```
I want to create a simple personal webpage. Just one HTML file with:
- My name as the main heading
- A short bio (2-3 sentences about who I am)
- Links to my email and social profiles
- Clean, minimal design
- Should work as a single file I can open in my browser

My info:
Name: [Your Name]
Bio: [Your 2-3 sentence bio]
Email: [your@email.com]
Social links: [Twitter/LinkedIn/GitHub/etc URLs]

Please create the complete HTML file for this.
```

Claude will give you the full HTML. Copy all of it.

### Step 02: Save the file

1. Open VS Code
2. Create a new file (File → New File)
3. Paste the HTML Claude gave you
4. Save it as `index.html` in your field-guide folder

### Step 03: Open it in your browser

Find the file in your file explorer (Finder on Mac, File Explorer on Windows). Double-click it. It should open in your default browser.

You'll see your page. Your name. Your bio. Your links.

**This is yours. You made it.**

### Step 04: Make a change

Go back to Claude and ask for something different:

**Prompt to copy:**

```
Can you update the page to:
- Add a profile photo at the top
- Change the font to something more interesting
- Add a subtle background color
```

Claude will give you updated HTML. Copy it, paste it into VS Code (replacing the old code), save, refresh your browser.

See the changes? That's the loop. Describe → Generate → Test → Refine.

### Step 05: Keep going

Ask Claude for more changes:
- Different colors
- Add a section for projects or interests
- Change the layout
- Add links to things you've made

The point isn't to make it perfect. The point is to see that you can shape it. You describe, Claude builds, you test, you ask for changes.

This is how all the tools you'll build work. Same process, different content.

## Troubleshooting

**Problem:** The page looks broken or incomplete
**Likely cause:** You didn't copy all of Claude's code from the response
**Solution:** Make sure you copied everything from `<!DOCTYPE html>` at the start to `</html>` at the end. If you missed any part, go back and copy the complete code block.

**Problem:** Claude gives an error message
**Likely cause:** The prompt was unclear or there's a syntax issue in the code
**Solution:** Read the error message—it often tells you what's wrong. Copy the full error back to Claude and ask: "I got this error: [paste error]. Can you fix it?"

**Problem:** I don't know what to ask for next
**Likely cause:** You're overthinking it—start small
**Solution:** Ask for simple changes first: "make the text bigger" or "use a different color" or "add my photo". You'll get better at describing what you want as you practice.

**Problem:** The page looks ugly or unprofessional
**Likely cause:** This is your first build—aesthetics come later
**Solution:** That's fine for now. You're learning the process, not design. Focus on getting the loop working. We'll cover making things look better in later practices.

**Problem:** The HTML file won't open in my browser
**Likely cause:** File extension is wrong or file wasn't saved properly
**Solution:** Make sure the file ends with `.html` (not `.txt` or `.html.txt`). Try right-clicking the file and selecting "Open with" then choosing your browser.

**Problem:** Changes I asked for didn't appear
**Likely cause:** You didn't save the updated code or you're viewing the old file
**Solution:** Make sure you replaced all the code in your HTML file with Claude's new version. Save the file, then refresh your browser with Cmd+R (Mac) or Ctrl+R (Windows).

## Reflection

Before moving on, notice what just happened:

**You described something.** You told Claude what you wanted in plain language.

**It existed.** Claude wrote code that made your description real.

**You could change it.** You asked for modifications and got them.

**You own it.** The file is on your computer. You can modify it, delete it, share it. It's yours.

This is the fundamental capability you're building. Everything else in Field Guide is variations on this: describe clearly, iterate until it works, own what you make.

## Going Further

If you want to keep experimenting:
- Add more sections (favorite books, current projects, ways to contact you)
- Try different visual styles (minimal, colorful, dark mode)
- Add links to work you've done
- Include a profile photo or background image
- Experiment with layouts (centered, sidebar, grid)

The point is to get comfortable with the loop. Describe something. See it work. Ask for changes. Repeat.

---

**Next week:** Guide 03 - The Loop (paid subscribers only). We'll formalize what you just experienced into a methodology you can use for any tool you want to build.

**This is your last chance to subscribe before the paywall.** 

Starting next week, all remaining content requires a paid subscription:
- The full methodology (The Loop)
- 8 more complete practices
- Guide to deploying your tools online
- Complete prompt library
- Troubleshooting for every practice

Subscribe now at $24/month (or $240/year (2 months free)) to continue.

If you're on the fence: you've already built your first tool. You know this works. The next 10 weeks teach you to build tools that are actually useful—link catchers, journals, trackers, dashboards. Tools you'll use daily.

Subscribe here: [subscription link]

See you next Monday for Week 4: The Loop.
