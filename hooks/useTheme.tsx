import { useTheme } from '@/store/useTheme';
import { useEffect } from 'react';

const prefersDark = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = (theme: 'light' | 'dark') => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
};

export const useThemes = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const initial = 'light';
    setTheme(initial);
    applyTheme(initial);
  }, []);

  useEffect(() => {
    if (!theme) return;
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
};
