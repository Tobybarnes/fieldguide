'use client';

import { useScramble } from 'use-scramble';

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
}

export function ScrambleText({ text, className = '', scrambleOnHover = false }: ScrambleTextProps) {
  const { ref, replay } = useScramble({
    text,
    speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 4,
    seed: 2,
  });

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={scrambleOnHover ? () => replay() : undefined}
    />
  );
}

export function ScrambleHeadline({ text, className = '' }: { text: string; className?: string }) {
  const { ref, replay } = useScramble({
    text,
    speed: 0.8,
    tick: 1,
    step: 2,
    scramble: 6,
    seed: 3,
    overdrive: false,
  });

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={() => replay()}
    />
  );
}
