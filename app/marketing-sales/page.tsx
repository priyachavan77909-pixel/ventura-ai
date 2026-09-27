import { PageShell } from '@/components/page-shell';

const modules = [
  'Marketing strategy',
  'Content calendar',
  'Social posts',
  'Blog generation',
  'Email campaigns',
  'SEO planning',
  'Ad copy',
  'Campaign planning',
  'Referral campaigns',
  'Lead generation',
];

export default function MarketingSalesPage() {
  return (
    <PageShell
      title="Grow your business"
      subtitle="Prepare campaigns, content and lead generation flows with human approval before publication or spend."
      cta={{ label: 'Launch Campaign', href: '/signup' }}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {modules.map((module) => (
          <div key={module} className="card-surface p-5">
            <div className="text-lg font-semibold text-slate-900">{module}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
