'use client';

import Link from 'next/link';
import * as motion from 'motion/react-client';
import { ScrambleText } from './components/ScrambleText';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[var(--c-cream)]">
      {/* Fixed Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--c-cream)]/90 backdrop-blur-sm border-b border-[var(--c-black)]/5"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          <Link href="/" className="text-sm font-bold tracking-wide">
            FIELDGUIDE
          </Link>
          <nav className="flex items-center gap-8">
            <Link
              href="/login"
              className="text-xs font-semibold px-4 py-2 border border-[var(--c-black)] hover:bg-[var(--c-black)] hover:text-[var(--c-cream)] transition-all"
            >
              I have access
            </Link>
          </nav>
        </div>
      </motion.header>

      {/* Main Layout - Fixed Left, Scrolling Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen pt-16">
        {/* Left Column - Fixed Globe */}
        <div className="hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="fixed top-16 left-0 w-1/2 h-[calc(100vh-4rem)] bg-[var(--c-taupe)]"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-12 left-12 z-10"
            >
              <div className="text-xs uppercase tracking-wide font-bold text-white/70">
                <ScrambleText text="Field Guide 01" scrambleOnHover />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src="/earth.png"
                alt="Whole Earth"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute bottom-12 left-12 z-10 text-xs font-semibold text-white/70"
            >
              ( <ScrambleText text="Nine Practices" scrambleOnHover /> )
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Scrolling Content */}
        <div className="bg-[var(--c-cream)] text-[var(--c-black)]">
          {/* Mobile Globe */}
          <div className="lg:hidden relative bg-[var(--c-taupe)] min-h-[50vh]">
            <div className="absolute top-8 left-8 z-10">
              <div className="text-xs uppercase tracking-wide font-bold text-white/70">
                <ScrambleText text="Field Guide 01" scrambleOnHover />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/earth.png"
                alt="Whole Earth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-8 left-8 z-10 text-xs font-semibold text-white/70">
              ( <ScrambleText text="Nine Practices" scrambleOnHover /> )
            </div>
          </div>

          {/* Hero Content */}
          <section className="min-h-[calc(100vh-4rem)] lg:min-h-screen flex flex-col justify-center" style={{ padding: '3rem 4rem' }}>
            <div className="max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xs uppercase tracking-wide font-bold mb-8"
              >
                <ScrambleText text="Access to Tools" scrambleOnHover />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl lg:text-5xl leading-[1.1] font-normal mb-8 tracking-tight"
              >
                Build what you need.{' '}
                <span className="headline-serif italic">Nothing</span>{' '}
                more.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-sm leading-relaxed text-[#444] max-w-sm mb-10"
              >
                <p className="mb-6">
                  A field guide to making your own tools with Claude. For tinkerers,
                  makers, and people who&apos;d rather{' '}
                  <span className="italic">build the thing</span>{' '}
                  than buy the subscription.
                </p>
                <p>
                  Nine practices. Fifty prompts. A way of thinking.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <a
                  href="https://wholeearthdesign.gumroad.com/l/fieldguide01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[var(--c-black)] text-[var(--c-cream)] text-sm font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Get the Field Guide — $29
                </a>
                <Link
                  href="/login"
                  className="inline-block px-8 py-4 border border-[var(--c-black)] text-[var(--c-black)] text-sm font-semibold hover:bg-[var(--c-black)] hover:text-[var(--c-cream)] transition-all text-center"
                >
                  I have access
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-xs text-[var(--c-black)]/50"
              >
                Lifetime access · No subscription · All updates included
              </motion.div>
            </div>
          </section>

          {/* What You Get Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="border-t border-[var(--c-black)]/10"
            style={{ padding: '4rem' }}
          >
            <div className="max-w-lg">
              <h2 className="text-2xl lg:text-3xl font-normal mb-10 tracking-tight">
                What you <span className="headline-serif italic">get</span>
              </h2>

              <div className="space-y-8">
                {[
                  { num: '01', title: '4 Foundation Guides', desc: 'Before You Begin, Setting Up, The Loop, and Shipping. Everything you need to go from zero to deployed.' },
                  { num: '02', title: '9 Practices', desc: 'Hands-on projects from a personal page to a full dashboard. Each one teaches a different way of thinking.' },
                  { num: '03', title: '50+ Prompts', desc: 'A library of prompts for starting, expanding, fixing, polishing, and maintaining your tools.' },
                  { num: '04', title: 'Resources', desc: 'Glossary, useful links, MCP setup guides, and troubleshooting. Plain language, no jargon.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border-t border-[var(--c-black)]/10 pt-6"
                  >
                    <div className="text-xs uppercase tracking-wide font-bold mb-3 text-[var(--c-black)]/50">{item.num}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-[#444] leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Nine Practices Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-[var(--c-black)] text-white"
            style={{ padding: '4rem' }}
          >
            <div className="max-w-lg">
              <h2 className="text-2xl lg:text-3xl font-normal mb-10 tracking-tight">
                The Nine <span className="headline-serif italic">Practices</span>
              </h2>

              <div className="space-y-0">
                {[
                  { num: '01', title: 'Starting', build: 'Personal Page' },
                  { num: '02', title: 'Capture', build: 'Link Catcher' },
                  { num: '03', title: 'Remember', build: 'Daily Log' },
                  { num: '04', title: 'Move', build: 'Training Log' },
                  { num: '05', title: 'Collect', build: 'Record Shelf' },
                  { num: '06', title: 'See', build: 'Photo Log' },
                  { num: '07', title: 'Gather', build: 'Dashboard' },
                  { num: '08', title: 'Refine', build: 'Revisit + Improve' },
                  { num: '09', title: 'Make Your Own', build: 'Self-directed' },
                ].map((practice, i) => (
                  <motion.div
                    key={practice.num}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center justify-between py-4 border-b border-white/10"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-white/40 text-sm">{practice.num}</span>
                      <span className="text-base">{practice.title}</span>
                    </div>
                    <span className="text-sm text-white/50">{practice.build}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* This Is For You Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-[var(--c-cream)]"
            style={{ padding: '4rem' }}
          >
            <div className="max-w-lg">
              <h2 className="text-2xl lg:text-3xl font-normal mb-10 tracking-tight">
                This is for <span className="headline-serif italic">you</span> if...
              </h2>

              <div className="space-y-4">
                {[
                  "You're tired of paying for apps that almost do what you want",
                  "You'd rather build something small that works than wait for the perfect tool",
                  "You're curious about AI but don't want to become a developer",
                  "You like making things with your hands (even if they're digital)",
                  "You believe in tools that serve you, not the other way around",
                  "You want to understand what you're using, not just use it",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-[var(--c-black)]/30 mt-0.5">+</span>
                    <p className="text-sm text-[#444] leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Quote Section */}
          <motion.section
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-[var(--c-taupe)] text-white"
            style={{ padding: '4rem' }}
          >
            <div className="max-w-lg">
              <blockquote className="text-xl lg:text-2xl font-normal leading-relaxed mb-6 headline-serif italic">
                &ldquo;We are as gods and might as well get good at it.&rdquo;
              </blockquote>
              <cite className="text-sm text-white/70 not-italic">
                — Stewart Brand, Whole Earth Catalog
              </cite>
            </div>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-[var(--c-cream)]"
            style={{ padding: '4rem' }}
          >
            <div className="max-w-lg">
              <h2 className="text-2xl lg:text-3xl font-normal mb-10 tracking-tight">
                Common <span className="headline-serif italic">questions</span>
              </h2>

              <div className="space-y-8">
                {[
                  {
                    q: "Do I need to know how to code?",
                    a: "No. That's the whole point. You'll learn to describe what you want and work with Claude to build it. The guide teaches you how to think about building, not how to write code."
                  },
                  {
                    q: "What do I need to get started?",
                    a: "A Claude Pro subscription ($20/month), a text editor (free), and a Google account for the MCP integration. The guide walks you through connecting Claude to your calendar and email."
                  },
                  {
                    q: "How is this different from other AI courses?",
                    a: "Most courses teach you to use AI to be more productive at work. This teaches you to build your own tools for your own life. No hustle, no scale, no optimization. Just useful things."
                  },
                  {
                    q: "What if I get stuck?",
                    a: "The guide includes troubleshooting resources and a glossary. You can also join the community Discord to ask questions and share what you're building."
                  },
                  {
                    q: "Is there a refund policy?",
                    a: "Yes. If it's not for you, email within 30 days for a full refund. No questions."
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border-t border-[var(--c-black)]/10 pt-6"
                  >
                    <h3 className="text-base font-semibold mb-3">{faq.q}</h3>
                    <p className="text-sm text-[#444] leading-relaxed">{faq.a}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Final CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-[var(--c-black)] text-white"
            style={{ padding: '4rem' }}
          >
            <div className="max-w-lg">
              <h2 className="text-2xl lg:text-3xl font-normal mb-6 tracking-tight">
                Ready to build your own <span className="headline-serif italic">tools</span>?
              </h2>
              <p className="text-sm text-white/70 mb-10">
                Nine practices. Fifty prompts. A way of thinking that lasts longer than any tool.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <a
                  href="https://wholeearthdesign.gumroad.com/l/fieldguide01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[var(--c-cream)] text-[var(--c-black)] text-sm font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Get the Field Guide — $29
                </a>
                <Link
                  href="/login"
                  className="inline-block px-8 py-4 border border-white text-white text-sm font-semibold hover:bg-white hover:text-[var(--c-black)] transition-all text-center"
                >
                  I have access
                </Link>
              </motion.div>

              <div className="text-xs text-white/50">
                Lifetime access · No subscription · All updates included
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <footer className="bg-[var(--c-black)] text-white/50 border-t border-white/10" style={{ padding: '2rem 4rem' }}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xs">
                <ScrambleText text="FIELDGUIDE" scrambleOnHover /> · Whole Earth Design
              </div>
              <div className="text-xs">
                A tool for making tools.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
