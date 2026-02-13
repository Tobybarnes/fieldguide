'use client';

import Link from 'next/link';
import { ScrambleText } from '../../../components/ScrambleText';

interface Term {
  term: string;
  definition: string;
  link?: string;
  linkText?: string;
}

const terms: Term[] = [
  { term: 'API', definition: 'Application Programming Interface. A way for programs to talk to each other. When you fetch weather data, you\'re using an API.', link: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction', linkText: 'Learn more at MDN' },
  { term: 'Browser', definition: 'The program you use to view websites (Chrome, Safari, Firefox). It reads HTML, CSS, and JavaScript and shows you the result.' },
  { term: 'CSS', definition: 'Cascading Style Sheets. The code that makes things look good—colors, fonts, layouts, spacing.', link: 'https://css-tricks.com', linkText: 'CSS-Tricks' },
  { term: 'Deploy', definition: 'Making your thing live on the internet so others (or you from other devices) can access it.' },
  { term: 'Function', definition: 'A reusable chunk of code that does something specific. Like a recipe you can use over and over.' },
  { term: 'Git', definition: 'A system for tracking changes to code. Like version history in Google Docs, but for code.', link: 'https://docs.github.com/en/get-started/using-git/about-git', linkText: 'GitHub\'s guide' },
  { term: 'HTML', definition: 'HyperText Markup Language. The structure of a webpage—headings, paragraphs, links, images.', link: 'https://developer.mozilla.org/en-US/docs/Learn/HTML', linkText: 'MDN HTML guide' },
  { term: 'JavaScript', definition: 'The programming language that makes websites interactive. Clicks, animations, data fetching—that\'s JavaScript.', link: 'https://javascript.info', linkText: 'JavaScript.info' },
  { term: 'JSON', definition: 'JavaScript Object Notation. A way of structuring data that\'s easy for both humans and machines to read.' },
  { term: 'LocalStorage', definition: 'A way to save data in the browser that persists even when you close the tab. Good for personal tools.' },
  { term: 'MCP', definition: 'Model Context Protocol. A way to connect Claude to external data like your calendar, email, or files.', link: '/resources/mcps', linkText: 'Using MCPs' },
  { term: 'NPM', definition: 'Node Package Manager. A way to download and use code other people have written.', link: 'https://www.npmjs.com', linkText: 'npmjs.com' },
  { term: 'Repository', definition: 'A folder containing your project and its history. Often hosted on GitHub.', link: 'https://github.com', linkText: 'GitHub' },
  { term: 'Terminal', definition: 'A text-based way to interact with your computer. You type commands, it does things.' },
  { term: 'Variable', definition: 'A name that holds a value. Like a labeled box that stores something.' },
  { term: 'Vercel', definition: 'A platform for deploying websites. Connect your code, click deploy, get a URL.', link: 'https://vercel.com', linkText: 'vercel.com' },
];

export default function GlossaryPage() {
  return (
    <div className="p-12 lg:pl-48 lg:pr-20 lg:py-20 max-w-2xl">
      {/* Breadcrumb */}
      <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-16">
        <Link href="/dashboard" className="hover:text-[var(--c-black)]">Dashboard</Link>
        <span className="mx-2">/</span>
        <span>Glossary</span>
      </div>

      {/* Header */}
      <div className="mb-20">
        <div className="text-xs text-[var(--c-black)]/40 mb-3">
          <ScrambleText text="A-Z Reference" scrambleOnHover />
        </div>
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight mb-4">
          Glossary
        </h1>
        <p className="text-[var(--c-black)]/60 text-lg leading-relaxed">
          Plain-language definitions for terms you&apos;ll encounter.
        </p>
      </div>

      {/* Terms */}
      <div className="space-y-8">
        {terms.map((item) => (
          <div key={item.term} className="border-b border-[var(--c-black)]/10 pb-8">
            <h3 className="font-medium text-lg mb-3">{item.term}</h3>
            <p className="text-[var(--c-black)]/70 leading-loose">
              {item.definition}
              {item.link && (
                <>
                  {' '}
                  <a
                    href={item.link}
                    target={item.link.startsWith('/') ? undefined : '_blank'}
                    rel={item.link.startsWith('/') ? undefined : 'noopener noreferrer'}
                    className="text-[var(--c-black)] underline underline-offset-2 hover:text-[var(--c-black)]/70"
                  >
                    {item.linkText || 'Learn more'}
                  </a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
