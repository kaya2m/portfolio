import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useI18n, type L10n } from '@/lib/i18n';
import { projectCategories, projects, ui, type Project, type ProjectCategory } from '@/content/site';
import { FieldHeading, Sheet } from '@/components/Sheet';

type Filter = ProjectCategory | 'all';

/* Each project is split into the three layers it runs on, so the sheet states
   an architecture instead of one undifferentiated list of technologies. */
const CLIENT = new Set([
  'Angular', 'AngularJS', 'React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'Blazor', 'Flutter', 'Dart',
  'DevExpress', 'DevExtreme', 'Tailwind CSS', 'RxJS', 'Signals', 'Virtualisation', 'Bootstrap', 'XAML',
]);
const DATA = new Set([
  'MSSQL', 'T-SQL', 'PostgreSQL', 'PostgreSQL + PostGIS', 'MongoDB', 'Redis', 'SAP HANA', 'RabbitMQ', 'MinIO',
  'Docker', 'Azure', 'AWS', 'IIS',
]);

const layersOf = (stack: string[]) => ({
  client: stack.filter((s) => CLIENT.has(s)),
  data: stack.filter((s) => DATA.has(s)),
  service: stack.filter((s) => !CLIENT.has(s) && !DATA.has(s)),
});

function Plate({ project, size }: { project: Project; size: number }) {
  if (!project.logo) {
    return (
      <span
        className="u-plate shrink-0 font-mono text-[13px] font-medium tracking-tight text-ink"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {project.name.slice(0, 2).toUpperCase()}
      </span>
    );
  }
  return (
    <span className="u-plate shrink-0 p-1.5" style={{ width: size, height: size }}>
      <Image
        src={project.logo}
        alt=""
        width={size * 2}
        height={size * 2}
        className="h-full w-full object-contain"
      />
    </span>
  );
}

function statusLabel(project: Project) {
  return project.status === 'live' ? ui.statusLive : project.status === 'internal' ? ui.statusInternal : ui.statusBuilding;
}

function Detail({ project }: { project: Project }) {
  const { t } = useI18n();
  const layers = layersOf(project.stack);
  const cols: { label: L10n; items: string[] }[] = [
    { label: ui.layerClient, items: layers.client },
    { label: ui.layerService, items: layers.service },
    { label: ui.layerData, items: layers.data },
  ];

  return (
    <article className="border border-ink bg-panel">
      <header className="flex items-center gap-4 border-b border-ink p-5">
        <Plate project={project} size={52} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[22px] font-medium tracking-[-0.025em] text-ink" translate="no">
            {project.name}
          </h3>
          <p className="u-key mt-1">
            {t(statusLabel(project))} <span className="text-rule-strong">/</span>{' '}
            <span className="u-tabular">{project.year}</span>
          </p>
        </div>
      </header>

      <div className="p-5">
        <p className="u-pretty text-[16px] leading-[1.55] text-ink">{t(project.tagline)}</p>
        <p className="u-pretty mt-3 max-w-[62ch] text-[13.5px] leading-[1.7] text-mute">{t(project.description)}</p>

        <table className="mt-6 w-full border-collapse text-left">
          <caption className="sr-only">{project.name}</caption>
          <tbody>
            {cols.map((col) => (
              <tr key={col.label.en} className="border-t border-rule align-top">
                <th scope="row" className="u-key w-[86px] py-2.5 pr-4 font-normal">
                  {t(col.label)}
                </th>
                <td className="py-2.5 text-[13px] text-ink-2" translate="no">
                  {col.items.length ? col.items.join(', ') : '–'}
                </td>
              </tr>
            ))}
            <tr className="border-y border-rule align-top">
              <th scope="row" className="u-key py-2.5 pr-4 font-normal">
                {t(ui.colRole)}
              </th>
              <td className="py-2.5 text-[13px] text-ink-2">{t(project.role)}</td>
            </tr>
          </tbody>
        </table>

        {project.href ? (
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] uppercase tracking-[0.12em] text-mark underline decoration-1 underline-offset-4 transition-colors hover:text-mark-deep"
            >
              {t(ui.visitSite)}
            </a>
            {project.extra ? (
              <a
                href={project.extra.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] uppercase tracking-[0.12em] text-mute underline decoration-1 underline-offset-4 transition-colors hover:text-ink"
              >
                {t(project.extra.label)}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function Work() {
  const { t } = useI18n();
  const router = useRouter();

  const raw = router.query.filter;
  const current: Filter = useMemo(() => {
    const value = Array.isArray(raw) ? raw[0] : raw;
    return value === 'product' || value === 'platform' || value === 'enterprise' ? value : 'all';
  }, [raw]);

  const list = useMemo(() => projects.filter((p) => current === 'all' || p.category === current), [current]);
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);

  useEffect(() => {
    if (!list.some((p) => p.slug === activeSlug)) setActiveSlug(list[0]?.slug ?? '');
  }, [list, activeSlug]);

  const active = list.find((p) => p.slug === activeSlug) ?? list[0];

  const setFilter = (next: Filter) => {
    const query = { ...router.query };
    if (next === 'all') delete query.filter;
    else query.filter = next;
    router.push({ pathname: router.pathname, query, hash: 'work' }, undefined, { shallow: true, scroll: false });
  };

  const filters: { id: Filter; label: L10n }[] = [
    { id: 'all', label: ui.filterAll },
    ...projectCategories.map((c) => ({ id: c.id as Filter, label: c.label })),
  ];

  return (
    <section id="work" className="border-b border-rule py-16 sm:py-24">
      <Sheet>
        <FieldHeading
          title={t(ui.workTitle)}
          aside={
            <div role="group" aria-label={t(ui.filterLabel)} className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={current === f.id}
                  className={`font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                    current === f.id
                      ? 'text-ink underline decoration-mark decoration-2 underline-offset-4'
                      : 'text-faint hover:text-ink'
                  }`}
                >
                  {t(f.label)}
                </button>
              ))}
            </div>
          }
        />

        {/* Desktop: an index that drives one detail sheet. */}
        <div className="mt-8 hidden gap-10 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ul role="list" aria-label={t(ui.projectListLabel)}>
              {list.map((project, i) => {
                const isActive = project.slug === active?.slug;
                return (
                  <li key={project.slug}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveSlug(project.slug)}
                      onFocus={() => setActiveSlug(project.slug)}
                      onClick={() => setActiveSlug(project.slug)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`flex w-full items-center gap-4 border-b border-rule py-3.5 text-left transition-colors ${
                        isActive ? 'bg-panel' : 'hover:bg-panel/60'
                      }`}
                    >
                      <span className="u-tabular u-key w-[22px] shrink-0">{String(i + 1).padStart(2, '0')}</span>
                      <Plate project={project} size={34} />
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block truncate text-[15.5px] font-medium tracking-[-0.01em] ${
                            isActive ? 'text-mark' : 'text-ink'
                          }`}
                          translate="no"
                        >
                          {project.name}
                        </span>
                        <span className="mt-0.5 block truncate text-[12.5px] text-mute">{t(project.tagline)}</span>
                      </span>
                      <span className="u-key u-tabular shrink-0">{project.year}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="sticky top-[calc(var(--nav-height)+24px)]">{active ? <Detail project={active} /> : null}</div>
          </div>
        </div>

        {/* Small screens: the same sheets, stacked. */}
        <div className="mt-8 space-y-5 lg:hidden">
          {list.map((project) => (
            <Detail key={project.slug} project={project} />
          ))}
        </div>
      </Sheet>
    </section>
  );
}
