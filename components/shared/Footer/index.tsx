'use client';
import { LinksData } from '@/data/linksData';
import { SocialMedia } from '@/data/socialMedia';
import { useThemes } from '@/hooks/useTheme';
import { Github, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
interface Props {}

export const Footer: React.FC<Props> = (props) => {
  const { theme, setTheme } = useThemes();

  return (
    <footer className="border-t py-20 flex flex-col ">
      <div className="flex justify-between">
        <p className="text-center opacity-50">© Ivan 2024</p>
        <div />
        <div />
        <div>
          <p className="mb-2 opacity-50">Links</p>
          <div className="gap-y-4 flex flex-col">
            {LinksData.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="duration-300 transition-all hover:text-red-400 hover:scale-[1.05] cursor-pointer"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="flex max-[400px]:hidden flex-col gap-y-4">
          {SocialMedia.map((soc) => (
            <Link key={soc.url} target="_blank" href={soc.url}>
              <div className="opacity-50 p-2 hover:opacity-100 duration-300 transition-all">
                <img src={soc.svg} className="w-[25px] h-[25px]" />
              </div>
            </Link>
          ))}
          <Link target="_blank" href={'https://github.com/Ivan4ik634'}>
            <div className="opacity-50 p-2 hover:opacity-100 duration-300 transition-all">
              <Github className="w-[25px] h-[25px]" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex items-center mt-5 justify-between">
        <div className="hidden max-[400px]:flex gap-x-4">
          {SocialMedia.map((soc) => (
            <Link key={soc.url} target="_blank" href={soc.url}>
              <div className="opacity-50 p-2 hover:opacity-100 duration-300 transition-all">
                <img src={soc.svg} className="w-[25px] h-[25px]" />
              </div>
            </Link>
          ))}
          <Link target="_blank" href={'https://github.com/Ivan4ik634'}>
            <div className="opacity-50 p-2 hover:opacity-100 duration-300 transition-all">
              <Github className="w-[25px] h-[25px]" />
            </div>
          </Link>
        </div>
        <div />
        {theme === 'light' ? (
          <div
            onClick={() => setTheme('dark')}
            className="opacity-50 cursor-pointer p-2 hover:opacity-100 duration-300 transition-all"
          >
            <Moon />
          </div>
        ) : (
          <div
            onClick={() => setTheme('light')}
            className="opacity-50 cursor-pointer p-2 hover:opacity-100 duration-300 transition-all"
          >
            <Sun />
          </div>
        )}
      </div>
    </footer>
  );
};
