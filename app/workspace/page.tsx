import { PageShell } from '@/components/page-shell';

const sidebarItems = [
  'Overview',
  'My Business',
  'Idea',
  'Research',
  'Validation',
  'Business Plan',
  'Legal & Compliance',
  'Finance',
  'Brand',
  'Website',
  'Marketing',
  'Sales',
  'Customers',
  'Operations',
  'AI Agents',
  'Learning',
  'Documents',
  'Analytics',
  'Billing',
  'Settings',
  'Help',
];

const cards = [
  ['Startup Overview', '3 next actions', '1 legal review due'],
  ['Business Brain', '42 data points tracked', 'Updated today'],
  ['Launch plan', '11 milestones', '4 pending approvals'],
  ['Cash flow', 'Projected runway', '18 months'],
];

export default function WorkspacePage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-slate-200 bg-slate-950 p-5 text-white lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 font-bold">V</div>
            <div className="text-lg font-semibold">Ventura</div>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <div key={item} className="rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white">
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <main className="flex-1">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="text-lg font-semibold">Ventura Demo Company</div>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span>Search</span>
              <span>Notifications</span>
              <span>AI Assistant</span>
              <span className="rounded-full bg-brand-50 px-3 py-1 font-medium text-brand-500">Founder</span>
            </div>
          </header>

          <div className="p-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {cards.map(([title, value, meta]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-sm uppercase tracking-[0.2em] text-brand-500">{title}</div>
                  <div className="mt-4 text-2xl font-semibold text-slate-900">{value}</div>
                  <div className="mt-2 text-sm text-slate-500">{meta}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">Next actions</h2>
                <div className="mt-6 space-y-4">
                  {[
                    'Complete customer interviews for your first offer',
                    'Review legal requirements for your chosen structure',
                    'Finalize startup budget assumptions',
                    'Approve marketing campaign draft',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-xs font-semibold text-white">✓</span>
                      <span className="text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold text-slate-900">AI Assistant</h2>
                <div className="mt-6 rounded-2xl bg-brand-50 p-4 text-slate-700">
                  “Here is what you need to do next: validate pricing, confirm the legal structure, and prepare a landing page test this week.”
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
