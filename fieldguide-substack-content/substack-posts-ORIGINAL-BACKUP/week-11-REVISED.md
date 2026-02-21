# Week 11: Shipping

*Week 11 of Field Guide. You've built seven tools. They work on your computer. This week: how to deploy them online so they work anywhere.*

---

## Fragility and Interconnection

Jean Boulton emphasizes that we live in an "interconnected and fragile world" where small acts matter.

When you deploy a tool online, you're entering this interconnection. Your tool becomes part of:
- The web (connected to everything)
- Infrastructure (dependent on services staying online)
- Other people (if you share it)
- Maintenance (it will need care)

This is reality. It informs how you approach shipping.

**Ship small.** Don't try to build a platform. Build one tool that does one thing.

**Ship for yourself first.** Know it works in your hands before sharing.

**Accept fragility.** Things break. Services change. URLs die. Your tool needs to work now, not last forever.

**Choose appropriate complexity.** Match the tool's complexity to its actual use. Skip authentication if you're the only user. Skip scaling if you have five users.

The traditional tech mindset: build once, scale infinitely, last forever. Most tools are temporary responses to current needs.

Accept this. It makes building simpler and shipping faster.

---

## Guide 04: Shipping Your Tools

**When to deploy online:**
- You want to access it from multiple devices
- You're sharing it with others
- It uses APIs that require HTTPS
- It needs to be publicly linkable

**When to keep it local:**
- It contains private data (journal, personal notes)
- You're still iterating heavily
- It works fine as a local file
- Deploying adds no value

### Option 1: Vercel (Recommended)

Free, fast, designed for single-page apps. Perfect for Field Guide tools.

**Step 01: Install Vercel CLI**

Open your terminal:

```bash
npm install -g vercel
```

If you don't have npm installed, download Node.js from nodejs.org first (it includes npm).

**Step 02: Navigate to your project**

```bash
cd path/to/your/tool
```

For example: `cd Documents/field-guide/link-catcher`

**Step 03: Deploy**

```bash
vercel
```

Vercel will ask:
- Set up and deploy? → Yes
- Which scope? → Your account
- Link to existing project? → No
- Project name? → link-catcher (or whatever)
- Directory? → ./ (current directory)
- Override settings? → No

It'll deploy and give you a URL like: `link-catcher.vercel.app`

Open that URL. Your tool is live.

**Step 04: Update when you make changes**

```bash
vercel --prod
```

This deploys your latest changes.

### Option 2: GitHub Pages

Free static hosting from GitHub.

**Step 01: Create a GitHub account**

If you don't have one: github.com → Sign up

**Step 02: Create a new repository**

- Click "New repository"
- Name it (e.g., "link-catcher")
- Make it Public
- Don't initialize with README
- Create repository

**Step 03: Upload your file**

- Click "uploading an existing file"
- Drag your .html file
- Commit changes

**Step 04: Enable GitHub Pages**

- Go to repository Settings
- Scroll to Pages
- Source: Deploy from a branch → main
- Save

Your tool will be live at: `yourusername.github.io/link-catcher`

Rename your file to `index.html` if it isn't already.

### Option 3: Netlify Drop

Simplest option—literally drag and drop.

**Step 01: Go to Netlify Drop**

Visit: app.netlify.com/drop

**Step 02: Drag your file**

Drag your .html file onto the page.

**Step 03: Get your URL**

Netlify generates a random URL like: `quirky-name-123.netlify.app`

You can customize this URL in settings (free).

### Which Service to Use?

**Vercel:** Best for tools you'll update frequently. Command-line deployment is fast once you're set up.

**GitHub Pages:** Best if you already use GitHub or want version control.

**Netlify Drop:** Best for quick one-off deployments or testing if deployment works.

All three are free for personal projects. Pick what feels easiest.

---

## Security Basics

Before you deploy, understand these security fundamentals:

### API Keys and Secrets

**What they are:** API keys are passwords that let your tool access external services (Discogs, weather APIs, etc.).

**The problem:** If you commit an API key to a public GitHub repository, anyone can see it and use it. This can result in:
- Your API quota getting used up
- Your account getting banned
- Charges to your credit card (if using paid APIs)

**How to protect them:**

1. **Never hardcode API keys in your code:**
   ```javascript
   // BAD - visible to anyone
   const API_KEY = "abc123xyz789";
   ```

2. **Use environment variables** (Vercel/Netlify):
   - Store keys in the deployment platform's settings
   - Access them as `process.env.API_KEY`
   - Ask Claude: "Move my API key to an environment variable"

3. **For GitHub:** Add a `.gitignore` file listing files with secrets:
   ```
   .env
   config.js
   secrets.txt
   ```

### localStorage Privacy

**What it is:** Data saved in localStorage is stored in the user's browser.

**The privacy reality:**
- Anyone with access to the user's computer can read localStorage using browser dev tools (F12 → Application → Local Storage)
- Data is NOT encrypted by default
- Data persists until explicitly cleared

**What this means:**
- localStorage is fine for casual data (links, todos, workout logs)
- localStorage is NOT secure for sensitive data (passwords, financial info, medical records)

