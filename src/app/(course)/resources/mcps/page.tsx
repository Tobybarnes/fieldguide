'use client';

import Link from 'next/link';
import { ScrambleText } from '../../../components/ScrambleText';
import { CopyablePrompt } from '../../../components/CopyablePrompt';

interface MCP {
  name: string;
  description: string;
  useCase: string[];
  setup: string;
  prompt: string;
}

const mcps: MCP[] = [
  {
    name: 'Google Workspace',
    description: 'Access your Gmail, Google Calendar, and Google Drive from Claude. This is the MCP we recommend everyone start with.',
    useCase: [
      'Ask "What\'s on my calendar today?" and get a real answer',
      'Find that email from Sarah about the project',
      'Summarize the documents in my Work folder',
      'Draft emails without leaving your conversation',
      'When am I free on Thursday afternoon?',
      'Add a 30-minute call with Sarah tomorrow at 3pm',
    ],
    setup: 'Requires Google OAuth authentication. Works with any Google account. Start with just Calendar—it\'s the safest and most immediately useful.',
    prompt: 'Help me set up the Google Workspace MCP. I want to be able to access my Gmail and Google Calendar from Claude.',
  },
  {
    name: 'Slack',
    description: 'Read and send Slack messages, search channels, check your unreads.',
    useCase: [
      'What did I miss in #general today?',
      'Find the conversation about the API changes',
      'Draft a reply to the thread about the deadline',
    ],
    setup: 'Requires Slack authentication for your workspace.',
    prompt: 'Help me set up the Slack MCP so I can access my Slack messages from Claude.',
  },
  {
    name: 'File System',
    description: 'Read and write files on your computer.',
    useCase: [
      'Read my notes from yesterday\'s meeting',
      'Update my todo list',
      'Find all markdown files in my Documents folder',
      'Work with local projects without copying/pasting code',
    ],
    setup: 'Grants Claude access to specified folders on your computer. Be intentional about which folders.',
    prompt: 'Help me set up the File System MCP to access my Documents folder.',
  },
  {
    name: 'GitHub',
    description: 'Access repositories, issues, pull requests, and code.',
    useCase: [
      'What PRs need my review?',
      'Show me recent commits on main',
      'Create an issue for the bug I just found',
      'Navigate codebases without leaving the conversation',
    ],
    setup: 'Requires GitHub personal access token.',
    prompt: 'Help me set up the GitHub MCP for my repositories.',
  },
  {
    name: 'Notion',
    description: 'Read and update your Notion workspace.',
    useCase: [
      'Add this to my reading list',
      'What tasks are due this week?',
      'Update the status on that project',
    ],
    setup: 'Requires Notion integration token.',
    prompt: 'Help me set up the Notion MCP so I can access my Notion pages from Claude.',
  },
  {
    name: 'Figma',
    description: 'Access Figma files, get design context, generate screenshots.',
    useCase: [
      'Get the design specs from this Figma file',
      'Take a screenshot of this component',
      'What\'s the structure of this design?',
    ],
    setup: 'Requires Figma personal access token.',
    prompt: 'Help me set up the Figma MCP for my design files.',
  },
];

