'use client';
import { LinksData } from '@/data/linksData';
import { useThemes } from '@/hooks/useTheme';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { Container } from '../Container';

interface Props {}

export const Header: React.FC<Props> = (props) => {
  const { theme, setTheme } = useThemes();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed top-0 left-0 z-50 flex h-[64px] w-full items-center border-b border-zinc-200/70 bg-white/75 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70">
        <Container className="flex w-full items-center justify-between py-0">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.65)]" />
            <p className="font-semibold tracking-tight text-zinc-950 dark:text-white">Ivan</p>
          </div>
          <div className="flex items-center ">
            <div className="flex items-center max-[640px]:hidden gap-x-1 rounded-full border border-zinc-200 bg-zinc-50/80 p-1 text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              {LinksData.map((link) => (
                <a
                  href={link.url}
                  key={link.url}
                  className="cursor-pointer rounded-full px-3 py-1.5 transition-all duration-300 hover:bg-white hover:text-blue-600 hover:shadow-sm dark:hover:bg-white/10 dark:hover:text-blue-300">
                  {link.text}
                </a>
              ))}
            </div>
            <div className="pl-4 max-[640px]:pl-0 max-[640px]:pr-2">
              {theme === 'light' ? (
                <button
                  aria-label="Switch to dark mode"
                  onClick={() => setTheme('dark')}
                  className="cursor-pointer rounded-full border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
                  <Moon />
                </button>
              ) : (
                <button
                  aria-label="Switch to light mode"
                  onClick={() => setTheme('light')}
                  className="cursor-pointer rounded-full border border-white/10 bg-white/5 p-2 text-zinc-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-300">
                  <Sun />
                </button>
              )}
            </div>
            <Menu
              onClick={() => setOpen(true)}
              className="hidden max-[640px]:block cursor-pointer"
            />
          </div>
        </Container>
      </div>
      <div className="hidden max-[640px]:block ">
        <div
          className={`fixed transition-all duration-200 ${
            open ? 'top-0' : 'top-[-500%]'
          } left-0 h-full z-1000 w-full bg-white px-5 py-5 dark:bg-zinc-950`}>
          <div className="flex items-center justify-between">
            <h1 className="font-bold">Menu</h1>
            <X onClick={() => setOpen(false)} className="cursor-pointer" />
          </div>
          <div className="flex mt-4 flex-col gap-y-4">
            {LinksData.map((link) => (
              <a
                className="rounded-xl border border-zinc-200 px-4 py-3 transition-colors hover:border-blue-500/40 hover:text-blue-600 dark:border-white/10 dark:hover:text-blue-300"
                key={link.url}
                onClick={() => setOpen(false)}
                href={link.url}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
