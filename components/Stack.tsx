import React from 'react';
import { useI18n } from '@/lib/i18n';
import { skillGroups, ui } from '@/content/site';
import { FieldHeading, Sheet } from '@/components/Sheet';

/** A capability matrix: layer on the left, what runs there on the right. */
export default function Stack() {
  const { t } = useI18n();

  return (
    <section id="stack" className="border-b border-rule py-16 sm:py-24">
      <Sheet>
        <FieldHeading title={t(ui.stackTitle)} />

        <table className="mt-8 w-full border-collapse text-left">
          <tbody>
            {skillGroups.map((group) => (
              <tr key={group.title.en} className="border-b border-rule align-top">
                <th scope="row" className="u-key w-[110px] py-5 pr-6 font-normal sm:w-[150px]">
                  {t(group.title)}
                </th>
                <td className="py-5">
                  <ul className="flex flex-wrap gap-x-2 gap-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        translate="no"
                        className="inline-flex items-center gap-2 border border-rule bg-panel px-2.5 py-1.5 text-[13px] text-ink transition-colors hover:border-ink"
                      >
                        {item.icon ? (
                          <img
                            src={item.icon}
                            alt=""
                            width={16}
                            height={16}
                            loading="lazy"
                            decoding="async"
                            className="h-4 w-4 shrink-0"
                          />
                        ) : null}
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Sheet>
    </section>
  );
}
