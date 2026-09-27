import { PageShell } from '@/components/page-shell';

const plans = [
  { name: 'Free', features: ['Starter setup', 'Basic planning tools', 'Community access'] },
  { name: 'Builder', features: ['AI business guidance', 'Business Brain', 'Limited agents'] },
  { name: 'Growth', features: ['Advanced research', 'Finance planning', 'Marketing workflows'] },
  { name: 'Business', features: ['Multi-business management', 'Priority support', 'Expanded usage'] },
  { name: 'Enterprise', features: ['Custom controls', 'Security review', 'Dedicated onboarding'] },
];

export default function PricingPage() {
  return (
    <PageShell
      title="Pricing"
      subtitle="Configurable plans for starting, building, growing and operating a business with AI support."
      cta={{ label: 'Choose a Plan', href: '/signup' }}
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {plans.map((plan) => (
          <div key={plan.name} className="card-surface p-5">
            <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
