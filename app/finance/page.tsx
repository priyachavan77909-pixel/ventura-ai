import { PageShell } from '@/components/page-shell';

const metrics = [
  'Startup budget',
  'Revenue model',
  'Expense model',
  'Gross margin',
  'Break-even',
  'Cash flow',
  'Working capital',
  'Runway',
  'Scenario planning',
  'Pricing calculator',
  'Unit economics',
];

export default function FinancePage() {
  return (
    <PageShell
      title="Ventura Finance"
      subtitle="Plan the economics of the business with labeled assumptions, scenario modeling and business clarity."
      cta={{ label: 'View Pricing', href: '/pricing' }}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric} className="card-surface p-5">
            <div className="text-lg font-semibold text-slate-900">{metric}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-[32px] border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold text-slate-900">Planning assumptions</h3>
        <p className="mt-4 text-slate-600">
          All figures are assumptions unless connected to verified business data. Do not promise profits or present AI financial projections as guaranteed outcomes.
        </p>
      </div>
    </PageShell>
  );
}
