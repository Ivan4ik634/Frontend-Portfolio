import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectT } from '@/types/project';
import { ExternalLink, Github } from 'lucide-react';

interface Props {
  project: ProjectT;
}

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-950/[0.08] dark:border-white/10 dark:bg-white/[0.03] ${
        project.featured ? 'lg:col-span-2' : ''
      }`}>
      <a href={project.link} target="_blank" rel="noreferrer" className="overflow-hidden">
        <img
          src={project.image}
          className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
            project.featured ? 'aspect-[16/8]' : 'aspect-video'
          }`}
          alt={`${project.title} preview`}
        />
      </a>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white max-[400px]:text-xl">
            {project.title}
          </h3>
          {project.featured && (
            <Badge className="rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300">
              Featured
            </Badge>
          )}
        </div>
        <p className="line-clamp-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          {project.description}
        </p>
        <div className="mt-5 flex w-full flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="border-zinc-200 bg-zinc-50 text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            asChild
            className="rounded-full bg-zinc-950 px-5 transition-all hover:-translate-y-0.5 hover:bg-blue-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-blue-300">
            <a href={project.link} target="_blank" rel="noreferrer">
              <ExternalLink />
              Live Demo
            </a>
          </Button>
          {project.github && (
            <Button
              asChild
              variant="outline"
              className="rounded-full border-zinc-300 px-5 transition-all hover:-translate-y-0.5 hover:border-blue-500/40 hover:text-blue-600 dark:border-white/15 dark:hover:text-blue-300">
              <a
                href={project.github || 'https://github.com/Ivan4ik634'}
                target="_blank"
                rel="noreferrer">
                <Github />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