export default function MCPsPage() {
  return (
    <div className="p-8 lg:p-12 max-w-2xl">
      {/* Breadcrumb */}
      <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">
        <Link href="/dashboard" className="hover:text-[var(--c-black)]">Dashboard</Link>
        <span className="mx-2">/</span>
        <span>MCPs</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="text-xs text-[var(--c-black)]/40 mb-2">
          <ScrambleText text="Integrations" scrambleOnHover />
        </div>
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight mb-4">
          Using MCPs
        </h1>
        <p className="text-[var(--c-black)]/60 leading-relaxed">
          Connect Claude to your real data with Model Context Protocol servers.
        </p>
      </div>

      {/* What's an MCP */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">What's an MCP?</h2>
        <div className="space-y-4 text-[var(--c-black)]/80 leading-relaxed">
          <p>
            Model Context Protocol (MCP) is a way to give Claude access to external tools and data.
            Instead of copying and pasting information into Claude, MCPs let Claude read directly from
            your calendar, email, files, and other services.
          </p>
          <p>
            Think of it like giving Claude permission to look things up on your behalf.
          </p>
        </div>
      </div>

      {/* Before/After */}
      <div className="mb-12 bg-[var(--c-black)]/5 p-6 rounded-sm">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">Why MCPs Matter</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="text-xs font-medium text-[var(--c-black)]/40 mb-2">Without MCPs:</div>
            <ol className="text-sm text-[var(--c-black)]/70 space-y-1 list-decimal list-inside">
              <li>Open your calendar</li>
              <li>Copy today's events</li>
              <li>Paste into Claude</li>
              <li>Ask your question</li>
            </ol>
          </div>
          <div>
            <div className="text-xs font-medium text-[var(--c-black)]/40 mb-2">With MCPs:</div>
            <ol className="text-sm text-[var(--c-black)]/70 space-y-1 list-decimal list-inside">
              <li>Ask Claude about your day</li>
            </ol>
            <p className="text-sm text-[var(--c-black)]/50 mt-2 italic">That's it.</p>
          </div>
        </div>
      </div>

      {/* Google Workspace Setup Guide */}
      <div className="mb-12 bg-[var(--c-black)]/5 p-6 rounded-sm">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">Setting Up Google Workspace MCP</h2>
        <p className="text-[var(--c-black)]/70 mb-4">
          We assume everyone following this course will set up Google Workspace MCP. It&apos;s the foundation that makes everything else more powerful.
        </p>
        <ol className="space-y-3 text-sm text-[var(--c-black)]/70 mb-4">
          <li className="flex items-start gap-3">
            <span className="text-xs text-[var(--c-black)]/40 w-5 pt-0.5">1.</span>
            <span><strong>Get Claude Code</strong> or another MCP-compatible client</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xs text-[var(--c-black)]/40 w-5 pt-0.5">2.</span>
            <span><strong>Add Google Workspace MCP</strong> to your configuration</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xs text-[var(--c-black)]/40 w-5 pt-0.5">3.</span>
            <span><strong>Authenticate with Google</strong> when prompted</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xs text-[var(--c-black)]/40 w-5 pt-0.5">4.</span>
            <span><strong>Test it</strong> by asking &ldquo;What&apos;s on my calendar today?&rdquo;</span>
          </li>
        </ol>
        <CopyablePrompt prompt="What's on my calendar today?" />
      </div>

      {/* MCP List */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Personal MCPs Worth Setting Up</h2>
        <div className="space-y-8">
          {mcps.map((mcp) => (
            <div key={mcp.name} className="border border-[var(--c-black)]/10 rounded-sm p-6">
              <h3 className="text-lg font-medium mb-2">{mcp.name} MCP</h3>
              <p className="text-[var(--c-black)]/70 mb-4">{mcp.description}</p>

              <div className="mb-4">
                <div className="text-xs font-medium text-[var(--c-black)]/40 mb-2">Why it's useful:</div>
                <ul className="text-sm text-[var(--c-black)]/60 space-y-1">
                  {mcp.useCase.map((use, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--c-black)]/30">-</span>
                      "{use}"
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-xs text-[var(--c-black)]/50 mb-4">
                <span className="font-medium">Setup:</span> {mcp.setup}
              </div>

              <CopyablePrompt prompt={mcp.prompt} />
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Order */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">Recommended Setup Order</h2>
        <ol className="space-y-2 text-[var(--c-black)]/70">
          <li className="flex items-start gap-3">
            <span className="text-xs text-[var(--c-black)]/40 w-5">1.</span>
            <span><strong>Google Workspace</strong> — Email and calendar are universal</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xs text-[var(--c-black)]/40 w-5">2.</span>
            <span><strong>File System</strong> — For working with local files</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xs text-[var(--c-black)]/40 w-5">3.</span>
            <span><strong>GitHub</strong> (if you code) — For repository access</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xs text-[var(--c-black)]/40 w-5">4.</span>
            <span><strong>Slack</strong> (if you use it) — For team communication</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xs text-[var(--c-black)]/40 w-5">5.</span>
            <span><strong>Notion</strong> (if you use it) — For notes and tasks</span>
          </li>
        </ol>
        <p className="text-sm text-[var(--c-black)]/50 mt-4 italic">
          Start with Google Workspace. Get comfortable with one MCP before adding more.
        </p>
      </div>

      {/* Using Google Throughout Course */}
      <div className="mb-12 border-l-2 border-[var(--c-black)]/20 pl-6">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">Using Google Workspace Throughout This Course</h2>
        <p className="text-[var(--c-black)]/70 mb-4">Many practices become more powerful with Google Workspace connected:</p>
        <ul className="space-y-2 text-sm text-[var(--c-black)]/70">
          <li className="flex items-start gap-2">
            <span className="text-[var(--c-black)]/30">-</span>
            <span><strong>Practice 03 (Remember)</strong>: Ask &ldquo;What meetings did I have yesterday?&rdquo; before journaling</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--c-black)]/30">-</span>
            <span><strong>Practice 07 (Gather)</strong>: Your dashboard can show real calendar events</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--c-black)]/30">-</span>
            <span><strong>Practice 08 (Refine)</strong>: Search emails for context on features to improve</span>
          </li>
        </ul>
      </div>

      {/* Security */}
      <div className="mb-12 bg-[var(--c-black)]/5 p-6 rounded-sm">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">Security Considerations</h2>
        <p className="text-[var(--c-black)]/70 mb-4">MCPs have access to your real data. Be thoughtful:</p>
        <ul className="space-y-2 text-sm text-[var(--c-black)]/70">
          <li className="flex items-start gap-2">
            <span className="text-[var(--c-black)]/30">-</span>
            <span><strong>Review permissions</strong> — Understand what each MCP can read and write</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--c-black)]/30">-</span>
            <span><strong>Use read-only when possible</strong> — If you only need to read data, don't grant write access</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--c-black)]/30">-</span>
            <span><strong>Limit scope</strong> — Give access to specific folders, not your entire file system</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--c-black)]/30">-</span>
            <span><strong>Revoke unused MCPs</strong> — Remove access when you're not using an MCP</span>
          </li>
        </ul>
      </div>

      {/* Build Your Own */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">Building Your Own MCP</h2>
        <p className="text-[var(--c-black)]/70 mb-4">
          Eventually, you might want an MCP for something that doesn't exist. Good news: you can build it.
        </p>
        <CopyablePrompt prompt="Help me build a simple MCP server that reads my local JSON file of book notes and lets me search through them." />
        <p className="text-sm text-[var(--c-black)]/50 mt-4">
          MCPs are just servers that follow a specific protocol. If you can write a simple API, you can write an MCP.
        </p>
      </div>

      {/* Common Issues */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Common MCP Issues</h2>
        <div className="space-y-4">
          <details className="group border border-[var(--c-black)]/10 rounded-sm">
            <summary className="p-4 cursor-pointer text-sm font-medium text-[var(--c-black)] hover:bg-[var(--c-black)]/5">
              MCP not responding
            </summary>
            <div className="px-4 pb-4 text-sm text-[var(--c-black)]/70 leading-relaxed">
              Check that the MCP server is running. Most need to be started before they work.
            </div>
          </details>
          <details className="group border border-[var(--c-black)]/10 rounded-sm">
            <summary className="p-4 cursor-pointer text-sm font-medium text-[var(--c-black)] hover:bg-[var(--c-black)]/5">
              Authentication expired
            </summary>
            <div className="px-4 pb-4 text-sm text-[var(--c-black)]/70 leading-relaxed">
              Tokens expire. Re-authenticate when prompted.
            </div>
          </details>
          <details className="group border border-[var(--c-black)]/10 rounded-sm">
            <summary className="p-4 cursor-pointer text-sm font-medium text-[var(--c-black)] hover:bg-[var(--c-black)]/5">
              Can't find my data
            </summary>
            <div className="px-4 pb-4 text-sm text-[var(--c-black)]/70 leading-relaxed">
              Check the MCP's scope. It might only have access to specific folders or channels.
            </div>
          </details>
          <details className="group border border-[var(--c-black)]/10 rounded-sm">
            <summary className="p-4 cursor-pointer text-sm font-medium text-[var(--c-black)] hover:bg-[var(--c-black)]/5">
              Rate limits
            </summary>
            <div className="px-4 pb-4 text-sm text-[var(--c-black)]/70 leading-relaxed">
              Some services limit how often you can query them. Wait a minute and try again.
            </div>
          </details>
        </div>
      </div>

      {/* What MCPs Are Not */}
      <div className="mb-12 border-l-2 border-[var(--c-black)]/20 pl-6">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">What MCPs Are Not</h2>
        <ul className="space-y-2 text-[var(--c-black)]/70">
          <li className="flex items-start gap-2">
            <span className="text-[var(--c-black)]/30">-</span>
            <span><strong>AI that runs autonomously</strong> — MCPs are tools Claude uses when you ask</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--c-black)]/30">-</span>
            <span><strong>Always-on monitoring</strong> — They only activate during conversations</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--c-black)]/30">-</span>
            <span><strong>Replacements for apps</strong> — They augment your workflow, not replace your tools</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
