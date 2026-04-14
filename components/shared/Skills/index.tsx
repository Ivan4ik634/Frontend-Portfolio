import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { skillsData, skillsHoverData } from '@/data/Skill';

interface Props {}

export const Skills: React.FC<Props> = (props) => {
  return (
    <div id="skills" className="py-[50px]">
      <h2 className="text-3xl font-semibold tracking-tight mb-12 flex items-center gap-4">
        <span>Skills</span>
        <span className="flex-1 h-[1px] bg-zinc-700"></span>
      </h2>
      <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[400px]:grid-cols-1 gap-5 ">
        {skillsData.map((skill) => (
          <Card
            key={skill.title}
            className="rounded-[5px] hover:border-red-400 duration-300 transition-all"
          >
            <CardContent>
              <CardTitle className="gap-x-2 flex items-center">
                <div className={`p-2 ${skill.bg} rounded-[5px]`}>
                  <skill.icon />
                </div>
                <p className={`mb-2 font-bold text-xl ${skill.color}`}>{skill.title}</p>
              </CardTitle>

              <CardDescription className="flex items-start flex-col mt-3">
                {skill.items.map((item, i) => {
                  const hoverData =
                    skill.title === 'Frontend'
                      ? skillsHoverData.frontend[i]
                      : skill.title === 'Backend'
                      ? skillsHoverData.backend[i]
                      : skill.title === 'Deploy'
                      ? skillsHoverData.deploy[i]
                      : skillsHoverData.tools[i];
                  return (
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Button variant="link">{item}</Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex justify-between gap-4">
                          <Avatar>
                            <AvatarImage src={hoverData.logo} />
                            <AvatarFallback>{hoverData.title.slice(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">{hoverData.title}</h4>
                            <p className="text-sm">{hoverData.description}</p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  );
                })}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
