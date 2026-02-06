import { Navigation } from '../components/Navigation';

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_2fr]">
      {/* Left Column - Globe + Navigation */}
      <div className="relative bg-[var(--c-taupe)] min-h-screen hidden lg:block">
        {/* Globe Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/earth.png"
            alt="Whole Earth"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        {/* Navigation Overlay */}
        <Navigation />
      </div>

      {/* Right Column - Content */}
      <main className="min-h-screen bg-[var(--c-cream)] overflow-y-auto">
        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Navigation mobile />
        </div>
        {children}
      </main>
    </div>
  );
}
