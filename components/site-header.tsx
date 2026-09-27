'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LogoMark } from '@/components/logo-mark';

const links = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/business-types', label: 'Business Types' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/legal-compliance', label: 'Legal & Compliance' },
  { href: '/finance', label: 'Finance' },
  { href: '/marketing-sales', label: 'Marketing & Sales' },
  { href: '/learning-center', label: 'Learning Center' },
  { href: '/professional-network', label: 'Professional Network' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/trust-security', label: 'Trust & Security' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/help-center', label: 'Help Center' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-slate-900">
          <div className="text-brand-500"><LogoMark /></div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300">
            Login
          </Link>
          <Link href="/signup" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-600">
            Sign Up
          </Link>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-slate-200 p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-slate-700">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl px-2 py-2 hover:bg-slate-50">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
