import { PageShell } from '@/components/page-shell';

const helpItems = [
  'AI Help',
  'Help Center',
  'Contact Support',
  'Ticket system',
  'Billing support',
  'Technical support',
  'Account recovery',
  'Security reporting',
];

export default function HelpCenterPage() {
  return (
    <PageShell
      title="Help center"
      subtitle="Guidance for customers, founders and teams building businesses with Ventura."
      cta={{ label: 'Contact Support', href: '/contact' }}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {helpItems.map((item) => (
          <div key={item} className="card-surface p-5">
            <div className="text-lg font-semibold text-slate-900">{item}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
