'use client';

import { useTranslation } from '@/i18n';

interface Props {}

export const About: React.FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="reveal py-24">
      <div className=" gap-10  lg:grid-cols-[0.8fr_1.2fr] ">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
            {t('about.eyebrow')}
          </p>
          <h2 className="text-[34px] mb-3 font-semibold tracking-tight text-zinc-950 dark:text-white max-[640px]:text-3xl">
            {t('about.title')}
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300 max-[640px]:text-base">
          <p>{t('about.firstParagraph')}</p>
          <p>{t('about.secondParagraph')}</p>
        </div>
      </div>
    </div>
  );
};
