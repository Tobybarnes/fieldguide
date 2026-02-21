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
