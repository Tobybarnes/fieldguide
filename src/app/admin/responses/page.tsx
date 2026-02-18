'use client';

import { useState, useEffect } from 'react';

interface Comment {
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

export default function ResponsesAdminPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);

  // Form state for new comment
  const [commentText, setCommentText] = useState('');
  const [postTitle, setPostTitle] = useState('');
  const [authorName, setAuthorName] = useState('');

  // Editing state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedResponse, setEditedResponse] = useState('');

  // Fetch comments on load
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const res = await fetch('/api/comments');
      const data = await res.json();
      setComments(data.comments || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const generateResponse = async () => {
    if (!commentText.trim()) {
      alert('Please enter comment text');
      return;
    }

    setGenerating(true);
    try {
      const res = await fetch('/api/comments/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          comment_text: commentText,
          post_title: postTitle || undefined,
          author_name: authorName || undefined,
        }),
      });

      const data = await res.json();

      if (data.success) {
        // Clear form
        setCommentText('');
        setPostTitle('');
        setAuthorName('');

        // Refresh comments list
        fetchComments();
      } else {
        alert('Failed to generate response');
      }
    } catch (error) {
      console.error('Error generating response:', error);
      alert('Error generating response');
    } finally {
      setGenerating(false);
    }
  };

  const updateComment = async (id: string, updates: { status?: string; final_response?: string }) => {
    setLoading(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updates }),
      });

      const data = await res.json();

      if (data.success) {
        fetchComments();
        setEditingId(null);
      } else {
        alert('Failed to update comment');
      }
    } catch (error) {
      console.error('Error updating comment:', error);
      alert('Error updating comment');
    } finally {
      setLoading(false);
    }
  };

  const deleteComment = async (id: string) => {
    if (!confirm('Delete this comment?')) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/comments?id=${id}`, { method: 'DELETE' });
      const data = await res.json();

      if (data.success) {
        fetchComments();
      } else {
        alert('Failed to delete comment');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('Error deleting comment');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  const pendingComments = comments.filter((c) => c.status === 'pending');
  const completedComments = comments.filter((c) => c.status !== 'pending');

  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Comment Response Generator</h1>

        {/* New Comment Form */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Generate New Response</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Comment Text <span className="text-red-500">*</span>
              </label>
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 min-h-[120px]"
                placeholder="Paste the comment text here..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Post Title (optional)</label>
                <input
                  type="text"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  placeholder="e.g., Week 4: The Loop"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Author Name (optional)</label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  placeholder="e.g., Sarah Johnson"
                />
              </div>
            </div>

            <button
              onClick={generateResponse}
              disabled={generating || !commentText.trim()}
              className="w-full bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {generating ? 'Generating Response...' : 'Generate Response'}
            </button>
          </div>
        </div>

        {/* Pending Comments */}
        {pendingComments.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pending Approval ({pendingComments.length})</h2>
            <div className="space-y-4">
              {pendingComments.map((comment) => (
                <div key={comment.id} className="bg-white rounded-lg shadow-sm p-6">
                  {/* Context */}
                  <div className="mb-4 pb-4 border-b border-neutral-200">
                    {comment.post_title && (
                      <div className="text-sm text-neutral-600 mb-1">
                        Post: <span className="font-medium">{comment.post_title}</span>
                      </div>
                    )}
                    {comment.author_name && (
                      <div className="text-sm text-neutral-600 mb-1">
                        Author: <span className="font-medium">{comment.author_name}</span>
                      </div>
                    )}
                    <div className="text-sm text-neutral-500">
                      {new Date(comment.created_at).toLocaleString()}
                    </div>
                  </div>

                  {/* Original Comment */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Original Comment:</h4>
                    <div className="bg-neutral-50 p-4 rounded border border-neutral-200 text-neutral-800">
                      {comment.comment_text}
                    </div>
                  </div>

                  {/* Generated Response */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Generated Response:</h4>
                    {editingId === comment.id ? (
                      <textarea
                        value={editedResponse}
                        onChange={(e) => setEditedResponse(e.target.value)}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 min-h-[100px]"
                      />
                    ) : (
                      <div className="bg-blue-50 p-4 rounded border border-blue-200 text-neutral-800">
                        {comment.generated_response}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-2">
                    {editingId === comment.id ? (
                      <>
                        <button
                          onClick={() => {
                            updateComment(comment.id, {
                              final_response: editedResponse,
                              status: 'approved',
                            });
                          }}
                          disabled={loading}
                          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                        >
                          Save & Approve
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-4 py-2 bg-neutral-300 text-neutral-800 rounded hover:bg-neutral-400"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setEditingId(comment.id);
                            setEditedResponse(comment.generated_response || '');
                          }}
                          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          Edit Response
                        </button>
                        <button
                          onClick={() =>
                            updateComment(comment.id, {
                              final_response: comment.generated_response,
                              status: 'approved',
                            })
                          }
                          disabled={loading}
                          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
                        >
                          Approve as-is
                        </button>
                        <button
                          onClick={() => copyToClipboard(comment.generated_response || '')}
                          className="px-4 py-2 bg-neutral-600 text-white rounded hover:bg-neutral-700"
                        >
                          Copy to Clipboard
                        </button>
                        <button
                          onClick={() => updateComment(comment.id, { status: 'denied' })}
                          disabled={loading}
                          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
                        >
                          Deny
                        </button>
                        <button
                          onClick={() => deleteComment(comment.id)}
                          disabled={loading}
                          className="px-4 py-2 bg-neutral-400 text-white rounded hover:bg-neutral-500 disabled:opacity-50"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completed Comments */}
        {completedComments.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Completed ({completedComments.length})</h2>
            <div className="space-y-4">
              {completedComments.map((comment) => (
                <div
                  key={comment.id}
                  className={`rounded-lg shadow-sm p-6 ${
                    comment.status === 'approved'
                      ? 'bg-green-50 border border-green-200'
                      : comment.status === 'denied'
                      ? 'bg-red-50 border border-red-200'
                      : 'bg-neutral-50 border border-neutral-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      {comment.post_title && (
                        <div className="text-sm text-neutral-600 mb-1">
                          Post: <span className="font-medium">{comment.post_title}</span>
                        </div>
                      )}
                      <div className="text-sm text-neutral-500">
                        {new Date(comment.created_at).toLocaleString()}
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        comment.status === 'approved'
                          ? 'bg-green-100 text-green-800'
                          : comment.status === 'denied'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {comment.status}
                    </span>
                  </div>

                  <div className="text-sm text-neutral-700 mb-2">
                    <strong>Comment:</strong> {comment.comment_text}
                  </div>

                  {comment.final_response && (
                    <div className="text-sm text-neutral-700 mb-2">
                      <strong>Response:</strong> {comment.final_response}
                    </div>
                  )}

                  <div className="flex gap-2 mt-4">
                    {comment.final_response && (
                      <button
                        onClick={() => copyToClipboard(comment.final_response || '')}
                        className="px-3 py-1 bg-neutral-600 text-white text-sm rounded hover:bg-neutral-700"
                      >
                        Copy Response
                      </button>
                    )}
                    <button
                      onClick={() => deleteComment(comment.id)}
                      disabled={loading}
                      className="px-3 py-1 bg-neutral-400 text-white text-sm rounded hover:bg-neutral-500 disabled:opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {comments.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <p className="text-neutral-500">No comments yet. Paste a comment above to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
