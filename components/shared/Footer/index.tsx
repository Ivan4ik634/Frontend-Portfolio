'use client';

import { Button } from '@/components/ui/button';
import { LinksData } from '@/data/linksData';
import { SocialMedia } from '@/data/socialMedia';
import { useThemes } from '@/hooks/useTheme';
import { useTranslation } from '@/i18n';
import { Github, Moon, Send, Sun } from 'lucide-react';
import Link from 'next/link';

interface Props {}

export const Footer: React.FC<Props> = () => {
  const { theme, setTheme } = useThemes();
  const { t } = useTranslation();

  return (
    <footer id="contact" className="static w-full h-auto pt-24">
      <div className="w-full  border-zinc-200 bg-zinc-950 p-8 text-white shadow-2xl shadow-zinc-950/15 dark:border-white/10 dark:bg-white/[0.04] lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-300">
              {t('footer.eyebrow')}
            </p>
            <h2 className="max-w-2xl text-4xl font-semibold tracking-tight max-[640px]:text-3xl">
              {t('footer.title')}
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-zinc-300">{t('footer.description')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                className="rounded-full bg-white px-6 text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-blue-300">
                <a href="https://t.me/WhiteDev15" target="_blank" rel="noreferrer">
                  <Send />
                  {t('footer.contactMe')}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/15 bg-white/5 px-6 text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-blue-200">
                <Link target="_blank" href="https://github.com/Ivan4ik634" rel="noreferrer">
                  <Github />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="grid grid-cols-2 gap-8 max-[420px]:grid-cols-1">
              <div>
                <p className="mb-4 text-sm text-zinc-400">{t('footer.navigation')}</p>
                <div className="flex flex-col gap-3">
                  {LinksData.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      className="text-zinc-300 transition-colors hover:text-blue-300">
                      {t(`navigation.${link.key}`)}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-4 text-sm text-zinc-400">{t('footer.social')}</p>
                <div className="grid grid-cols-4 w-[200px] gap-3">
                  {SocialMedia.map((soc) => (
                    <Link
                      key={soc.url}
                      target="_blank"
                      href={soc.url}
                      rel="noreferrer"
                      className="rounded-full border w-min border-white/10 bg-white/5 p-2 transition-all hover:-translate-y-0.5 hover:border-blue-300/40">
                      <soc.icon className="size-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <p className="text-sm text-zinc-400">
                {t('footer.copyright')} {new Date().getFullYear()}
              </p>
              {theme === 'light' ? (
                <button
                  aria-label={t('theme.switchToDark')}
                  onClick={() => setTheme('dark')}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition-all hover:text-blue-300">
                  <Moon />
                </button>
              ) : (
                <button
                  aria-label={t('theme.switchToLight')}
                  onClick={() => setTheme('light')}
                  className="rounded-full border border-white/10 bg-white/5 p-2 text-zinc-300 transition-all hover:text-blue-300">
                  <Sun />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
