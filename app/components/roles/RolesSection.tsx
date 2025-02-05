import { IconAccessible, IconLeaf, IconMicroscope } from '@tabler/icons-react';
import React from 'react'
import RoleCard from './RoleCard';

type Props = {}

const roles = [
  {
    title: "React Developer",
    description:
      "Implements modern React architecture and best practices while maintaining familiarity with legacy codebases. Translates pre‑16.8 projects into modern, concurrent‑mode enabled solutions.",
    icon: <IconLeaf size={24} />,
    gradient: "from-cyan-500 to-pink-500",
  },
  {
    title: "UI Engineer",
    description:
      "Designs interfaces with empathy, accessibility, and modern web standards to deliver rad experiences for all users.",
    icon: <IconAccessible size={24} />,
    gradient: "from-pink-500 to-purple-500",
  },
  {
    title: "Full‑Stack Developer",
    description:
      "Develops APIs with Go, Node, C#, or Python. Works with databases like Postgres, MSSQL/MySQL, and MongoDB.",
    icon: <IconMicroscope size={24} />,
    gradient: "from-blue-500 to-lime-500",
  },
];

export default function RolesSection({}: Props) {
    return (
      <section className="w-full max-w-5xl px-4">
        <h2 className="text-3xl text-zinc-200 sm:text-4xl font-bold text-center mb-8 border-b border-zinc-700 pb-4">
          I Am:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <RoleCard key={idx} {...role} />
          ))}
        </div>
      </section>
    );
  }