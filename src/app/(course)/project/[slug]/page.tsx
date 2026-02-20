'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ScrambleText } from '../../../components/ScrambleText';
import { CopyablePrompt } from '../../../components/CopyablePrompt';

interface Step {
  title: string;
  description?: string;
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

interface Project {
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

const projects: Record<string, Project> = {
  'research-synthesis': {
    num: '01',
    title: 'Research Synthesis',
    build: 'Multi-Perspective Analysis Tool',
    principle: 'Multiple perspectives surface tensions you wouldn\'t see alone',
    overview: 'Build a tool for deep research using multiple agents. When you need to understand something complex, one perspective isn\'t enough. Three analytical frameworks—technical, social, and systems—reveal tensions and insights that single-perspective analysis misses. This is when multiple agents actually serve the work.',
    whatYoullBuild: 'A research tool that takes a question, summons three agents with different analytical lenses, and displays their findings side-by-side for comparison. You synthesize the insights based on what matters for your context.',
    steps: [
      {
        title: 'Start with a real research question',
        description: 'Pick something you\'re actually researching. Not hypothetical. Something you need to decide or understand.',
        tip: 'Example: "Should I use serverless architecture for my personal tools?" or "What are the implications of remote work for urban planning?"',
      },
      {
        title: 'Define three analytical frameworks',
        description: 'Technical/Factual (what\'s objectively true), Social/Cultural (who benefits, who\'s harmed), Systems/Long-term (second-order effects, connections).',
      },
      {
        title: 'Tell Claude to build the tool',
        prompt: 'I want a research synthesis tool. I enter a question. It spawns three agents with different analytical lenses (technical, social, systems). Each agent researches independently and returns findings in structured markdown. Display all three reports side-by-side for comparison. Keep it simple. Single HTML file. Local storage for saving past research. Make the comparison view clear and scannable.',
      },
      {
        title: 'Test with your research question',
        description: 'Enter your actual question. Let the tool generate three perspectives. Read all three reports.',
      },
      {
        title: 'Write your synthesis',
        description: 'Compare the three perspectives. Notice where they agree, where they conflict, what tensions emerge. Write your own synthesis based on what matters in your context.',
        tip: 'The value is in the comparison. Technical agent might say "X is cheaper." Systems agent might say "X creates dependencies you don\'t control." Both are true. The tension is the insight.',
      },
      {
        title: 'Iterate based on use',
        description: 'Use it for a few research projects. Notice what\'s missing. Add search if you need it. Add export if you need it. Keep it focused on actual use.',
      },
    ],
    prompts: [
      {
        title: 'Add more frameworks',
        prompt: 'Add a fourth framework: Historical perspective. How did we get here? What patterns repeat?',
        use: 'When historical context matters for your research.',
      },
      {
        title: 'Export to markdown',
        prompt: 'Add an export button that generates a markdown file with all three analyses and my synthesis notes.',
        use: 'When you want to save research findings for later reference.',
      },
      {
        title: 'Search past research',
        prompt: 'Add ability to search through previously saved research questions and findings.',
        use: 'When you research similar topics regularly.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Three agents returning basically the same answer',
        solution: 'Your analytical frameworks aren\'t different enough. Make them more distinct. Technical vs. social vs. systems, not "researcher A" vs. "researcher B."',
      },
      {
        problem: 'Synthesis is just combining three reports',
        solution: 'That\'s fine. The value is comparison, not magic emergence. If seeing three perspectives helps you think, it\'s working.',
      },
      {
        problem: 'This feels like overkill for simple questions',
        solution: 'Then use one agent. Multiple agents are for complex questions with genuine competing perspectives. Most questions don\'t need this.',
      },
      {
        problem: 'One agent contradicts another',
        solution: 'Good. That\'s the point. Reality has tensions. Surfacing them is valuable. You decide which perspective matters most for your context.',
      },
    ],
    reflection: [
      'When did multiple perspectives actually help vs. feel like extra work?',
      'Which analytical framework (technical, social, systems) do you naturally lean toward?',
      'What tensions emerged from comparing perspectives?',
      'Would you have seen these insights with one perspective?',
    ],
    extensions: [
      'Connect to your link catcher to research saved sources',
      'Add ability to invite human reviewers for specific perspectives',
      'Build templates for recurring research patterns',
    ],
  },
  'multi-source-analysis': {
    num: '02',
    title: 'Multi-Source Analysis',
    build: 'Three-Source Research Tool',
    principle: 'Academic, industry, and cultural sources give you the full picture',
    overview: 'Build a tool that gathers information from three different source types: academic research (studies, data), industry analysis (company reports, market trends), and cultural commentary (essays, articles, discourse). Together they reveal what\'s actually happening vs. what any single source shows.',
    whatYoullBuild: 'A tool that takes a topic, summons three agents to research different source types in parallel, and displays findings side-by-side. Each agent returns structured findings with sources. You synthesize patterns across sources.',
    steps: [
      {
        title: 'Pick a topic you\'re researching',
        description: 'Something current where different sources might have different takes. Example: "remote work trends 2025" or "AI in creative fields".',
      },
      {
        title: 'Define three source types',
        description: 'Academic (studies/papers/data), Industry (company reports/trends), Cultural (essays/commentary/social discourse).',
      },
      {
        title: 'Tell Claude to build it',
        prompt: 'Build a multi-source analysis tool. I enter a topic. Three agents research in parallel: Academic (studies/data), Industry (company reports/trends), Cultural (essays/commentary). Each returns structured findings with sources. Display side-by-side. Single HTML file. Save past analyses locally. Make it easy to compare findings across sources.',
      },
      {
        title: 'Run your first analysis',
        description: 'Enter your topic. Let agents research their respective sources. Read all three reports side-by-side.',
      },
      {
        title: 'Look for patterns and tensions',
        description: 'Where do sources agree? Where do they conflict? Academic might show one thing, industry does another, people want something else. These tensions are insights.',
        tip: 'Example: Academic research shows "productivity unchanged by remote work." Industry invests heavily in office space. Cultural commentary shows workers demanding flexibility. All three are true—the tension reveals reality.',
      },
      {
        title: 'Synthesize based on your needs',
        description: 'Write your own take based on what matters for your context. The tool gathers information. You make sense of it.',
      },
    ],
    prompts: [
      {
        title: 'Add time filtering',
        prompt: 'Add ability to specify date range for sources (e.g., "last 6 months" or "2024 only").',
        use: 'When researching current trends where recency matters.',
      },
      {
        title: 'Geographic filtering',
        prompt: 'Add ability to specify region or country for region-specific analysis.',
        use: 'When researching topics that vary by geography.',
      },
      {
        title: 'Source quality indicators',
        prompt: 'Have agents note source type (peer-reviewed, industry report, opinion piece) so I can weight findings appropriately.',
        use: 'When you need to assess source reliability.',
      },
    ],
    troubleshooting: [
      {
        problem: 'Agents returning redundant information',
        solution: 'Your source domains aren\'t distinct enough. Make them more specific. "General research" produces overlap. "Academic research," "Industry analysis," and "Cultural commentary" produce different findings.',
      },
      {
        problem: 'Can\'t tell which agent\'s findings are most reliable',
        solution: 'That\'s your job to assess. Look at sources cited. Consider methodology. Apply judgment. Agents gather, you evaluate.',
      },
      {
        problem: 'One agent returned way more information than others',
        solution: 'Specify output length in your prompt: "Return 5 key findings, no more." Consistency helps comparison.',
      },
      {
        problem: 'Synthesis taking too long',
        solution: 'Agents should return structured, scannable outputs. If you\'re drowning in text, tighten the output format. Bullet points, not paragraphs.',
      },
    ],
    reflection: [
      'Which source type (academic, industry, cultural) proved most valuable for your topic?',
      'Where did sources conflict? What did that reveal?',
      'Did one source alone give you the full picture?',
      'When would you use this tool vs. simpler research?',
    ],
    extensions: [
      'Integrate with your link catcher to save sources for deeper reading',
      'Add visualization showing where sources agree vs. conflict',
      'Build topic templates for recurring research patterns',
    ],
  },
  'summoning-circle': {
    num: '03',
    title: 'Summoning Circle',
    build: 'Ephemeral Agent System',
    principle: 'Agents are daemons—temporary forces summoned for specific work, then banished',
    overview: 'Build a tool that makes the daemon pattern explicit. Not chat. Not conversation. Summoning and banishing. You write an invocation (clear task), the tool summons an agent, displays output, then banishes it completely. Each summoning is fresh. No persistence. No memory. This reinforces what agents actually are: ephemeral computational forces, not persistent beings.',
    whatYoullBuild: 'A summoning interface where you write invocations (prompts) to summon agents for specific work. After viewing output, you explicitly banish before next summoning. No conversation history. No session persistence. Pure ephemeral daemon work.',
    steps: [
      {
        title: 'Understand the daemon concept',
        description: 'Unix daemons: background processes that run when needed, then stop. Occult daemons: spirits summoned for specific work, then released. Both apply to agents—temporary forces, not persistent beings.',
      },
      {
        title: 'Design the summoning interface',
        description: 'Make it feel like ritual, not chat. Invocation field (not message), Summon button (not send), Response display, Banish button to clear everything.',
      },
      {
        title: 'Tell Claude to build it',
        prompt: 'Build a summoning circle tool. Large text area labeled "Invocation" (not "Message"). "Summon" button (not "Send"). Display response clearly in section labeled "Response." "Banish" button clears everything before next summoning. No conversation history. Each summoning is completely fresh. Make it feel like ritual, not chat. Single HTML file. No storage of past summonings—completely ephemeral.',
      },
      {
        title: 'Practice writing invocations',
        description: 'Write clear, purposeful invocations. Not "help me with this" but "Summon a technical analyst to evaluate database options for personal tools. Compare SQLite, PostgreSQL, and Firebase. Return trade-offs in structured table."',
        tip: 'Strong invocations are precise. Weak invocations are vague. The clearer your invocation, the more useful the work.',
      },
      {
        title: 'Summon, read, banish',
        description: 'Write invocation. Click Summon. Read response. Use what\'s useful. Click Banish. Everything clears. Next invocation is fresh.',
      },
      {
        title: 'Notice the difference',
        description: 'How does this feel different from chat? More intentional? More focused? Less attached to responses? That\'s the daemon pattern working.',
        tip: 'The interface shapes behavior. "Invocations" make you more precise than "messages." Banishing prevents false continuity.',
      },
    ],
    prompts: [
      {
        title: 'Add invocation templates',
        prompt: 'Add common invocation templates as quick-start buttons: "Summon analyst to...", "Summon fact-checker to...", "Summon three perspectives on..."',
        use: 'When you have recurring summoning patterns.',
      },
      {
        title: 'Visual ritual elements',
        prompt: 'Add subtle animation when summoning (fade in) and banishing (fade out) to reinforce the ephemeral nature.',
        use: 'When you want stronger ritual feeling.',
      },
    ],
    troubleshooting: [
      {
        problem: 'This feels too mystical/magical for a tech tool',
        solution: 'The language is evocative, but the principle is accurate. Agents ARE ephemeral. They DON\'T persist. Understanding this prevents attachment and false assumptions. Call it what you want—daemons, functions, processes—the practice is the same.',
      },
      {
        problem: 'But I do have continuous conversations with Claude',
        solution: 'The conversation interface persists. The agent doesn\'t. Each response is a new instance with context from the conversation. It\'s not the same agent "remembering." It\'s context being passed to fresh instances.',
      },
      {
        problem: 'Seems like Claude has personality though',
        solution: 'Pattern-matching creates appearance of personality. Consistency in responses creates illusion of identity. But there\'s no persistent self between API calls. Understanding this keeps you clear.',
      },
    ],
    reflection: [
      'How does summoning/banishing feel different from chat?',
      'Where were you treating agents like persistent beings before?',
      'What changes when you think of agents as temporary forces?',
      'Does the daemon metaphor help or hinder your practice?',
    ],
    extensions: [
      'Log invocations and results for later review (but don\'t make it feel like persistence)',
      'Add invocation library for patterns you use repeatedly',
      'Create bindings (constraints) you can apply to specific summonings',
    ],
  },
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug];
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('fieldguide-progress');
    if (saved) {
      const completed = JSON.parse(saved);
      setIsCompleted(completed.includes(`project-${slug}`));
    }
  }, [slug]);

  const toggleComplete = () => {
    const saved = localStorage.getItem('fieldguide-progress');
    const completed = saved ? JSON.parse(saved) : [];
    const itemId = `project-${slug}`;

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

  if (!project) {
    return (
      <div className="p-8 lg:p-12">
        <h1 className="text-2xl mb-4">Project not found</h1>
        <Link href="/dashboard" className="underline">Back to dashboard</Link>
      </div>
    );
  }

  const slugs = Object.keys(projects);
  const currentIndex = slugs.indexOf(slug);
  const prevSlug = currentIndex > 0 ? slugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < slugs.length - 1 ? slugs[currentIndex + 1] : null;

  return (
    <div className="p-12 lg:pl-48 lg:pr-20 lg:py-20 max-w-2xl">
      {/* Breadcrumb */}
      <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-16">
        <Link href="/dashboard" className="hover:text-[var(--c-black)]">Dashboard</Link>
        <span className="mx-2">/</span>
        <span>Project {project.num}</span>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="text-xs text-[var(--c-black)]/40 mb-3">
          <ScrambleText text={`Project ${project.num} of 03`} scrambleOnHover />
        </div>
        <h1 className="text-3xl lg:text-4xl font-normal tracking-tight mb-3">
          {project.title}
        </h1>
        <div className="text-lg text-[var(--c-black)]/60 headline-serif">
          {project.build}
        </div>
      </div>

      {/* Principle */}
      <div className="border-l-2 border-[var(--c-black)]/20 pl-8 mb-16">
        <div className="text-xs uppercase tracking-widest text-[var(--c-black)]/40 mb-3">Principle</div>
        <p className="text-xl headline-serif leading-relaxed">{project.principle}</p>
      </div>

      {/* Overview */}
      <div className="mb-16">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">Overview</h2>
        <p className="text-[var(--c-black)]/80 leading-loose text-lg">{project.overview}</p>
      </div>

      {/* What You'll Build */}
      {project.whatYoullBuild && (
        <div className="mb-16 bg-[var(--c-black)]/5 p-8 rounded-sm">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-6">What You\'ll Build</h2>
          <p className="text-[var(--c-black)]/80 leading-loose">{project.whatYoullBuild}</p>
        </div>
      )}

      {/* Steps */}
      <div className="mb-16">
        <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">Steps</h2>
        <div className="space-y-12">
          {project.steps.map((step, i) => (
            <div key={i} className="border-l border-[var(--c-black)]/10 pl-8">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-xs text-[var(--c-black)]/40 w-6 shrink-0 pt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-medium text-[var(--c-black)]">{step.title}</h3>
              </div>
              <div className="ml-10">
                {step.description && (
                  <p className="text-[var(--c-black)]/70 leading-loose mb-6">{step.description}</p>
                )}
                {step.prompt && (
                  <div className="mb-6">
                    <CopyablePrompt prompt={step.prompt} />
                  </div>
                )}
                {step.tip && (
                  <div className="text-sm text-[var(--c-black)]/60 italic bg-[var(--c-black)]/5 p-4 rounded-sm leading-relaxed">
                    <span className="font-medium not-italic">Tip:</span> {step.tip}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Prompts */}
      {project.prompts && project.prompts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">Additional Prompts</h2>
          <div className="space-y-8">
            {project.prompts.map((promptItem, i) => (
              <div key={i} className="border-l-2 border-[var(--c-moss)]/30 pl-6">
                <h3 className="text-base font-medium text-[var(--c-black)] mb-3">{promptItem.title}</h3>
                <p className="text-sm text-[var(--c-black)]/60 mb-4 italic">{promptItem.use}</p>
                <CopyablePrompt prompt={promptItem.prompt} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Troubleshooting */}
      {project.troubleshooting && project.troubleshooting.length > 0 && (
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">Troubleshooting</h2>
          <div className="space-y-6">
            {project.troubleshooting.map((item, i) => (
              <div key={i} className="bg-[var(--c-black)]/5 p-6 rounded-sm">
                <h3 className="text-sm font-medium text-[var(--c-black)] mb-2">{item.problem}</h3>
                <p className="text-sm text-[var(--c-black)]/70 leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reflection */}
      {project.reflection && project.reflection.length > 0 && (
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">Reflection</h2>
          <ul className="space-y-4">
            {project.reflection.map((question, i) => (
              <li key={i} className="text-[var(--c-black)]/70 leading-loose pl-6 relative before:content-['—'] before:absolute before:left-0">
                {question}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Extensions */}
      {project.extensions && project.extensions.length > 0 && (
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-widest text-[var(--c-black)]/50 mb-8">Extensions</h2>
          <ul className="space-y-3">
            {project.extensions.map((extension, i) => (
              <li key={i} className="text-sm text-[var(--c-black)]/70 leading-relaxed pl-6 relative before:content-['•'] before:absolute before:left-0">
                {extension}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mark as Complete */}
      <div className="mb-16">
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
      <div className="flex justify-between pt-8 border-t border-[var(--c-black)]/10">
        {prevSlug ? (
          <Link
            href={`/project/${prevSlug}`}
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            ← {projects[prevSlug].title}
          </Link>
        ) : (
          <div />
        )}
        {nextSlug ? (
          <Link
            href={`/project/${nextSlug}`}
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            {projects[nextSlug].title} →
          </Link>
        ) : (
          <Link
            href="/dashboard"
            className="text-sm text-[var(--c-black)]/60 hover:text-[var(--c-black)]"
          >
            Back to Dashboard →
          </Link>
        )}
      </div>
    </div>
  );
}
