'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { skillsData, skillsHoverData } from '@/data/Skill';
import { useTranslation } from '@/i18n';
import { motion } from 'framer-motion';

interface Props {}

export const Skills: React.FC<Props> = (props) => {
  const { t } = useTranslation();
  return (
    <motion.div
      id="skills"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-24">
      <div className="mb-12  gap-6 max-[640px]:flex-col max-[640px]:items-start">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
            {t('skills.eyebrow')}
          </p>
          <h2 className="text-4xl mb-3 font-semibold tracking-tight text-zinc-950 dark:text-white max-[640px]:text-3xl">
            {t('skills.title')}
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-zinc-500 dark:text-zinc-400">
          {t('skills.description')}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
        {skillsData.map((skill) => (
          <motion.div
            key={skill.titleKey}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="rounded-2xl border border-zinc-200 bg-white/75 shadow-sm hover:border-blue-500/30 hover:shadow-xl hover:shadow-zinc-950/[0.06] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-400/30">
            <CardContent className="p-6">
              <CardTitle className="gap-x-2 flex items-center">
                <div className={`rounded-xl p-2.5 ${skill.bg}`}>
                  <skill.icon className={skill.color} />
                </div>
                <p className="font-semibold text-xl text-zinc-950 dark:text-white">
                  {t(`skills.categories.${skill.titleKey}`)}
                </p>
              </CardTitle>

              <CardDescription className="mt-5 flex flex-wrap items-start gap-2">
                {skill.items.map((item, i) => {
                  const hoverData =
                    skill.titleKey === 'frontend'
                      ? skillsHoverData.frontend[i]
                      : skill.titleKey === 'backend'
                        ? skillsHoverData.backend[i]
                        : skill.titleKey === 'deploy'
                          ? skillsHoverData.deploy[i]
                          : skillsHoverData.tools[i];
                  return (
                    <HoverCard key={item}>
                      <HoverCardTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8 rounded-full border-zinc-200 bg-zinc-50 px-3 text-xs text-zinc-600 shadow-none transition-all hover:border-blue-500/30 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-blue-300">
                          {item}
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80 rounded-2xl border-zinc-200 bg-white shadow-xl dark:border-white/10 dark:bg-zinc-950">
                        <div className="flex justify-between gap-4">
                          <Avatar>
                            <AvatarImage src={hoverData.logo} />
                            <AvatarFallback>{hoverData.title.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">{hoverData.title}</h4>
                            <p className="text-sm">
                              {t(`skills.descriptions.${hoverData.descriptionKey}`)}
                            </p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  );
                })}
              </CardDescription>
            </CardContent>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
