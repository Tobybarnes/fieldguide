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
