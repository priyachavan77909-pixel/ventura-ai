import Link from 'next/link';
import { PageShell } from '@/components/page-shell';

export default function SignUpPage() {
  return (
    <PageShell title="Sign up" subtitle="Start building your first business with Ventura." cta={null}>
      <div className="mx-auto max-w-xl rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <form className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" defaultValue="Priyanka" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" defaultValue="Chavan" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" type="email" defaultValue="founder@ventura.ai" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" type="password" defaultValue="securepass" />
          </div>
          <button type="submit" className="md:col-span-2 rounded-full bg-brand-500 px-5 py-3 font-medium text-white hover:bg-brand-600">
            Create account
          </button>
        </form>
        <div className="mt-5 text-center text-sm text-slate-600">
          Already have an account? <Link href="/login" className="font-semibold text-brand-500">Login</Link>
        </div>
      </div>
    </PageShell>
  );
}
