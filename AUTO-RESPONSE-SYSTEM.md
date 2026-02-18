# Automated Feedback Response System

**Purpose:** Monitor Substack comments, auto-generate Claude responses, present for approval, auto-post approved responses.

---

## System Architecture

### Phase 1: Manual Trigger (MVP)
Build a simple dashboard where you click "Check for new comments" and get Claude-generated responses to approve/deny.

### Phase 2: Automated Monitoring (Future)
Add webhook or scheduled polling to check for new comments automatically.

---

## Technical Implementation

### Stack
- **Frontend:** Next.js page at `/admin/responses`
- **Backend:** Next.js API routes
- **Storage:** SQLite database (simple, local, no external service)
- **APIs:**
  - Substack API (for fetching comments, posting responses)
  - Anthropic API (for generating responses)

### Database Schema

```sql
-- comments table
CREATE TABLE comments (
  id TEXT PRIMARY KEY,
  post_id TEXT NOT NULL,
  post_title TEXT,
  author_name TEXT,
  author_email TEXT,
  comment_text TEXT,
  comment_date TEXT,
  status TEXT DEFAULT 'pending', -- pending, approved, denied, posted
  generated_response TEXT,
  final_response TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
```

### File Structure

```
src/
├── app/
│   ├── admin/
│   │   └── responses/
│   │       └── page.tsx              # Approval dashboard UI
│   └── api/
│       ├── comments/
│       │   ├── fetch/route.ts        # Fetch new Substack comments
│       │   └── respond/route.ts      # Post approved response
│       └── generate-response/
│           └── route.ts              # Generate Claude response
├── lib/
│   ├── db.ts                         # SQLite connection
│   ├── substack.ts                   # Substack API wrapper
│   └── claude.ts                     # Claude API wrapper
└── types/
    └── comments.ts                   # TypeScript types
```

---

## User Workflow

### Step 1: Fetch Comments
1. Navigate to `/admin/responses`
2. Click "Fetch New Comments"
3. System fetches all new comments from Substack posts
4. For each comment, Claude generates a response
5. Comments appear in approval queue

### Step 2: Review & Approve
1. See comment with context (post title, author, comment text)
2. See Claude-generated response
3. Edit response if needed
4. Click "Approve & Post" or "Deny"

### Step 3: Auto-Post
1. Approved responses post automatically to Substack
2. Status updates to "posted"
3. Comment removed from queue

---

## Substack API Integration

### Authentication
Substack doesn't have an official public API. Options:

**Option A: Email-based monitoring** (Simplest)
- Substack emails you when someone comments
- System parses emails (Gmail API integration)
- Extracts comment details
- Generates response

**Option B: Web scraping** (More reliable)
- Scrape your Substack posts for comments
- Extract comment data
- Compare against database to find new ones

**Option C: Manual copy-paste** (MVP)
- You paste comment text into dashboard
- System generates response
- You approve/edit
- System gives you response to manually post

### Recommendation: Start with Option C (Manual)
- No API integration needed
- Works immediately
- Validates the approval workflow
- Can automate later once workflow is proven

---

## Phase 1 Implementation (Manual Mode)

### Admin Dashboard (`/admin/responses`)

**Features:**
- Textarea: Paste comment text
- Input: Author name (optional)
- Input: Post title/context (optional)
- Button: "Generate Response"
- Claude generates response based on:
  - Comment content
  - Your writing voice (from SESSION-STATE.md rules)
  - Field Guide philosophy and tone
- Display generated response with:
  - Edit textarea (modify if needed)
  - "Copy to Clipboard" button
  - "Save for Later" button
  - Mark as "Done"

**Voice Rules for Responses:**
- Short, direct sentences
- No "It's not x. It's y." patterns
- No em dashes
- Authentic, helpful tone
- Reference course content when relevant
- Encourage experimentation

---

## Phase 2 Implementation (Automated)

### Email Parsing Approach

**Setup:**
1. Forward Substack comment emails to specific address
2. Use Gmail API to fetch emails
3. Parse email content for:
   - Post title
   - Commenter name
   - Comment text
   - Comment URL
4. Store in database
5. Generate response
6. Present in approval queue

### Posting Responses

**Manual posting (Phase 1):**
- System gives you text to copy-paste

**Automated posting (Phase 2):**
- Substack may allow posting via email reply
- Or use browser automation (Playwright)
- Or wait for official API

---

## Example Response Generation Prompt

```markdown
You are responding to a comment on Field Guide, a Substack course teaching people to build AI tools with Claude.

VOICE RULES:
- Short, direct sentences
- No "It's not x. It's y." patterns
- No em dashes
- Warm but not overly enthusiastic
- Reference course material when helpful

COMMENT CONTEXT:
Post: {post_title}
Commenter: {author_name}
Comment: {comment_text}

Generate a helpful 2-4 sentence response that:
1. Acknowledges their comment
2. Answers any questions
3. Encourages further engagement
4. Stays true to Field Guide philosophy

Response:
```

---

## Cost Estimate

**Phase 1 (Manual):**
- Development: 2-4 hours
- Cost: $0 (local SQLite, manual posting)
- Claude API: ~$0.01 per response generated

**Phase 2 (Automated):**
- Development: 8-12 hours
- Gmail API: Free (15GB quota)
- Claude API: ~$0.01 per response
- Monthly cost: ~$1-3 depending on comment volume

---

## Security Considerations

**Admin Dashboard:**
- Password protect `/admin` routes
- Add simple auth (environment variable password)
- Or use Vercel authentication

**API Keys:**
- Store Anthropic API key in environment variables
- Never commit to Git
- Use Vercel environment variables for production

**Database:**
- SQLite file in `.gitignore`
- Regular backups
- No sensitive user data stored

---

## Next Steps

1. **Build Phase 1 (Manual Mode):**
   - Create `/admin/responses` dashboard
   - Build response generation API
   - Test with real comments
   - Validate workflow

2. **Iterate Based on Use:**
   - See how many comments you actually get
   - Determine if automation is worth the effort
   - Gather feedback on generated responses

3. **Add Automation (If Needed):**
   - Implement email parsing
   - Add auto-posting
   - Set up monitoring

---

## Alternative: Simple Notion Integration

**Simpler approach:**
- Create Notion database for comments
- Manually add comments to Notion
- Build `/admin/responses` that syncs with Notion
- Generate responses in Notion
- Copy-paste approved responses back to Substack

**Pros:**
- No database setup
- Visual interface you already know
- Easy to organize comments by post/status

**Cons:**
- Requires Notion API setup
- Extra manual step

---

## Recommendation

**Start with Phase 1 (Manual Mode) using local SQLite:**
1. Build simple dashboard today (2-4 hours)
2. Test with first batch of comments
3. Validate that Claude responses match your voice
4. Decide if automation is worth it based on volume

If you're getting 50+ comments per week, automate.
If you're getting 5-10 comments per week, manual mode is fine.

**Build MVP first. Add automation only if comment volume justifies it.**
