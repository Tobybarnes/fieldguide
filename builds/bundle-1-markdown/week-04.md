# Week 4: The Loop

*This is the first paid-subscriber-only post. If you're seeing this, you've committed to building alongside me for the next 10 weeks. Thank you.*

*Last week you built your first thing—a personal page. This week we're going to formalize the method you used so you can apply it to everything else.*

---

## Making Sense Through Making

Complexity scientist Jean Boulton writes about "making sense" versus jumping to quick solutions. Understanding patterns and processes is more important than having immediate answers.

The loop is a sense-making practice:

**Describe** → You articulate what you want clearly enough that someone (or something) else can build it. Vague ideas become explicit. You make sense of what you actually need.

**Generate** → Claude builds. You see your idea externalized.

**Test** → Reality talks back. The tool reveals what you missed in your description.

**Refine** → You adjust based on what emerged, not what you predicted.

Each cycle makes more sense. Not because you're getting smarter—because you're engaging with feedback from reality.

Traditional education teaches you to plan thoroughly before acting. This teaches you to act in order to learn. Small iterations, continuous adjustment, emergent understanding.

Boulton structures her book as 73 short, networked pieces—you can open it anywhere and find something useful. The practices in Field Guide work the same way. Each one is complete on its own, but they connect. You can build them in any order. The understanding emerges from doing them, not from reading about them.

## The Middle Way in Building

Buddhist philosophy talks about the Middle Way—avoiding extremes. Not too tight, not too loose. Not overthinking, not rushing.

