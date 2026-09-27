import Link from 'next/link';

const productLinks = [
  'Business Builder',
  'Business Navigator',
  'AI Agents',
  'Website Builder',
  'Finance',
  'Marketing',
  'Analytics',
  'Marketplace',
];

const resourcesLinks = ['Business Guides', 'Learning Center', 'Business Templates', 'Help Center'];
const companyLinks = ['About', 'Careers', 'Contact', 'Partners'];
const trustLinks = ['Security', 'Privacy', 'Data Controls', 'AI Safety', 'Compliance'];
const legalLinks = ['Terms', 'Privacy Policy', 'Cookie Policy', 'Refund Policy', 'AI Disclaimer'];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-6 lg:px-8">
        <div className="lg:col-span-2">
          <div className="text-brand-500">
            <div className="flex items-center gap-3 text-white">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 font-bold">V</div>
              <div className="text-lg font-semibold">VENTURA AI</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-slate-300">
            Turn an idea into a business with one intelligent operating system for discovery, planning, legal, finance, build and growth.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Product</div>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {productLinks.map((link) => (
              <li key={link}><Link href="/product">{link}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Resources</div>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {resourcesLinks.map((link) => (
              <li key={link}><Link href="/learning-center">{link}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Company</div>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {companyLinks.map((link) => (
              <li key={link}><Link href="/about">{link}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Trust</div>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {trustLinks.map((link) => (
              <li key={link}><Link href="/trust-security">{link}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Legal</div>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {legalLinks.map((link) => (
              <li key={link}><Link href="/help-center">{link}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
