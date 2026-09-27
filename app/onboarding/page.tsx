import { PageShell } from '@/components/page-shell';

const steps = [
  'What do you want to build?',
  'Which country?',
  'State or region?',
  'City or location?',
  'Industry?',
  'Product or service?',
  'Target customer?',
  'Estimated starting budget?',
];

export default function OnboardingPage() {
  return (
    <PageShell title="Welcome to Ventura" subtitle="Set up your business foundation in a few guided steps." cta={null}>
      <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center justify-between text-sm text-slate-500">
          <span>Step 1 of 8</span>
          <span>Save and continue later</span>
        </div>

        <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/8 rounded-full bg-brand-500" />
        </div>

        <div className="space-y-5">
          {steps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Question {index + 1}</div>
              <div className="mt-2 text-lg font-medium text-slate-900">{step}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button className="rounded-full bg-brand-500 px-6 py-3 font-medium text-white hover:bg-brand-600">Continue</button>
        </div>
      </div>
    </PageShell>
  );
}
