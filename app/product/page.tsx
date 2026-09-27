import Link from 'next/link';
import { PageShell } from '@/components/page-shell';

const content = [
  {
    title: 'Business Builder',
    description: 'Create a clear roadmap from rough idea to validated business model.',
  },
  {
    title: 'Business Navigator',
    description: 'Turn unknowns into next actions, requirements and milestones.',
  },
  {
    title: 'AI Agents',
    description: 'Research, marketing, sales and operations support with permissions.',
  },
  {
    title: 'Website Builder',
    description: 'Generate pages, content, structure and design direction from business context.',
  },
  {
    title: 'Finance',
    description: 'Budgeting, pricing, margin, runway and scenario planning.',
  },
  {
    title: 'Marketing',
    description: 'Campaigns, content, lead generation and conversion support.',
  },
];

export default function ProductPage() {
  return (
    <PageShell
      title="Build the business from one intelligent platform."
      subtitle="Ventura connects idea, planning, legal and operations into a single system for entrepreneurs and operators."
      cta={{ label: 'Start Building', href: '/signup' }}
      secondary={{ label: 'See How It Works', href: '/how-it-works' }}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {content.map((item) => (
          <div key={item.title} className="card-surface p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-lg font-bold text-brand-500">
              {item.title.charAt(0)}
            </div>
            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-3 text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-[32px] border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold text-slate-900">Why Ventura is different</h3>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            ['Context-first', 'Every feature uses your Business Brain so the system understands your business.'],
            ['AI with guardrails', 'Human approvals for high impact tasks and regulated decisions.'],
            ['Source-backed guidance', 'Legal and compliance recommendations are tied to official sources and jurisdiction.'],
          ].map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Link href="/pricing" className="rounded-full bg-brand-500 px-6 py-3 font-medium text-white transition hover:bg-brand-600">
          View pricing →
        </Link>
      </div>
    </PageShell>
  );
}
