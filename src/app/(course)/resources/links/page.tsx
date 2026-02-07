'use client';

import Link from 'next/link';
import { ScrambleText } from '../../../components/ScrambleText';

interface LinkItem {
  title: string;
  description: string;
  url: string;
}

interface LinkSection {
  title: string;
  links: LinkItem[];
}

const sections: LinkSection[] = [
  {
    title: 'Essential Tools',
    links: [
      { title: 'Claude', description: 'Your AI collaborator for building.', url: 'https://claude.ai' },
      { title: 'VS Code', description: 'Free code editor. Download and install.', url: 'https://code.visualstudio.com' },
      { title: 'Vercel', description: 'Deploy your projects for free.', url: 'https://vercel.com' },
      { title: 'GitHub', description: 'Store your code and track changes.', url: 'https://github.com' },
    ],
  },
  {
    title: 'Learning Resources',
    links: [
      { title: 'MDN Web Docs', description: 'The definitive reference for HTML, CSS, and JavaScript.', url: 'https://developer.mozilla.org' },
      { title: 'CSS-Tricks', description: 'Practical CSS guides and examples.', url: 'https://css-tricks.com' },
      { title: 'JavaScript.info', description: 'Modern JavaScript tutorial. Clear explanations.', url: 'https://javascript.info' },
      { title: 'Can I Use', description: 'Check browser support for web features.', url: 'https://caniuse.com' },
    ],
  },
  {
    title: 'Design Inspiration',
    links: [
      { title: 'Refactoring UI', description: 'Design tips for developers. Practical and actionable.', url: 'https://refactoringui.com' },
      { title: 'Dribbble', description: 'Design inspiration. See what\'s possible.', url: 'https://dribbble.com' },
      { title: 'Mobbin', description: 'Real app UI patterns. See how others solve common problems.', url: 'https://mobbin.com' },
    ],
  },
  {
    title: 'Free Assets',
    links: [
      { title: 'Google Fonts', description: 'Free fonts for your projects.', url: 'https://fonts.google.com' },
      { title: 'Unsplash', description: 'Free high-quality photos.', url: 'https://unsplash.com' },
      { title: 'Heroicons', description: 'Simple, beautiful SVG icons.', url: 'https://heroicons.com' },
      { title: 'Feather Icons', description: 'Simply beautiful open source icons.', url: 'https://feathericons.com' },
    ],
  },
  {
    title: 'Color Tools',
    links: [
      { title: 'Coolors', description: 'Color palette generator.', url: 'https://coolors.co' },
      { title: 'Realtime Colors', description: 'Preview colors on a real website layout.', url: 'https://realtimecolors.com' },
      { title: 'Contrast Checker', description: 'Check if your text is readable.', url: 'https://webaim.org/resources/contrastchecker' },
    ],
  },
  {
    title: 'APIs for Practice',
    links: [
      { title: 'OpenWeatherMap', description: 'Free weather data for your dashboard.', url: 'https://openweathermap.org/api' },
      { title: 'Quotable', description: 'Random quotes API. No key needed.', url: 'https://github.com/lukePeavey/quotable' },
      { title: 'JSONPlaceholder', description: 'Fake API for testing and prototyping.', url: 'https://jsonplaceholder.typicode.com' },
    ],
  },
];

export default function LinksPage() {
  return (
    <div className="p-8 lg:p-12 max-w-2xl">
      {/* Breadcrumb */}
      <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">
        <Link href="/dashboard" className="hover:text-[var(--c-black)]">Dashboard</Link>
        <span className="mx-2">/</span>
        <span>Links</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="text-xs text-[var(--c-black)]/40 mb-2">
          <ScrambleText text="Bookmarks" scrambleOnHover />
        </div>
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight mb-4">
          Useful Links
        </h1>
        <p className="text-[var(--c-black)]/60">
          Tools, references, and resources to bookmark.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.links.map((link) => (
                <a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-[var(--c-black)]/10 rounded-sm p-4 hover:border-[var(--c-black)]/30 hover:bg-[var(--c-black)]/5 transition-all"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium mb-1">{link.title}</h3>
                      <p className="text-sm text-[var(--c-black)]/60">{link.description}</p>
                    </div>
                    <span className="text-[var(--c-black)]/30 text-sm">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
