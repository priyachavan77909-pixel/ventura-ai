import { PageShell } from '@/components/page-shell';

const learning = [
  'GST basics',
  'Trademark fundamentals',
  'Cash flow',
  'CAC and gross margin',
  'Hiring and people operations',
  'Pricing strategy',
  'Negotiation',
  'Growth planning',
];

export default function LearningCenterPage() {
  return (
    <PageShell
      title="Learning center"
      subtitle="Learn in the context of your actual business and move from beginner to advanced with guided study."
      cta={{ label: 'Start Learning', href: '/signup' }}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {learning.map((topic) => (
          <div key={topic} className="card-surface p-5">
            <div className="text-lg font-semibold text-slate-900">{topic}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
