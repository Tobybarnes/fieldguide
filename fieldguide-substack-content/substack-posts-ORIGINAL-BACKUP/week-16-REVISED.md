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
