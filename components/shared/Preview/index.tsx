import { Button } from '@/components/ui/button';
import { Projects } from '@/data/Projects';

interface Props {}

export const Preview: React.FC<Props> = (props) => {
  return (
    <div
      id="home"
      className="reveal grid min-h-[calc(100vh-96px)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
      <div className="flex max-w-3xl flex-col items-start">
        <div className="mb-8 space-y-6">
          <p className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-300">
            Full-stack developer for polished product experiences
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-zinc-950 dark:text-white max-[900px]:text-4xl max-[400px]:text-3xl">
            Building clean, fast web products with founder-level taste.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300 max-[400px]:text-base">
            I am Ivan, a full-stack developer focused on modern interfaces, strong architecture, and
            product details that make applications feel calm, premium, and ready to scale.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#portfolio">
            <Button className="rounded-full bg-zinc-950 px-6 shadow-lg shadow-zinc-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-blue-300">
              View projects
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              className="rounded-full border-zinc-300 px-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/40 hover:text-blue-600 dark:border-white/15 dark:hover:text-blue-300">
              Contact
            </Button>
          </a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-[440px]">
        <div className="absolute inset-6 rounded-full bg-blue-500/10 blur-3xl" />
        <img
          src="/Avatar.png"
          className="relative aspect-square w-full rounded-[32px] border border-zinc-200/80 object-cover shadow-2xl shadow-zinc-950/10 transition-transform duration-500 hover:scale-[1.02] dark:border-white/10 dark:shadow-black/30"
          alt="Ivan portrait"
        />
        <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-zinc-200 bg-white/90 p-4 shadow-xl shadow-zinc-950/10 backdrop-blur dark:border-white/10 dark:bg-zinc-950/85">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-lg font-semibold">{Projects.length}+</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Products</p>
            </div>
            <div>
              <p className="text-lg font-semibold">Full</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Stack</p>
            </div>
            <div>
              <p className="text-lg font-semibold">UI</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Focused</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
