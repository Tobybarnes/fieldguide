# Field Guide Session State
**Last Updated:** 2026-02-18
**Session ID:** 8468b9cb-921f-440a-9077-0fea2dbe351e

## Quick Resume Instructions

To pick up where we left off, open Claude Code and say:

```
I'm continuing work on Field Guide. Reference SESSION-STATE.md
in the project root for context. The review team agents are
documented there and can be resumed if needed.
```

Or reference this specific conversation:
```
Resume the session documented in 8468b9cb-921f-440a-9077-0fea2dbe351e
```

---

## Current Status: LAUNCH READY ✅

All critical improvements complete. Substack content committed to GitHub. Vercel auto-deploying.

### What's Been Accomplished

**Ship-Blockers (Complete):**
1. ✅ Pricing updated: $24/month Substack, $49 Gumroad
2. ✅ Week 1 restructured: 35% reduction, utility first, philosophy condensed
3. ✅ localStorage warning added to Week 4
4. ✅ Barcode scanning moved to optional (Week 8)

**Launch Smoothers (Complete):**
5. ✅ Security Basics section added (Week 11)
6. ✅ Technical glossary created (`fieldguide-substack-content/technical-glossary.md`)
7. ✅ "Why Build This?" added to all practices (Weeks 5-10)
8. ✅ AI ethics section added (Week 2)
9. ✅ Deeper dharma teachings added:
   - Week 2: Practice as training (not achievement)
   - Week 4: Dukkha (tech friction as suffering)
   - Week 11: Impermanence and compassion
10. ✅ Troubleshooting standardized across all weeks

**Infrastructure:**
- ✅ All Substack content committed to GitHub
- ✅ Changes pushed to origin/main (commit 7c715f0)
- ✅ Vercel auto-deployment triggered
- ✅ .gitignore updated (Substack content no longer ignored)

---

## The Review Team

Five specialized agents reviewed the content and provided recommendations. Their reviews are complete, but they can be resumed for follow-up work.

### Agent IDs (For Resuming)

**Professional Writer**
- Agent ID: `a076142`
- Specialty: Editorial polish, voice consistency, pacing
- Resume for: Additional content editing, flow improvements

**Buddhist Zen Monk**
- Agent ID: `a53e1df`
- Specialty: Dharma authenticity, spiritual integrity
- Resume for: Deepening philosophical content, checking Buddhist accuracy

**Technology Writer**
- Agent ID: `a07a63e`
- Specialty: Technical accuracy, buildability, competitive positioning
- Resume for: Technical corrections, future-proofing, API updates

**Designer**
- Agent ID: `a87a17d`
- Specialty: Information architecture, visual hierarchy, scannability
- Resume for: Layout improvements, image strategy, formatting

**Publisher**
- Agent ID: `a40f7bc`
- Specialty: Market viability, pricing, conversion optimization
- Resume for: Launch strategy refinements, revenue optimization

**Troubleshooting Standardizer**
- Agent ID: `ac34716`
- Specialty: Consistent formatting across all practice troubleshooting sections
- Resume for: Adding more troubleshooting items based on student feedback

### How to Resume an Agent

To continue work with a specific agent:

```
Resume agent a076142 (Professional Writer) to review [new content]
```

Or to get all agents back for a full review:

```
Launch the review team agents (Professional Writer: a076142,
Zen Monk: a53e1df, Tech Writer: a07a63e, Designer: a87a17d,
Publisher: a40f7bc) to review [new changes]
```

---

## Review Team Synthesis

### Key Consensus Points

All reviewers agreed on:
1. **Pricing structure was broken** - Fixed: $24/month, $49 Gumroad
2. **Free trial didn't demonstrate value** - Recommendation: Move Link Catcher to free weeks
3. **Philosophy front-loaded** - Fixed: Week 1 now leads with utility
4. **Missing technical safety nets** - Fixed: Security section, localStorage warnings
5. **Image strategy needs refinement** - Recommendation: 2-3 images max per post

### Individual Insights

**Writer (Editorial):**
- Strength: Philosophical coherence exceptional
- Weakness: Inconsistent section lengths, need standardization
- Priority: Trim Week 8 Discogs integration, expand Week 7

**Monk (Dharma):**
- Strength: Authentic Buddhist integration (8.5/10)
- Opportunity: Deepen dukkha, compassion, impermanence teachings
- Concern: None - spiritually sound

