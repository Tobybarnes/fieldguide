import { NextRequest, NextResponse } from 'next/server';
import { commentDb } from '@/lib/db';
import { generateCommentResponse } from '@/lib/generate-comment-response';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { comment_text, post_title, author_name } = body;

    if (!comment_text) {
      return NextResponse.json({ error: 'Comment text is required' }, { status: 400 });
    }

    // Generate response using Claude
    const generated_response = await generateCommentResponse({
      comment_text,
      post_title,
      author_name,
    });

    // Save to database
    const comment = commentDb.create({
      comment_text,
      post_title,
      author_name,
      generated_response,
    });

    return NextResponse.json({
      success: true,
      comment,
    });
  } catch (error) {
    console.error('Error generating response:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
