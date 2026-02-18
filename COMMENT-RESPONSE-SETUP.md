# Comment Response System - Setup Guide

## What This Does

Automated system for generating responses to Substack comments using Claude.

**Phase 1 (Current):** Manual mode
- You paste comment text into dashboard
- Claude generates response matching your voice
- You approve/edit/deny
- Copy approved response to post on Substack

**Phase 2 (Future):** Automated polling/webhooks to fetch comments automatically

---

## Quick Setup (5 minutes)

### Step 1: Install Dependencies

```bash
npm install
```

This installs:
- `@anthropic-ai/sdk` - Claude API client
- `better-sqlite3` - Local database for storing comments
- `@types/better-sqlite3` - TypeScript types

### Step 2: Add API Key

1. Get your Anthropic API key from: https://console.anthropic.com/settings/keys
2. Create `.env.local` file in project root:

```bash
cp .env.example .env.local
```

3. Add your API key:

```
ANTHROPIC_API_KEY=sk-ant-api03-...your-key-here
```

### Step 3: Start Development Server

```bash
npm run dev
```

### Step 4: Open Admin Dashboard

Navigate to: http://localhost:3000/admin/responses

You should see the comment response generator interface.

---

## How to Use

### Generate a Response

1. **Paste comment text** - Copy comment from Substack, paste into "Comment Text" field
2. **Add context (optional)** - Add post title and author name for better responses
3. **Click "Generate Response"** - Claude creates response matching your voice
4. **Review response** - Appears in "Pending Approval" section

### Approve & Post

**Option A: Approve as-is**
- Click "Approve as-is" button
- Click "Copy to Clipboard"
- Paste into Substack comment reply

**Option B: Edit first**
- Click "Edit Response"
- Modify response text
- Click "Save & Approve"
- Click "Copy to Clipboard"
- Paste into Substack comment reply

**Option C: Deny**
- Click "Deny" if response doesn't match your voice
- Generate new one with more context

### After Posting

Approved comments move to "Completed" section for reference.

Click "Delete" to remove from database once posted.

---

## Voice Rules

Claude generates responses following these rules:

✅ **Do:**
- Short, direct sentences
- Warm but not overly enthusiastic
- Reference course material when relevant
- Encourage experimentation
- Acknowledge their point
- Add value (insight, encouragement, practical tip)

❌ **Don't:**
- Use "It's not x. It's y." patterns
- Use em dashes (—)
- Use AI slop phrases ("Let's dive in", "game changer")
- Give unnecessary praise
- Write more than 2-4 sentences

---

## Database

**Location:** `comments.db` in project root (automatically created)

**Storage:**
- All comments and responses stored locally
- SQLite database (simple, no external service)
- Excluded from git (in .gitignore)

**Schema:**
```sql
comments (
  id TEXT PRIMARY KEY,
  post_title TEXT,
  author_name TEXT,
  comment_text TEXT NOT NULL,
  comment_date TEXT,
  status TEXT DEFAULT 'pending',
  generated_response TEXT,
  final_response TEXT,
  created_at TEXT,
  posted_at TEXT
)
```

---

## API Routes

**POST /api/comments/generate**
- Generates response for new comment
- Saves to database with status 'pending'

**GET /api/comments**
- Fetches all comments from database

**PATCH /api/comments**
- Updates comment status (approved/denied/posted)
- Updates final response text

**DELETE /api/comments?id=xxx**
- Deletes comment from database

---

## Cost

**Development:** Free (local database, no external services)

**API Usage:**
- ~$0.01 per response generated (Claude Sonnet)
- ~300 tokens per response generation
- If you get 50 comments/week: ~$0.50/week = ~$2/month

**Scaling:**
If comment volume grows significantly:
- Consider batch processing
- Add rate limiting
- Monitor API usage in Anthropic console

---

## Security

### API Key Protection
- Stored in `.env.local` (not committed to git)
- Never hardcode in source files
- Use Vercel environment variables for production

### Admin Dashboard
Currently no authentication (local development only).

**For production deployment:**

Option 1: Add basic auth using middleware
Option 2: Keep admin routes local-only (don't deploy)
Option 3: Use Vercel password protection

Ask Claude: "Add password protection to /admin routes"

---

## Troubleshooting

**"Error generating response"**
- Check API key is set in `.env.local`
- Verify API key is valid at console.anthropic.com
- Check console for error details

**"Database error"**
- Delete `comments.db` file and restart server
- Will recreate database automatically

**"Module not found: better-sqlite3"**
- Run `npm install` again
- May need to rebuild native bindings: `npm rebuild better-sqlite3`

**Response doesn't match voice**
- Add more context (post title, author name)
- Edit response manually
- Adjust system prompt in `src/lib/generate-comment-response.ts`

---

## Future Enhancements (Phase 2)

### Automated Comment Fetching

**Option A: Email parsing**
- Forward Substack comment emails to specific address
- Parse email content
- Auto-generate responses
- Present in approval queue

**Option B: Substack API**
- If/when Substack adds official API
- Poll for new comments
- Auto-generate responses

**Option C: Browser automation**
- Use Playwright to scrape Substack
- Extract new comments
- Auto-generate responses

### Auto-Posting

**Option A: Email replies**
- Reply to comment notification email
- Substack posts as comment

**Option B: Browser automation**
- Use Playwright to post comments
- Requires login credentials

**When to automate:**
- If you're getting 50+ comments/week
- Manual mode takes more than 30 minutes/week
- Otherwise, manual mode is simpler and sufficient

---

## Deployment to Production

### Vercel Environment Variables

1. Go to Vercel dashboard → Your project → Settings → Environment Variables
2. Add: `ANTHROPIC_API_KEY` with your API key
3. Redeploy

### Database Considerations

**Option A: Keep local (recommended for Phase 1)**
- Database stays on your computer
- Access admin dashboard locally
- Copy responses to post manually

**Option B: Deploy with persistent storage (Phase 2)**
- Use Vercel Postgres or external database
- Update `src/lib/db.ts` to use cloud database
- Required for automation

### Admin Dashboard Security

**For public deployment:**

Add middleware to protect `/admin` routes:

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || authHeader !== `Basic ${btoa('admin:your-password-here')}`) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Admin"' },
      });
    }
  }

  return NextResponse.next();
}
```

Or use Vercel's built-in password protection feature.

---

## Summary

**Phase 1 (Current):** Manual comment → generate → approve → copy → paste
- Simple, works immediately
- No automation complexity
- Sufficient for <50 comments/week

**Phase 2 (Future):** Automated fetch → generate → approve → auto-post
- Build only if volume justifies it
- Adds complexity and maintenance
- Required if >50 comments/week

Start with Phase 1. Automate only if needed.
