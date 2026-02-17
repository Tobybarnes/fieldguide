'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ScrambleText } from '../../components/ScrambleText';

const guides = [
  { num: '01', slug: 'before-you-begin', title: 'Before You Begin', desc: 'Mindset and what to expect' },
  { num: '02', slug: 'setting-up', title: 'Setting Up', desc: 'Tools and environment' },
  { num: '03', slug: 'the-loop', title: 'The Loop', desc: 'The core methodology' },
  { num: '04', slug: 'shipping', title: 'Shipping', desc: 'Getting it out there' },
];

const practices = [
  { num: '01', slug: 'starting', title: 'Starting', build: 'Personal Page' },
  { num: '02', slug: 'capture', title: 'Capture', build: 'Link Catcher' },
  { num: '03', slug: 'remember', title: 'Remember', build: 'Daily Log' },
  { num: '04', slug: 'move', title: 'Move', build: 'Training Log' },
  { num: '05', slug: 'collect', title: 'Collect', build: 'Record Shelf' },
  { num: '06', slug: 'see', title: 'See', build: 'Photo Log' },
  { num: '07', slug: 'gather', title: 'Gather', build: 'Dashboard' },
  { num: '08', slug: 'refine', title: 'Refine', build: 'Revisit + Improve' },
  { num: '09', slug: 'make-your-own', title: 'Make Your Own', build: 'Self-directed' },
];

export default function Dashboard() {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('fieldguide-progress');
    if (saved) {
      setCompletedSlugs(JSON.parse(saved));
    }
  }, []);

  const totalItems = guides.length + practices.length;
  const completedCount = completedSlugs.length;
  const progressPercent = Math.round((completedCount / totalItems) * 100);

  return (
    <div className="p-8 lg:pl-48 lg:pr-12 lg:py-12 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-2">
          <ScrambleText text="Welcome Back" scrambleOnHover />
        </div>
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight mb-4">
          Field Guide <span className="headline-serif">Dashboard</span>
        </h1>
        <p className="text-[var(--c-black)]/60 max-w-lg">
          Build what you need. Nothing more. Start with the guides, then work through the practices at your own pace.
        </p>
      </div>

      {/* Getting Started Callout */}
      <div className="bg-[var(--c-black)] text-white p-6 mb-8">
        <h3 className="font-medium mb-2">First time here?</h3>
        <p className="text-sm text-white/70 mb-4">
          Start with the 4 foundation guides, then set up your Google Workspace MCP.
          Once connected, you can ask Claude about your calendar and email directly.
        </p>
        <div className="flex gap-4">
          <Link
            href="/guide/before-you-begin"
            className="text-xs font-semibold px-4 py-2 bg-white text-[var(--c-black)] hover:bg-white/90 transition-colors"
          >
            Start Guide 01
          </Link>
          <Link
            href="/resources/mcps"
            className="text-xs font-semibold px-4 py-2 border border-white/50 text-white hover:bg-white/10 transition-colors"
          >
            Set Up MCPs
          </Link>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="border border-[var(--c-black)]/10 p-6 mb-12">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs uppercase tracking-widest text-[var(--c-black)]/50">Progress</span>
          <span className="text-sm text-[var(--c-black)]/50">
            {completedCount} / {totalItems} completed
          </span>
        </div>
        <div className="w-full h-1 bg-[var(--c-black)]/10">
          <div
            className="h-full bg-[var(--c-black)] transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {completedCount > 0 && (
          <div className="mt-4 text-sm text-[var(--c-black)]/60">
            {progressPercent}% complete. Keep going—you've finished {completedCount} {completedCount === 1 ? 'item' : 'items'}.
          </div>
        )}
      </div>

      {/* Guides Section */}
      <section className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">
          Guides — Start Here
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {guides.map((guide) => {
            const isCompleted = completedSlugs.includes(`guide-${guide.slug}`);
            return (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className={`border p-6 hover:border-[var(--c-black)]/30 transition-colors group relative ${
                  isCompleted ? 'border-[var(--c-black)]/20 bg-[var(--c-black)]/5' : 'border-[var(--c-black)]/10'
                }`}
              >
                {isCompleted && (
                  <div className="absolute top-4 right-4 text-xs text-[var(--c-black)]/40">✓</div>
                )}
                <div className="flex items-start gap-4">
                  <span className="text-xs text-[var(--c-black)]/40">{guide.num}</span>
                  <div>
                    <h3 className="font-medium mb-1 group-hover:underline">{guide.title}</h3>
                    <p className="text-sm text-[var(--c-black)]/60">{guide.desc}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Practices Section */}
      <section className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">
          The Nine Practices
        </h2>
        <div className="space-y-2">
          {practices.map((practice) => {
            const isCompleted = completedSlugs.includes(`practice-${practice.slug}`);
            return (
              <Link
                key={practice.slug}
                href={`/practice/${practice.slug}`}
                className={`flex items-center justify-between border p-4 hover:border-[var(--c-black)]/30 transition-colors group ${
                  isCompleted ? 'border-[var(--c-black)]/20 bg-[var(--c-black)]/5' : 'border-[var(--c-black)]/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[var(--c-black)]/40 w-6">{practice.num}</span>
                  {isCompleted && <span className="text-xs text-[var(--c-black)]/40">✓</span>}
                  <span className="group-hover:underline">{practice.title}</span>
                </div>
                <span className="text-sm text-[var(--c-black)]/40">{practice.build}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Design Philosophy Callout */}
      <section className="mb-12 border-l-4 border-[var(--c-moss)] bg-[var(--c-moss)]/5 pl-8 py-6">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-3">
              七つの原則 (Seven Principles)
            </h3>
            <p className="text-[var(--c-black)]/70 leading-loose mb-4">
              Field Guide draws from Japanese aesthetic philosophy. Principles that have guided makers for centuries. Simplicity. Asymmetry. Subtle grace. Naturalness. Mystery. Freedom. Stillness.
            </p>
            <Link
              href="/design"
              className="inline-block text-sm text-[var(--c-black)] hover:underline"
            >
              Read about the design philosophy →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">
          Resources
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            href="/prompts"
            className="border border-[var(--c-black)]/10 p-4 text-center hover:border-[var(--c-black)]/30 transition-colors"
          >
            <div className="text-2xl mb-2">50+</div>
            <div className="text-xs text-[var(--c-black)]/60">Prompts</div>
          </Link>
          <Link
            href="/resources/glossary"
            className="border border-[var(--c-black)]/10 p-4 text-center hover:border-[var(--c-black)]/30 transition-colors"
          >
            <div className="text-2xl mb-2">A-Z</div>
            <div className="text-xs text-[var(--c-black)]/60">Glossary</div>
          </Link>
          <Link
            href="/resources/mcps"
            className="border border-[var(--c-black)]/10 p-4 text-center hover:border-[var(--c-black)]/30 transition-colors"
          >
            <div className="text-2xl mb-2">MCP</div>
            <div className="text-xs text-[var(--c-black)]/60">Integrations</div>
          </Link>
          <Link
            href="/resources/links"
            className="border border-[var(--c-black)]/10 p-4 text-center hover:border-[var(--c-black)]/30 transition-colors"
          >
            <div className="text-2xl mb-2">→</div>
            <div className="text-xs text-[var(--c-black)]/60">Useful Links</div>
          </Link>
        </div>
      </section>
    </div>
  );
}
