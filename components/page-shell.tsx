type PageShellProps = {
  title: string;
  subtitle: string;
  cta?: { label: string; href: string } | null;
  secondary?: { label: string; href: string } | null;
  children: React.ReactNode;
};

import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function PageShell({ title, subtitle, cta, secondary, children }: PageShellProps) {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 sm:p-12">
            <div className="max-w-3xl">
              <p className="section-eyebrow">VENTURA AI</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
              <p className="mt-5 text-lg text-slate-600">{subtitle}</p>
            </div>

            {(cta || secondary) && (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {cta && (
                  <Link href={cta.href} className="rounded-full bg-brand-500 px-6 py-3 font-medium text-white transition hover:bg-brand-600">
                    {cta.label}
                  </Link>
                )}
                {secondary && (
                  <Link href={secondary.href} className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition hover:border-slate-300">
                    {secondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </section>

        <div className="page-shell pt-0">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
