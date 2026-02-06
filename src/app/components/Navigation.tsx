'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ScrambleText } from './ScrambleText';

const guides = [
  { num: '01', slug: 'before-you-begin', title: 'Before You Begin' },
  { num: '02', slug: 'setting-up', title: 'Setting Up' },
  { num: '03', slug: 'the-loop', title: 'The Loop' },
  { num: '04', slug: 'shipping', title: 'Shipping' },
];

const practices = [
  { num: '01', slug: 'start-here', title: 'Start Here', build: 'Personal Page' },
  { num: '02', slug: 'capture', title: 'Capture', build: 'Link Catcher' },
  { num: '03', slug: 'remember', title: 'Remember', build: 'Daily Log' },
  { num: '04', slug: 'move', title: 'Move', build: 'Training Log' },
  { num: '05', slug: 'collect', title: 'Collect', build: 'Record Shelf' },
  { num: '06', slug: 'see', title: 'See', build: 'Photo Log' },
  { num: '07', slug: 'gather', title: 'Gather', build: 'Dashboard' },
  { num: '08', slug: 'refine', title: 'Refine', build: 'Revisit + Improve' },
  { num: '09', slug: 'make-your-own', title: 'Make Your Own', build: 'Self-directed' },
];

export function Navigation({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname();

  if (mobile) {
    return (
      <div className="bg-[var(--c-black)] text-white p-4">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="text-sm font-bold tracking-wide">
            FIELDGUIDE
          </Link>
          <Link href="/" className="text-xs text-white/60 hover:text-white">
            ← Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <aside className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
      <div>
        {/* Home Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white mb-6 transition-colors"
        >
          ← Back to Home
        </Link>

        {/* Logo */}
        <Link href="/dashboard" className="block mb-10">
          <div className="text-sm font-bold tracking-wide">
            <ScrambleText text="FIELDGUIDE" scrambleOnHover />
          </div>
          <div className="text-xs text-white/50 mt-1">
            Access to Tools
          </div>
        </Link>

        {/* Guides Section */}
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Guides</div>
          <nav className="space-y-1">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guide/${guide.slug}`}
                className={`flex items-center gap-3 py-1.5 text-sm transition-colors ${
                  pathname === `/guide/${guide.slug}`
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span className="text-white/40 text-xs">{guide.num}</span>
                <span>{guide.title}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Practices Section */}
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Practices</div>
          <nav className="space-y-1">
            {practices.map((practice) => (
              <Link
                key={practice.slug}
                href={`/practice/${practice.slug}`}
                className={`flex items-center gap-3 py-1.5 text-sm transition-colors ${
                  pathname === `/practice/${practice.slug}`
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <span className="text-white/40 text-xs">{practice.num}</span>
                <span>{practice.title}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Resources Section */}
        <div className="mb-8">
          <div className="text-[10px] uppercase tracking-widest text-white/40 mb-3">Resources</div>
          <nav className="space-y-1">
            <Link
              href="/prompts"
              className={`block py-1.5 text-sm transition-colors ${
                pathname === '/prompts' ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              Prompt Library
            </Link>
            <Link
              href="/resources/glossary"
              className={`block py-1.5 text-sm transition-colors ${
                pathname === '/resources/glossary' ? 'text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              Glossary
            </Link>
          </nav>
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-white/40">
        <div>( <ScrambleText text="Nine Practices" scrambleOnHover /> )</div>
      </div>
    </aside>
  );
}