The loop embodies this:
- You describe (but not in exhaustive detail)
- Claude generates (but you don't blindly accept)
- You test (but you don't obsess)
- You refine (but you don't endlessly iterate)

The loop operates in the middle—enough direction to proceed, enough openness to discover.

Masahiro Mori believed robots could teach humans about Buddhist practice because they act without attachment to outcomes. They respond to clear direction without clinging to their first attempt or taking feedback personally.

Claude works the same way. You describe what you want, it adjusts. No defense of code. No ego invested in any particular solution. No resistance.

This makes iteration faster because Claude has no self to protect.

## Reflexive Interaction

Boulton describes stability emerging from "reflexive interactions among diverse elements."

In traditional software development, you interact with requirements documents, architecture diagrams, test specs. All representations, all predictions.

In Field Guide, you interact with:
- **Your actual use** (not imagined use cases)
- **Real friction points** (not anticipated edge cases)  
- **What you notice** (not what metrics tell you)
- **The tool's behavior** (not the code itself)

This is reflexive—the tool shapes your understanding, you reshape the tool, repeat. Neither you nor the tool is fixed. Both adapt.

Claude accelerates this because it has no attachment to its previous solutions. It rebuilds without ego. You can try five different approaches in an hour, each one informing the next.

Complex systems work this way. Through rapid cycles of interaction and adjustment, not through master plans.

## The Loop: Describe → Generate → Test → Refine

Everything you build follows this pattern. It's your methodology. You'll use it for simple pages and complex tools. The more you practice, the better you get at describing what you want.

### Describe

Tell Claude what you want. Be specific about **what** it should do, not **how** it should work.

**Good description:**
> "I want a page that saves URLs with notes and lets me search them later."

**Bad description:**
> "Build me a React app with localStorage and a search component using state management."

See the difference? The first describes the outcome. The second prescribes the implementation. Claude knows how to build things. You describe what you want the thing to do.

#### Getting Specific

If your first description is vague, Claude will make assumptions. Sometimes those assumptions are right. Often they're close but not quite what you wanted.

Add specifics:
- "Show the most recent links first"
- "Let me filter by tags"
- "Make the search work in real-time as I type"
- "Store everything locally so it works offline"

The more specific you are upfront, the less back-and-forth you'll need.

#### What to Describe

Focus on:
- **What it does:** "Saves links with titles and notes"
- **How you interact with it:** "A form at the top, list of saved links below"
- **What happens when:** "When I click save, add it to the list immediately"
- **What it should look like:** "Keep it minimal, use warm colors"

Leave to Claude:
- **Technical implementation:** Claude picks the right approach
- **Code structure:** Claude handles this
- **Best practices:** Claude knows these

#### Technical Note: localStorage

Most tools in this course use **localStorage**—a way to save data in your browser. Quick things to know:

- **Storage limit:** 5-10MB (roughly 5,000-10,000 text entries, or 50-100 images)
- **Browser-specific:** Data saved in Chrome stays in Chrome, doesn't sync to Firefox or Safari
- **Persistent:** Data stays until you clear browser data or explicitly delete it
- **Local only:** Nothing goes to a server, everything stays on your computer
- **Privacy:** Anyone with access to your computer can read localStorage using browser dev tools

This works great for personal tools. If you hit storage limits or need data to sync across devices, you'll explore other options later.

For now: localStorage is perfect for building and learning. It's simple, fast, and requires no setup.

### Generate

Claude writes the code. Copy it into your text editor. Save the file.

**One file or multiple?** For the tools in this course, we're sticking with single files. HTML, CSS, and JavaScript all in one place. This keeps things simple and portable.

**Understanding the code:** You need to understand what it does, not every line. If you're curious about how something works, ask Claude: "Explain what this part does and why you wrote it this way."

**Copying cleanly:** 
1. Claude will give you code in a code block
2. Click the copy button (or select all and copy)
3. Paste into VS Code
4. Save with the right file extension (.html for web pages)

### Test

Run it. Open it in your browser. Click around. Does it do what you wanted?

**How to test:**
1. Open the HTML file in your browser (double-click it)
2. Try every feature you asked for
3. Try breaking it—type weird things, click rapidly, leave fields empty
4. Notice what works and what doesn't

**What you're looking for:**
- Does it do what you described?
- Is anything confusing or unclear?
- What feels good? What feels off?
- What's missing?

Look for what to fix next.

### Refine

Go back to Claude and describe what needs to change.

**Be specific about the problem:**

Bad: "The search doesn't work"  
Good: "When I search for 'design', it doesn't find links that have 'Design' with a capital D"

Bad: "Make it look better"  
Good: "The text is too small to read comfortably. Make the font size 18px instead of 14px"

**Ask for one change at a time** when you're learning. Later you can batch multiple changes, but starting out, make one adjustment, test it, then move to the next.

## When to Stop

You could refine forever. There's always something to improve. But remember: these are personal tools, not products.

**Stop when:**
- It does what you need it to do
- You'd rather use it than keep tweaking it
- The friction is low enough that you don't notice it
- Adding more would make it more complex without making it more useful

Gary Snyder's concept of "real work" applies here: the tool needs to serve its purpose. A well-made thing is complete, not flawless.

## Common Patterns

After you've done the loop a few times, you'll notice patterns:

**First try is 70% right.** Claude usually gets the main functionality working but misses details or makes assumptions you wanted differently.

**Second iteration gets you to 90%.** You clarify what needs to change. Claude adjusts. Most problems disappear.

**Final 10% is polish.** Colors, spacing, small interaction improvements. This is where taste develops.

**Knowing when you're done.** When it's useful enough that you'd rather use it than continue building.

## Practice: Build a Quick Tool

To solidify the loop, build something small right now.

**The challenge:** Make a tool that converts temperatures between Fahrenheit and Celsius.

**Describe to Claude:**
```
I want a simple temperature converter.
- Two input boxes: one for Fahrenheit, one for Celsius
- When I type in either box, automatically convert to the other
- Show the formula being used
- Keep it minimal and clean
```

**Generate:** Copy Claude's code, save as `converter.html`

**Test:** Open it, try converting 32°F (should show 0°C), try 100°C (should show 212°F)

**Refine:** Ask Claude to improve something—maybe add Kelvin, or change colors, or add clear buttons

**Notice:** How many iterations did it take to feel done? What did you learn about describing clearly?

## Next Week

Practice 02: Capture. You'll build a link catcher—a tool that saves URLs with notes and lets you search them. It's the first genuinely useful tool in the course.

We'll use everything you learned this week: describe clearly, iterate fast, stop when it's useful.

---

## Reflection: On Friction and Dukkha

The First Noble Truth in Buddhism is dukkha—often translated as "suffering" but more accurately "unsatisfactoriness" or "friction." The fundamental sense that things aren't quite right.

When you use a tool that doesn't work how you think, that's dukkha. The app that's almost good enough but not quite. The feature that should exist but doesn't. The interface that fights your mental model.

You can't build a tool that eliminates all friction forever. The Second Noble Truth says dissatisfaction is inherent in conditioned existence. Tools break. Needs change. Perfect is impossible.

But you can build tools that reduce unnecessary friction. That work how you think. That respect your attention. The loop—describe, generate, test, refine—is how you respond skillfully to the friction that teaches you something.

The constant dissatisfaction with existing tools, the feeling that "this app doesn't work right"—that's not a problem to solve once and for all. It's information. Your dissatisfaction is telling you something about how you think and what you need.

The practice is understanding friction clearly enough to respond to it, not eliminating all discomfort from existence.

---

**Reflection question:** What's harder—describing what you want, or accepting that the first version won't be perfect? Both are skills. Both improve with practice.