**Tech Writer (Technical):**
- Strength: Technically sound methodology
- Weakness: Some security gaps, localStorage under-explained
- Priority: Make more AI-agnostic, add security basics

**Designer (Visual):**
- Strength: Excellent information architecture (8.5/10)
- Weakness: Image placement could overwhelm
- Priority: Reduce image count, add TOCs to long posts

**Publisher (Commercial):**
- Strength: Unique positioning, authentic voice
- Weakness: Market size limited (niche product)
- Reality: 300-500 customers realistic ($30-50K Year 1)
- Long-term: Field Guide is a WEDGE into cohorts/workshops

---

## What's Left (Optional Enhancements)

These can be done based on student feedback during the live run:

### Content Refinements
- [ ] Move Link Catcher to Week 1 (make free weeks more valuable)
- [ ] Trim Week 8 Discogs integration (move to sidebar)
- [ ] Expand Week 7 reflection section
- [ ] Extract Week 13 prompt library to standalone page
- [ ] Add TOCs to posts over 300 lines (Weeks 12-13)

### Technical Additions
- [ ] Video walkthroughs for complex practices (Weeks 8-10)
- [ ] Platform-specific screenshots (Mac/Windows terminal, VS Code)
- [ ] Interactive diagram for The Loop (Week 4)
- [ ] Add time estimates to each practice (budget 2-4 hours)

### Marketing/Launch
- [ ] Create visual assets (before/after screenshots, demo GIFs)
- [ ] Get 10-20 beta testers through Week 5
- [ ] Capture testimonials pre-launch
- [ ] Pre-launch buzz (2 weeks before Week 1)
- [ ] Influencer seeding (advance access to aligned voices)

### Community Scaffolding
- [ ] Weekly "show your work" async thread
- [ ] Monthly live Q&A / office hours
- [ ] Opt-in accountability partnerships
- [ ] Troubleshooting library based on actual student issues

---

## File Structure

### Substack Content (Now in Git)
```
fieldguide-substack-content/
├── technical-glossary.md          (NEW - comprehensive reference)
├── substack-about-page.md         (UPDATED - pricing, voice)
├── why-i-built-this.md            (UPDATED - voice)
├── substack-posts-REVISED/
│   ├── week-01-REVISED.md        (UPDATED - restructured, 35% shorter)
│   ├── week-02-REVISED.md        (UPDATED - AI ethics, practice as training)
│   ├── week-03-REVISED.md        (UPDATED - troubleshooting standardized)
│   ├── week-04-REVISED.md        (UPDATED - localStorage warning, dukkha)
│   ├── week-05-REVISED.md        (UPDATED - Why Build This, troubleshooting)
│   ├── week-06-REVISED.md        (UPDATED - Why Build This, troubleshooting)
│   ├── week-07-REVISED.md        (UPDATED - Why Build This, troubleshooting)
│   ├── week-08-REVISED.md        (UPDATED - Why Build This, barcode optional)
│   ├── week-09-REVISED.md        (UPDATED - Why Build This, troubleshooting)
│   ├── week-10-REVISED.md        (UPDATED - Why Build This, troubleshooting)
│   ├── week-11-REVISED.md        (UPDATED - Security Basics, impermanence)
│   ├── week-12-REVISED.md        (UPDATED - troubleshooting standardized)
│   └── week-13-REVISED.md        (UPDATED - troubleshooting standardized)
├── IMAGE-PLACEMENT-GUIDE.md       (image strategy for all 13 weeks)
├── GET-ALL-IMAGES.md              (download instructions for ~50 images)
└── launch-email-sequence.md       (5-email sequence)
```

### Website (Next.js)
```
src/app/
├── (course)/                      (course pages - already updated)
├── page.tsx                       (landing page)
└── layout.tsx
```

---

## Revenue Projections (From Publisher Review)

**Conservative:** 300 customers × $49 Gumroad = $14,700 Year 1
**Realistic:** 500 customers × $49 = $24,500 Year 1 + subscription revenue
**Optimistic:** 1,000 customers = $49,000 Year 1

**Year 2 Strategy (Wedge Product):**
- Field Guide ($49) → establish authority
- Field Guide Advanced ($197) → 200 customers
- Live Cohorts ($497) → 50 students per cohort
- Corporate Workshops ($5-10K) → 3-5 sessions
- **Target:** $125K Year 2

---

## Pricing Structure (Final)

**Substack (Live Cohort):**
- First 3 weeks: Free for everyone
- Weeks 4-13: $24/month subscription
- Positioning: Weekly releases, community in comments, live updates

