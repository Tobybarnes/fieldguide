'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ScrambleText } from '../../components/ScrambleText';

const categoryExamples: Record<string, { image: string; caption: string } | null> = {
  beginning: { image: '/screenshots/prompts/01-beginning-todo.png', caption: 'A simple todo app built with "Basic CRUD app" prompt' },
  expanding: { image: '/screenshots/prompts/02-expanding-search-active.png', caption: 'The same app with search added using "Add search" prompt' },
  fixing: null,
  polishing: { image: '/screenshots/prompts/03-polishing-dark.png', caption: 'Dark mode added with "Add dark mode" prompt' },
  releasing: null,
  maintaining: null,
};

const prompts = {
  beginning: [
    { title: 'Start a web app', prompt: 'Build me a [type] web app that [does what]. Keep it simple—just HTML, CSS, and JavaScript in a single file.' },
    { title: 'Create a landing page', prompt: 'Create a landing page for [product/project]. Include a headline, description, and call-to-action button.' },
    { title: 'Basic CRUD app', prompt: 'Build me a simple app where I can create, read, update, and delete [items]. Store the data in localStorage.' },
    { title: 'Form with validation', prompt: 'Create a form that collects [fields]. Validate the inputs and show helpful error messages.' },
    { title: 'Data display', prompt: 'Build a page that displays this data: [paste data]. Make it searchable and sortable.' },
  ],
  expanding: [
    { title: 'Add search', prompt: 'Add search functionality to this code. It should filter results as I type.' },
    { title: 'Add filtering', prompt: 'Add the ability to filter [items] by [criteria]. Let me select multiple filters.' },
    { title: 'Add sorting', prompt: 'Add sorting options: [list options]. Remember my preference.' },
    { title: 'Add local storage', prompt: 'Make this data persist using localStorage. It should survive page refreshes.' },
    { title: 'Add export', prompt: 'Add a button to export the data as [JSON/CSV]. Download it as a file.' },
  ],
  fixing: [
    { title: 'Debug error', prompt: 'I\'m getting this error: [paste error]. Here\'s my code: [paste code]. What\'s wrong and how do I fix it?' },
    { title: 'Not working as expected', prompt: 'This code should [expected behavior] but instead it [actual behavior]. Here\'s the code: [paste]' },
    { title: 'Styling issue', prompt: 'The layout is broken. [Describe issue]. Here\'s my CSS: [paste]. How do I fix it?' },
    { title: 'Performance issue', prompt: 'This is running slowly when [condition]. How can I make it faster?' },
    { title: 'Mobile not working', prompt: 'This works on desktop but not on mobile. Here\'s the code: [paste]. What needs to change?' },
  ],
  polishing: [
    { title: 'Improve design', prompt: 'Make this look more polished. Current code: [paste]. Keep functionality the same but improve the visual design.' },
    { title: 'Add dark mode', prompt: 'Add a dark mode toggle to this. It should remember the preference.' },
    { title: 'Make responsive', prompt: 'Make this responsive. It should work well on mobile, tablet, and desktop.' },
    { title: 'Add animations', prompt: 'Add subtle animations to make interactions feel smoother. Keep it tasteful.' },
    { title: 'Improve typography', prompt: 'Improve the typography. Better font choices, sizes, line heights, and spacing.' },
  ],
  releasing: [
    { title: 'Prepare for deploy', prompt: 'I want to deploy this to Vercel. What changes do I need to make to the code?' },
    { title: 'Add meta tags', prompt: 'Add proper meta tags for SEO and social sharing. Title: [title], Description: [desc]' },
    { title: 'Optimize images', prompt: 'How should I optimize images for web? What formats and sizes?' },
    { title: 'Add favicon', prompt: 'How do I add a favicon to my site?' },
    { title: 'Custom domain', prompt: 'I have a custom domain. How do I connect it to my Vercel deployment?' },
  ],
  maintaining: [
    { title: 'Add feature', prompt: 'Add [feature] to this existing code: [paste]. Keep the current functionality working.' },
    { title: 'Refactor', prompt: 'Refactor this code to be cleaner and more maintainable: [paste]' },
    { title: 'Update styling', prompt: 'Change the color scheme to [colors] while keeping the layout the same.' },
    { title: 'Fix after update', prompt: 'This stopped working after [change]. How do I fix it?' },
    { title: 'Add backup', prompt: 'Add a way to backup all my data and restore from a backup file.' },
  ],
};

type Category = keyof typeof prompts;

export default function PromptsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('beginning');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const categories: { key: Category; label: string }[] = [
    { key: 'beginning', label: 'Beginning' },
    { key: 'expanding', label: 'Expanding' },
    { key: 'fixing', label: 'Fixing' },
    { key: 'polishing', label: 'Polishing' },
    { key: 'releasing', label: 'Releasing' },
    { key: 'maintaining', label: 'Maintaining' },
  ];

  return (
    <div className="p-8 lg:p-12 max-w-3xl">
      {/* Breadcrumb */}
      <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">
        <Link href="/dashboard" className="hover:text-[var(--c-black)]">Dashboard</Link>
        <span className="mx-2">/</span>
        <span>Prompts</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="text-xs text-[var(--c-black)]/40 mb-2">
          <ScrambleText text="50+ Templates" scrambleOnHover />
        </div>
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight mb-4">
          Prompt Library
        </h1>
        <p className="text-[var(--c-black)]/60 max-w-lg">
          Copy, paste, modify. These are starting points—adjust them for your specific needs.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 text-sm border transition-colors ${
              activeCategory === cat.key
                ? 'bg-[var(--c-black)] text-[var(--c-cream)] border-[var(--c-black)]'
                : 'border-[var(--c-black)]/20 hover:border-[var(--c-black)]/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Example Preview */}
      {categoryExamples[activeCategory] && (
        <div className="mb-8 p-4 bg-[var(--c-black)]/5 rounded-sm">
          <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/40 mb-3">Example Result</div>
          <img
            src={categoryExamples[activeCategory]!.image}
            alt={categoryExamples[activeCategory]!.caption}
            className="w-full rounded-sm border border-[var(--c-black)]/10 shadow-sm mb-2"
          />
          <p className="text-xs text-[var(--c-black)]/50 italic">{categoryExamples[activeCategory]!.caption}</p>
        </div>
      )}

      {/* Prompts */}
      <div className="space-y-4">
        {prompts[activeCategory].map((item, index) => (
          <div
            key={index}
            className="border border-[var(--c-black)]/10 p-6 hover:border-[var(--c-black)]/20 transition-colors"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-medium">{item.title}</h3>
              <button
                onClick={() => copyToClipboard(item.prompt, index)}
                className="text-xs text-[var(--c-black)]/50 hover:text-[var(--c-black)] transition-colors"
              >
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <p className="text-sm text-[var(--c-black)]/70 font-mono bg-[var(--c-black)]/5 p-3">
              {item.prompt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
