import { PageShell } from '@/components/page-shell';

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      subtitle="We can help with product questions, onboarding, partnerships or support."
      cta={{ label: 'Email Support', href: 'mailto:support@ventura-ai.example' }}
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="card-surface p-6">
          <h3 className="text-xl font-semibold text-slate-900">General inquiries</h3>
          <p className="mt-3 text-slate-600">hello@ventura-ai.example</p>
        </div>
        <div className="card-surface p-6">
          <h3 className="text-xl font-semibold text-slate-900">Support</h3>
          <p className="mt-3 text-slate-600">support@ventura-ai.example</p>
        </div>
      </div>
    </PageShell>
  );
}
