import React from "react";
import {
  IconBrandReact,
  IconCode,
  IconDatabase,
  IconServer,
  IconShieldLock,
  IconCpu,
  IconTools,
} from "@tabler/icons-react";

type CardItem = {
  title: string;
  description: string;
  content: React.ReactNode;
  isLarge?: boolean;
};

type PortfolioCardProps = {
  item: CardItem;
};

function PortfolioCard({ item }: PortfolioCardProps) {
  const { title, description, content, isLarge } = item;
  const gridSpanClasses = isLarge
    ? "col-span-6 md:col-span-12 xl:col-span-6"
    : "col-span-6 xl:col-span-3";

  return (
    <div
      className={`group relative w-full flex flex-col gap-5 focus:outline-none focus:ring-2 focus:rounded-xl transition-all hover:shadow-md hover:bg-cyan-500/10 ${gridSpanClasses}`}
    >
      <div className="relative w-full h-full rounded-lg border border-zinc-700 p-4 transition-colors">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
          <p className="mt-2 text-sm text-zinc-300">{description}</p>
          <div className="mt-4 text-sm text-zinc-400 flex-1">{content}</div>
        </div>
      </div>
    </div>
  );
}

const skills: CardItem[] = [
  {
    title: "Frontend Architecture",
    description:
      "Spearheaded scalable frontends using React 18/19, TypeScript, and Vite for enterprise clients like Mitsubishi Electric.",
    content: (
      <p>
        I developed and optimized complex, nested layouts with React Router V6
        and V7, establishing clear boundaries between UI components and data
        loading. By leveraging well-structured DTOs, I ensured type safety and
        minimized friction when extending .NET 6 backends into TypeScript
        codebases.
      </p>
    ),
    isLarge: true,
  },
  {
    title: "API Development & DTOs",
    description: "Designed APIs with Node, Go. Contributed to APIs in C#.",
    content: (
      <p>
        Synthesized frontend and backend requirements to create efficient DTOs.
        Ensured typesafety across the wire by utilizing OpenAPI TypeGen.
      </p>
    ),
  },
  {
    title: "Databases",
    description:
      "Worked with databases such as Postgres, MSSQL, MySQL, and MongoDB.",
    content: (
      <p>
        Schema design and query optimization, ensuring high performance across
        large datasets.
      </p>
    ),
  },
  {
    title: "Backend Engineering (Go, Node & C#)",
    description:
      "I explore different backend approaches on personal projects with Go and Node, and also contribute to C# codebases at work.",
    content: (
      <p>
        Whether I'm building side projects or diving into enterprise solutions,
        I focus on clean architecture and reliability. Docker and Azure often
        come into play to streamline deployment and keep development efficient.
      </p>
    ),
  },
  {
    title: "UI Engineering",
    description:
      "Crafted accessible, intuitive user interfaces while adhering to modern web standards.",
    content: (
      <p>
        Spearheaded UI projects as Lead UI Engineer, balancing technical
        excellence with creative design for enterprise applications.
      </p>
    ),
  },
  {
    title: "Developer Experience",
    description:
      "I prioritize clarity and consistency so developers can focus on shipping, not debugging.",
    content: (
      <p>
        My belief is that codebases should be prescriptive and straightforward.
        By establishing well-defined APIs, structured data contracts, and
        thorough documentation, I ensure strong IntelliSense, AI-assisted
        autocompletion, and a minimal cognitive load for the entire team.
      </p>
    ),
  },
  {
    title: "Full‑Stack Integration",
    description:
      "Bridged frontend and backend seamlessly to deliver holistic, data-driven solutions.",
    content: (
      <p>
        Relieved backend pressure by translating backend DTOs into strongly
        typed frontend interfaces, ensuring end-to-end type safety and smooth
        integrations.
      </p>
    ),
  },
];

export default function SkillsSection() {
  return (
    <section className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 !pt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-4 xl:gap-3 2xl:gap-6">
      <h2 className="col-span-full text-3xl sm:text-4xl font-bold text-start mb-8 border-b border-zinc-700 pb-4">
        What I Do
      </h2>
      {skills.map((item, idx) => (
        <PortfolioCard key={idx} item={item} />
      ))}
    </section>
  );
}
