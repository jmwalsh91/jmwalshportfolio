import ActionButtons from "./actions/ActionButtons";

export default function AboutSection() {
  return (
    <div
      className="relative w-full bg-cover bg-center flex items-center justify-center mb-12"
      style={{ backgroundImage: "url('/assets/pics/synthmesa.webp')" }}
      role="img"
      aria-label="Hero Section"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 opacity-60"></div>
      <div className="relative z-10 container mx-auto px-4 py-[90px] flex flex-col md:flex-row items-center justify-center">
        <img
          src="profileSmallestLossy.webp"
          alt="Picture of Jordan"
          className="hidden md:block w-64 h-64 rounded-full shadow-2xl object-cover"
        />
        <div className="mt-6 md:mt-0 md:ml-10 max-w-2xl text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            <span className="block text-amber-300"> Hey there, I'm Jordan.</span>
            <span className="text-xl sm:text-2xl lg:text-4xlblock text-cyan-500 mt-2 ">
              Lead UI Engineer @ Task Automation Partners
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl">
            I'm a <strong>software developer</strong> based in Gainesville,
            Florida. As the Lead UI Developer at Task Automation Partners, I
            blend technical expertise with creative problem-solving.
          </p>
          <p className="mt-4 text-lg sm:text-xl">
            Currently, I’m leveraging AI to innovate knowledge management and
            advance academic research. Let's connect and build something
            amazing.
          </p>
        <ActionButtons />
        </div>
      </div>

    </div>
  );
}
