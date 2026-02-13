'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ScrambleText } from '../../../components/ScrambleText';

const guides: Record<string, { num: string; title: string; content: string[] }> = {
  'before-you-begin': {
    num: '01',
    title: 'Before You Begin',
    content: [
      'You don\'t need to become a developer. That\'s not what this is about.',
      'You need to know that when you have an idea—a tool that would make your life easier, a system that fits how you actually think, a thing that doesn\'t exist yet—you can just make it.',
      'Not to ship. Not to scale. Not to impress anyone. Just to have it. Because you made it. Because it\'s yours.',
      'This guide is about capability, not credentials. When you\'re done, you won\'t call yourself a developer. You\'ll just be someone who makes what they need.',
    ],
  },
  'setting-up': {
    num: '02',
    title: 'Setting Up',
    content: [
      'You need three things: a computer, a Claude subscription, and a text editor.',
      'Claude: Sign up at claude.ai. The Pro plan ($20/month) gives you the access you need. This is your collaborator—the one who writes the code while you direct.',
      'Text Editor: VS Code is free and works great. Download it from code.visualstudio.com. This is where you\'ll see and manage the code Claude writes.',
      'Terminal: Your computer already has one. On Mac, it\'s called Terminal. On Windows, use PowerShell. This is how you run what you build.',
      'That\'s it. No frameworks to learn. No languages to memorize. Just these three tools and you\'re ready.',
    ],
  },
  'the-loop': {
    num: '03',
    title: 'The Loop',
    content: [
      'Everything you build follows the same pattern: Describe → Generate → Test → Refine.',
      'DESCRIBE: Tell Claude what you want. Be specific about what it should do, not how it should work. "I want a page that saves URLs with notes and lets me search them later."',
      'GENERATE: Claude writes the code. Copy it into your text editor. Save the file.',
      'TEST: Run it. Open it in your browser. Click around. Does it do what you wanted?',
      'REFINE: Tell Claude what to fix. "The search isn\'t finding partial matches" or "Make the save button more obvious." Repeat until it\'s right.',
      'This loop is your methodology. You\'ll use it for everything—from simple pages to complex tools. The more you practice, the better you get at describing what you want.',
      '',
      'THE LOOP IN ACTION',
      'Let\'s see this with a tiny example. Say you want a page that shows the current time.',
      'DESCRIBE: "Build me a page that shows the current time, updating every second."',
      'GENERATE: Claude writes the HTML and JavaScript. You copy it into a file called clock.html.',
      'TEST: Open clock.html in your browser. Does it show the time? Does it update?',
      'REFINE: "Make the time larger and center it on the page." Then: "Show the date below the time." Then: "Use a monospace font."',
      'Each refinement is a loop. You\'ll do this hundreds of times. It never stops being useful.',
      '',
      'WHAT NOT TO DO',
      'Don\'t ask Claude to "make it better." Better for who? For what purpose? Be specific.',
      'Don\'t describe HOW the code should work. Claude knows how. You know WHAT you want it to do.',
      'Don\'t add features before testing what you have. One thing at a time. Make it work, then make it better.',
    ],
  },
  'shipping': {
    num: '04',
    title: 'Shipping',
    content: [
      'Shipping means making your thing accessible—to yourself from another device, or to others if you choose.',
      'For personal tools, running locally is often enough. Your thing lives on your computer, you use it when you need it.',
      'To put something online, Vercel makes it simple. Connect your code, click deploy, get a URL. Free for personal projects.',
      'You don\'t need to ship everything. Some tools are just for you, running on your machine. That\'s valid. The point isn\'t to publish—it\'s to have what you need.',
      'But when you do want to share, know that the path from "works on my computer" to "works on a URL" is shorter than you think.',
    ],
  },
};

export default function GuidePage() {
  const params = useParams();
  const slug = params.slug as string;
  const guide = guides[slug];
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('fieldguide-progress');
    if (saved) {
      const completed = JSON.parse(saved);
      setIsCompleted(completed.includes(`guide-${slug}`));
    }
  }, [slug]);

  const toggleComplete = () => {
    const saved = localStorage.getItem('fieldguide-progress');
    const completed = saved ? JSON.parse(saved) : [];
    const itemId = `guide-${slug}`;

    if (completed.includes(itemId)) {
      const updated = completed.filter((id: string) => id !== itemId);
      localStorage.setItem('fieldguide-progress', JSON.stringify(updated));
      setIsCompleted(false);
    } else {
      completed.push(itemId);
      localStorage.setItem('fieldguide-progress', JSON.stringify(completed));
      setIsCompleted(true);
    }
  };

  if (!guide) {
    return (
      <div className="p-8 lg:p-12">
        <h1 className="text-2xl mb-4">Guide not found</h1>
        <Link href="/dashboard" className="underline">Back to dashboard</Link>
      </div>
    );
  }

  const slugs = Object.keys(guides);
  const currentIndex = slugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <div className="p-8 lg:pl-48 lg:pr-12 lg:py-12 max-w-2xl">
      {/* Breadcrumb */}
      <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">
        <Link href="/dashboard" className="hover:text-[var(--c-black)]">Dashboard</Link>
        <span className="mx-2">/</span>
        <span>Guide {guide.num}</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="text-xs text-[var(--c-black)]/40 mb-2">
          <ScrambleText text={`Guide ${guide.num} of 04`} scrambleOnHover />
        </div>
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight">
          {guide.title}
        </h1>
      </div>

      {/* Content */}
      <div className="space-y-6 text-[var(--c-black)]/80 leading-relaxed">
        {guide.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Mark as Complete */}
      <div className="mt-12">
        <button
          onClick={toggleComplete}
          className={`px-6 py-3 text-sm font-medium transition-colors ${
            isCompleted
              ? 'bg-[var(--c-black)]/10 text-[var(--c-black)] hover:bg-[var(--c-black)]/20'
              : 'bg-[var(--c-black)] text-[var(--c-cream)] hover:bg-[var(--c-black)]/90'
          }`}
        >
          {isCompleted ? '✓ Completed' : 'Mark as Complete'}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-16 pt-8 border-t border-[var(--c-black)]/10">
        {prevSlug ? (
          <Link
            href={`/guide/${prevSlug}`}
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            ← {guides[prevSlug].title}
          </Link>
        ) : (
          <div />
        )}
        {nextSlug ? (
          <Link
            href={`/guide/${nextSlug}`}
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            {guides[nextSlug].title} →
          </Link>
        ) : (
          <Link
            href="/practice/starting"
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            Start Practice 01 →
          </Link>
        )}
      </div>
    </div>
  );
}
