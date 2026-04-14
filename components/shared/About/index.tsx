interface Props {}

export const About: React.FC<Props> = (props) => {
  return (
    <div id={'about'} className="w-full flex  py-[125px] items-center justify-center">
      <div className="w-[1200px] max-[900px]:w-full flex flex-col items-center">
        <h1 className="font-semibold text-4xl max-[900px]:text-2xl max-[400px]:text-xl">
          About me
        </h1>
        <p className="text-center text-xl max-[900px]:text-base max-[400px]:text-sm">
          I am a full-stack developer who works with modern web technologies and creates
          well-thought-out, fast and functional applications. I strive to build projects that really
          solve user problems, from the interface to the backend. I like to do “my own thing”:
          create products from scratch, improve their architecture, experiment with new approaches
          and develop more complex projects. My goal is to become more professional in web
          development, expand my technical skills, work on strong systems and implement my own
          ideas.
        </p>
      </div>
    </div>
  );
};
