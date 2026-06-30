interface Props {}

export const About: React.FC<Props> = () => {
  return (
    <div id="about" className="reveal py-24">
      <div className=" gap-10 rounded-[28px] border border-zinc-200 bg-white/70 p-8 shadow-xl shadow-zinc-950/[0.04] backdrop-blur dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-600 dark:text-blue-300">
            About
          </p>
          <h2 className="text-[34px] mb-3 font-semibold tracking-tight text-zinc-950 dark:text-white max-[640px]:text-3xl">
            Product-minded engineering with a sharp eye for interface quality.
          </h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300 max-[640px]:text-base">
          <p>
            I build full-stack applications from the first product idea to the deployed interface.
            My work balances clean UI, maintainable architecture, fast feedback loops, and the small
            details that make software feel trustworthy.
          </p>
          <p>
            I enjoy creating products from scratch, improving system structure, and turning complex
            workflows into calm, readable experiences for users.
          </p>
        </div>
      </div>
    </div>
  );
};
