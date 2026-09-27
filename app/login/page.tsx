import Link from 'next/link';
import { PageShell } from '@/components/page-shell';

export default function LoginPage() {
  return (
    <PageShell title="Login" subtitle="Welcome back to Ventura." cta={null}>
      <div className="mx-auto max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" type="email" defaultValue="founder@ventura.ai" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" type="password" defaultValue="password" />
          </div>
          <button type="submit" className="w-full rounded-full bg-brand-500 px-5 py-3 font-medium text-white hover:bg-brand-600">
            Login to Ventura
          </button>
        </form>
        <div className="mt-5 text-center text-sm text-slate-600">
          Need an account? <Link href="/signup" className="font-semibold text-brand-500">Sign up</Link>
        </div>
      </div>
    </PageShell>
  );
}
