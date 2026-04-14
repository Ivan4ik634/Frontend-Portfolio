import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto px-3 py-4 max-w-[1600px] max-[900px]:w-full ', className)}>
      {children}
    </div>
  );
};
