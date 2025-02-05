import {
  IconAccessible,
  IconArrowBigUpLines,
  IconArrowsDoubleNeSw,
  IconBlocks,
  IconBook,
  IconCar,
  IconDeviceDesktopAnalytics,
  IconMicroscope,
  IconMusic,
  IconMusicBolt,
  IconSchema,
  IconSchool,
  IconScissors,
} from "@tabler/icons-react";
import React from "react";
import ProjectCard from "./ProjectCard";

type ProjectItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies?: string[];
};

export const recentWorkItems: ProjectItem[] = [
  {
    title: "Mitsubishi Electric",
    description:
      "Spearheaded the development and design of frontend architecture for warranty processing systems and part management software. ",
    icon: <IconCar size={16} className="text-white" />,
  },
  {
    title: "Insight Lean Solutions",
    description:
      "Architected the frontend for audit management software for the manufacturing industry, improving user experience and increasing Layered Process Audit throughput, observability, and accuracy. ",
    icon: <IconSchema size={16} className="text-white" />,
  },
  {
    title: "Dynamic Marketing",
    description:
      "Designed and delivered several frontends integrated with Task Automation Partners' custom CMS and Admin Portal, allowing for seamless content management and user experience improvements.",
    icon: <IconArrowsDoubleNeSw size={16} className="text-white" />,
  },
  {
    title: "Crypto Tx GUI/API",
    description:
      "API and DB for an NFT gaming industry client. Built with Typescript, Prisma, Docker, and PostgreSQL for a scalable, extendable, and type‑safe solution.",
    icon: <IconBlocks size={16} className="text-white" />,
  },
  {
    title: "React Optimizations",
    description:
      "Audits and migrations for multiple React apps—leveraging legacy insights and modern practices to boost performance and streamline user experiences.",
    icon: <IconArrowBigUpLines size={16} className="text-white" />,
  },
];
const currentProjects: ProjectItem[] = [
  {
    title: "Gnoetica",
    description:
      "Knowledge and research management app and AI assistant for researchers and academics.",
    icon: <IconMicroscope size={16} className=" text-cyan-500" />,
    technologies: [
      "React 19",
      "React Router V7",
      "Typescript",
      "Go",
      "Postgres",
    ],
  },
  {
    title: "Hippias",
    description:
      "Curricula design and collaborative education platform inspired by the socratic method.",
    icon: <IconBook size={16} className="text-lime-400 " />,
    technologies: ["React 18", "Remix V2", "Typescript", "Go", "Postgres"],
  },
  {
    title: "Ochre and Scander",
    description:
      "Ochre: Text extraction and OCR for pdfs and images, piped into into Scander for chunking and labelling.",
    icon: <IconScissors size={16} className="text-amber-400" />,
    technologies: ["Go", "Tesseract", "OpenAI"],
  },
  {
    title: "BlogCMS",
    description:
      "A lightweight CMS desktop app built with NeutralinoJS and React for managing content on my blog and projects page.",
    icon: <IconDeviceDesktopAnalytics size={16} className="text-violet-400" />,
    technologies: ["React", "NeutralinoJS", "Supabase"],
  },
  {
    title: "crypTones",
    description:
      "An experiment in data sonification and generative music—transforming cryptocurrency price data into dynamic musical sequences.",
    icon: <IconMusic size={16} className="text-orange-400" />,
    technologies: ["React", "Typescript", "Node", "Express"],
  },
  {
    title: "React Native Projects",
    description:
      "Geomancy and I Ching divination apps. Theme and color palette generator.",
    icon: <IconSchool size={16} className="text-rose-400" />,
    technologies: ["React Native", "Expo", "Typescript"],
  },
];

type Props = {};

export default function RecentWorkAndProjects() {
  return (
    <section className="container relative mx-auto px-6 py-16 md:py-24 lg:px-16 lg:py-24 xl:px-20 !pt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-4 xl:gap-3 2xl:gap-6">
      <h2 className="col-span-full text-3xl sm:text-4xl font-bold text-left mb-8 border-b border-zinc-700 pb-4">
        Recent Work
      </h2>
      {recentWorkItems.map((item, idx) => (
        <div key={idx} className="col-span-12 sm:col-span-6">
          <ProjectCard {...item} />
        </div>
      ))}
      <h2 className="col-span-full mt-24 text-3xl sm:text-4xl font-bold text-left mb-8 border-b border-zinc-700 pb-4">
        Current Projects
      </h2>
      {currentProjects.map((item, idx) => (
        <div
          key={idx}
          className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4"
        >
          <ProjectCard {...item} />
        </div>
      ))}
      {/*       <div className="col-span-full mt-12 p-8 border border-zinc-700 rounded-xl flex flex-col items-center transition-shadow duration-200 ease-out hover:shadow-2xl">
        <p className="text-xl mb-4 text-center">
          Want to collaborate? Send me an email or message me on Discord!
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-zinc-700 rounded-md font-medium transition-colors hover:bg-zinc-600">
            Email
          </button>
          <button className="px-6 py-2 bg-zinc-700 rounded-md font-medium transition-colors hover:bg-zinc-600">
            Discord
          </button>
        </div>
      </div> */}
    </section>
  );
}
