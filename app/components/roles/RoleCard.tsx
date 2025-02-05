type RoleCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
};

export default function RoleCard({ title, description, icon, gradient }: RoleCardProps) {
  return (
    <div className=" border border-zinc-700 rounded-xl p-6 flex flex-col items-start transition-transform duration-200 ease-out hover:scale-105 hover:shadow-2xl">
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-md bg-gradient-to-r ${gradient}`}
      >
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-base">{description}</p>
    </div>
  );
}
