import { PageShell } from '@/components/page-shell';

const items = [
  'Security practices',
  'Privacy',
  'Data controls',
  'AI safety',
  'Permission model',
  'Audit logs',
  'Human approval',
  'Data retention',
  'Incident response',
  'Third-party providers',
  'Compliance roadmap',
];

export default function TrustSecurityPage() {
  return (
    <PageShell
      title="Ventura Trust Center"
      subtitle="Security, privacy and responsible AI design for the business operating system."
      cta={{ label: 'Learn More', href: '/about' }}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div key={item} className="card-surface p-5">
            <div className="text-lg font-semibold text-slate-900">{item}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