**If you need real privacy:**
- Add a password that encrypts data before saving
- Ask Claude: "Add password protection that encrypts all localStorage data"
- Or keep the tool local (don't deploy it)

### HTTPS Requirements

Some browser features ONLY work on HTTPS (secure) connections:
- Camera access (barcode scanning, photo taking)
- Geolocation
- Clipboard access
- Notifications

**Good news:** Vercel, GitHub Pages, and Netlify all provide HTTPS automatically. If you're using a custom domain, HTTPS is also automatic.

**Local testing:** Use `http://localhost` for testing—browsers allow these features on localhost even without HTTPS.

### Basic Authentication (Optional)

If you want to restrict who can access your deployed tool:

**Ask Claude:**
```
Add basic password protection to this page. Anyone visiting should
need to enter a password before seeing the tool. Store the hashed
password securely.
```

**Note:** This is light protection, suitable for keeping casual visitors out. For real security, you need proper user authentication (beyond this course's scope).

### When Security Matters

**Low security needs:**
- Link catcher (public links)
- Workout tracker (workout data)
- Photo journal (casual photos)

**Medium security needs:**
- Daily journal (personal thoughts)
- Private collections

**High security needs:**
- Medical records
- Financial data
- Passwords/credentials

**Rule of thumb:** If losing the data would cause real harm, either:
1. Add proper encryption
2. Keep it local (don't deploy)
3. Use a proper secure service instead

### Summary

- Never commit API keys to public repositories
- localStorage is visible to anyone with computer access
- HTTPS is automatic on modern deployment platforms
- Add password protection only if you actually need it
- Match security effort to actual risk

---

## Making Tools Shareable

If you're deploying a tool for other people to use:

### Add Instructions

Create a simple README section at the top of your page:

**Prompt to Claude:**

```
Add a collapsible "How to Use" section at the top of the page that:
- Explains what this tool does
- Lists the features
- Shows an example
- Starts collapsed (click to expand)
```

### Remove Personal Data

Before deploying:

**Prompt to Claude:**

```
Clear all my personal data from the tool:
- Remove my saved links/entries
- Clear localStorage on first load
- Show empty state with example data
```

### Add Privacy Notice

If your tool stores data:

**Prompt to Claude:**

```
Add a privacy notice:
- All data stored locally in browser
- Nothing sent to servers
- Clearing browser data deletes everything
- Show this in small text at bottom
```

## Common Deployment Issues

**Tool works locally but breaks online**
File paths may be incorrect. Ask Claude: "Fix all file paths to work when deployed online."

**API calls fail**  
Many APIs require HTTPS. Local files use `file://` which doesn't work with APIs. Deploying to Vercel/Netlify gives you HTTPS.

**Fonts don't load**
Using custom fonts requires loading them from CDN (like Google Fonts), not local files.

**Styles look different**  
Some browsers handle local files differently than hosted ones. Test on the deployed version and ask Claude to fix any issues.

**Need authentication**
For private tools with sensitive data, keep them local or use password protection (ask Claude to implement basic auth). Avoid public deployment.

## When NOT to Deploy

**Your journal** - Keep it local. Private data shouldn't be online unless you have proper authentication.

**Tools still in development** - Wait until they work reliably before deploying.

**Tools only you use** - If local file works fine, deployment adds complexity without benefit.

**Anything with API keys** - Never commit API keys to public repositories. Use environment variables (ask Claude how).

## Updating Deployed Tools

After deployment, you'll keep making improvements.

**Vercel workflow:**
1. Edit your local file
2. Test locally
3. Run `vercel --prod`
4. Changes are live

**GitHub Pages workflow:**
1. Edit your local file
2. Test locally
3. Upload new version to GitHub
4. Wait ~1 minute for deployment

**Netlify workflow:**
1. Edit your local file
2. Test locally
3. Drag new file to Netlify Drop
4. Get new URL (or connect it to git for automatic deployments)

## Next Steps

**Custom Domain (Optional)**

All three services let you use custom domains:
- Buy a domain (from Namecheap, Google Domains, etc.)
- Point it to your deployment
- Follow service instructions for DNS setup

Cost: ~$12/year for a domain.

**Analytics (Optional)**

Want to know if anyone uses your tool?
- Add Simple Analytics or Plausible (privacy-friendly)
- Or just check service analytics (Vercel/Netlify provide basic stats)

**Make Tools Private**

If deploying for yourself but want it password-protected:
- Vercel: Add basic auth via vercel.json
- Netlify: Add password protection in settings
- GitHub Pages: Doesn't support auth (keep it local or use other services)

## Reflection

Boulton talks about small acts in interconnected systems. Deploying a tool is a small act. You're making something accessible.

But accessible can mean different things. Sometimes the right choice is keeping it local, on your machine, private.

The question to ask:
**Does deploying make this tool more useful to me or the people I care about?**

If yes, deploy. If no, keep it local.

Deploy when it serves the tool's purpose.

Some tools are meant to be shared. Others are meant to be personal. Both are valid.

### On Impermanence and Compassion

Everything you build will eventually break or become obsolete. APIs change. Services shut down. Browsers evolve. The code that works today might not work in five years.

This feels like failure. In Buddhist teaching, it's just anicca—impermanence. Everything that arises passes away. Tools. Services. Even your needs change.

The practice is responding skillfully to changing needs, again and again. Building the next tool when this one no longer serves. Fixing what breaks. Letting go when it's time.

When you build clearly and simply, you practice compassion toward your future self who will maintain these tools. When you document what a tool does, when you keep the code readable, when you avoid unnecessary complexity—you're reducing future suffering.

If you build for others—even just one other person—you practice karuna (compassion). You're reducing frustration with bad tools for someone who shares your problem.

The tools are temporary. The practice of building with attention and care is what persists.

## Next Week

Practice 08: Refine. Go back to one of your tools. Use it for a week. Notice friction. Fix it based on real use, not imagined problems.

This is where taste develops—not through planning, but through sustained attention to what actually works.

---

**Note:** If deployment feels overwhelming, skip it. All your tools work fine as local files. You can always come back and deploy later when you need to.
