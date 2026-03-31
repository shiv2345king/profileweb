'use client';

export default function ScrollIndicator() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2">
      <div className="flex flex-col items-center gap-2 animate-scroll-indicator">
        <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest">Scroll</span>
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
