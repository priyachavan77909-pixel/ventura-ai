import { PageShell } from '@/components/page-shell';

const categories = [
  'Lawyer',
  'Chartered Accountant',
  'Company Secretary',
  'Tax professional',
  'Trademark / IP professional',
  'Business consultant',
  'HR professional',
  'Compliance specialist',
  'Technology professional',
];

export default function ProfessionalNetworkPage() {
  return (
    <PageShell
      title="Get expert help"
      subtitle="Connect with vetted professionals while keeping Ventura AI guidance separate from independent advice."
      cta={{ label: 'View Network', href: '/signup' }}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((item) => (
          <div key={item} className="card-surface p-5">
            <div className="text-lg font-semibold text-slate-900">{item}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
