import { ProjectT } from '@/types/project';
import Link from 'next/link';

interface Props {
  project: ProjectT;
}

export const Project: React.FC<Props> = ({ project }) => {
  return (
    <Link href={project.link} className="flex flex-col">
      <img src={project.image} className="rounded-[8px] object-cover w-full aspect-video" />
      <div className="mt-3 w-full">
        <h1 className="text-2xl max-[400px]:text-xl font-bold mb-1">{project.title}</h1>
        <p>{project.description}</p>
        <div className="flex w-full flex-wrap mt-4 gap-2">
          {project.tags.map((tag) => (
            <div className="p-2 rounded-[5px] bg-zinc-100 dark:bg-zinc-900 ">
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};
