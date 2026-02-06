'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ScrambleText } from '../components/ScrambleText';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/verify-license', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('fieldguide_email', email);
        router.push('/dashboard');
      } else {
        setError(data.message || 'No purchase found for this email');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--c-cream)] flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-12 text-center">
          <Link href="/" className="inline-block">
            <div className="text-sm font-bold tracking-wide">
              <ScrambleText text="FIELDGUIDE" scrambleOnHover />
            </div>
          </Link>
        </div>

        {/* Login Form */}
        <div className="border border-[var(--c-black)]/10 p-8">
          <h1 className="text-2xl font-normal mb-2">Access Course</h1>
          <p className="text-sm text-[var(--c-black)]/60 mb-8">
            Enter the email you used for your Gumroad purchase.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-[var(--c-black)]/20 bg-transparent focus:outline-none focus:border-[var(--c-black)] text-sm"
              />
            </div>

            {error && (
              <div className="mb-6 text-sm text-red-600">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !email}
              className="w-full py-3 bg-[var(--c-black)] text-[var(--c-cream)] font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Access Course'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[var(--c-black)]/10 text-center">
            <p className="text-sm text-[var(--c-black)]/60 mb-2">
              Don&apos;t have access?
            </p>
            <a
              href="https://wholeearthdesign.gumroad.com/l/fieldguide01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              Get the Field Guide — $29
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-[var(--c-black)]/50 hover:text-[var(--c-black)]">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
