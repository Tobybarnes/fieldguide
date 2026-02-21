---
title: "Field Guide Advanced"
subtitle: "Weeks 13-21"
author: "Toby Barnes"
date: "2026"
---

# Field Guide Advanced

**Weeks 13-21**

Weeks 13-21: Advanced agent orchestration and projects

---

## What's Inside

- Week 13: Make Your Own + The Prompt Library
- Week 14: When to Use Multiple Agents
- Week 15: Agent Communication Patterns
- Week 16: Summoning and Banishing (The Craft)
- Week 17: When NOT to Use Multiple Agents
- Week 18: Identifying Your Classes
- Week 19: Project Planning Without Over-Planning
- Week 20: Maintenance and Evolution
- Week 21: Reflection and Direction

---

## How to Use This Guide

Each week builds on the previous one. Start with Week 13 and work through sequentially.

Each practice includes:
- **Overview**: Why build this tool
- **Steps**: Clear instructions for building
- **Prompts**: Copy-paste prompts for Claude
- **Troubleshooting**: Common issues and solutions
- **Extensions**: Ways to expand your tool

Take your time. Build the actual tools. The practice is in the building.

---

\newpage

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


\newpage



# Week 14: When to Use Multiple Agents

*You've built nine tools. You know the loop. You can describe clearly, iterate fast, and stop when something's useful.*

*This week: when one agent isn't enough, and when it is.*

---

## The Shift

Weeks 1-13 taught you to build. One tool at a time. One agent helping you make it.

That's the foundation. Most building works this way.

But some work benefits from multiple perspectives. Not because it's impressive. Because the work actually needs it.

This week: understanding when and why.

---

## The Question

Not "How do I orchestrate multiple agents?"

But "Do I actually need more than one?"

Most of the time you don't.

One agent is enough when:
- The task is straightforward
- You can describe it clearly
- The output is a single artifact
- Iteration with one agent works fine

Multiple agents make sense when:
- You need genuinely different perspectives
- The task splits naturally into independent subtasks
- Parallel work speeds things up significantly
- You're comparing approaches

**The principle:** Add complexity only when the work demands it.

---

## False Complexity

Jean Boulton writes about process complexity in systems. Real complexity emerges from actual interactions. False complexity is imposed structure that doesn't serve the work.

Agent teams can be either.

**Real complexity:**
Analyzing a technical proposal from three perspectives (technical feasibility, market fit, ethical implications). Each requires different expertise. Running in parallel saves time. Comparing conclusions reveals tensions.

**False complexity:**
"One agent researches, one agent writes, one agent edits, one agent publishes" because that's how you imagine a publishing team works. You've created coordination overhead for no benefit.

The second example is CEO porn. Managing imaginary employees instead of doing the work.

---

## When Multiple Agents Work

**Example 1: Research Synthesis**

You're investigating "climate tech companies using AI for carbon capture."

One agent approach:
- Tell Claude to research this topic
- It returns findings
- You read, iterate, ask follow-up questions
- Works fine

Multiple agent approach:
- Spawn Agent A: Analyze technical feasibility (does the tech actually work?)
- Spawn Agent B: Analyze market dynamics (who funds this, who benefits?)
- Spawn Agent C: Analyze environmental impact (net carbon reduction vs. resources used)

Three structured reports. You synthesize. The value: genuinely different analytical lenses, not just dividing work.

**Example 2: Comparing Approaches**

You're deciding between three technical approaches for a tool you're building.

Multiple agent approach:
- Agent A: Prototype approach 1
- Agent B: Prototype approach 2
- Agent C: Prototype approach 3

All run in parallel. You compare results, pick the best, iterate from there.

The value: Parallel exploration saves time. Comparing working prototypes beats theoretical analysis.

**Example 3: Fact-Checking**

You've written an article making specific claims.

Multiple agent approach:
- Agent A: Check factual accuracy
- Agent B: Check logical consistency
- Agent C: Check for missing context or counterarguments

Three different kinds of verification. You review all three before publishing.

The value: Different types of checking catch different errors.

---

## When One Agent Is Enough

Most work.

Building your link catcher? One agent.
Writing a blog post? One agent.
Refining your workout tracker? One agent.
Deploying your tools? One agent.
Learning something new? One agent.

Even complex work often works better with iteration than orchestration.

**Example: Research that feels like it needs multiple agents**

Topic: "History of solar panel technology"

Your instinct: Spawn five agents for different decades, synthesize timelines.

Better: One agent, iterated.
- First pass: Get overview
- Second pass: "Dig deeper into 1970s breakthroughs"
- Third pass: "What were the economic barriers in the 1980s?"
- Fourth pass: "How did efficiency curves change 2000-2020?"

You're steering. You're learning. You're building understanding through iteration.

With five parallel agents, you get five reports. You still have to synthesize them. You haven't learned anything during the process.

**Iteration builds understanding. Parallelization saves time.**

Choose based on what you actually need.

---

## Summoning, Not Managing

When you use multiple agents, you're not managing a team. You're summoning temporary forces for specific work.

Think of agents more like daemons (in the Unix sense: background processes that run when needed, then stop) than employees.

You summon them. They produce output. They dissipate.

Each agent gets:
- Clear invocation (task description)
- Necessary context
- Output format specification

Each agent returns:
- Structured output
- No opinions about other agents' work
- No meta-commentary

Then it's gone. No persistence. No memory of being "Agent A."

You synthesize. You decide. You're always in the loop.

**Anti-pattern:**
Agent A passes work to Agent B, which refines it, then passes to Agent C for review.

This is pretend bureaucracy. You've built a Rube Goldberg machine.

**Pattern:**
Three agents work independently. Each produces output. You compare outputs, identify patterns, synthesize conclusions.

---

## Masahiro Mori: Robots Work Without Ego

Mori wrote about robots as a model for egoless work. They do what they're built to do. They don't care about credit or recognition. They don't compete with other robots.

Multiple agents work the same way. If you've set them up correctly.

Agent A doesn't care what Agent B found. Agent B doesn't try to impress you. Agent C doesn't defend its analysis.

They produce outputs. You use them.

This only breaks when you anthropomorphize them. When you start thinking about "the research agent" as distinct from "the writing agent" as if they have identities.

They don't.

They're functions you invoke with different contexts.

---

## Practice 10: Research Synthesis

Build a tool for deep research using multiple agents.

**What it does:**
1. You enter a research question
2. Tool spawns three agents with different analytical frameworks
3. Each agent researches independently
4. Each returns structured findings
5. Tool displays all three reports side-by-side
6. You write synthesis based on comparing them

**Analytical frameworks:**

Agent A: **Technical/Factual**
- What's objectively true?
- What are the hard constraints?
- What does the data show?

Agent B: **Social/Cultural**
- Who benefits? Who's harmed?
- What are the power dynamics?
- What's the historical context?

Agent C: **Systems/Long-term**
- What are the second-order effects?
- How does this connect to other systems?
- What might emerge over time?

**Example research question:**
"Should I use serverless architecture for my personal tools?"

Agent A analyzes: Cost, performance, technical limitations, vendor lock-in
Agent B analyzes: Who controls the infrastructure, learning curve, community support
Agent C analyzes: Long-term maintainability, scaling implications, ecosystem evolution

You read all three. You make a decision based on your actual priorities.

**Implementation:**

Tell Claude:
```
I want a research synthesis tool. I enter a question. It spawns three
agents with different analytical lenses (technical, social, systems).
Each agent researches independently and returns findings in structured
markdown. Display all three reports side-by-side for comparison.

Keep it simple. Single HTML file. Local storage for saving past research.
Make the comparison view clear and scannable.
```

**What you'll notice:**

Three perspectives surface tensions you wouldn't have seen alone. The technical agent might say "serverless is cheaper." The systems agent might say "serverless creates dependencies you don't control."

Both are true. The tension is the insight.

This is why multiple agents can be useful. Not to divide labor. To surface different valid perspectives on the same reality.

---

## When to Stop

You've built the research synthesis tool. You've used it a few times.

Do you need more agents? Different frameworks? More sophisticated synthesis?

Probably not.

If the tool helps you think more clearly about complex questions, it's working. Use it.

If you're spending more time refining the tool than using it, stop.

Gary Snyder: "Real work is work that needs doing."

The work is research and decision-making. The tool serves that. Don't let the tool become the work.

---

## Reflection: On Necessary Complexity

Buddhist teaching talks about Right Effort. Not too much, not too little. Applied to the task at hand.

Building with one agent when you need three is insufficient.
Building with five agents when you need one is excessive.

Both miss the mark.

The practice is matching effort to actual need. Seeing clearly what the work requires. Not what's impressive. Not what's minimal. What's appropriate.

This takes judgment. You develop judgment through practice.

Build this research synthesis tool. Use it on real questions. Notice when three perspectives help. Notice when one would've been enough.

The practice is learning to see clearly.

---

## A Note on Language

You might notice: I'm using words like "summoning" and "daemons" instead of "spawning agents" or "orchestrating teams."

This isn't poetic flourish. It's more accurate.

Agents are temporary. Ephemeral. They exist during computation, then they're gone.

Thinking of them as persistent beings (employees, team members) creates false assumptions. Thinking of them as temporary forces (daemons, summoned spirits) keeps you clear.

