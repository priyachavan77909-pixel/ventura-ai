import { PageShell } from '@/components/page-shell';

const agents = [
  ['Research Agent', 'Market, competitor and customer research'],
  ['Marketing Agent', 'Campaign planning, content and lead gen'],
  ['Sales Agent', 'Deals, pipeline and follow-ups'],
  ['Content Agent', 'Brand storytelling and content production'],
  ['Operations Agent', 'Tasks, workflows and execution'],
  ['Analytics Agent', 'Recommendations and reporting'],
  ['Customer Support Agent', 'Tickets, service flows and customer communication'],
];

export default function AIAgentsPage() {
  return (
    <PageShell
      title="AI agents"
      subtitle="Purpose-built assistants with permissions, access, activity history and approval gates."
      cta={{ label: 'Explore Workspace', href: '/workspace' }}
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {agents.map(([name, description]) => (
          <div key={name} className="card-surface p-6">
            <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
            <p className="mt-3 text-slate-600">{description}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
