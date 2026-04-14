import { create } from 'zustand';
interface Props {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}
export const useTheme = create<Props>()((set) => ({
  theme: 'light',
  setTheme(theme) {
    set({ theme });
  },
}));