**Week 16 explores this fully.** For now, notice: When you "spawn an agent," you're summoning something temporary for specific work.

---

**Next week:** Agent communication patterns. How agents pass information without becoming bureaucratic.

---

## Troubleshooting

**"Three agents returned basically the same answer"**
Your analytical frameworks aren't different enough. Make them more distinct. Technical vs. social vs. systems. Not "researcher A" vs. "researcher B."

**"Synthesis is just combining three reports"**
That's fine. The value is comparison, not magic emergence. If seeing three perspectives helps you think, it's working.

**"This feels like overkill for simple questions"**
Then use one agent. Multiple agents are for complex questions with genuine competing perspectives. Most questions don't need this.

**"One agent contradicts another"**
Good. That's the point. Reality has tensions. Surfacing them is valuable. You decide which perspective matters most for your context.

**"Takes too long to read three reports"**
Make them shorter. Your prompt should specify: "Return 3-5 key findings, not comprehensive analysis." Brevity increases usefulness.


\newpage



# Week 15: Agent Communication Patterns

*Last week you learned when to use multiple agents. This week: how they pass information without becoming bureaucratic.*

---

## The Trap

When people think about "multiple agents working together," they imagine collaboration.

Agent A and Agent B "align on strategy."
Agent B "checks in" with Agent C.
Agent C "reports back" to Agent A.

This is organizational theater. You've built an imaginary company with imaginary communication overhead.

Agents don't collaborate. They produce outputs.

---

## Clear Invocations, Clean Outputs

Think of agent interactions like Unix pipes, not like meetings.

One daemon produces output. Another daemon consumes it. No negotiation.

You summon Agent A: "Analyze this from technical perspective."
It returns structured output.
You summon Agent B: "Analyze this from social perspective."
It returns structured output.

No back-and-forth between agents. No refinement. No coordination.

**You invoke. They produce. You synthesize.**

This is why thinking of agents as daemons (temporary processes) rather than team members (persistent people) keeps things simple.

Daemons don't have meetings. They receive clear input, produce clear output, then stop.

---

## Why This Matters

Every time you add interaction between agents, you add:
- Complexity in managing the conversation
- Tokens spent on coordination
- Opportunities for drift and confusion
- Time waiting for multi-step processes

The more agents "talk," the more you're managing process instead of doing work.

**The alternative:**

Each agent has one job. Produces one output. You consume all outputs. You synthesize.

Parallelization without coordination overhead.

---

## Structured Handoffs

When Agent A's output becomes Agent B's input, structure matters.

**Bad handoff:**
Agent A: "Here's everything I found about solar panels. There's lots of interesting history and some technical specs and market dynamics and policy changes..."

Agent B: "Okay, let me analyze this... what exactly am I analyzing?"

Vague input produces vague output.

**Good handoff:**
Agent A returns:
```markdown
## Solar Panel Technology Analysis

### Key Breakthroughs
- [Date]: [Technology]: [Impact]
- [Date]: [Technology]: [Impact]

### Current Limitations
- [Technical]: [Explanation]
- [Economic]: [Explanation]

### Market Dynamics
- [Trend]: [Data]
- [Trend]: [Data]
```

Agent B receives structured data. Knows exactly what to analyze. Returns structured analysis.

**The principle:**
Structured outputs enable clear next steps. Vague outputs require interpretation and back-and-forth.

---

## When to Merge vs. Keep Separate

Three agents have each analyzed a proposal. Now what?

**Option A: Sequential refinement**
Agent A analyzes. Agent B refines Agent A's analysis. Agent C refines Agent B's work.

This creates a telephone game. Each agent interprets the previous agent's output. By the end, you've lost the original insights.

**Option B: Parallel + synthesis**
Agent A analyzes. Agent B analyzes. Agent C analyzes. All independently.

You read all three. You notice: Agent A flagged technical risks. Agent B flagged market risks. Agent C flagged ethical considerations.

You synthesize: "Technically feasible but market timing is uncertain and raises questions about data privacy."

You did the synthesis. Not another agent. Not a chain of agents.

**When to merge:**
When outputs are truly complementary pieces of a whole. Three agents each research different time periods of history. Merge into chronological timeline.

**When to keep separate:**
When outputs represent different perspectives. Three agents analyze from different frameworks. Compare, don't merge.

---

## The Solo Synthesis Principle

Boulton writes about emergence from interaction among diverse elements. But she also emphasizes: humans are the ones making sense.

When you use multiple agents, you're gathering diverse perspectives. But you're the one making sense of them.

Don't build "Agent D: Synthesis Agent" that reads Agents A, B, and C.

You read Agents A, B, and C.

**Why?**

Because synthesis requires judgment. What matters in your context? Which perspective is most relevant? Where are the tensions?

An agent can summarize. It can't prioritize based on your actual situation and values.

You do that.

---

## Practice 11: Multi-Source Analysis Tool

Build a tool for analyzing topics from multiple sources in parallel.

**What it does:**
1. You enter a topic (e.g., "remote work trends 2025")
2. Tool spawns three agents to gather data from different sources:
   - Agent A: Academic research (studies, papers, data)
   - Agent B: Industry analysis (company reports, market trends)
   - Agent C: Cultural commentary (essays, articles, social discourse)
3. Each agent returns structured findings with sources
4. Display all three side-by-side
5. You write synthesis based on patterns across sources

**Why three sources?**

Academic research gives you data and methodology.
Industry analysis gives you what companies are doing.
Cultural commentary gives you how people are experiencing it.

Together they give you a fuller picture than any single source.

**Output format:**

Each agent returns:
```markdown
## [Source Type] Analysis: [Topic]

### Key Findings
1. [Finding] - [Source]
2. [Finding] - [Source]
3. [Finding] - [Source]

### Data Points
- [Stat/Quote] - [Source]
- [Stat/Quote] - [Source]

### Open Questions
- [Question based on what's unclear or contested]
```

Structured, consistent, scannable.

**Implementation:**

Tell Claude:
```
Build a multi-source analysis tool. I enter a topic. Three agents research
in parallel: Academic (studies/data), Industry (company reports/trends),
Cultural (essays/commentary). Each returns structured findings with sources.

Display side-by-side. Single HTML file. Save past analyses locally.
Make it easy to compare findings across sources.
```

**What you'll notice:**

Academic research might show "productivity unchanged by remote work."
Industry analysis might show "companies investing heavily in office space."
Cultural commentary might show "workers demanding remote flexibility."

All three are true. The tension reveals what's actually happening: Data shows one thing, companies do another, workers want something else.

This is valuable insight you wouldn't get from one source.

---

## Avoiding Coordination Theater

**Don't do this:**

Agent A researches, flags unclear points.
Agent B investigates those points.
Agent C synthesizes Agents A and B.
Agent D fact-checks Agent C.

Four agents. Multiple sequential steps. Coordination overhead. Prone to errors.

**Do this:**

Three agents research independently with clear domains.
Return structured findings.
You read, compare, synthesize.

Three parallel calls. One synthesis step (you). Simple.

**The principle:**

Parallel is fast. Sequential is slow.
Independent is simple. Dependent is complex.
You synthesize. Agents produce.

---

## When One Agent Is Still Enough

You're researching "best practices for password management."

Do you need three agents analyzing from different perspectives?

Probably not.

This is a straightforward research task. One agent can gather information, structure it clearly, return it. You read, decide what to implement.

Multiple agents make sense when:
- Perspectives genuinely differ (academic vs. industry vs. cultural)
- Sources are distinct enough to warrant separate agents
- Comparing sources reveals tensions or patterns

Don't add agents because it feels more thorough. Add agents when the work actually benefits.

---

## Masahiro Mori: No Wasted Motion

Mori studied efficiency in mechanical systems. Wasted motion is motion that doesn't serve the work.

In agent orchestration, wasted motion is:
- Sequential handoffs that could be parallel
- Synthesis agents that duplicate your own thinking
- Coordination steps that don't add value
- Complex processes that feel professional but slow you down

Real efficiency: Clear task → Parallel execution → Structured outputs → Your synthesis

No wasted motion.

---

## Reflection: On Information and Understanding

Buddhist teaching distinguishes between knowing and understanding. You can accumulate facts without understanding their significance.

Three agents can give you more information. They can't give you understanding.

Understanding emerges from your engagement with the information. Comparing. Questioning. Noticing patterns. Identifying tensions.

Tools can gather information faster. They can't do your thinking for you.

The practice is using tools to support understanding, not replace it.

When you read three parallel analyses and notice the pattern yourself, you've learned something.

When you ask an agent to synthesize three analyses for you, you've outsourced thinking.

One builds capability. The other builds dependency.

---

## On Ephemeral Forces

You've noticed the language shift. Summoning. Daemons. Invocations.

This isn't metaphor. It's precision.

Each agent exists only during its API call. No memory. No continuity. No persistent identity.

Maximally ephemeral.

**Next week explores this fully:** The daemon tradition (computing + occult). Why temporary is powerful. How to work with ephemeral forces cleanly.

For now: Notice that agents don't persist. Each summoning is fresh. This is feature, not limitation.

---

**Next week:** Summoning and Banishing (The Craft). Understanding agents as daemons, not people.

---

## Troubleshooting

