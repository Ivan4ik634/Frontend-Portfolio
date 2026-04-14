import { Projects } from '@/data/Projects';
import { Project } from './project';

interface Props {}

export const Portfolio: React.FC<Props> = (props) => {
  return (
    <div id={'portfolio'} className="py-[50px]">
      <h2 className="text-3xl font-semibold tracking-tight  flex items-center gap-4">
        <span>Portfolio</span>
        <span className="flex-1 h-[1px] bg-zinc-700"></span>
      </h2>
      <div className="my-3 mb-12">
        <p className="opacity-50">
          Notes: where there is a Full Stack tag, the first download will last 1-2 minutes, since
          the server is free and it wakes up
        </p>
      </div>
      <div className="grid grid-cols-2 max-[400px]:grid-cols-1 gap-12 w-full">
        {Projects.map((project) => (
          <Project key={project.link} project={project} />
        ))}
      </div>
    </div>
  );
};
