import { useTheme } from '@/store/useTheme';
import { useEffect } from 'react';

export const useThemes = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme as 'light' | 'dark');
    } else {
      setTheme('light');
    }
  }, []);
  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme || 'light');
      document.documentElement.className = theme;
    }
  }, [theme]);

  return { theme, setTheme };
};
