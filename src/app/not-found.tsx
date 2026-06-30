import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 selection:bg-yellow-500 selection:text-black">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-display font-bold uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-500 mb-6">
          404
        </h1>
        <h2 className="text-2xl font-display uppercase tracking-tight text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <button className="bg-yellow-500 text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
