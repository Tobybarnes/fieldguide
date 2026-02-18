# Technical Glossary

Quick reference for technical terms used throughout Field Guide.

---

## Core Concepts

### HTML (HyperText Markup Language)
**What it is:** The structure of a web page. What goes where.

**Think of it as:** The skeleton and organs of a web page. Defines headings, paragraphs, forms, buttons, lists.

**Example:** `<h1>My Page</h1>` creates a heading. `<button>Click me</button>` creates a button.

**You don't need to learn HTML syntax**—Claude writes it for you. But when you see `<div>`, `<input>`, `<ul>`, you know it's HTML defining the page structure.

---

### CSS (Cascading Style Sheets)
**What it is:** The styling of a web page. What it looks like.

**Think of it as:** The skin, clothing, and makeup of a web page. Defines colors, fonts, spacing, layouts.

**Example:** `color: blue;` makes text blue. `margin: 20px;` adds space around an element.

**You don't need to learn CSS**—Claude handles it. When you say "make it warm colors" or "center the text," Claude writes the CSS.

---

### JavaScript
**What it is:** The behavior of a web page. What happens when you interact.

**Think of it as:** The muscles and nervous system. Makes things move, respond to clicks, save data, update dynamically.

**Example:** When you click "Save" and a link appears in your list—that's JavaScript.

**You don't write JavaScript**—Claude writes it. You describe what should happen, Claude makes it happen.

---

## Data Storage

### localStorage
**What it is:** Browser-based data storage. Saves data on your computer in the browser.

