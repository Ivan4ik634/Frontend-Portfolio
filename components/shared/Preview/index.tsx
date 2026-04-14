import { Button } from '@/components/ui/button';

interface Props {}

export const Preview: React.FC<Props> = (props) => {
  return (
    <div
      id="home"
      className="flex items-center justify-between max-[900px]:flex-col max-[900px]:justify-start px-4 py-3 max-[900px]:p-0 h-[calc(100vh-66px)] max-[900px]:h-auto"
    >
      <div className="w-[75%] pl-15 max-[900px]:pl-0 max-[900px]:w-full items-start  flex flex-col">
        <div className="mb-5 space-y-3">
          <h1 className="text-5xl max-[900px]:text-3xl max-[400px]:text-2xl font-extrabold  dark:text-white text-black">
            Hi, my name <span className="text-red-400">Ivan</span>
          </h1>
          <p className="mt-2 text-2xl max-[400px]:text-xl font-semibold ">
            I am a <span className="text-red-400">FullStack</span>
          </p>
          <p className="mt-6 text-lg opacity-50 max-[400px]:text-base max-w-xl leading-relaxed">
            I build modern, fast and functional web applications using technologies I enjoy. I focus
            on clean architecture, usability and performance.
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <a href="#portfolio">
            <Button>My portfolio</Button>
          </a>
          <a href="#about">
            <Button variant="outline">About</Button>
          </a>
        </div>
      </div>
      <div>
        <img
          src="/Avatar.png"
          className="w-[380px] aspect-square mr-15 max-[900px]:mr-0 max-[400px]:w-full max-[900px]:mt-15 object-cover rounded-full shadow-xl"
          alt=""
        />
      </div>
    </div>
  );
};
