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
