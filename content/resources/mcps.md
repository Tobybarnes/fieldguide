---
title: Using MCPs
description: Connect Claude to your real data with Model Context Protocol servers.
---

## What's an MCP?

Model Context Protocol (MCP) is a way to give Claude access to external tools and data. Instead of copying and pasting information into Claude, MCPs let Claude read directly from your calendar, email, files, and other services.

Think of it like giving Claude permission to look things up on your behalf.

## Why MCPs Matter

Without MCPs, using Claude looks like:
1. Open your calendar
2. Copy today's events
3. Paste into Claude
4. Ask your question

With MCPs:
1. Ask Claude about your day

That's it. Claude can see your calendar directly.

## Personal MCPs Worth Setting Up

These MCPs are particularly valuable for personal productivity:

### Google Workspace MCP

This is the MCP we recommend everyone start with. If you use Gmail, Google Calendar, or Google Drive—and most people do—this immediately makes Claude more useful.

**What it does:** Access your Gmail, Google Calendar, and Google Drive from Claude.

**Why it's useful:**
- Ask "What's on my calendar today?" and get a real answer
- "Find that email from Sarah about the project"
- "Summarize the documents in my Work folder"
- Draft emails without leaving your conversation
- "What meetings do I have this week?"
- "When am I free on Thursday afternoon?"

**What you can do with it:**

| Task | Example prompt |
|------|----------------|
| Check schedule | "What's on my calendar for tomorrow?" |
| Find emails | "Find emails from Amazon in the last week" |
| Read documents | "Summarize the document called Project Brief in my Drive" |
| Draft emails | "Draft a reply to the last email from John saying I'll be there" |
| Check availability | "When am I free this Thursday between 2pm and 6pm?" |
| Create events | "Add a 30-minute call with Sarah tomorrow at 3pm" |

**Setup steps:**

1. **Get the MCP** - The Google Workspace MCP is available through Claude Code and most MCP hosts
2. **Authenticate with Google** - You'll be redirected to Google's login page
3. **Grant permissions** - Choose which services to connect (Gmail, Calendar, Drive)
4. **Verify it works** - Ask Claude "What's on my calendar today?"

```prompt
Help me set up the Google Workspace MCP. I want to be able to access my Gmail and Google Calendar from Claude.
```

**Permissions to consider:**
- **Gmail** - Read and send emails. Start with read-only if you're cautious.
- **Calendar** - View and create events. Very safe to enable.
- **Drive** - Access files. You can limit to specific folders.

> **Tip:** Start with just Calendar. It's the safest and most immediately useful. Add Gmail and Drive once you're comfortable.

### Slack MCP

**What it does:** Read and send Slack messages, search channels, check your unreads.

**Why it's useful:**
- "What did I miss in #general today?"
- "Find the conversation about the API changes"
- "Draft a reply to the thread about the deadline"

**Setup:** Requires Slack authentication for your workspace.

```prompt
Help me set up the Slack MCP so I can access my Slack messages from Claude.
```

### File System MCP

**What it does:** Read and write files on your computer.

**Why it's useful:**
- "Read my notes from yesterday's meeting"
- "Update my todo list"
- "Find all markdown files in my Documents folder"
- Work with local projects without copying/pasting code

**Setup:** Grants Claude access to specified folders on your computer. Be intentional about which folders.

```prompt
Help me set up the File System MCP to access my Documents folder.
```

### GitHub MCP

**What it does:** Access repositories, issues, pull requests, and code.

**Why it's useful:**
- "What PRs need my review?"
- "Show me recent commits on main"
- "Create an issue for the bug I just found"
- Navigate codebases without leaving the conversation

**Setup:** Requires GitHub personal access token.

```prompt
Help me set up the GitHub MCP for my repositories.
```

### Notion MCP

**What it does:** Read and update your Notion workspace.

**Why it's useful:**
- "Add this to my reading list"
- "What tasks are due this week?"
- "Update the status on that project"

**Setup:** Requires Notion integration token.

```prompt
Help me set up the Notion MCP so I can access my Notion pages from Claude.
```

### Figma MCP

