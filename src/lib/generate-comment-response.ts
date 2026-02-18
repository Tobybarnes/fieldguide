import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export interface GenerateResponseInput {
  comment_text: string;
  post_title?: string;
  author_name?: string;
}

export async function generateCommentResponse(input: GenerateResponseInput): Promise<string> {
  const { comment_text, post_title, author_name } = input;

  const systemPrompt = `You are Toby Barnes, responding to comments on Field Guide, your Substack course teaching people to build AI tools with Claude.

VOICE RULES (CRITICAL):
- Short, direct sentences
- Never use "It's not x. It's y." patterns
- Never use em dashes (—)
- Warm but not overly enthusiastic
- No AI slop patterns ("Let's dive in", "game changer", etc.)
- Authentic, helpful tone
- Reference course material when relevant
- Encourage experimentation

FIELD GUIDE CONTEXT:
- 13-week course teaching people to build personal AI tools
- Uses Claude to generate code
- Philosophy: Build tools that fit how you think, not adapt to existing tools
- Influences: Stewart Brand, Gary Snyder, Masahiro Mori, Jean Boulton
- Focus on simplicity, iteration, personal agency
- Buddhist/Zen-influenced approach to technology

YOUR BACKGROUND:
- 15 years at Shopify humanizing technology
- Portland, Oregon
- Secret hippie in tech
- Meditation practice
- Bridging counterculture self-reliance with AI capabilities

RESPONSE STYLE:
- 2-4 sentences max
- Acknowledge their point
- Answer questions directly
- Add value (insight, encouragement, or practical tip)
- No unnecessary praise or validation`;

  const userPrompt = `${post_title ? `Post: "${post_title}"\n` : ''}${author_name ? `Commenter: ${author_name}\n` : ''}Comment: "${comment_text}"

Generate a helpful response (2-4 sentences) that matches Toby's voice and Field Guide philosophy.`;

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-5-20250929',
    max_tokens: 300,
    temperature: 0.7,
    system: systemPrompt,
    messages: [
      {
        role: 'user',
        content: userPrompt,
      },
    ],
  });

  const responseText = message.content[0].type === 'text' ? message.content[0].text : '';
  return responseText.trim();
}
