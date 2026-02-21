# Week 7: Practice 04 - Move (Training Log)

*This week: a workout tracker. No calorie counting, no social features, no badges. Just log what you did, note how it felt, see your history.*

---

**Build:** Training Log
**Principle:** The body keeps the score

## Why Build This?

Strong, Hevy, FitNotes, JEFIT—there are dozens of workout tracking apps. They're feature-rich: exercise libraries with animations, progress charts, social features, workout plans, rest timers, one-rep-max calculators.

They also track everything you do and use it for their business model. They show you ads. They push you toward premium subscriptions. They gamify your training with badges and streaks. They suggest workouts based on what other users do, not what your body needs.

Most importantly: they track things you don't care about. Total volume. Calories burned (wildly inaccurate). Body fat percentage (even more wildly inaccurate). Social comparisons. Achievement unlocked animations.

This tool tracks what actually matters to you. If you only care about weight and reps, track that. If you want to note "felt strong today" or "left shoulder tweaky," add that. If you want to see your squat progression over six months, build that view.

The tool serves your training, not someone else's idea of what training should look like. Your data stays on your device. No account required. No subscription. No ads. No social pressure.

## What You'll Build

A workout tracker where you:
- Log exercises with sets, reps, and weight
- Add notes about how you felt
- See your history for each exercise
- Track progress over time

No calorie counting. No social features. No streaks.

---

## Step 01: Build the basic logger

Start with logging exercises, sets, reps, and weight.

**Prompt:**
```
Build me a workout tracker. I want to log exercises with: exercise name, sets, reps, weight, and a notes field. Save each workout with the date. Show a list of recent workouts. Use localStorage.
```

**Tip:** Start with your actual workout. What do you actually track?

Save as `training-log.html` and open it.

---

## Step 02: Log a real workout

Enter your last workout. Notice what fields you use and what you skip. Notice what's missing.

Did you write "bench press" or "Bench Press" or "BP"? How did you handle multiple sets? Did you want to note how you felt?

These observations tell you what to ask for next.

---

## Step 03: Add exercise templates

Save exercises you do often.

**Prompt:**
```
Let me save exercise templates (like "Bench Press" or "Squat") so I don't have to type them each time. Show a dropdown of my saved exercises.
```

**Tip:** Only add templates for exercises you actually do. Don't try to build a comprehensive exercise database.

---

## Step 04: Add workout history

See all your workouts for a specific exercise.

**Prompt:**
```
Add a history view where I can see all my workouts for a specific exercise. Show the date, weight, sets, and reps. Sort by most recent.
```

This is where the tool becomes useful. You can see if you're getting stronger.

---

## Step 05: Add progress tracking

See your personal bests and progress over time.

**Prompt:**
```
For each exercise, show my personal best (highest weight) and when I achieved it. Show a simple line chart of my progress over time.
```

**Tip:** If charts are ugly, ask Claude to use a specific charting style or library.

---

## Step 06: Add quick logging

Make repeat workouts faster to log.

**Prompt:**
```
Add a "repeat last workout" button that pre-fills today's form with what I did last time for this exercise.
```

This makes the tool faster to use. You're not typing the same numbers every session.

---

## Additional Prompts

**Rest timer:**
```
Add a rest timer that counts down between sets
```
*Use when you want to keep rest periods consistent.*

**Workout rating:**
```
Let me rate each workout 1-5 for how I felt
```
*Use when you want to track energy and recovery.*

**Body weight:**
```
Add body weight tracking as a separate log
```
*Use when you want to correlate weight with training.*

**Weekly volume:**
```
Show weekly volume (total sets × reps × weight)
```
*Use when you want to track overall training load.*

**CSV export:**
```
Export my workout data as CSV for spreadsheets
```
*Use when you want to analyze data elsewhere.*

---

## When Things Break

**Problem:** Wrong exercise template shows up or doesn't pre-fill correctly
**Likely cause:** Exercise names have typos or inconsistent capitalization
**Solution:** Standardize your exercise names. Ask Claude: "Make exercise names case-insensitive and suggest matches if I have a typo. For example, 'squat', 'Squat', and 'squats' should all map to the same exercise."

**Problem:** Progress chart displays incorrectly or shows wrong data
**Likely cause:** Axes are swapped or data isn't filtered properly
**Solution:** Tell Claude exactly what you expected. Say: "The Y-axis should show weight in pounds, X-axis should show dates. Right now it's showing [what it shows]. Here's what I want: [describe it]."

**Problem:** Data entry feels tedious and slow
**Likely cause:** Too much manual typing for common adjustments
**Solution:** Ask Claude for shortcuts: "Add +5 and -5 buttons next to the weight field so I can quickly adjust instead of typing. Do the same for reps."

**Problem:** Lost all my workout history
**Likely cause:** localStorage was cleared by browser or system cleanup
**Solution:** No automatic backup exists. Ask Claude: "Add an export button that saves all workout data to a JSON file. Add an import button to restore from backup. Remind me to export every 10 workouts."

**Problem:** Can't compare progress across different exercises
**Likely cause:** Charts only show one exercise at a time
**Solution:** Ask Claude: "Let me compare progress for multiple exercises on the same chart. Add a multi-select so I can see my squat and deadlift trends together."

**Problem:** Forgot what weight I used last time for an exercise
**Likely cause:** No "last workout" reference visible during data entry
**Solution:** Ask Claude: "When I start logging an exercise, show me what weight and reps I used last time as a reference."

**Problem:** Charts show too much data and are hard to read
**Likely cause:** Showing all workouts without date range filtering
**Solution:** Ask Claude: "Add date range filters to the charts. Let me view last week, last month, last 3 months, or all time."

---

## Reflection

After you've tracked for a few weeks, consider:
- Do you log during or after your workout?
- What patterns do you notice in your training?
- Does tracking change how you train?
- What would a trainer see in your data?

---

## Going Further

Ideas if you want to keep building:
- Add workout programs/plans
- Track rest days and recovery
- Add photos for form checks
- Integrate with a fitness API (complex)
- Build a companion Apple Watch app (very complex)

---

## On Tracking Movement

Most fitness apps want to turn every workout into a game. They give you points, badges, streaks. They want you to compete with friends. They want engagement.

This tool doesn't care if you work out. It doesn't celebrate when you do or guilt you when you don't. It just records what happened.

The value isn't in the tracking itself—it's in having an accurate record when you need it. When you wonder if you're getting stronger. When you want to know if that back tweak started before or after you increased the weight. When you're curious about your long-term patterns.

The tool serves you. You don't serve it.

---

**Next week:** Practice 05 - Collect (Record Shelf). A simple database for things you want to track: books, movies, albums, games, whatever matters to you.

See you then.