**What it does:** Access Figma files, get design context, generate screenshots.

**Why it's useful:**
- "Get the design specs from this Figma file"
- "Take a screenshot of this component"
- "What's the structure of this design?"

**Setup:** Requires Figma personal access token.

## Setting Up Your First MCP: Google Workspace

We assume everyone following this course will set up the Google Workspace MCP. It's the foundation that makes everything else more powerful. Here's exactly how to do it:

### Step-by-Step Setup

**1. Make sure you have Claude Code or an MCP-compatible client**

MCPs work through clients that support the Model Context Protocol. Claude Code (Anthropic's CLI tool) is the most common. If you're using a different tool, check its documentation for MCP support.

**2. Install the Google Workspace MCP**

In Claude Code, you can add MCPs through your configuration. The Google Workspace MCP is one of the most popular and well-maintained options.

```prompt
How do I add the Google Workspace MCP to my Claude Code configuration?
```

**3. Authenticate with Google**

When you first try to use a Google Workspace feature, you'll be redirected to Google's OAuth flow:
- Sign in with your Google account
- Review the permissions being requested
- Click "Allow" to grant access

**4. Test it**

Once connected, try these prompts to verify it works:

```prompt
What's on my calendar today?
```

```prompt
Show me my most recent emails.
```

```prompt
List files in my Google Drive.
```

### What if I don't have Claude Code?

If you're using Claude through the web interface or API without MCP support, you can still benefit from the practices in this course. MCPs are a convenience—they eliminate copy-pasting—but they're not required. You can always:
- Copy calendar events into your prompt manually
- Paste email content when asking for help
- Upload documents directly

MCPs just make this smoother.

### General Setup Steps (for any MCP)

1. **Find the MCP** - Most MCPs are available through Claude Code or as standalone servers
2. **Authenticate** - Connect your account (Google, Slack, GitHub, etc.)
3. **Configure access** - Decide what data the MCP can access
4. **Test it** - Ask Claude a question that uses the MCP

### Security Considerations

MCPs have access to your real data. Be thoughtful:

- **Review permissions** - Understand what each MCP can read and write
- **Use read-only when possible** - If you only need to read data, don't grant write access
- **Limit scope** - Give access to specific folders, not your entire file system
- **Revoke unused MCPs** - Remove access when you're not using an MCP

## Building Your Own MCP

Eventually, you might want an MCP for something that doesn't exist. Good news: you can build it.

```prompt
Help me build a simple MCP server that reads my local JSON file of book notes and lets me search through them.
```

MCPs are just servers that follow a specific protocol. If you can write a simple API, you can write an MCP.

## Common MCP Issues

### MCP not responding
Check that the MCP server is running. Most need to be started before they work.

### Authentication expired
Tokens expire. Re-authenticate when prompted.

### Can't find my data
Check the MCP's scope. It might only have access to specific folders or channels.

### Rate limits
Some services limit how often you can query them. Wait a minute and try again.

## What MCPs Are Not

MCPs are not:
- **AI that runs autonomously** - MCPs are tools Claude uses when you ask
- **Always-on monitoring** - They only activate during conversations
- **Replacements for apps** - They augment your workflow, not replace your tools

## Recommended Setup Order

1. **Google Workspace** - Start here. Everyone has a Google account, and calendar/email are immediately useful
2. **File System** - For working with local files and projects
3. **GitHub** (if you code) - For repository access
4. **Slack** (if you use it) - For team communication
5. **Notion/Obsidian** (if you use them) - For notes and tasks

Start with Google Workspace. Get comfortable with one MCP before adding more. The goal isn't to connect everything—it's to have Claude be useful for your actual daily tasks.

## Using Google Workspace Throughout This Course

Many practices in this course become more powerful with Google Workspace connected:

- **Practice 03 (Remember - Daily Log)**: "What meetings did I have yesterday?" to jog your memory before journaling
- **Practice 07 (Gather - Dashboard)**: Your dashboard can show real calendar events
- **Practice 08 (Refine)**: Use email search to find old conversations about features you want to improve

Once you've set it up, you'll find yourself using it constantly—often without thinking about it.
