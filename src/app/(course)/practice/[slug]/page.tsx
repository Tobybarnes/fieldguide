'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ScrambleText } from '../../../components/ScrambleText';
import { CopyablePrompt } from '../../../components/CopyablePrompt';

// Expanded type definition for practices
interface Step {
  title: string;
  description: string;
  prompt?: string;
  tip?: string;
}

interface AdditionalPrompt {
  title: string;
  prompt: string;
  use: string;
}

interface TroubleshootingItem {
  problem: string;
  solution: string;
}

interface Practice {
  num: string;
  title: string;
  build: string;
  principle: string;
  overview: string;
  whatYoullBuild?: string;
  steps: Step[];
  prompts?: AdditionalPrompt[];
  troubleshooting?: TroubleshootingItem[];
  reflection?: string[];
  extensions?: string[];
}

const practices: Record<string, Practice> = {
  'start-here': {
    num: '01',
    title: 'Start Here',
    build: 'Personal Page',
    principle: 'Start before you\'re ready',
    overview: 'Your first build is simple: a single page about you. No navigation, no complexity—just one screen that says who you are and what you do.',
    steps: [
      {
        title: 'Describe what you want',
        description: 'Open Claude and describe what you want: "Build me a simple personal webpage with my name, a short bio, and links to my email and LinkedIn."',
      },
      {
        title: 'Save the code',
        description: 'Copy the code Claude gives you into a new file called index.html',
      },
      {
        title: 'See it in your browser',
        description: 'Open the file in your browser to see it',
      },
      {
        title: 'Ask for changes',
        description: 'Tell Claude what to change: colors, fonts, layout, wording',
      },
      {
        title: 'Make it yours',
        description: 'Repeat until it feels like yours',
      },
    ],
  },
  'capture': {
    num: '02',
    title: 'Capture',
    build: 'Link Catcher',
    principle: 'Don\'t let things slip away',
    overview: 'Tabs pile up. Bookmarks become graveyards. Pocket\'s recommendations drown your actual interests. This is your own link database. No algorithm, no suggestions, just what you saved.',
    whatYoullBuild: 'A simple web app where you can paste a URL and give it a title, add notes and tags, see all your saved links in a list, filter by tag or search, and delete links you no longer need.',
    steps: [
      {
        title: 'Start with the basics',
        description: 'Ask Claude for a simple link-saving app. Don\'t ask for tags or search yet—start with the core.',
        prompt: 'Build me a single-page web app for saving links. I want to paste a URL, add a title and optional notes, then see all my saved links in a list below the form. Use HTML, CSS, and vanilla JavaScript. Store links in localStorage so they persist.',
        tip: 'Start simple. You can always add more later. The first version should do one thing well.',
      },
      {
        title: 'Test and observe',
        description: 'Add 3-4 real links you\'ve been meaning to save. Notice what\'s missing. What\'s annoying? What do you wish it did? Write these down.',
      },
      {
        title: 'Add tags',
        description: 'Tags let you categorize without folders. Ask Claude to add tagging.',
        prompt: 'Add a tags field to the link form. Let me type comma-separated tags when saving a link. Show tags as small pills under each link in the list. When I click a tag, filter the list to show only links with that tag.',
        tip: 'If the tags look ugly, tell Claude what you want them to look like. "Make the tags smaller" or "use a subtle background color" works.',
      },
      {
        title: 'Add search',
        description: 'When you have more than a dozen links, you\'ll want search.',
        prompt: 'Add a search box above the link list. As I type, filter the links to show only those where the title, notes, or tags contain my search text. Make it filter in real-time as I type.',
      },
      {
        title: 'Add timestamps and delete',
        description: 'Know when you saved something. Remove what you don\'t need.',
        prompt: 'Show the date each link was saved, formatted like "Jan 15, 2024". Add a delete button for each link. When I click delete, show a confirmation before removing it.',
        tip: 'If the date format isn\'t what you want, just tell Claude: "Format dates like \'2 days ago\' instead" or "Just show the month and day".',
      },
      {
        title: 'Make it yours',
        description: 'Change the colors. Adjust the spacing. Add your own fields. This is yours now.',
      },
    ],
    prompts: [
      {
        title: 'Export your data',
        prompt: 'Add an "Export" button that downloads all my saved links as a JSON file. Name the file "links-backup-[date].json".',
        use: 'When you want to back up your links or move them to another computer.',
      },
      {
        title: 'Keyboard shortcuts',
        prompt: 'Add keyboard shortcuts: Cmd+V (or Ctrl+V on Windows) should focus the URL field. Escape should clear any active filters and search. Cmd+K should focus the search box.',
        use: 'When you\'re a keyboard person and want faster interaction.',
      },
      {
        title: 'Sortable list',
        prompt: 'Let me sort the link list by date saved (newest or oldest first) or alphabetically by title. Add small buttons or a dropdown to switch between sort orders.',
        use: 'When you want to find your oldest saves or browse alphabetically.',
      },
      {
        title: 'Bookmarklet',
        prompt: 'Create a bookmarklet I can drag to my browser bookmarks bar. When I click it on any page, it should open my Link Catcher with the current page\'s URL and title pre-filled.',
        use: 'When you want to save links without manually copying URLs.',
      },
      {
        title: 'Import from browser',
        prompt: 'Add an "Import" button that accepts a browser bookmarks HTML file and imports all the links with their titles.',
        use: 'When you want to migrate your existing bookmarks.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Links disappear after closing the browser',
        solution: 'localStorage might not be working. Ask Claude: "Check if localStorage is being used correctly. Console.log the links array before and after saving." Some browsers in private mode disable localStorage.',
      },
      {
        problem: 'Tags don\'t filter properly',
        solution: 'Ask Claude: "Show me the filter logic for tags. I want to see what\'s being compared." The issue is usually case sensitivity or extra whitespace.',
      },
      {
        problem: 'Styling looks wrong or broken',
        solution: 'Take a screenshot and share it with Claude. Say: "This doesn\'t look right. The [specific thing] should be [what you want]." Screenshots are worth a thousand words.',
      },
      {
        problem: 'The delete button deletes the wrong link',
        solution: 'This usually means the link ID isn\'t being passed correctly. Ask Claude: "Make sure each delete button knows which specific link to delete. Use a unique ID for each link."',
      },
      {
        problem: 'Search is slow with many links',
        solution: 'You probably don\'t have enough links for this to matter. But if you do: "Debounce the search so it only filters 300ms after I stop typing."',
      },
    ],
    reflection: [
      'What did you actually end up saving? Does it match what you thought you\'d save?',
      'Did you add any fields or features Claude didn\'t suggest?',
      'How is this different from your browser bookmarks? Better? Worse? Just different?',
      'What would make you actually use this instead of leaving tabs open?',
    ],
    extensions: [
      'Sync across devices (requires a backend—this is a bigger project)',
      'Auto-fetch page titles and descriptions from URLs',
      'Generate a weekly digest email of your saved links',
      'Add "read later" status and mark links as read',
      'Group links by project or topic with drag-and-drop',
      'Add favicons for each link automatically',
    ],
  },
  'remember': {
    num: '03',
    title: 'Remember',
    build: 'Daily Log',
    principle: 'Write it down or lose it',
    overview: 'A simple journal. Text and timestamps, nothing else. A place to dump thoughts at the end of each day.',
    steps: [
      {
        title: 'Describe your journal',
        description: 'Ask Claude to build a daily log where you can write entries and see past ones.',
        prompt: 'Build me a daily log where I can write an entry for each day and see past entries. Simple text input, date-based organization, stored in localStorage.',
      },
      {
        title: 'Add date navigation',
        description: 'Ask for date-based organization so you can browse back through entries.',
      },
      {
        title: 'Add search',
        description: 'Add search if you want to find old entries by keyword.',
      },
      {
        title: 'Consider export',
        description: 'Add export functionality to back up your journal.',
      },
    ],
  },
  'move': {
    num: '04',
    title: 'Move',
    build: 'Training Log',
    principle: 'The body keeps the score',
    overview: 'Track your workouts. Not calories, not gamification—just what you did and how it felt.',
    steps: [
      {
        title: 'Describe your tracker',
        description: 'Ask Claude to build a workout tracker where you can log exercises.',
        prompt: 'Build me a workout tracker where I can log exercises, sets, reps, and notes about how it felt. Store everything in localStorage.',
      },
      {
        title: 'Add history views',
        description: 'Ask for history views to see patterns over time.',
      },
      {
        title: 'Add simple visualization',
        description: 'Add simple charts if you want to visualize progress.',
      },
    ],
  },
  'collect': {
    num: '05',
    title: 'Collect',
    build: 'Record Shelf',
    principle: 'Physical things deserve digital memory',
    overview: 'Catalog your vinyl (or books, or tools, or anything you collect). Artist, title, notes, want-list.',
    steps: [
      {
        title: 'Describe your collection',
        description: 'Tell Claude what you collect and what you want to track about each item.',
      },
      {
        title: 'Add photos',
        description: 'Add photos if you want visual browsing.',
      },
      {
        title: 'Create a want-list',
        description: 'Include a want-list for things you\'re looking for.',
      },
      {
        title: 'Add search and filter',
        description: 'Add search and filter by any field.',
      },
    ],
  },
  'see': {
    num: '06',
    title: 'See',
    build: 'Photo Log',
    principle: 'Seeing is a practice',
    overview: 'A journal for photographs. Not a gallery—a log. One image, three questions, a practice of attention.',
    steps: [
      {
        title: 'Describe the photo log',
        description: 'Ask Claude for a photo log where you upload one image and answer three questions about it.',
        prompt: 'Build me a photo log where I upload one image and answer three questions about it: What caught your eye? What were you trying to capture? What do you see now?',
      },
      {
        title: 'Add date and tags',
        description: 'Add date and optional tags to organize entries.',
      },
      {
        title: 'Browse your history',
        description: 'Browse back through your log to see patterns in what you notice.',
      },
    ],
  },
  'gather': {
    num: '07',
    title: 'Gather',
    build: 'Personal Dashboard',
    principle: 'Bring scattered things together',
    overview: 'Pull together information you care about in one place. Weather, tasks, quotes—whatever serves you.',
    steps: [
      {
        title: 'List what you want to see',
        description: 'Make a list of what you want to see at a glance each day.',
      },
      {
        title: 'Fetch external data',
        description: 'Ask Claude to fetch data from APIs (weather, etc.).',
      },
      {
        title: 'Arrange the layout',
        description: 'Arrange the layout how you want it.',
      },
      {
        title: 'Make it your homepage',
        description: 'Make it your default browser tab if it\'s useful.',
      },
    ],
  },
  'refine': {
    num: '08',
    title: 'Refine',
    build: 'Revisit + Improve',
    principle: 'First versions are just first versions',
    overview: 'Go back to something you built earlier. Make it better. Add what\'s missing. Fix what bothers you.',
    steps: [
      {
        title: 'Pick a project',
        description: 'Pick an earlier practice that you actually use.',
      },
      {
        title: 'List improvements',
        description: 'List everything you wish it did differently.',
      },
      {
        title: 'Work through the list',
        description: 'Work through the list with Claude, one improvement at a time.',
      },
      {
        title: 'Notice the difference',
        description: 'Notice how much easier this is now than it was the first time.',
      },
    ],
  },
  'make-your-own': {
    num: '09',
    title: 'Make Your Own',
    build: 'Self-directed',
    principle: 'You don\'t need permission',
    overview: 'Build something only you would build. A tool for a problem only you have. This is the point of everything.',
    steps: [
      {
        title: 'What do you wish existed?',
        description: 'Think about tools you\'ve looked for but couldn\'t find.',
      },
      {
        title: 'What manual process do you repeat?',
        description: 'What task do you do repeatedly that could be automated?',
      },
      {
        title: 'What do you constantly look up?',
        description: 'What information do you search for repeatedly that could be at your fingertips?',
      },
      {
        title: 'Build it',
        description: 'Build it. You know how now.',
      },
    ],
  },
};

