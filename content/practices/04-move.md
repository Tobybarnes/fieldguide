---
num: "04"
slug: move
title: Move
build: Training Log
principle: The body keeps the score
---

## Overview

Every fitness app wants to own your data, show you ads, or gamify your workouts with badges you didn't ask for. This is simpler: log what you did, note how it felt, see your history. Your workout data belongs to you.

## What You'll Build

A workout tracker where you log exercises with sets, reps, and weight. Add notes about how you felt. See your history. No calorie counting, no social features, no streaks.

## Steps

### 01. Build the basic logger

Start with logging exercises, sets, reps, and weight.

```prompt
Build me a workout tracker. I want to log exercises with: exercise name, sets, reps, weight, and a notes field. Save each workout with the date. Show a list of recent workouts. Use localStorage.
```

> **Tip:** Start with your actual workout. What do you actually track?

![Training log with recent workouts and exercise form](/screenshots/practice-04-move/01-training-log.png)

### 02. Log a real workout

Enter your last workout. Notice what fields you use and what you skip. Notice what's missing.

### 03. Add exercise templates

Save exercises you do often.

```prompt
Let me save exercise templates (like "Bench Press" or "Squat") so I don't have to type them each time. Show a dropdown of my saved exercises.
```

> **Tip:** Only add templates for exercises you actually do.

### 04. Add workout history

See all your workouts for a specific exercise.

```prompt
Add a history view where I can see all my workouts for a specific exercise. Show the date, weight, sets, and reps. Sort by most recent.
```

### 05. Add progress tracking

See your personal bests and progress over time.

```prompt
For each exercise, show my personal best (highest weight) and when I achieved it. Show a simple line chart of my progress over time.
```

> **Tip:** If charts are ugly, ask Claude to use a specific charting style or library.

### 06. Add quick logging

Make repeat workouts faster to log.

```prompt
Add a "repeat last workout" button that pre-fills today's form with what I did last time for this exercise.
```

## Additional Prompts

### Rest timer
When you want to keep rest periods consistent.
```prompt
Add a rest timer that counts down between sets
```

### Workout rating
When you want to track energy and recovery.
```prompt
Let me rate each workout 1-5 for how I felt
```

### Body weight
When you want to correlate weight with training.
```prompt
Add body weight tracking as a separate log
```

### Weekly volume
When you want to track overall training load.
```prompt
Show weekly volume (total sets x reps x weight)
```

### CSV export
When you want to analyze data elsewhere.
```prompt
Export my workout data as CSV for spreadsheets
```

## Troubleshooting

### Wrong exercise template showing
Check for typos in exercise names. Standardize names.

### Chart looks wrong
Tell Claude what you expected. "The Y-axis should be weight, X-axis should be date."

### Data entry is tedious
Ask for more shortcuts: "Let me tap +5 or -5 to adjust weight instead of typing."

### Lost old workouts
localStorage cleared. Add export reminders.

## Reflection

- Do you log during or after your workout?
- What patterns do you notice in your training?
- Does tracking change how you train?
- What would a trainer see in your data?

## Extensions

- Add workout programs/plans
- Track rest days and recovery
- Add photos for form checks
- Integrate with a fitness API (complex)
- Build a companion Apple Watch app (very complex)
