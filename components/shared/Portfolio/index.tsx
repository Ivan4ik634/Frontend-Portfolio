'use client';

import { Projects } from '@/data/Projects';
import { useTranslation } from '@/i18n';
import { motion } from 'framer-motion';
import { Project } from './project';

interface Props {}

export const Portfolio: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <motion.div
      id="portfolio"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
          {t('portfolio.eyebrow')}
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white max-[640px]:text-3xl">
          {t('portfolio.title')}
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">{t('portfolio.description')}</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {Projects.map((project) => (
          <Project key={project.link} project={project} />
        ))}
      </div>
    </motion.div>
  );
};
