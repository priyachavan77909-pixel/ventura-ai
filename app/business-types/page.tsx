import { PageShell } from '@/components/page-shell';

const types = [
  'Food & beverage',
  'Retail & e-commerce',
  'Professional services',
  'B2B & SaaS',
  'Education',
  'Healthcare',
  'Home services',
  'Manufacturing',
];

export default function BusinessTypesPage() {
  return (
    <PageShell
      title="Business types"
      subtitle="Tailor the system to the kind of business you are building and the way it operates."
      cta={{ label: 'Build My Business', href: '/signup' }}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {types.map((type) => (
          <div key={type} className="card-surface p-6 text-center">
            <div className="text-lg font-semibold text-slate-900">{type}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
