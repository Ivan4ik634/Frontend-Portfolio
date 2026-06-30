import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto w-full max-w-[1180px] px-5 py-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
};
