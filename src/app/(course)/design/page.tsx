'use client';

import Link from 'next/link';

const principles = [
  {
    id: 'kanso',
    japanese: '簡素',
    romanji: 'Kanso',
    title: 'Simplicity',
    definition: 'Elimination of clutter',
    description: 'Things are plain. Simple. Natural. Beauty and utility don\'t need to shout. Everything essential, nothing extra.',
    inFieldGuide: 'Clean layouts. Minimal navigation. Focused content. No dashboard bloat. No feature creep. Build what you need, nothing more.',
  },
  {
    id: 'fukinsei',
    japanese: '不均整',
    romanji: 'Fukinsei',
    title: 'Asymmetry',
    definition: 'Balanced irregularity',
    description: 'Controlled asymmetry. Avoid perfect symmetry. The goal is balance without uniformity. Beauty lives in imperfection.',
    inFieldGuide: 'Two-column layouts. Varied spacing. Content that breathes. Not gridded perfection. Purposeful imbalance. Your tools don\'t need to be perfect. They need to work.',
  },
  {
    id: 'shibumi',
    japanese: '渋み',
    romanji: 'Shibui / Shibumi',
    title: 'Subtle Grace',
    definition: 'Understated elegance',
    description: 'Find beauty by being understated. Be precisely what something should be. Don\'t elaborate. Elegant simplicity.',
    inFieldGuide: 'Muted colors: taupe, cream, moss. Refined typography. Quiet interactions. The design serves. Tools that do their job without fanfare.',
  },
  {
    id: 'shizen',
    japanese: '自然',
    romanji: 'Shizen',
    title: 'Naturalness',
    definition: 'Absence of pretense',
    description: 'No pretense. No artificiality. Things as they are. Not forced. Not contrived. Organic and real.',
    inFieldGuide: 'Progressive learning flow. Natural next steps. Honest language. No marketing speak. No artificial urgency. Clear guidance from start to ship.',
  },
  {
    id: 'yugen',
    japanese: '幽玄',
    romanji: 'Yūgen',
    title: 'Profound Grace',
    definition: 'Showing more by showing less',
    description: 'An awareness that triggers feelings too deep for words. Subtle depths. The profound sense that's experienced, not explained.',
    inFieldGuide: 'Progressive disclosure. Hints before reveals. Space for discovery. You learn by building. Not by reading. The loop teaches more than any explanation could.',
  },
  {
    id: 'datsuzoku',
    japanese: 'だつぞく',
    romanji: 'Datsuzoku',
    title: 'Freedom',
    definition: 'Transcending convention',
    description: 'Break from habit. Break from formula. Escape the ordinary. Transcend convention.',
    inFieldGuide: 'No traditional course structure. No certificates. No completion badges. Build your own dashboard. Make your own tools. Break free from how it\'s supposed to be done.',
  },
  {
    id: 'seijaku',
    japanese: '静寂',
    romanji: 'Seijaku',
    title: 'Stillness',
    definition: 'Tranquility in design',
    description: 'Energized calm. Stillness. Solitude. Not soundless quiet. Uncluttered. Silence as an active element.',
    inFieldGuide: 'Generous whitespace. Unhurried pacing. Room to think. No notifications. No urgency. No gamification. A calm space to learn and build.',
  },
];

export default function DesignPage() {
  return (
    <div className="p-8 lg:pl-48 lg:pr-20 lg:py-20 max-w-3xl">
      {/* Header */}
      <div className="mb-20">
        <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">
          Design Philosophy
        </div>
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight mb-8">
          Seven <span className="headline-serif italic">Principles</span>
        </h1>
        <p className="text-[var(--c-black)]/70 leading-loose text-lg max-w-2xl">
          Field Guide draws from Japanese aesthetic philosophy. Seven principles that craftspeople have used for centuries. They're not design rules. They're ways of thinking about making things.
        </p>
      </div>

      {/* Principles */}
      <div className="space-y-20">
        {principles.map((principle, index) => (
          <article key={principle.id} className="border-t border-[var(--c-black)]/10 pt-12">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-xs text-[var(--c-black)]/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-5xl text-[var(--c-black)]/20 font-normal">
                  {principle.japanese}
                </h2>
              </div>
              <div className="pl-12">
                <h3 className="text-2xl font-normal mb-1">{principle.romanji}</h3>
                <p className="text-sm text-[var(--c-black)]/60 italic">{principle.definition}</p>
              </div>
            </div>

            {/* Definition */}
            <div className="pl-12 mb-8">
              <p className="text-[var(--c-black)]/70 leading-loose mb-8">
                {principle.description}
              </p>
            </div>

            {/* In Field Guide */}
            <div className="pl-12 bg-[var(--c-moss)]/5 border-l-4 border-[var(--c-moss)] py-6 pr-8">
              <h4 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">
                In Field Guide
              </h4>
              <p className="text-[var(--c-black)]/70 leading-loose">
                {principle.inFieldGuide}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Closing */}
      <div className="mt-20 pt-12 border-t border-[var(--c-black)]/10">
        <p className="text-[var(--c-black)]/70 leading-loose text-lg mb-8">
          These principles aren't rigid rules. They're guides. Use them when you build your own tools.
          Ask yourself: Is this simple enough? Does it feel natural? Am I building what I need, or what I think I should build?
        </p>
        <p className="text-[var(--c-black)]/60 leading-loose">
          The best tools disappear when you\'re using them.
          They do their job quietly. Get out of your way.
        </p>
      </div>

      {/* Back Link */}
      <div className="mt-12">
        <Link
          href="/dashboard"
          className="text-sm text-[var(--c-black)]/50 hover:text-[var(--c-black)] transition-colors"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
