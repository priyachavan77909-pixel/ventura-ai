export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={compact ? 18 : 28}
        height={compact ? 18 : 28}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Ventura logo"
      >
        <path d="M12 48L26 16L32 30L38 16L52 48H42L36 34L32 42L28 34L22 48H12Z" fill="currentColor" />
      </svg>
      {!compact && <span className="text-xl font-semibold tracking-tight text-slate-900">VENTURA AI</span>}
    </div>
  );
}
