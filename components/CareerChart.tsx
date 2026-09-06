import React, { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { domains, experiences, ui } from '@/content/site';

/*
 * A Gantt of six roles across four years. The bar length is the measure
 * (magnitude over time), colour is identity (which domain the role sat in), and
 * the palette is the validated five-hue categorical set from content/site.ts.
 * One axis, no dual scales, legend always present, table view underneath.
 */

const START_YEAR = 2023;
const AXIS_START = 0; // 2023-01
const AXIS_END = 45; // 2026-10
const TODAY = 44; // 2026-09

const PLOT_X = 196;
const PLOT_W = 720;
const ROW_TOP = 62;
const ROW_H = 34;
const BAR_H = 20;

const monthIndex = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return (y - START_YEAR) * 12 + (m - 1);
};

const scale = (i: number) => PLOT_X + ((i - AXIS_START) / (AXIS_END - AXIS_START)) * PLOT_W;

const colorOf = (id: string) => domains.find((d) => d.id === id)?.color ?? '#808187';

export default function CareerChart() {
  const { t } = useI18n();
  const [hot, setHot] = useState(0);

  const rows = experiences.map((job) => {
    const from = monthIndex(job.start);
    const to = job.end ? monthIndex(job.end) : TODAY;
    return { job, from, to };
  });

  const height = ROW_TOP + rows.length * ROW_H + 26;
  const active = rows[hot];
  const years = [2023, 2024, 2025, 2026];

  return (
    <figure className="m-0">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule pb-4">
        <h3 className="text-[17px] font-medium tracking-[-0.01em] text-ink">{t(ui.careerTitle)}</h3>
        <p className="u-key">{t(ui.careerNote)}</p>
      </figcaption>

      {/* Readout: the hover layer for this chart, in place of a floating tooltip. */}
      <p aria-live="polite" className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-4 text-[14px]">
        <span
          aria-hidden="true"
          className="mt-[3px] inline-block h-2.5 w-2.5 shrink-0 rounded-none"
          style={{ backgroundColor: colorOf(active.job.domain) }}
        />
        <span className="font-medium text-ink">{t(active.job.position)}</span>
        <span className="text-mute" translate="no">
          {active.job.company}
        </span>
        <span className="u-tabular font-mono text-[12px] text-faint">
          {active.job.current ? `${t(active.job.period)} - ${t(ui.presentLabel)}` : t(active.job.period)} ·{' '}
          {t(active.job.duration)}
        </span>
      </p>

      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <svg
          viewBox={`0 0 940 ${height}`}
          role="img"
          aria-label={`${t(ui.careerTitle)}. ${t(ui.careerTable)}.`}
          className="h-auto w-full min-w-[680px]"
          onMouseLeave={() => setHot(0)}
        >
          {/* Year grid, recessive */}
          {years.map((y) => {
            const x = scale((y - START_YEAR) * 12);
            return (
              <g key={y}>
                <line x1={x} y1={ROW_TOP - 22} x2={x} y2={height - 26} stroke="#dcdcd8" strokeWidth="1" />
                <text x={x} y={ROW_TOP - 30} className="u-tabular fill-[#94948f] font-mono text-[11px]">
                  {y}
                </text>
              </g>
            );
          })}

          {/* Now marker */}
          <line
            x1={scale(TODAY)}
            y1={ROW_TOP - 22}
            x2={scale(TODAY)}
            y2={height - 26}
            stroke="#1a47c8"
            strokeWidth="1"
            strokeDasharray="3 4"
          />

          {rows.map(({ job, from, to }, i) => {
            const y = ROW_TOP + i * ROW_H;
            const x = scale(from);
            const w = Math.max(scale(to) - x, 6);
            const isHot = hot === i;

            return (
              <g key={job.company + job.start} onMouseEnter={() => setHot(i)}>
                <text
                  x={PLOT_X - 16}
                  y={y + BAR_H / 2 + 4}
                  textAnchor="end"
                  className={`text-[12.5px] transition-[fill] duration-200 ${isHot ? 'fill-[#101010]' : 'fill-[#6b6b68]'}`}
                >
                  {job.company}
                </text>

                {/* Full-width hit target: bigger than the mark */}
                <rect x={PLOT_X} y={y - 6} width={PLOT_W} height={ROW_H} fill="transparent" />

                <rect
                  x={x}
                  y={y}
                  width={w}
                  height={BAR_H}
                  rx="4"
                  fill={colorOf(job.domain)}
                  opacity={isHot ? 1 : 0.78}
                  className="transition-opacity duration-200"
                >
                  <title>
                    {`${t(job.position)}, ${job.company}, ${t(job.period)}, ${t(job.duration)}`}
                  </title>
                </rect>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend: identity is never colour alone */}
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t border-rule pt-4">
        {domains.map((d) => (
          <li key={d.id} className="flex items-center gap-2 text-[12.5px] text-mute">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-none" style={{ backgroundColor: d.color }} />
            {t(d.label)}
          </li>
        ))}
      </ul>

      <details className="mt-4">
        <summary className="inline-flex cursor-pointer list-none items-center text-[13px] text-mark underline decoration-1 underline-offset-4 transition-colors hover:text-mark-deep">
          {t(ui.careerTable)}
        </summary>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-rule text-faint">
                <th scope="col" className="py-2 pr-4 font-normal">
                  {t(ui.colRole)}
                </th>
                <th scope="col" className="py-2 pr-4 font-normal">
                  {t(ui.colCompany)}
                </th>
                <th scope="col" className="py-2 pr-4 font-normal">
                  {t(ui.colPeriod)}
                </th>
                <th scope="col" className="py-2 font-normal">
                  {t(ui.colDomain)}
                </th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((job) => (
                <tr key={job.company + job.start} className="border-b border-rule text-ink-2">
                  <td className="py-2 pr-4">{t(job.position)}</td>
                  <td className="py-2 pr-4" translate="no">
                    {job.company}
                  </td>
                  <td className="u-tabular py-2 pr-4">
                    {job.current ? `${t(job.period)} - ${t(ui.presentLabel)}` : t(job.period)}
                  </td>
                  <td className="py-2">{t(domains.find((d) => d.id === job.domain)!.label)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  );
}
