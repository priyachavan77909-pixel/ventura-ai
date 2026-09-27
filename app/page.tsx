import Link from 'next/link';
import { LogoMark } from '@/components/logo-mark';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { BusinessBuilderDemo } from '@/components/ventura-demo';

const pillars = [
  {
    title: 'Discover',
    text: 'Learn the opportunity, customer problem and market conditions before spending.',
  },
  {
    title: 'Validate',
    text: 'Test pricing, demand, positioning and MVP ideas with structured experiments.',
  },
  {
    title: 'Plan',
    text: 'Turn the idea into a clear roadmap, financial assumptions and operating model.',
  },
  {
    title: 'Operate',
    text: 'Launch, manage tasks, sales, customers, marketing and compliance from one place.',
  },
];

const stages = [
  { id: 'IDEA', label: 'Idea' },
  { id: 'DISCOVER', label: 'Discover' },
  { id: 'VALIDATE', label: 'Validate' },
  { id: 'PLAN', label: 'Plan' },
  { id: 'LEGAL', label: 'Legal & Compliance' },
  { id: 'FINANCE', label: 'Finance' },
  { id: 'BUILD', label: 'Build' },
  { id: 'LAUNCH', label: 'Launch' },
  { id: 'OPERATE', label: 'Operate' },
  { id: 'GROW', label: 'Grow' },
];

const trustPoints = [
  'No coding required',
  'Learn while you build',
  'Human approval for important actions',
  'Official-source guidance for compliance',
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-20" />
          <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                  <LogoMark compact />
                  AI Business Navigator & Operating System
                </div>

                <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                  Turn an idea into a business.
                </h1>

                <p className="mt-6 max-w-xl text-lg text-slate-300">
                  Ventura helps you discover, validate, plan, build, launch and grow a business from one intelligent platform.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/signup" className="rounded-full bg-brand-500 px-6 py-3 text-base font-medium text-white shadow-glow transition hover:bg-brand-600">
                    Start Building →
                  </Link>
                  <Link href="/how-it-works" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-medium text-white transition hover:border-white/40 hover:bg-white/10">
                    See How It Works
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
                  {trustPoints.map((point) => (
                    <span key={point} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-gold" />
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <BusinessBuilderDemo />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">One platform</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-5xl">
              From idea to operating business.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {stages.map((stage, index) => (
              <div key={stage.id} className="flex flex-col items-center text-center">
                <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">{index + 1}</div>
                  <div className="mt-3 text-sm font-semibold text-slate-900">{stage.label}</div>
                </div>
                {index < stages.length - 1 && <div className="mt-3 text-xl text-slate-400">↓</div>}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Business journey</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-5xl">
                Your business mentor, researcher and operating system.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-lg font-bold text-brand-500">
                    {pillar.title.slice(0, 1)}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-3 text-slate-600">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Built for founders</p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-5xl">
                A single workspace for every stage of the business.
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Ventura brings together research, validation, business planning, finance, legal guidance, AI agents, website building and operating workflows inside one system.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Business Brain with structured context for each venture',
                  'AI agents operating under permissions and approval gates',
                  'Source-backed legal and compliance guidance with human review recommended when needed',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">✓</span>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ['Business Brain', 'Unified profile across ideas, plans, finances and legal needs.'],
                ['Discover Engine', 'Market, customer, competitor and opportunity analysis.'],
                ['Validate Before You Spend', 'Experiment, learn and reduce risk before investing.'],
                ['Finance Center', 'Budget, pricing, gross margin and runway insights.'],
                ['Legal Navigator', 'Town-by-town or state-wise requirements and source checks.'],
                ['AI Agents', 'Research, marketing, sales, content and operations support.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">Module</div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Trust & safety</p>
                <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">AI that works with you — not instead of you.</h2>
              </div>
              <Link href="/trust-security" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                Explore Trust Center
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ['Money', 'You maintain control over spending and approvals.'],
                ['Approvals', 'Critical actions require review before proceeding.'],
                ['Data', 'Business data stays segmented by business and role.'],
                ['Permissions', 'AI agents operate under least-privilege access.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 shadow-glow sm:p-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">What will you build?</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-5xl">Build with Ventura.</h2>
              </div>

              <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    aria-label="What do you want to build?"
                    defaultValue="I want to build..."
                    className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:border-brand-500"
                  />
                  <button className="rounded-full bg-brand-500 px-5 py-3 font-medium text-white transition hover:bg-brand-600">
                    Build with Ventura →
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-lg text-slate-700">Learn. Build. Launch. Operate. Grow.</div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
