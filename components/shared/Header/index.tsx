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
    <div className="fixed top-0 left-0 flex items-center  bg-zinc-100 dark:bg-[#0D0D0D] shadow z-50 border-b h-[50px] w-full ">
      <Container className="flex items-center w-full justify-between">
        <div>
          <p className="font-semibold text-red-400 hover:underline">Ivan</p>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center max-[400px]:hidden gap-x-6">
            {LinksData.map((link) => (
              <a
                href={link.url}
                key={link.url}
                className="duration-300 transition-all hover:text-red-400 hover:scale-[1.05] cursor-pointer"
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className="pl-6 max-[400px]:pl-0 max-[400px]:pr-2">
            {theme === 'light' ? (
              <div
                onClick={() => setTheme('dark')}
                className="cursor-pointer p-2 hover:text-red-400 duration-300 transition-all"
              >
                <Moon />
              </div>
            ) : (
              <div
                onClick={() => setTheme('light')}
                className="cursor-pointer p-2 hover:text-red-400 duration-300 transition-all"
              >
                <Sun />
              </div>
            )}
          </div>
          <div className="hidden max-[400px]:block ">
            <Menu onClick={() => setOpen(true)} />
            <div
              className={`fixed top-0 transition-all duration-300 ${
                open ? 'top-0' : 'top-[-400%]'
              } left-0 h-full z-50 w-full bg-zinc-100 dark:bg-[#0D0D0D] px-3 py-2`}
            >
              <div className="flex items-center justify-between">
                <h1 className="font-bold">Menu</h1>
                <X onClick={() => setOpen(false)} />
              </div>
              <div className="flex mt-4 flex-col gap-y-4">
                {LinksData.map((link) => (
                  <a key={link.url} onClick={() => setOpen(false)} href={link.url}>
                    {link.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
