import React from "react";

export default function HeroSection() {
  return (
    <div
      className="relative w-full h-96 bg-cover bg-center flex items-center justify-center mb-12"
      style={{ backgroundImage: "url('/assets/pics/synthmesa.webp')" }}
      role="img"
      aria-label="Hero Section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 opacity-60"></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-[90px] flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-zinc-100">
          Software Developer Delivering Data‑Driven Applications
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-zinc-300 max-w-2xl">
          I build innovative, full‑stack solutions that combine modern web architectures with data‑driven insights.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:jordan@jmwalsh.dev"
            className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-md shadow hover:bg-cyan-600 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 bg-transparent border border-cyan-500 text-cyan-500 font-semibold rounded-md hover:bg-cyan-500 hover:text-black transition-colors"
          >
            Get Resume
          </a>
        </div>
      </div>
    </div>
  );
}
