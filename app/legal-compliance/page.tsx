import { PageShell } from '@/components/page-shell';

const items = [
  'Country, state, city and business activity',
  'Business structure and product type',
  'Employees, turnover and premises',
  'Imports, exports and online/offline activity',
  'Official sources and verification dates',
];

export default function LegalCompliancePage() {
  return (
    <PageShell
      title="Legal & compliance navigator"
      subtitle="Understand what you need to legally start, where the requirements apply and which steps to take next."
      cta={{ label: 'Check Requirements', href: '/signup' }}
    >
      <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
        <h3 className="text-2xl font-semibold text-slate-900">What do I need to legally start?</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-[32px] border border-amber-200 bg-amber-50 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Safety notice</p>
        <p className="mt-4 text-slate-700">
          Ventura provides general informational and workflow guidance. It is not a substitute for legal, tax, accounting, investment or other regulated professional advice.
        </p>
      </div>
    </PageShell>
  );
}