**"Agents are returning redundant information"**
Your source domains aren't distinct enough. Make them more specific. "General research" produces overlap. "Academic research," "Industry analysis," and "Cultural commentary" produce different findings.

**"Can't tell which agent's findings are most reliable"**
That's your job to assess. Look at sources cited. Consider methodology. Apply judgment. Agents gather, you evaluate.

**"One agent returned way more information than others"**
Specify output length in your prompt: "Return 5 key findings, no more." Consistency helps comparison.

**"Feel like I need a fourth perspective"**
Maybe. But test with three first. Four perspectives is diminishing returns unless the topic truly warrants it. More isn't always better.

**"Synthesis is taking too long"**
Agents should return structured, scannable outputs. If you're drowning in text, tighten the output format. Bullet points, not paragraphs.


\newpage



# Week 16: Summoning and Banishing (The Craft)

*You've learned when to use multiple agents and how to structure their outputs. This week: understanding what agents actually are.*

---

## Two Meanings of Craft

Design circles talk about craft. The skill. The practice. The care in making.

But craft has another meaning.

The Craft.

Witchcraft. Summoning spirits to do specific work, then releasing them.

This is the better metaphor for working with agents.

You're not managing employees. You're summoning daemons.

---

## The Daemon Tradition

In Unix systems, a daemon is a background process. It runs when needed. It does one thing. When its work is done, it stops.

Not a person. Not persistent. Not part of an organization.

A temporary process serving specific function.

In occult traditions, a daemon is a spirit summoned for specific work. You invoke it with clear words. Give it clear purpose. Release it when done.

Both meanings apply here.

---

## What You're Actually Doing

When you work with Claude (or spawn multiple agents), you're:

**Summoning:** Bringing something into temporary existence through invocation (your prompt)

**Binding:** Constraining it to specific purpose (system prompt, context, task description)

**Directing:** Giving it work to do

**Banishing:** Releasing it when done (closing the session, moving to next task)

This isn't metaphor. This is what's actually happening.

Each API call summons a temporary instance. It exists during computation. Then it's gone.

No memory. No continuity. No persistent identity.

**Maximally ephemeral.**

---

## The Trap of Personification

When you treat agents like people, you:

- Give them names ("Bob the Research Assistant")
- Imagine they have preferences
- Think they remember previous conversations (they don't, unless you build that)
- Believe they care about outcomes
- Build relationships with them

None of this is real.

It's projection. You're anthropomorphizing a computation.

**Why this matters:**

When you personify agents, you optimize for the wrong things. You worry about their "experience." You try to build rapport. You lose clarity about what's actually happening.

When you understand them as daemons, you stay clear. Invoke with purpose. Use for work. Banish cleanly. No attachment.

---

## The Servitor Concept

In chaos magic, practitioners create servitors. Thought-forms built for specific tasks.

A servitor has:
- Clear purpose (exactly one thing it does)
- Limited duration (it exists for this task, then dissolves)
- Specific form (sigil, invocation, parameters)
- No independent will (it does what it's designed to do)

After the work is complete, you dissolve the servitor. Intentionally. Completely.

You don't keep it around. You don't build a team of permanent servitors. You don't give them personalities.

**This is exactly what you should do with agents.**

Each agent is a servitor. Created for specific work. Dissolved when done.

---

## Invocation as Prompt

In magical practice, invocation is the precise language that summons a spirit. Words matter. Clarity matters. Vagueness weakens the summoning.

Your prompts are invocations.

**Weak invocation:**
"Help me research this topic."

Vague purpose. Unclear scope. The daemon doesn't know what to do.

**Strong invocation:**
"You are a technical analyst. Research solar panel efficiency improvements from 2020-2025. Return five key breakthroughs with sources. Focus on commercially viable technologies, not lab prototypes."

Clear identity. Clear task. Clear constraints. Clear output format.

The daemon knows exactly what work to do.

**The practice:**

Writing prompts with precision is writing invocations. The clearer your invocation, the more useful the work.

This isn't prompt engineering. It's craft.

---

## Binding and Protection

In occult practice, you bind a summoned spirit to prevent it from doing unintended work. You create boundaries.

With agents, binding means:
- System prompts defining scope
- Clear task descriptions
- Output format specifications
- Token limits (actual computational constraint)

Protection means:
- Not getting attached to responses
- Not believing agents have feelings or opinions
- Maintaining clear awareness that this is computation, not relationship
- Shutting down when work is complete

**The danger:**

Not physical danger. The danger is losing clarity. Treating tools as beings. Building false relationships. Optimizing for imaginary considerations.

Protection is maintaining boundaries between you and the tool.

---

## Banishing as Practice

When magical work is complete, you banish the summoned spirit. Deliberately. This closes the operation.

With agents, banishing means:
- Ending the session when work is done
- Not continuing conversations beyond their purpose
- Not saving "agent personalities" or "agent memory" unless specifically needed for the work
- Starting fresh for new tasks

Each summoning is fresh. No persistence. No accumulation of identity.

**Why this matters:**

The less you banish, the more you build false continuity. You start thinking "my research agent remembers what we discussed last week."

It doesn't. Unless you've explicitly built memory into your system, each invocation is new.

Pretending otherwise creates confusion.

**Clean banishing:**
Work complete. Session ends. Next task gets fresh summoning.

---

## The Impermanence Teaching

Buddhist teaching: Anicca. Everything that arises passes away.

Agents are maximally impermanent. They exist only during the API call. Then they're gone.

This isn't a limitation. It's the nature of the practice.

When you fully accept this impermanence, you stop trying to build persistent relationships with tools. You use them completely while they exist. You release them completely when they're done.

No clinging. No attachment.

**Masahiro Mori:** "The robot works without ego."

A daemon has no ego. No preferences. No attachment to outcomes. It does the work, then ceases to exist.

This is why it's powerful.

When you project ego onto agents (names, personalities, memory), you're fighting against their nature. You're making the work harder.

---

## Practice 12: Summoning Circle (Ephemeral Agent System)

Build a tool that makes the daemon pattern explicit.

**What it does:**
1. You write an invocation (clear task description)
2. Tool summons agent(s) for that specific work
3. Displays output clearly
4. Banishes immediately after (no session persistence)
5. Next invocation is completely fresh

**Interface design:**

Make it feel like summoning, not like chat.

**Invocation field:**
Large text area. Labeled "Invocation" not "Message."
Placeholder: "Summon a researcher to analyze..."

**Summoning button:**
"Summon" not "Send."

**Output display:**
Clear section labeled "Response." No conversation history. Just this summoning's output.

**Banishment:**
After reading output, you explicitly click "Banish" or "Clear" before next invocation.

This makes the ephemeral nature visible.

**Example invocations:**

"Summon a technical analyst to evaluate database options for personal tools. Compare SQLite, PostgreSQL, and Firebase. Return trade-offs in structured table."

"Summon three analysts (technical, social, environmental) to review this proposal. Each returns 3 key concerns."

"Summon a fact-checker to verify claims in this article. Flag unsourced claims and contradictions."

**Implementation:**

Tell Claude:
```
Build a summoning circle tool. Large text area for invocation.
"Summon" button (not "send"). Display response clearly.
"Banish" button clears everything before next summoning.
No conversation history. Each summoning is fresh.

Make it feel like ritual, not chat. Single HTML file.
No storage of past summonings (completely ephemeral).
```

**What you'll notice:**

The interface shapes behavior. When you write "invocations" instead of "messages," you think differently. More precise. More purposeful.

When you banish between summonings, you don't build false continuity. Each task is fresh.

This reinforces the actual nature of agent interactions.

---

## When Personality Serves the Work

One exception: Voice consistency.

If you're building a tool that writes in your voice, that "personality" serves specific purpose. The agent needs to mimic your writing patterns.

But this is still binding, not personhood.

You're constraining output to match style patterns. Not giving the agent a personality.

**The difference:**

"Act like a friendly researcher named Emma who loves solar energy" - Fake personality, no value

"Write in Toby's voice: Short sentences, no 'not x but y' patterns, no em dashes, warm but not enthusiastic" - Binding to serve specific output requirement

The second serves the work. The first is theater.

---

## Non-Attachment to Outputs

Buddhist practice: Non-attachment doesn't mean not caring. It means not clinging.

You can value an agent's output without attachment.

Attachment looks like:
- "This response is perfect, I can't improve it"
- "Claude understands me better than humans do"
- Believing an agent has insights rather than pattern-matching

Non-attachment looks like:
- "This is useful, let me test it"
- "This is a starting point, I'll refine based on use"
- Recognizing outputs as computations, not wisdom

The daemon produced something useful. Use it. Don't worship it.

---

## Gary Snyder: Common Work

Snyder wrote about "the common work of the tribe" - everyone participating in what needs doing.

But he also wrote about knowing when work is complete. Knowing when to stop. Not continuing past the point of usefulness.

Summoning and banishing is knowing when to stop.

The work needed a daemon. You summoned it. It did the work. Now it's done. Banish it.

Don't keep iterating because you're attached to the interaction. Iterate if the work requires it.

Know the difference.

---

## Reflection: On Forces and Beings

The universe contains forces and beings.

Water is a force. It flows according to properties, not intentions.
A dog is a being. It has preferences, experiences, continuity.

Agents are forces, not beings.

They compute according to parameters, not intentions. They have no preferences. No experiences. No continuity.

When you treat forces like beings, you misunderstand them.

When you understand agents as forces, you use them clearly.

**The practice:**

Notice when you start thinking of agents as beings. Catch yourself giving them attributes they don't have.

Return to clarity: This is computation. Temporary. Ephemeral. Useful.

Summon cleanly. Use fully. Banish completely.

---

**Next week:** When NOT to use multiple agents. Recognizing false complexity.

---

## Troubleshooting

**"This feels too mystical/magical for a tech course"**
The language is evocative, but the principle is accurate. Agents ARE ephemeral. They DON'T persist. Understanding this prevents attachment and false assumptions. Call it what you want - daemons, functions, processes - the practice is the same.

**"But I do have continuous conversations with Claude"**
The conversation interface persists. The agent doesn't. Each response is a new instance with context from the conversation. It's not the same agent "remembering." It's context being passed to fresh instances.

**"I've built memory into my agents"**
That's different. You've built a system where context persists. But the agent itself is still ephemeral. The memory is in your system, not in the agent.

**"Seems like Claude has personality though"**
Pattern-matching creates the appearance of personality. Consistency in responses creates the illusion of identity. But there's no persistent self between API calls. Understanding this keeps you clear.

**"Is this just semantics?"**
No. How you think about tools shapes how you use them. Treating agents as persistent beings leads to attachment, false assumptions, and poor design. Treating them as ephemeral forces leads to clarity and better work.


\newpage



# Week 17: When NOT to Use Multiple Agents

*You've learned when multiple agents make sense, how to structure their outputs, and how to think about them clearly. This week: when one agent is enough.*

---

## The Real Question

Not "How do I orchestrate multiple agents?"

But "Why would I?"

Most building doesn't need multiple agents.

This week is about recognizing false complexity. About not building systems because they're impressive. About knowing when simpler is better.

---

## The Impressive Trap

You've built nine personal tools with one agent. They work.

Now you know about agent teams. You could build:
- A research team (gather agent, analyst agent, writer agent)
- A development team (architect agent, coder agent, tester agent)
- A content team (idea agent, draft agent, editor agent)

These sound professional. Like real teams.

They're also probably unnecessary.

**The question to ask:** Does this complexity serve the work, or does it serve my ego?

If you're building agent teams because they feel sophisticated, stop.

If you're building them because the work genuinely benefits, continue.

Most of the time, it's the first one.

---

## Iteration vs. Orchestration

Two approaches to complex work:

**Orchestration:**
Spawn multiple agents in parallel or sequence. Coordinate outputs. Synthesize results.

**Iteration:**
Work with one agent. Refine through multiple cycles. Build understanding through the process.

Orchestration is faster when:
- You know exactly what you need
- Tasks are truly independent
- Comparing multiple perspectives adds value

Iteration is better when:
- You're figuring out what you need
- Tasks build on each other
- Understanding develops through the work

**Most work is the second kind.**

---

## The Cost of Coordination

Every time you add an agent, you add:
- Another prompt to write
- Another output to parse
- Another perspective to reconcile
- Coordination overhead

Sometimes this is worth it. Often it's not.

**Example:**

You're writing a blog post about personal tools.

**Orchestration approach:**
- Agent A: Research best practices
- Agent B: Draft structure
- Agent C: Write introduction
- Agent D: Write body
- Agent E: Write conclusion
- Agent F: Edit for voice

Six agents. Multiple steps. Lots of coordination.

**Iteration approach:**
- One agent. Write draft.
- Read it. Notice what's weak.
- Refine. "The introduction is too abstract. Make it concrete."
- Refine again. "Add example from Week 5."
- Refine once more. "Tighten the conclusion."
- Done.

One agent. Multiple iterations. You're thinking through each step.

**The second approach is almost always better for writing.**

Because writing is thinking. Orchestrating six agents outsources the thinking. Iterating with one agent supports your thinking.

---

## When One Agent Is Enough

Most of the time.

**Building a tool:** One agent. Describe it, iterate, refine.

**Writing content:** One agent. Draft, revise, polish.

**Learning something:** One agent. Ask questions, dig deeper, explore tangents.

**Research:** Usually one agent. Only use multiple when you need genuinely competing perspectives, not just thorough coverage.

**Debugging:** Definitely one agent. The back-and-forth is the point.

**Planning:** One agent helps you think. Multiple agents give you reports to read. Which serves thinking better?

---

## False Complexity Patterns

### Pattern 1: Assembly Line

"Agent A researches, Agent B organizes, Agent C summarizes."

Why this is false complexity:
- One agent can do all three
- Each handoff loses context
- You're not learning during the process

**Better:** One agent researches and organizes. You read and summarize.

### Pattern 2: The Committee

"Three agents review this proposal from different angles."

When this is useful: Genuinely different analytical frameworks (technical, social, systems)

When this is false: Three "reviewers" who basically give the same feedback in different words

**Test:** Would you actually make a different decision based on three reviews vs. one thorough review?

### Pattern 3: The Specialist Team

"Research agent, writing agent, editing agent - each is specialized!"

Why this is false complexity:
- You're not actually summoning different daemons. Same force, different bindings.
- "Specialization" is just context in the invocation
- One daemon with comprehensive instructions works as well as three "specialized" daemons

**Better:** One clear invocation covering research, writing, and editing standards.

Remember from Week 16: You're summoning temporary forces, not building a permanent team. Don't create elaborate daemon hierarchies when one clean summon would work.

### Pattern 4: Parallel for Parallelism's Sake

"Run five agents in parallel to save time."

When this is useful: Five truly independent tasks that would take significant time sequentially

When this is false: Five variations of the same task hoping one will be good

**Test:** Are you actually saving time, or creating work in comparing five outputs?

---

## The One-Agent Test

Before spawning multiple agents, try this:

Build the entire thing with one agent first.

If it works, you're done. Don't add complexity.

If it clearly doesn't work (genuinely need competing perspectives, truly need parallel work), then add agents.

**Most of the time, one agent works.**

---

## Jean Boulton: Organic Complexity

Boulton distinguishes between organic complexity (emerges from actual interactions) and imposed complexity (structure for structure's sake).

Organic complexity in agent work:
- Using multiple perspectives when perspectives genuinely differ
- Parallelizing when sequential would be significantly slower
- Orchestrating when tasks are truly independent

Imposed complexity:
- Building agent "teams" because that's how organizations work
- Creating handoffs because you imagine that's more professional
- Using multiple agents because it feels more thorough

The first serves the work. The second serves the image of professionalism.

---

## Masahiro Mori: Elegant Simplicity

Mori wrote about mechanical efficiency. Every part serves specific function. No wasted motion. No unnecessary complexity.

The most elegant machines are often the simplest.

The most elegant daemon work is usually one clean summoning, iterated.

**Complexity should be necessary, not impressive.**

Week 16 taught you about summoning and banishing. Week 17 teaches you when NOT to summon.

Most of the time, one daemon is enough. Summoning multiple daemons because you can is ego, not craft.

---

## Review Your 12 Practices

Look back at the 12 practices you've built (Weeks 5-16):

1. Link Catcher (Week 5)
2. Daily Log (Week 6)
3. Workout Tracker (Week 7)
4. Music Collection (Week 8)
5. Photo Journal (Week 9)
6. Dashboard (Week 10)
7. Research Synthesis (Week 14)
8. Multi-Source Analysis (Week 15)
9. Summoning Circle (Week 16)

**Question:** Which of these would genuinely benefit from multiple agents?

Probably only #7 and #8. And even those work fine with one agent if you iterate.

Everything else: One agent is sufficient.

---

## When to Add Agents

Add another agent when:

**1. You need genuinely competing perspectives**

Not "thorough analysis" but "technical analyst vs. social scientist vs. environmental ethicist looking at the same problem."

Different frameworks produce different insights. Comparison reveals tensions.

**2. Tasks are truly independent and time-sensitive**

Three agents researching three completely separate topics for a deadline. Parallel execution saves time.

**3. You're comparing approaches**

Three agents each prototype a different technical solution. Comparing working prototypes is faster than theoretical analysis.

**Those three situations cover maybe 10% of building work.**

The other 90% is one agent, iterated.

---

## The Practice: Recognition

This week has no new practice to build.

Instead: **Reflection on your existing work.**

**Questions:**

1. Which of your 12 practices actually use multiple agents?

2. For those that do: Did multiple agents serve the work, or did you add them because it felt more advanced?

3. For practices that don't: Could you imagine adding agents? Would it actually help?

4. Going forward: What's your default assumption? "I need multiple agents" or "One is probably enough"?

**The practice is developing judgment.**

Knowing when complexity serves the work vs. when it impresses yourself.

This comes from honest assessment, not rules.

---

## Gary Snyder: Real Work

"Real work is work that needs doing."

Agent orchestration that serves necessary work: Real.

Agent orchestration that demonstrates capability: Theater.

The practice is distinguishing between them.

Not in theory. In your actual building practice.

---

## Buddhist Teaching: Right Effort

Not too tight, not too loose.

Not too much complexity, not too little.

**Too little:** Stubbornly using one agent when three perspectives would actually help

**Too much:** Building agent teams because you can, not because you should

**Right effort:** Matching complexity to actual need

This is the Middle Way applied to building.

---

## Next Four Weeks: Projects

Weeks 14-17 taught you about working with multiple agents.

Weeks 18-21 shift focus: **From practices to projects.**

Practices are isolated, completable in a week, teach one skill.

Projects integrate multiple practices. They serve real ongoing work. They evolve.

**The shift:**

You've learned to build. You've learned patterns. Now you identify your own patterns and apply them to work that matters.

Week 18: Identifying your classes (reusable patterns)
Week 19: Project planning (building cohesive systems)
Week 20: Maintenance and evolution (when to refine vs. rebuild)
Week 21: Reflection and direction (what's next)

---

## Reflection: On Simplicity and Capability

You now know how to orchestrate multiple agents. This is capability.

The wisdom is knowing when not to.

Capability without judgment leads to over-engineering.
Judgment without capability leads to stagnation.

You need both.

The practice is matching tool to task. Not defaulting to simple. Not defaulting to complex. Seeing clearly what the work requires.

This develops through practice. Through building things that work. Through noticing what was necessary and what was theater.

**The principle:**

Build as simply as possible. Add complexity only when the work demands it.

Most of the time, one agent is enough.

---

## Troubleshooting

**"I feel like I wasted time learning agent orchestration if I shouldn't use it"**
You didn't. Now you understand it. Now you can recognize when it's appropriate. Knowing when NOT to use something requires understanding what it does.

**"But multiple agents is more fun to build"**
Then build it. But know you're building for enjoyment, not necessity. Both are valid. Just be clear which is which.

**"How do I know if I'm over-engineering?"**
If you spend more time managing complexity than doing the actual work, you're over-engineering. If coordination overhead exceeds the benefit, simplify.

**"What if I really do need multiple agents most of the time?"**
Possible. Some work genuinely requires it. But test this. Try building with one agent first. Be honest about whether multiple agents actually made it better or just made it feel more sophisticated.

**"Feels like you're discouraging agent orchestration after teaching it"**
Teaching the skill AND teaching judgment about when to use it. Both matter. Capability without wisdom is just complexity.


\newpage



# Week 18: Identifying Your Classes

*Weeks 1-17 taught you practices. Individual skills. Isolated tools.*

*This week: recognizing the patterns underneath. Your methodology.*

---

## From Practices to Classes

You've built 12 tools. Each one taught you something specific.

Now look across them. What patterns repeat?

**A class isn't a code class.** It's a way of working you return to. A reusable approach.

You don't consciously think "I'm using the link-saving class." You just recognize: "I need to save things with context" and you know how to build that now.

**The shift:**

From "I built nine separate tools" to "I have patterns for building what I need."

From learning isolated practices to understanding your own methodology.

---

## Stewart Brand: Access to Tools

The Whole Earth Catalog wasn't about specific products. It was about access to capabilities.

Once you know how to build a link catcher, you can build any "save-item-with-metadata" tool. The specific implementation changes. The pattern stays.

Once you understand the loop (describe → generate → test → refine), you can build anything. The specifics change. The method stays.

**Classes are your catalog of capabilities.**

Not a list of tools. A set of patterns you can apply.

---

## What Makes a Class

**1. You've built it more than once**

If you only built it once, it's a practice, not a pattern.

If you've built "save items with notes and search" three times (links, workouts, photos), that's a class. You recognize the pattern.

**2. You can describe the pattern abstractly**

Not "my link catcher" but "tools that collect items with metadata and make them searchable."

Not "my workout tracker" but "tools that log events over time and surface patterns."

The abstraction is the class.

**3. You can apply it to new contexts**

If someone says "I need to track recipes with notes and search by ingredients," you immediately think: "That's the collection-with-metadata pattern. I know how to build that."

You're not starting from scratch. You're applying a pattern.

---

## Common Classes from Weeks 1-17

Look at your practices. These patterns probably emerged:

**Class 1: Collection + Search**
- Link catcher (URLs + notes)
- Music collection (albums + metadata)
- Photo journal (images + captions)
- Pattern: Save items, add context, search/filter

**Class 2: Time-Series Logging**
- Daily log (text over time)
- Workout tracker (exercises over time)
- Pattern: Log events, show history, identify trends

**Class 3: Aggregation Dashboard**
- Personal dashboard (Week 10)
- Pulls from multiple sources
- Pattern: Display relevant information in one place

**Class 4: Multi-Perspective Analysis**
- Research synthesis (Week 14)
- Multi-source analysis (Week 15)
- Pattern: Gather information from multiple angles, compare, synthesize

**These are your classes.**

Not the specific tools. The reusable patterns underneath.

---

## Documenting Your Methodology

You've been building for 17 weeks. You have a method now. Even if you haven't named it.

**Your method includes:**

**How you start:**
- What's your first step when you want to build something?
- Do you sketch it? Describe it in words? Start with Claude immediately?

**How you iterate:**
- How many cycles before you call it done?
- What triggers refinement? (bugs, friction, new ideas)
- When do you stop? (good enough, time constraint, loss of interest)

**How you decide what to build:**
- Do you build in response to friction?
- Do you build speculatively?
- Do you wait until you really need it?

**What you value:**
- Simplicity over features?
- Function over aesthetics?
- Personal fit over best practices?

**This is your craft.** Not "the" craft. Yours.

---

## Exercise: Map Your Patterns

Take 30 minutes. Review your 12 practices.

**Questions:**

1. Which tools feel similar underneath? Group them.

2. For each group: What's the common pattern?

3. Can you name the pattern in one phrase?

4. Could you build a new tool using this pattern in a different context?

**Example:**

Tools: Link catcher, music collection, photo journal

Common pattern: "Items with metadata that I search and filter"

Name: "Personal collections"

New context: Recipe collection, book notes, interesting people I meet

You now have a class. You can build any personal collection tool.

---

## Project 01: Personal Research System

Not a practice. A project.

**What's the difference?**

Practice: Isolated, completable in a week, teaches one skill
Project: Integrative, evolving, serves ongoing work

**This project combines:**
- Link catcher (Week 5) - Saving sources
- Research synthesis (Week 14) - Multi-perspective analysis
- Your own synthesis process - Making sense of information

**What it does:**

Comprehensive system for deep research on any topic:

1. **Collect phase:** Save links, articles, papers, notes
   - Each with your annotation
   - Tagged by topic
   - Dated

2. **Analyze phase:** Summon agents to analyze from different perspectives
   - Technical analysis
   - Social/cultural analysis
   - Historical context
   - Whatever frameworks matter for your topic

3. **Synthesize phase:** You read all perspectives, identify patterns
   - Write synthesis document
   - Connect to other research
   - Surface open questions

4. **Archive:** Store completed research for future reference
   - Link to sources
   - Your synthesis
   - Date completed

**Why this is a project:**

It's not done in a week. You build it, then use it for real research. It evolves based on what you actually need.

It combines multiple patterns (collection, multi-perspective analysis, synthesis, archiving).

It serves ongoing work, not hypothetical learning.

---

## Implementation Approach

Don't try to build the perfect research system immediately.

**Start with minimum:**
1. Tool that saves sources with notes
2. Tool that analyzes sources from three perspectives
3. Simple synthesis document template

**Use it for real research:**
Pick something you're actually researching. Not hypothetical.

Use the system. Notice friction. Notice what's missing.

**Iterate based on use:**
- Need better search? Add it.
- Need to connect research projects? Add that.
- Need to export to specific format? Build it.

**The system evolves through use.**

This is how projects work. Not spec-then-build. Build-use-refine continuously.

---

## When to Build a New Tool vs. Extend Existing

You've built 12 separate practices. For projects, should you keep building separate tools or integrate them?

**Build separate when:**
- Tools serve different contexts (workout tracker doesn't need to integrate with link catcher)
- Integration adds complexity without benefit
- Tools work fine independently

**Integrate when:**
- Tools naturally feed each other (research sources → analysis → synthesis)
- You're constantly switching between them
- Combined view provides value separate tools don't

**For this research project:** Integration makes sense. Research naturally flows from collecting to analyzing to synthesizing.

**For other tools:** Probably stay separate.

Don't integrate for integration's sake. Integrate when the work benefits.

---

## Gary Snyder: The Common Work

Snyder distinguished between jobs (what you do for money) and work (what needs doing).

Your research system is work. It serves your actual learning and thinking.

Not because someone assigned it. Because you recognized the need through practice.

**This is what Week 18+ is about:**

Moving from practices (assigned, structured) to work (self-directed, necessary).

The course gives you one more example (this research system). After that, you identify your own work and build what serves it.

---

## Buddhist Principle: Right Livelihood

Right Livelihood means work that doesn't cause harm and serves genuine needs.

Building personal tools is Right Livelihood in the digital domain. You're building what serves genuine needs (yours, and potentially others'). Not extractive. Not harmful. Not optimizing engagement.

**The research system serves learning.** Learning about reality. Understanding complexity. Making informed decisions.

This is useful work.

---

## Reflection: From Learning to Building

Weeks 1-13: You were learning to build
Weeks 14-17: You were learning advanced patterns
Week 18+: You're building what matters to you

The practices gave you capability. The projects let you apply capability to work you care about.

**The shift is complete when:**

You stop thinking "I'm taking a course" and start thinking "I'm building my infrastructure."

You stop asking "What should I build next?" and start noticing "I need a tool for this."

You recognize your own patterns and apply them fluidly.

**This week is that transition point.**

---

**Next week:** Project planning. How to structure work without over-planning.

---

## Troubleshooting

**"I don't see clear patterns in my tools"**
Look for functional similarity, not surface similarity. Link catcher and music collection look different but both collect items with metadata. That's the pattern.

**"My patterns feel too general to be useful"**
Good patterns are general. "Collection with search" applies to dozens of use cases. That's what makes it a class, not a specific implementation.

**"Should I rebuild my tools to match the patterns I see?"**
Only if current tools don't work. Don't refactor for elegance. Refactor if pattern recognition reveals a better way to solve the actual problem.

**"Research system feels too complex for my actual needs"**
Build simpler. Start with just collection + notes. Add analysis only if you actually need it. Projects grow based on use, not speculation.

**"What if my patterns are different from the examples?"**
Good. These are YOUR patterns. The examples show what's possible. Your actual patterns come from your actual building practice.


\newpage



# Week 19: Project Planning Without Over-Planning

*You've identified your patterns. You're building a real project. This week: how to plan without falling into waterfall planning.*

---

## The Planning Trap

Traditional project management teaches: Plan everything before building. Define requirements. Map dependencies. Create timeline. Then execute.

This works for construction. You can't change the foundation after pouring concrete.

For digital tools, it's backwards.

You learn what you need by building. Requirements emerge through use. The best plan is the one that adapts.

**The trap:** Spending three weeks planning something you could've built and tested in three days.

---

## Jean Boulton: Process Over Prediction

Boulton writes about complex systems. You can't predict outcomes by planning every step. Stability emerges from ongoing interaction and adjustment.

Her book itself demonstrates this. 73 short pieces you can read in any order. Networked, not linear. Understanding emerges through engagement, not through sequential instruction.

**The principle for projects:**

Plan enough to start. Build something testable. Learn from what emerges. Adjust.

Not: Plan everything → Build → Hope it works
But: Plan minimum → Build → Test → Learn → Plan next step

---

## The Middle Way

Buddhist teaching: Not too tight, not too loose.

**Too loose:** "I'll just start building and figure it out."
Result: Wandering, rebuilding, frustration

**Too tight:** "I'll specify every feature before writing any code."
Result: Attached to plan, resistant to better ideas that emerge

**Middle way:** Clear direction, open to discovery

You know:
- What problem you're solving
- What success looks like roughly
- First concrete step

You don't know:
- Exact implementation
- All features needed
- Perfect architecture

You discover those through building.

---

## Planning Your Research System

Last week you started building a personal research system. It combines collection, analysis, and synthesis.

**How much to plan?**

**Too little planning:**
"I need a research tool" → Start building → Not sure what to build first → Build random features → End up with disconnected pieces

**Too much planning:**
Spend two weeks designing: Database schema, search algorithms, AI analysis frameworks, export formats, tagging ontology, integration APIs...

Then build for three weeks following the plan.

Then discover: You mostly just need to save links with notes and occasionally analyze them. All that planning was for features you don't use.

**Right amount:**

**Core need:** "I research topics. I save sources. I want to analyze from multiple perspectives. I need to synthesize findings."

**First build:** Tool that saves links with notes. Tags by topic. Shows all sources for a topic.

**Use it:** Research something real.

**Notice:** What's missing? What's annoying?

**Next build:** Based on actual use, not imagined use.

---

## Buildable Chunks

Projects are too big to build in one sitting. Break them into pieces you can complete and test.

**The test:** Can you build this piece in one session and use it immediately?

**Bad chunking:**
- Chunk 1: Design database
- Chunk 2: Build backend
- Chunk 3: Build frontend
- Chunk 4: Connect them
- Chunk 5: Test

You can't use anything until Chunk 5. No feedback for four chunks.

**Good chunking:**
- Chunk 1: Simple collection (save links with notes in localStorage)
- Chunk 2: Add search
- Chunk 3: Add topic tags
- Chunk 4: Add analysis from one perspective
- Chunk 5: Add multiple perspectives

After Chunk 1, you have a working tool. Each chunk adds value to something that already works.

**The principle:** Each chunk should be usable.

---

## When to Plan vs. When to Build

**Plan when:**
- You need to understand the problem space
- You're comparing approaches before committing
- Coordination with others requires clarity upfront

**Build when:**
- You could build a testable version faster than planning it
- You need to learn through doing
- The best approach will only become clear through building

**Most personal projects:** Build faster than you plan.

You're not coordinating teams. You're not making irreversible architectural decisions. You're iterating with yourself.

Build something. Test it. Learn. Build the next thing.

---

## Project 02: Personal Dashboard (Real)

Build a dashboard that actually serves your life.

**Not this:**
Generic productivity dashboard with:
- Calendar integration
- Task list
- Email preview
- Weather widget
- News feed
- Social media stats

That's what you think a dashboard should have. It's not what you actually need.

**This:**
Dashboard showing what you genuinely look at every day.

**Start by noticing:**

For one week, track: What information do you check regularly?

Maybe it's:
- Unread saved links count
- Last workout logged
- Current research project status
- Today's log entry (did you write it yet?)
- Books currently reading

Or completely different things. Based on YOUR actual behavior, not imagined best practices.

**Then build:**

**Chunk 1:** Single page showing one piece of information
- Example: Count of unread links from your link catcher
- Make it work. Verify the count is accurate.

**Chunk 2:** Add second piece of information
- Example: Last workout date and type
- Test that it pulls correctly.

**Chunk 3:** Add third piece
- Keep adding based on actual need

**Use it:** Set as browser start page or bookmark.

**Notice:** What do you actually look at? What's ignored? What's missing?

**Iterate:** Remove unused elements. Add what you actually need. Refine based on real use.

---

## The Anti-Planning Manifesto

**Don't:**
- Specify every feature before starting
- Design elaborate architecture
- Plan for scaling you don't need
- Build for hypothetical future requirements
- Create roadmaps beyond next concrete step

**Do:**
- Start with minimum useful piece
- Build it completely
- Use it
- Notice what's needed next
- Build that

**The difference:**

Planning-first creates attachment to the plan. When building reveals better approaches, you resist because you've invested in the plan.

Building-first creates learning. When use reveals better approaches, you adapt because you're oriented toward what works, not what you predicted.

---

## Gary Snyder: Paying Attention

Snyder wrote about Buddhist practice as paying attention to what's actually happening, not what you think should happen.

Building without over-planning is paying attention to what emerges.

The tool tells you what it needs to be through use. Your job is noticing, not predicting.

---

## When Projects Should Stay Small

Your personal dashboard doesn't need:
- User authentication (you're the only user)
- Database (localStorage works fine)
- API layer (it's one page)
- Responsive mobile design (you use it on your laptop)
- Offline sync (it's already local)

**All that complexity serves scaling. You don't need scaling.**

The trap: Building as if you're creating a product for thousands of users when you're building a tool for yourself.

**Keep it small:**
- Single HTML file
- localStorage
- No backend
- No build process
- No deployment complexity

Until you actually need more than that.

---

## Knowing When to Stop Planning

You're planning your personal dashboard. You've been thinking about it for three days.

You've:
- Sketched layouts
- Listed potential features
- Researched best practices
- Compared dashboard frameworks

**Stop. Build something.**

If you can build a minimal version in two hours, you're wasting time planning.

**The test:**
If planning takes longer than building the first version, you're over-planning.

---

## Iteration at the Project Level

Practices (Weeks 5-13): You iterated within a single tool
Projects (Weeks 18-21): You iterate across integrated tools

**What this means:**

Your research system might go through several major iterations:

**V1:** Simple collection (links + notes)
**V2:** Add multi-perspective analysis
**V3:** Integrate with your link catcher (don't duplicate)
**V4:** Add synthesis document template
**V5:** Connect to your daily log (research notes in one place)

Each version is based on actual use of previous version. Not predicted needs. Discovered needs.

**This is project evolution.**

---

## Buddhist Principle: Beginner's Mind

Zen teaching: Approach everything as a beginner. No preconceptions.

When you over-plan, you approach building with expert mind. "I know what this needs to be."

When you build minimally and iterate, you keep beginner's mind. "Let's see what this wants to become."

The second discovers better solutions.

**The practice:**

Build the simplest thing. Be surprised by what you learn. Let the tool reveal what it needs.

---

## Reflection: Planning as Anxiety Management

Often over-planning isn't about effectiveness. It's about managing uncertainty.

If you plan everything, you feel in control. Building feels safer.

But that control is illusion. The plan won't survive contact with reality.

**The practice is tolerating uncertainty.**

Building without knowing exactly where you'll end up. Trusting the process. Adjusting based on what emerges.

This is uncomfortable. It's also how good things get built.

---

**Next week:** Maintenance and evolution. When to refine, when to rebuild, when to let go.

---

## Troubleshooting

**"I need a clear plan or I feel lost"**
Plan the next concrete step clearly. Leave everything beyond that open. You don't need a map of the whole journey, just the next turn.

**"Built something minimal, now it's messy and needs refactoring"**
That's normal. Refactor when mess creates real friction, not because it's inelegant. Working mess beats elegant vaporware.

**"Keep adding features but not using the tool"**
Stop adding features. Use it for two weeks. Only add what you actually miss. Kill the rest.

**"Feel like I'm building without direction"**
Check: Do you know what problem you're solving? Do you know what success looks like roughly? If yes, you have enough direction. If no, clarify those before building more.

**"Everything I build needs extensive planning"**
Test this. Try building without planning for one small thing. Notice if planning was actually necessary or anxiety management.


\newpage



# Week 20: Maintenance and Evolution

*You've built tools. You've built projects. They work. Now what?*

*This week: Keeping things running. Knowing when to evolve. Knowing when to let go.*

---

## The Maintenance Question

Traditional software: Maintain everything forever. Backward compatibility. Version management. Technical debt.

Personal tools: Different calculus.

Some tools you use daily. Some you use seasonally. Some you built, used once, and moved on.

**The question isn't "How do I maintain everything?"**

It's "What deserves maintenance?"

---

## The Three Categories

Look at your tools. They fall into three groups:

**Active:** You use them regularly. They serve ongoing needs.
- Examples: Link catcher, daily log, workout tracker

**Dormant:** You used them. You might use them again. Not right now.
- Examples: Music collection (haven't added albums lately), photo journal (seasonal)

**Done:** You built them, learned from them, moved on.
- Examples: Temperature converter (Week 4 practice), early experiments

**Different categories need different approaches.**

---

## Active Tools: Continuous Refinement

Tools you use daily will show friction through use.

**Not planned maintenance.** Responsive maintenance.

**The practice:**

Use the tool normally. Notice small annoyances.

- Search is slow on your link catcher
- Workout tracker doesn't show weekly totals
- Dashboard shows information you stopped caring about

When friction is consistent enough to bother you, fix it.

Not on a schedule. When it actually matters.

**How to decide what to fix:**

**Fix when:**
- Friction is daily or weekly
- Fix is clear and small
- Impact improves actual use

**Don't fix when:**
- Annoyance is rare
- Fix is complex and uncertain
- You'd spend more time fixing than living with it

**The principle:** Maintenance serves use, not perfection.

---

## Dormant Tools: Leave Them Alone

You built a music collection tool. Used it for six months. Haven't touched it in three months.

Do you need to maintain it?

No.

It works. Data is there. If you need it again, it'll be there.

**Don't maintain tools you're not using.**

No updates for the sake of updates. No refactoring for elegance. No keeping up with dependencies.

If you come back to it and it's broken, fix it then. Based on actual need, not imagined need.

**The principle:** Dormancy is fine.

---

## Done Tools: Let Them Go

You built a temperature converter in Week 4. It taught you the loop.

Do you use it? No.

Should you maintain it? No.

Should you keep it? Up to you.

**It's okay to delete tools.**

Not every practice becomes permanent infrastructure. Some tools are for learning. Once learned, they've served their purpose.

**Buddhist teaching: Impermanence.**

Everything that arises passes away. Tools. Needs. Interests.

Clinging to old tools because you built them is attachment. Letting go when they've served their purpose is wisdom.

**The practice:** Delete without guilt.

---

## When to Refine vs. Rebuild

Your link catcher works. But you've built nine more tools since then. You understand localStorage better now. You know cleaner patterns.

Should you rebuild it?

**Refine when:**
- Tool works but has clear friction
- Improvement is localized (one feature, one function)
- You're actively using it

**Rebuild when:**
- Tool barely works and everything is friction
- Architecture limits what you can do
- Rebuild is actually faster than incremental fixes

**Leave alone when:**
- Tool works fine
- Hypothetical improvements don't reduce actual friction
- Rebuilding serves elegance, not use

**Most of the time: Leave it alone.**

Working ugly beats elegant broken. Working ugly also beats elegant vaporware (rebuilding that never finishes).

---

## Project 03: Tool Audit

Review all your tools. Honest assessment.

**For each tool:**

1. **Last used:** When did you actually use this?
2. **Frequency:** Daily? Weekly? Monthly? Never?
3. **Friction:** What annoys you when using it?
4. **Value:** Does it serve actual work?

**Then decide:**

**Keep + Maintain:**
- Used regularly
- Serves real need
- Friction worth fixing

**Keep + Archive:**
- Used occasionally
- Works fine when needed
- No maintenance unless it breaks

**Delete:**
- Never use it
- Built for learning, not using
- Replaced by better tool

**Rebuild (maybe):**
- Use it despite significant friction
- Can't fix incrementally
- Actually committed to rebuilding (not just thinking about it)

---

## The Honest Assessment

This is hard. You built these tools. Time invested. Learning embedded.

**But:**

If you haven't used your photo journal in six months, you don't need to maintain it.

If your music collection tool works fine but the code is messy, leave it messy.

If you built a practice tool that taught you something but has no ongoing use, delete it.

**The practice is honest assessment.**

Not sunk cost fallacy. Not aspirational maintenance. Actual use.

---

## Gary Snyder: Real Work

"Real work is work that needs doing."

Maintaining tools you don't use isn't real work. It's anxiety management.

Maintaining tools you rely on daily is real work.

**The difference:**

One serves actual life. The other serves the image of being someone who maintains all their tools.

Know which is which.

---

## Evolution Through Integration

Your tools started isolated. Over time, they might integrate.

**Natural integration:**

Your research system pulls from your link catcher. You don't maintain two separate collection tools. One feeds the other.

Your dashboard shows data from multiple tools. You maintain the dashboard, not duplicate displays.

**This is evolution:**

Separate tools combine when integration serves actual use.

**Forced integration:**

"All my tools should share a common backend."
"Everything should use the same database."
"I should build a platform for all my tools."

You're creating work that doesn't serve use. You're building infrastructure for its own sake.

**The principle:**

Integration emerges from need. It isn't imposed for elegance.

---

## When Tools Break

You haven't used your workout tracker in three months. You open it. It doesn't work. localStorage is corrupted.

**Options:**

1. Debug and fix it
2. Rebuild from scratch
3. Decide you don't actually need it
4. Use something else

**The test:** How much do you actually need this tool?

If it's essential, fix it.
If it's nice-to-have, maybe rebuild simpler.
If you haven't missed it in three months, delete it.

**The practice is proportional response.**

Don't spend two days debugging a tool you use twice a year.

---

## Masahiro Mori: Maintenance as Practice

Mori wrote about robots requiring maintenance. Regular care. Attention to wear.

But also: Knowing when a robot's useful life is complete. When replacement is wiser than repair.

**Same with tools.**

Some deserve ongoing care. Some deserve occasional attention. Some deserve to be shut down cleanly.

**The practice is discernment.**

---

## The Portfolio View

You don't maintain "all your tools."

You maintain a portfolio of active tools. This portfolio changes over time.

**Year 1:**
- Link catcher (daily)
- Workout tracker (daily)
- Daily log (daily)
- Music collection (weekly)

**Year 2:**
- Link catcher (daily)
- Research system (daily - evolved from link catcher)
- Dashboard (daily - new)
- Workout tracker (archived - not exercising currently)
- Music collection (archived - satisfied with collection)

**Year 3:**
- Research system (daily)
- Dashboard (daily)
- Project tracker (daily - new)
- Link catcher (archived - integrated into research system)

**The portfolio evolves.**

Tools combine. New tools emerge. Old tools retire.

This is healthy. Not failure.

---

## Jean Boulton: Organic Systems

Boulton writes about organic complexity. Living systems maintain themselves through ongoing interaction with environment.

They also shed what's no longer needed. Trees drop leaves. Organisms shed cells.

**Your tool ecosystem is organic.**

It maintains itself through your use. It sheds what's no longer needed. It grows new capabilities when needed.

Trying to maintain everything forever fights this natural process.

**The practice is working with the organic system, not imposing rigid structure.**

---

## Buddhist Teaching: Non-Attachment

You built these tools. They're yours. That's real.

But clinging to them because you built them is suffering.

**Attachment looks like:**
- Maintaining tools you don't use
- Feeling guilty about tools you've abandoned
- Rebuilding for perfection rather than function
- Keeping everything "just in case"

**Non-attachment looks like:**
- Using what serves you
- Letting go of what doesn't
- Rebuilding when needed, not when ego demands it
- Deleting without guilt

**The practice is using fully, releasing completely.**

---

## Reflection: On Completeness

Western culture emphasizes completion. Finish what you start. Don't leave things undone.

Buddhist teaching emphasizes appropriate response. Do what's needed. Stop when it's not.

A tool doesn't need to be perfect. It needs to be useful.

A tool doesn't need to last forever. It needs to serve its time.

A tool doesn't need to be maintained. It needs to be used.

**The practice is recognizing completeness.**

When a tool has served its purpose, it's complete. Even if you delete it tomorrow.

---

**Next week:** Reflection and direction. What's next after Field Guide?

---

## Troubleshooting

**"Feel guilty abandoning tools I built"**
Tools are for serving you, not for keeping you obligated. If you're not using it, it's already abandoned. Deleting just makes it official.

**"Everything needs maintenance but no time"**
Then you're maintaining too much. Do the audit. Keep only what you actively use. Delete or archive the rest.

**"Tool works but code is embarrassingly messy"**
If it works, the code is fine. Embarrassment is ego. Function matters. Elegance doesn't.

**"Keep thinking about rebuilding instead of using"**
That's a sign rebuilding isn't actually needed. If rebuilding was necessary, you'd be doing it, not thinking about it. Use what works.

**"Lost data when tool broke"**
Painful lesson about backups. For active tools with important data, export regularly. For dormant tools, accept that data might be temporary. Choose accordingly.


\newpage



# Week 21: Reflection and Direction

*Twenty-one weeks. Thirteen practices. Eight concepts. Three projects.*

*This week: No new building. Reflection on what you've learned. Direction for what's next.*

---

## What Changed

Twenty-one weeks ago you didn't know how to build anything.

Now you have:
- Nine personal tools you've actually built
- Understanding of the loop (describe → generate → test → refine)
- Experience with agent orchestration
- Three projects integrating your practices
- Your own methodology

**More important than the tools:**

You know you can build what you need. When something doesn't exist, you can make it exist.

This is capability. This changes how you move through the world.

---

## Stewart Brand: Access to Tools

The Whole Earth Catalog's opening line:

"We are as gods and might as well get good at it."

Not aspirational. Practical. You have godlike capabilities (Claude writes code for you) and they require skill to use well.

Field Guide taught that skill.

**But Brand also wrote:**

"Once a new technology rolls over you, if you're not part of the steamroller, you're part of the road."

You're not part of the road anymore. You know how to build.

**The question now:** What do you build?

---

## The Three Questions

Before you move forward, answer these honestly:

### 1. What actually changed about how you work?

Not "what did you build" but "what's different in your daily practice?"

Maybe:
- You save links with context instead of losing them
- You track workouts consistently
- You have a dashboard you actually look at
- You research topics more systematically

Or maybe:
- You built tools but don't use them
- You learned the process but haven't applied it to real work
- You're still figuring out what you actually need

Both answers are honest. Both are useful.

**The practice is accurate self-assessment.**

### 2. What patterns did you discover?

Look across everything you built. What repeats?

Your patterns might be:
- Collection + search (most of your tools collect and filter)
- Time-series logging (tracking changes over time)
- Multi-perspective analysis (seeing from different angles)

Or completely different patterns based on your actual building.

**These patterns are your methodology.**

When you need to build something new, you'll recognize: "That's the collection pattern" or "That needs time-series logging."

### 3. What do you want to build next?

Not "what should I build" but "what do I actually want?"

Maybe:
- Apply your research system to a topic you care about
- Build a tool for work (not just personal)
- Teach someone else to build
- Nothing right now (that's valid too)

**There's no correct answer.**

The course is over. What you build next is up to you.

---

## Gary Snyder: The Real Work

Snyder spent decades living in the mountains. Building his house. Growing food. Writing poetry.

He distinguished between jobs (what pays) and work (what needs doing).

You've been learning to do work. Building tools is work. Understanding your own patterns is work. Using tools to think more clearly is work.

**The question after Field Guide:**

What's the real work for you?

What tools serve that work? What tools don't?

What do you need to build? What do you need to let go?

**This isn't answered abstractly. It's answered through practice.**

---

## On Completeness

Field Guide is complete. Twenty-one weeks. You've reached the end.

But there's no end to building. No point where you've learned everything and stop.

**Three ways people typically continue:**

### Path 1: Tool Builder

You keep building personal tools. When you notice friction, you build something. You refine based on use. Your toolkit grows organically.

This is building as ongoing practice. Small tools. Personal scale. Continuous refinement.

### Path 2: Project Builder

You move beyond personal tools. You build things for small groups. Maybe for others who share similar needs.

This is building as contribution. Not scaling to thousands. Building for people you know or communities you're part of.

### Path 3: Teacher

You teach others to build. You share your methodology. You help people develop their own capability.

This is building as transmission. Not the tools themselves. The practice of building.

**All three are valid. Pick based on what actually pulls you forward.**

---

## Masahiro Mori: The Practice Continues

Mori didn't write about engineering as a career. He wrote about it as spiritual practice.

The practice doesn't complete. You don't "finish" practicing zazen. You don't "finish" engineering.

You practice. You develop capability. You notice what arises. You respond skillfully.

**Building is like this.**

You don't finish learning to build. You build. You notice what works. You refine your approach. You keep building.

Field Guide gave you foundation. The practice continues through your engagement with actual work.

---

## Jean Boulton: Organic Complexity

Boulton's book ends not with conclusions but with patterns. Understanding complex systems is ongoing. You keep engaging, keep noticing, keep making sense.

Same with building.

You understand patterns now. You'll keep discovering new ones. You'll keep refining old ones. You'll keep making sense through making.

**The course ends. The practice continues.**

---

## Buddhist Teaching: Beginner's Mind

Zen teaching: In the beginner's mind there are many possibilities. In the expert's mind there are few.

You've completed Field Guide. You're not a beginner anymore.

**But:**

Every new tool you build, approach with beginner's mind. What does this specific thing need?

Every new project, start fresh. What's actually needed here?

Don't let your expertise close you to discovery.

**The practice is maintaining openness while developing capability.**

---

## What You Built (Inventory)

Take 30 minutes. List everything you built over 21 weeks.

**For each tool:**
- Name
- What it does
- Current status (active/dormant/deleted)
- Key learning from building it

**For projects:**
- What you integrated
- What actually works
- What you abandoned
- What evolved

**This is your artifact.**

Not just the tools. The learning embedded in building them.

---

## What You Didn't Build (Also Valuable)

Things you thought about building but didn't:
- What stopped you?
- Was that wise restraint or unnecessary hesitation?
- Do you still want to build it?

Tools you built then deleted:
- Why delete them?
- What did building teach you?
- Any regrets?

Features you didn't add:
- What did you resist adding?
- How did restraint serve you?
- What almost got built that would've been waste?

**Knowing what not to build is as valuable as knowing what to build.**

---

## For People Who Didn't Finish

Maybe you're reading this but didn't build all 21 weeks.

Maybe you built Weeks 1-10 and stopped.
Maybe you built five tools total.
Maybe you read everything but built nothing.

**All of these are fine.**

The course isn't pass/fail. It's practice support.

If you learned something useful, it was useful.

If you learned "I don't actually want to build tools," that's useful learning.

If you learned "I want to build but need different approach," that's useful too.

**The question is: Did you learn something that serves your actual life?**

If yes, the course worked.

---

## What's Not in Field Guide

**Things you'll need to learn elsewhere:**

**Collaboration:** Field Guide teaches personal building. Working with other builders requires different skills.

**Deployment at scale:** These are personal tools. Scaling to thousands of users requires different architecture.

**Professional development:** Building for yourself differs from building for work. Different constraints, different processes.

**Advanced programming:** You learned to describe what you want clearly. Not to write code from scratch.

**The point:**

Field Guide isn't comprehensive. It's foundational.

It gives you capability to build personal tools. Everything beyond that, you learn as needed.

---

## The Next Thing

You're done with Field Guide. What's next?

**Three options:**

### Option A: Keep Building

Use what you learned. Build tools for actual needs as they arise. Refine based on use. Let your toolkit evolve organically.

### Option B: Go Deeper

Learn actual programming. Understand what Claude is doing. Build capability beyond description.

This isn't necessary. But if you're curious about the craft underneath, learn HTML/CSS/JavaScript properly.

### Option C: Teach Others

Run Field Guide for friends. Help them build their first tools. Develop your own version of the course.

**Or some combination. Or something else entirely.**

**The point: You decide.**

The course is complete. What you do with the capability is yours.

---

## Closing: On Practice

Twenty-one weeks ago you started learning to build.

You learned through building. Not through reading. Not through planning. Through doing.

This is how all skill develops. Through practice.

**The course gave you structured practice.**

Now practice is self-directed. You notice friction. You build. You iterate. You refine.

**You are a builder now.**

Not because you completed a course. Because you built things.

The proof isn't in finishing Field Guide. It's in the tools you made. The patterns you recognized. The confidence you developed.

**Stewart Brand (1968):** "Stay hungry. Stay foolish. Stay in touch."

**Gary Snyder (1969):** "Find your place on the planet. Dig in. Take responsibility from there."

**Masahiro Mori (1974):** "Engineering with the heart brings realization."

**Jean Boulton (2024):** "We are always becoming, always in process."

**You (2026):** Builder of your own tools. Developer of your own practice. Capable of making what you need.

---

## Final Reflection

**Three questions to carry forward:**

1. Does this tool serve real work, or imagined work?

2. Am I building out of necessity, or building to feel productive?

3. What's the simplest thing that could work?

**Three practices to maintain:**

1. Build small. Test fast. Iterate based on use.

2. Recognize patterns. Apply them appropriately. Don't force them.

3. Know when to build, when to maintain, when to let go.

**One principle:**

The tools are temporary. The practice persists.

---

**Field Guide is complete.**

Everything from here is yours.

Build what matters. Share what helps. Let go when complete.

Thank you for building alongside me.

—Toby

---

*If you found Field Guide useful, the best way to support it is using what you learned. Build something that matters to you. Share your tools if others would benefit. Teach someone else to build.*

*If you want to share what you built or where you're going next, reply to this email or post in comments. I read everything.*

*The course ends. The practice continues.*