**How it works:**
- Data stored in your browser (Chrome, Firefox, Safari)
- Stays there until you clear browser data or delete it explicitly
- Each browser has its own localStorage (Chrome data doesn't sync to Firefox)
- 5-10MB storage limit

**When to use it:** Personal tools where data doesn't need to sync across devices. Link catchers, daily logs, workout trackers.

**Privacy note:** Anyone with access to your computer can view localStorage data using browser dev tools (F12 → Application → Local Storage).

---

### API (Application Programming Interface)
**What it is:** A way for your tool to request data from external services.

**Think of it as:** A menu at a restaurant. The API lists what you can request, you make a request, the service sends back data.

**Example:** The Discogs API lets you request album information by searching for an artist name. You send "Pink Floyd," it sends back their albums.

**What you need:**
- API key (password to access the service)
- API documentation (what you can request and how)
- Internet connection (APIs are online services)

**Common APIs in Field Guide:**
- Discogs (music catalog data)
- OpenWeatherMap (weather data)
- Various public APIs for other data

---

### API Key
**What it is:** A password that identifies your tool to an API service.

**Think of it as:** Your library card number. The service knows who's making requests and can enforce usage limits.

**Important:**
- Keep API keys private
- Never commit them to public GitHub repositories
- Free APIs often have daily request limits
- Paid APIs charge per request

**How to get one:** Sign up on the service's website (Discogs.com, OpenWeatherMap.org, etc.). They'll generate a key for you.

---

## Development Tools

### Terminal / Command Line
**What it is:** A text-based way to communicate with your computer.

**Think of it as:** Texting with your computer instead of using the mouse and graphical interface.

**On Mac:** Called "Terminal" (search in Spotlight)
**On Windows:** Called "PowerShell" or "Command Prompt" (search in Start menu)

**In Field Guide, you use it for:**
- Opening files: `open index.html` (Mac) or `start index.html` (Windows)
- Deploying tools: `vercel` command
- Installing tools: `npm install`

**Don't worry:** You'll only use 3-4 simple commands. You can't break anything with the commands we use.

---

### VS Code (Visual Studio Code)
**What it is:** A text editor for code. Think of it as Microsoft Word for HTML/CSS/JavaScript.

**Why use it:** Syntax highlighting (code is colored to help you read it), autocomplete, integrated terminal.

**Download:** code.visualstudio.com (free)

**Alternatives:** Any text editor works (Sublime Text, Atom, even Notepad). VS Code is just recommended because it's free and popular.

---

### Browser Dev Tools
**What it is:** Hidden tools built into every web browser for inspecting and debugging web pages.

**How to open:** Press F12, or right-click on any web page and select "Inspect."

**What you can do:**
- See HTML structure
- View and edit CSS live
- Debug JavaScript errors (Console tab)
- View localStorage data (Application tab)
- Test on mobile sizes (Device toolbar)

**In Field Guide:** You'll use the Console tab to see error messages when something breaks.

---

### npm (Node Package Manager)
**What it is:** A tool for installing JavaScript packages and tools.

**Think of it as:** The App Store for command-line tools.

**Where it comes from:** Installed automatically when you install Node.js from nodejs.org.

**In Field Guide, you use it to:**
- Install Vercel CLI: `npm install -g vercel`
- That's it. Just one command for deployment.

**The `-g` flag:** Means "global"—installs the tool so you can use it anywhere on your computer.

---

## File Types

### .html
**What it is:** A web page file. Contains HTML (structure), CSS (styling), and JavaScript (behavior).

**How to open:** Double-click and it opens in your default browser.

**Single-file apps:** Field Guide tools are single `.html` files. Everything (HTML, CSS, JavaScript) is in one file for simplicity.

---

### .js
**What it is:** A JavaScript file. Contains only JavaScript code.

**In Field Guide:** We don't use separate `.js` files. JavaScript is embedded in the `.html` file between `<script>` tags.

---

### .css
**What it is:** A CSS file. Contains only styling rules.

**In Field Guide:** We don't use separate `.css` files. CSS is embedded in the `.html` file between `<style>` tags.

---

### .json
**What it is:** A data format (JavaScript Object Notation). Used for storing and exchanging data.

**Example:**
```json
{
  "name": "Link Catcher",
  "version": "1.0",
  "links": [
    {"url": "example.com", "title": "Example"}
  ]
}
```

**In Field Guide:** Sometimes used for exporting data from your tools.

---

## Deployment Terms

### Deployment
**What it is:** Putting your tool online so it's accessible via a URL.

**Think of it as:** Publishing your tool. Going from "works on my computer" to "works on any computer."

**Methods:** Vercel, GitHub Pages, Netlify Drop (all covered in Week 11).

---

### HTTPS (HyperText Transfer Protocol Secure)
**What it is:** A secure way to load web pages. The "s" means encrypted.

**Why it matters:** Some browser features (camera, geolocation) only work on HTTPS sites.

**In Field Guide:** Vercel, GitHub Pages, and Netlify all provide HTTPS automatically. Your deployed tools will have `https://` URLs.

---

### localhost
**What it is:** Your own computer, as a web address.

**The URL:** `http://localhost` or `http://127.0.0.1`

**Why it's useful:** Browsers allow camera access, geolocation, and other sensitive features on localhost even without HTTPS.

**In Field Guide:** When testing locally, you can use `http://localhost` to test features that normally require HTTPS.

---

### Domain / URL
**What it is:** The web address where your tool lives.

**Examples:**
- `link-catcher.vercel.app` (Vercel subdomain)
- `username.github.io/link-catcher` (GitHub Pages)
- `yourname.com` (custom domain)

**In Field Guide:** Deployment services give you a free subdomain automatically. Custom domains are optional.

---

## Common Errors

### CORS (Cross-Origin Resource Sharing)
**What it is:** A security feature that blocks websites from accessing data from other websites.

**When you see it:** "CORS error" or "blocked by CORS policy" in the browser console.

**Why it happens:** You're trying to fetch data from an API, but the API doesn't allow requests from your domain.

**Solutions:**
- Deploy your tool (often fixes it)
- Use a CORS proxy
- Ask Claude to add a backend to handle API requests

---

### Syntax Error
**What it is:** A typo or mistake in the code that breaks JavaScript.

**Examples:**
- Missing closing bracket: `function test() {` without `}`
- Misspelled keyword: `functino test()`
- Missing semicolon or comma

**How to fix:** Copy the error message from the browser console and ask Claude: "I'm getting this error: [paste error]. Can you fix it?"

---

### 404 Error
**What it is:** "Page not found." The URL doesn't exist or the file is missing.

**Common causes:**
- Typo in the URL
- File wasn't deployed correctly
- File is in a different folder than expected

---

## How to Use This Glossary

**During Week 3 (Setup):** Read the "Development Tools" section to understand Terminal, VS Code, and browser dev tools.

**During Week 4 (The Loop):** Skim the "Core Concepts" section to understand HTML, CSS, JavaScript.

**During Week 5-10 (Practices):** Reference "Data Storage" and "File Types" as needed.

**During Week 11 (Shipping):** Read the "Deployment Terms" section.

**Anytime:** Use "Common Errors" when troubleshooting.

**You don't need to memorize this.** Bookmark this page and reference it when you see an unfamiliar term.

---

**Remember:** You're not learning to write code. You're learning to direct Claude to write code. Understanding these terms helps you describe what you want and troubleshoot when things break. That's all you need.