**Gumroad (Post-Cohort):**
- Full course: $49 one-time purchase
- Positioning: Self-paced, all content, no community

**Value Justification:**
- Gumroad at $49 = ~2 months of Substack
- Reasonable for early birds vs. self-paced learners
- Both models sustainable

---

## Technical Context

**Stack:**
- Next.js 16.1.6 with App Router
- React 19.2.3, TypeScript, Tailwind CSS 4
- Deployed on Vercel
- GitHub: https://github.com/Tobybarnes/fieldguide

**Vercel Project:**
- Project ID: `prj_uXF50gmzDP13QHp2KDftXev6u4nK`
- Org ID: `team_U7iDN7eEwrp3qHOvdxJRijlt`
- Auto-deploys from GitHub main branch

**Voice Rules (Anti-AI-Slop):**
- Never use "It's not x. It's y."
- Never start sentences with "And"
- No em dashes (—)
- Avoid "wasn't x, was y" patterns
- Short, direct sentences
- Reference: mossmusic.substack.com

---

## Seven Principles (Core Philosophy)

1. **簡素 (Kanso) / Simplicity** - Everything essential, nothing extra
2. **不均整 (Fukinsei) / Asymmetry** - Balanced irregularity, purposeful imbalance
3. **渋み (Shibumi) / Subtle Grace** - Understated elegance
4. **自然 (Shizen) / Naturalness** - No pretense, honest language
5. **幽玄 (Yūgen) / Profound Grace** - Show more by showing less
6. **だつぞく (Datsuzoku) / Freedom** - Transcend convention
7. **静寂 (Seijaku) / Stillness** - Calm in design, unhurried pacing

These principles guide both content structure and design decisions.

---

## Philosophical Lineage (Core References)

**Stewart Brand (1968) - Whole Earth Catalog**
- Access to tools for self-reliant living
- Week 1 opening, Week 11 closing

**Gary Snyder (1969) - Earth House Hold**
- "The common work of the tribe"
- Real work as daily practice
- Week 2, Week 6, Week 10

**Masahiro Mori (1974) - The Buddha in the Robot**
- Engineering as spiritual practice
- Robots work without ego
- Week 1, Week 2, Week 4

**Jean Boulton (2024) - The Dao of Complexity**
- Process complexity over prediction
- Emergence through iteration
- Week 1, Week 4, Week 11

---

## Next Session Checklist

When you resume, consider:

1. **Pre-launch (2 weeks before Week 1):**
   - [ ] Create visual assets (screenshots, GIFs)
   - [ ] Seed to 10-20 beta testers
   - [ ] Get testimonials
   - [ ] Influencer outreach

2. **Week 1 Launch:**
   - [ ] Execute 5-email sequence
   - [ ] Social media blitz (Twitter, HN, Reddit)
   - [ ] Monitor sign-ups and engagement

3. **During Live Run:**
   - [ ] Collect troubleshooting issues from students
   - [ ] Note which weeks need expansion/trimming
   - [ ] Gather testimonials from completers
   - [ ] Build email list for future cohorts

4. **Post-Cohort:**
   - [ ] Package for Gumroad ($49 one-time)
   - [ ] Create "Advanced" curriculum (Year 2)
   - [ ] Plan first live cohort ($497)
   - [ ] Approach companies for workshops

---

## Contact & Resources

**Project Owner:** Toby Barnes
**Location:** Portland, Oregon
**Background:** 15 years humanizing technology at Shopify

**Philosophy:** Secret hippie in tech. Meditation practice. Reads Gary Snyder and Stewart Brand. Bridging counterculture self-reliance with modern AI capabilities.

**Audience:** 500-1,000 people who reject hustle culture but want to engage with AI thoughtfully. Makers, not optimizers.

---

## Closing Note

This is launch-ready content. The philosophical depth is authentic. The technical guidance is sound. The positioning is unique.

**The main risk is market size, not quality.**

Build for the 500 people who will read this and think, "Holy shit, this is exactly what I've been looking for."

Those 500 people are worth more than 50,000 casual observers.

Find your people. Serve them well.

---

**To resume this exact state:**
1. Reference this file: `SESSION-STATE.md`
2. Reference session ID: `8468b9cb-921f-440a-9077-0fea2dbe351e`
3. Resume agents by ID if needed for specific reviews
4. All changes committed: see commit `7c715f0`

Everything is documented. Ready to ship.
