import Database from 'better-sqlite3';
import { join } from 'path';

const dbPath = join(process.cwd(), 'comments.db');
const db = new Database(dbPath);

// Initialize database schema
db.exec(`
  CREATE TABLE IF NOT EXISTS comments (
    id TEXT PRIMARY KEY,
    post_title TEXT,
    author_name TEXT,
    comment_text TEXT NOT NULL,
    comment_date TEXT,
    status TEXT DEFAULT 'pending',
    generated_response TEXT,
    final_response TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    posted_at TEXT
  )
`);

export interface Comment {
  id: string;
  post_title?: string;
  author_name?: string;
  comment_text: string;
  comment_date?: string;
  status: 'pending' | 'approved' | 'denied' | 'posted';
  generated_response?: string;
  final_response?: string;
  created_at: string;
  posted_at?: string;
}

export const commentDb = {
  // Create new comment
  create(data: {
    post_title?: string;
    author_name?: string;
    comment_text: string;
    comment_date?: string;
    generated_response?: string;
  }): Comment {
    const id = `comment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const stmt = db.prepare(`
      INSERT INTO comments (id, post_title, author_name, comment_text, comment_date, generated_response)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      id,
      data.post_title || null,
      data.author_name || null,
      data.comment_text,
      data.comment_date || new Date().toISOString(),
      data.generated_response || null
    );

    return this.getById(id)!;
  },

  // Get comment by ID
  getById(id: string): Comment | undefined {
    const stmt = db.prepare('SELECT * FROM comments WHERE id = ?');
    return stmt.get(id) as Comment | undefined;
  },

  // Get all pending comments
  getPending(): Comment[] {
    const stmt = db.prepare("SELECT * FROM comments WHERE status = 'pending' ORDER BY created_at DESC");
    return stmt.all() as Comment[];
  },

  // Get all comments
  getAll(): Comment[] {
    const stmt = db.prepare('SELECT * FROM comments ORDER BY created_at DESC');
    return stmt.all() as Comment[];
  },

  // Update comment
  update(id: string, data: {
    status?: Comment['status'];
    generated_response?: string;
    final_response?: string;
    posted_at?: string;
  }): Comment | undefined {
    const updates: string[] = [];
    const values: any[] = [];

    if (data.status !== undefined) {
      updates.push('status = ?');
      values.push(data.status);
    }
    if (data.generated_response !== undefined) {
      updates.push('generated_response = ?');
      values.push(data.generated_response);
    }
    if (data.final_response !== undefined) {
      updates.push('final_response = ?');
      values.push(data.final_response);
    }
    if (data.posted_at !== undefined) {
      updates.push('posted_at = ?');
      values.push(data.posted_at);
    }

    if (updates.length === 0) return this.getById(id);

    values.push(id);
    const stmt = db.prepare(`UPDATE comments SET ${updates.join(', ')} WHERE id = ?`);
    stmt.run(...values);

    return this.getById(id);
  },

  // Delete comment
  delete(id: string): boolean {
    const stmt = db.prepare('DELETE FROM comments WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  },
};

export default db;
