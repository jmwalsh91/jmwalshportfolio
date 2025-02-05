type ProjectCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    technologies?: string[];
  };
  
  export default function ProjectCard({
    title,
    description,
    icon,
    technologies = [],
  }: ProjectCardProps) {
    return (
      <div className="flex flex-col h-full p-8 border border-zinc-700 rounded-xl transition-transform duration-200 ease-out hover:scale-105 hover:shadow-2xl">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800">
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-base">{description}</p>
        </div>
        {technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-zinc-700 text-zinc-100 text-sm font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
  