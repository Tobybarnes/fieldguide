'use client';

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
          <div className="text-sm font-bold tracking-wide">
            FIELDGUIDE
          </div>
          <nav className="flex items-center gap-8">
            <a
              href="https://fieldguidebuilders.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold px-4 py-2 border border-[var(--c-black)] hover:bg-[var(--c-black)] hover:text-[var(--c-cream)] transition-all"
            >
              Subscribe
            </a>
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
                <ScrambleText text="Field Guide 2026" scrambleOnHover />
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
              ( <ScrambleText text="21-Week Course" scrambleOnHover /> )
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Scrolling Content */}
        <div className="bg-[var(--c-cream)] text-[var(--c-black)]">
          {/* Mobile Globe */}
          <div className="lg:hidden relative bg-[var(--c-taupe)] min-h-[50vh]">
            <div className="absolute top-8 left-8 z-10">
              <div className="text-xs uppercase tracking-wide font-bold text-white/70">
                <ScrambleText text="Field Guide 2026" scrambleOnHover />
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
              ( <ScrambleText text="21-Week Course" scrambleOnHover /> )
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
                Build your own AI tools.{' '}
                <span className="headline-serif italic">No coding</span>{' '}
                required.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-sm leading-relaxed text-[#444] max-w-sm mb-10"
              >
                <p className="mb-6">
                  A 21-week course on building personal tools with Claude AI. For people who want to make what they need, not buy what someone else built.
                </p>
                <p>
                  Nine practices. Buddhist principles. Weekly delivery.
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
                  href="https://fieldguidebuilders.substack.com/p/week-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[var(--c-black)] text-[var(--c-cream)] text-sm font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Start Free: Read Week 1
                </a>
                <a
                  href="https://fieldguidebuilders.substack.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 border border-[var(--c-black)] text-[var(--c-black)] text-sm font-semibold hover:bg-[var(--c-black)] hover:text-[var(--c-cream)] transition-all text-center"
                >
                  Subscribe — $24/month
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-xs text-[var(--c-black)]/50"
              >
                First 4 weeks free · Cancel anytime · New week every Thursday
              </motion.div>
            </div>
          </section>

          {/* What You'll Learn Section */}
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
                What you&apos;ll <span className="headline-serif italic">learn</span>
              </h2>

              <div className="space-y-8">
                {[
                  { num: '01', title: 'Foundation (Weeks 1-4)', desc: 'Before You Begin, Setting Up, The Loop, and Shipping. Everything you need to go from idea to working tool.' },
                  { num: '02', title: 'Nine Practices (Weeks 5-13)', desc: 'Build actual tools: link catcher, daily log, training tracker, music library, photo journal, and personal dashboard.' },
                  { num: '03', title: 'Agent Orchestration (Weeks 14-17)', desc: 'Work with multiple AI agents. Research synthesis, multi-source analysis, and the daemon/craft concept.' },
                  { num: '04', title: 'Projects (Weeks 18-21)', desc: 'From practices to projects. Identifying patterns, planning systems, and building what matters.' },
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
                  "You want tools that work exactly how you think, not how someone else designed them",
                  "You'd rather build something specific than subscribe to something generic",
                  "You're curious about AI but don't want to become a developer",
                  "You believe in understanding what you use, not just using it",
                  "You like making things (even if they're digital)",
                  "You value simplicity, naturalness, and tools that disappear when you're working",
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
              <div className="text-[10px] uppercase tracking-widest text-white/40 mb-6">
                Whole Earth Catalog, 1968
              </div>
              <blockquote className="text-xl lg:text-2xl font-normal leading-relaxed mb-6 headline-serif italic">
                &ldquo;We are as gods and might as well get good at it.&rdquo;
              </blockquote>
              <cite className="text-sm text-white/70 not-italic">
                — Stewart Brand
              </cite>
            </div>
          </motion.section>

          {/* Design Philosophy Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-[var(--c-cream)] border-t border-[var(--c-black)]/10"
            style={{ padding: '4rem' }}
          >
            <div className="max-w-lg">
              <div className="text-[10px] uppercase tracking-widest text-[var(--c-black)]/40 mb-6">
                七つの原則
              </div>
              <h2 className="text-2xl lg:text-3xl font-normal mb-6 tracking-tight">
                Seven <span className="headline-serif italic">Principles</span>
              </h2>
              <p className="text-sm text-[#444] leading-relaxed mb-8">
                Field Guide draws from Japanese aesthetic philosophy. Seven principles that craftspeople have used for centuries. Simplicity. Asymmetry. Subtle grace. Naturalness. Mystery. Freedom. Stillness. Ways of thinking about making things that last.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs text-[var(--c-black)]/60">
                <div>
                  <div className="text-2xl mb-1">簡素</div>
                  <div>Kanso</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">不均整</div>
                  <div>Fukinsei</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">渋み</div>
                  <div>Shibumi</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">自然</div>
                  <div>Shizen</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">幽玄</div>
                  <div>Yūgen</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">だつぞく</div>
                  <div>Datsuzoku</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">静寂</div>
                  <div>Seijaku</div>
                </div>
              </div>
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
                    a: "No. You'll learn to work with Claude AI to build tools. The course teaches you how to think about building and how to describe what you want. Claude handles the code."
                  },
                  {
                    q: "What do I need to get started?",
                    a: "A Claude Pro subscription ($20/month from Anthropic) and a text editor (VS Code is free). Week 2 walks you through setup. Week 3 you build your first tool."
                  },
                  {
                    q: "How is this different from other AI courses?",
                    a: "Most courses teach productivity hacks or how to prompt AI at work. This teaches you to build personal tools for your own life. Philosophical depth, not productivity theater. Based on Buddhist principles and Whole Earth Catalog thinking."
                  },
                  {
                    q: "What's the format?",
                    a: "Weekly posts delivered via Substack. Each week includes philosophy, step-by-step instructions, copy-paste prompts, troubleshooting, and extensions. First 4 weeks are free. Weeks 5-21 require paid subscription ($24/month)."
                  },
                  {
                    q: "Can I get lifetime access instead of subscribing?",
                    a: "Yes. After Week 12, you'll be able to purchase downloadable bundles on Gumroad: Foundation (Weeks 1-12) for $39, Advanced (Weeks 13-21) for $39, or both for $69. Coming soon."
                  },
                  {
                    q: "What if I get stuck?",
                    a: "Each week includes detailed troubleshooting. You can also ask questions in the Substack comments where other students and I can help."
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
                21 weeks. Nine practices. A way of thinking that lasts longer than any tool.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <a
                  href="https://fieldguidebuilders.substack.com/p/week-01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[var(--c-cream)] text-[var(--c-black)] text-sm font-semibold hover:opacity-90 transition-opacity text-center"
                >
                  Start Free: Read Week 1
                </a>
                <a
                  href="https://fieldguidebuilders.substack.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 border border-white text-white text-sm font-semibold hover:bg-white hover:text-[var(--c-black)] transition-all text-center"
                >
                  Subscribe — $24/month
                </a>
              </motion.div>

              <div className="text-xs text-white/50">
                First 4 weeks free · Cancel anytime · Coming soon: Lifetime bundles
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <footer className="bg-[var(--c-black)] text-white/50 border-t border-white/10" style={{ padding: '2rem 4rem' }}>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-xs">
                <ScrambleText text="FIELDGUIDE" scrambleOnHover /> · 2026
              </div>
              <div className="text-xs">
                <a
                  href="https://fieldguidebuilders.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Read on Substack
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
