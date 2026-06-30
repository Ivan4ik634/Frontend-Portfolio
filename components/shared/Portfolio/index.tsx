import { Projects } from '@/data/Projects';
import { Project } from './project';

interface Props {}

export const Portfolio: React.FC<Props> = (props) => {
  return (
    <div id="portfolio" className="reveal py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
          Featured projects
        </p>
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white max-[640px]:text-3xl">
          Premium builds with real product depth.
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          Selected work across full-stack systems, product interfaces, collaboration tools, and
          developer experience.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {Projects.map((project) => (
          <Project key={project.link} project={project} />
        ))}
      </div>
    </div>
  );
};