export default function PracticePage() {
  const params = useParams();
  const slug = params.slug as string;
  const practice = practices[slug];

  if (!practice) {
    return (
      <div className="p-8 lg:p-12">
        <h1 className="text-2xl mb-4">Practice not found</h1>
        <Link href="/dashboard" className="underline">Back to dashboard</Link>
      </div>
    );
  }

  const slugs = Object.keys(practices);
  const currentIndex = slugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <div className="p-8 lg:p-12 max-w-2xl">
      {/* Breadcrumb */}
      <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">
        <Link href="/dashboard" className="hover:text-[var(--c-black)]">Dashboard</Link>
        <span className="mx-2">/</span>
        <span>Practice {practice.num}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="text-xs text-[var(--c-black)]/40 mb-2">
          <ScrambleText text={`Practice ${practice.num} of 09`} scrambleOnHover />
        </div>
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight mb-2">
          {practice.title}
        </h1>
        <div className="text-lg text-[var(--c-black)]/60 headline-serif">
          {practice.build}
        </div>
      </div>

      {/* Principle */}
      <div className="border-l-2 border-[var(--c-black)]/20 pl-6 mb-12">
        <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/40 mb-2">Principle</div>
        <p className="text-xl headline-serif">{practice.principle}</p>
      </div>

      {/* Overview */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">Overview</h2>
        <p className="text-[var(--c-black)]/80 leading-relaxed">{practice.overview}</p>
      </div>

      {/* What You'll Build */}
      {practice.whatYoullBuild && (
        <div className="mb-12 bg-[var(--c-black)]/5 p-6 rounded-sm">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-4">What You'll Build</h2>
          <p className="text-[var(--c-black)]/80 leading-relaxed">{practice.whatYoullBuild}</p>
        </div>
      )}

      {/* Steps */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Steps</h2>
        <div className="space-y-8">
          {practice.steps.map((step, i) => (
            <div key={i} className="border-l border-[var(--c-black)]/10 pl-6">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-xs text-[var(--c-black)]/40 w-6 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-base font-medium text-[var(--c-black)]">{step.title}</h3>
              </div>
              <div className="ml-10">
                <p className="text-[var(--c-black)]/70 leading-relaxed mb-4">{step.description}</p>
                {step.prompt && (
                  <div className="mb-4">
                    <CopyablePrompt prompt={step.prompt} />
                  </div>
                )}
                {step.tip && (
                  <div className="text-sm text-[var(--c-black)]/60 italic bg-[var(--c-black)]/5 p-3 rounded-sm">
                    <span className="font-medium not-italic">Tip:</span> {step.tip}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Prompts */}
      {practice.prompts && practice.prompts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Additional Prompts</h2>
          <p className="text-[var(--c-black)]/60 text-sm mb-6">
            Use these when you want to extend your build further.
          </p>
          <div className="space-y-6">
            {practice.prompts.map((item, i) => (
              <div key={i} className="border-l border-[var(--c-black)]/10 pl-6">
                <h3 className="text-sm font-medium text-[var(--c-black)] mb-2">{item.title}</h3>
                <p className="text-xs text-[var(--c-black)]/50 mb-3">{item.use}</p>
                <CopyablePrompt prompt={item.prompt} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Troubleshooting */}
      {practice.troubleshooting && practice.troubleshooting.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">When Things Break</h2>
          <div className="space-y-4">
            {practice.troubleshooting.map((item, i) => (
              <details key={i} className="group border border-[var(--c-black)]/10 rounded-sm">
                <summary className="p-4 cursor-pointer text-sm font-medium text-[var(--c-black)] hover:bg-[var(--c-black)]/5">
                  {item.problem}
                </summary>
                <div className="px-4 pb-4 text-sm text-[var(--c-black)]/70 leading-relaxed">
                  {item.solution}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      {/* Reflection */}
      {practice.reflection && practice.reflection.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Reflection</h2>
          <div className="bg-[var(--c-black)]/5 p-6 rounded-sm">
            <p className="text-xs text-[var(--c-black)]/50 mb-4">
              After you've used your build for a few days, consider:
            </p>
            <ul className="space-y-3">
              {practice.reflection.map((question, i) => (
                <li key={i} className="text-[var(--c-black)]/70 leading-relaxed pl-4 border-l-2 border-[var(--c-black)]/10">
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Extensions */}
      {practice.extensions && practice.extensions.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Going Further</h2>
          <p className="text-[var(--c-black)]/60 text-sm mb-4">
            Ideas if you want to keep building:
          </p>
          <ul className="space-y-2">
            {practice.extensions.map((extension, i) => (
              <li key={i} className="text-sm text-[var(--c-black)]/70 flex items-start gap-2">
                <span className="text-[var(--c-black)]/30 mt-1">-</span>
                {extension}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-16 pt-8 border-t border-[var(--c-black)]/10">
        {prevSlug ? (
          <Link
            href={`/practice/${prevSlug}`}
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            ← {practices[prevSlug].title}
          </Link>
        ) : (
          <Link
            href="/guide/shipping"
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            ← Guide 04
          </Link>
        )}
        {nextSlug ? (
          <Link
            href={`/practice/${nextSlug}`}
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            {practices[nextSlug].title} →
          </Link>
        ) : (
          <Link
            href="/prompts"
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            Prompt Library →
          </Link>
        )}
      </div>
    </div>
  );
}
