'use client';

import { useState } from 'react';

const demoSteps = [
  'Business idea identified',
  'Customer profile created',
  'Market research started',
  'Competitor analysis started',
  'Business model prepared',
  'Initial financial model created',
  'Legal/compliance checklist generated',
  'Brand direction created',
  'Website structure prepared',
  'Marketing roadmap created',
];

export function BusinessBuilderDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);

  const handleBuild = () => {
    setIsRunning(true);
    setCompleted([]);

    let index = 0;
    const timer = setInterval(() => {
      setCompleted((prev) => [...prev, demoSteps[index]]);
      index += 1;
      if (index === demoSteps.length) {
        clearInterval(timer);
        setIsRunning(false);
      }
    }, 300);
  };

  return (
    <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 text-sm">
        <div className="text-slate-200">What do you want to build?</div>
        <div className="rounded-full border border-gold/30 bg-gold/10 px-2 py-1 text-xs text-gold">Example / Demonstration</div>
      </div>

      <textarea
        aria-label="Business idea"
        defaultValue="I want to start a healthy food business in Mumbai with ₹3 lakh."
        className="mt-4 min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-base text-white outline-none placeholder:text-slate-400 focus:border-brand-500"
      />

      <button
        onClick={handleBuild}
        className="mt-5 w-full rounded-full bg-brand-500 px-5 py-3 font-medium text-white transition hover:bg-brand-600"
      >
        {isRunning ? 'Building...' : 'Build My Business →'}
      </button>

      <div className="mt-6 space-y-3">
        <div className="text-sm uppercase tracking-[0.2em] text-slate-300">YOUR BUSINESS IS BEING UNDERSTOOD</div>
        <div className="space-y-2">
          {demoSteps.map((step, index) => {
            const active = completed.includes(step);
            return (
              <div key={step} className={`flex items-center gap-3 rounded-xl px-2 py-2 text-sm ${active ? 'bg-white/5 text-white' : 'text-slate-400'}`}>
                <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-xs ${active ? 'bg-brand-500 text-white' : 'bg-white/10 text-slate-500'}`}>
                  {active ? '✓' : index + 1}
                </span>
                {step}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
