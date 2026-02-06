---
num: "08"
slug: refine
title: Refine
build: Revisit + Improve
principle: First versions are just first versions
---

## Overview

By now, you've built several tools. Some you use daily; others you abandoned. This practice is about going back to something you actually use and making it better. Not adding features for the sake of it—solving real friction you've experienced.

## What You'll Build

An improved version of one of your earlier builds. You'll identify what's missing, prioritize ruthlessly, and implement the changes that actually matter.

## Steps

### 01. Pick a practice you actually use

Not your favorite build—the one you USE. If you don't use any of them, that's useful information. Ask yourself why.

### 02. Live with it for a week

Use your chosen tool every day for a week. Keep a list of every friction point, missing feature, and annoyance. Write them down immediately when you notice them.

### 03. Prioritize ruthlessly

Look at your list. Cross off everything that's "nice to have." What remains? Pick the top 3 things that would make the biggest difference.

### 04. Fix one thing at a time

One change, one test, one commit. Don't try to fix everything at once.

```prompt
[Describe the specific issue] Fix this by [your proposed solution].
```

> **Tip:** One change, one test, one commit. Don't try to fix everything at once.

### 05. Test your changes

Use the improved version for another few days. Did the fix actually help? Sometimes our imagined solutions don't solve the real problem.

### 06. Notice what's different

Compare this experience to Practice 01. What's easier now? What do you understand that you didn't before?

## Additional Prompts

### Refactor code
When the code works but is hard to understand.
```prompt
Refactor this code to be more readable
```

### Error handling
When you've hit an error and want to handle it gracefully.
```prompt
Add error handling for [specific edge case]
```

### Mobile improvements
When you want to use your tool on your phone.
```prompt
Make this work better on mobile
```

### Performance
When something feels sluggish.
```prompt
Speed up [specific slow interaction]
```

### Tests
When you want confidence that changes don't break things.
```prompt
Add tests to catch regressions
```

## Troubleshooting

### Changes broke something
This is why we change one thing at a time. Revert and try again.

### Can't remember how the code works
Read through it with Claude. Ask for explanations.

### Feature creep
Return to your prioritized list. Is this on it?

### Don't want to touch working code
That's normal. Start with the smallest, safest change.

## Reflection

- What surprised you when you revisited your old code?
- How has your taste changed since you first built it?
- What would you do differently if starting over?
- Is "refinement" ever really done?

## Extensions

- This practice IS the extension. Keep refining.
- Create a changelog for your tool
- Version your releases (v1.0, v1.1, etc.)
- Share your tool with someone else and get feedback
