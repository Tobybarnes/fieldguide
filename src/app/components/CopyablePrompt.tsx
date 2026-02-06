'use client';

import { useState } from 'react';

interface CopyablePromptProps {
  prompt: string;
  label?: string;
}

export function CopyablePrompt({ prompt, label }: CopyablePromptProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative group">
      {label && (
        <div className="text-[10px] uppercase tracking-widest text-[var(--c-black)]/40 mb-2">
          {label}
        </div>
      )}
      <div className="bg-[var(--c-black)]/5 border border-[var(--c-black)]/10 rounded-sm p-4 pr-12">
        <pre className="text-sm text-[var(--c-black)]/80 whitespace-pre-wrap font-mono leading-relaxed">
          {prompt}
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 text-[var(--c-black)]/40 hover:text-[var(--c-black)] transition-colors"
          aria-label={copied ? 'Copied' : 'Copy to clipboard'}
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      </div>
      {copied && (
        <div className="absolute -top-8 right-0 text-xs text-[var(--c-black)]/60 bg-[var(--c-cream)] px-2 py-1 rounded">
          Copied!
        </div>
      )}
    </div>
  );
}
