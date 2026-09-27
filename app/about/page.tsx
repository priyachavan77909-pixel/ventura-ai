import { PageShell } from '@/components/page-shell';

export default function AboutPage() {
  return (
    <PageShell
      title="About Ventura"
      subtitle="Built to guide founders from a rough idea toward a clear plan, working business and ongoing operations."
      cta={{ label: 'Start Building', href: '/signup' }}
      secondary={{ label: 'Contact', href: '/contact' }}
    >
      <div className="rounded-[32px] border border-slate-200 bg-white p-8">
        <p className="text-slate-700">
          Ventura is an AI-powered business navigator and business operating system designed to help entrepreneurs discover opportunity, validate demand, plan the business, navigate legal and compliance requirements, structure finances, build the digital foundation, launch and operate the business with confidence.
        </p>
      </div>
    </PageShell>
  );
}
