import React from 'react';

/**
 * The page container. Everything sits inside the same measure, so the sheet
 * reads as one printed specification rather than a stack of cards.
 */
export function Sheet({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-[var(--gutter)] ${className}`}>{children}</div>;
}

/**
 * A section header: title, an optional control on the right, and the heavy rule
 * that opens the section. The rule does the work an eyebrow would otherwise do.
 */
export function FieldHeading({ title, aside }: { title: string; aside?: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-b-2 border-ink pb-3">
      <h2 className="text-[clamp(1.4rem,2.8vw,2rem)] font-medium leading-none tracking-[-0.025em] text-ink">
        {title}
      </h2>
      {aside ? <div className="min-w-0">{aside}</div> : null}
    </div>
  );
}
