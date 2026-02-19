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
