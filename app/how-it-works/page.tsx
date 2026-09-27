import { PageShell } from '@/components/page-shell';

const steps = [
  {
    title: '1. Define the idea',
    copy: 'Tell Ventura what you want to build, where you are and the resources you have.',
  },
  {
    title: '2. Discover the opportunity',
    copy: 'Research customer pain points, competitors, trends and operational realities.',
  },
  {
    title: '3. Validate before spending',
    copy: 'Test pricing, offer, positioning, messaging and product assumptions.',
  },
  {
    title: '4. Build the plan',
    copy: 'Convert learning into a roadmap, financial plan, legal checklist and launch plan.',
  },
  {
    title: '5. Launch and operate',
    copy: 'Build the digital foundation, automate tasks and run the business with clarity.',
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell
      title="How Ventura works"
      subtitle="A simple path from rough idea to a business that can operate with confidence."
      cta={{ label: 'Start Building', href: '/signup' }}
      secondary={{ label: 'Explore Product', href: '/product' }}
    >
      <div className="space-y-6">
        {steps.map((step) => (
          <div key={step.title} className="card-surface p-6">
            <h3 className="text-2xl font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-3 text-slate-600">{step.copy}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
