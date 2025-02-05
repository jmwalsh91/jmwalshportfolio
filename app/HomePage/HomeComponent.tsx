import RolesSection from "~/components/roles/RolesSection";
import AboutSection from "~/components/AboutSection";
import RecentWorkAndProjects from "~/components/recentWork/RecentWorkAndProjects";
import SkillsSection from "~/components/roles/SkillsSection";



export default function HomeComponent() {
  return (
    <div className="flex flex-col items-center gap-24 bg-zinc-950 text-zinc-100 font-sans">
 {/*      <HeroSection /> */}
      <AboutSection />
      <RolesSection />
      <SkillsSection />
      <RecentWorkAndProjects />
      <GithubSection />
    </div>
  );
}



function GithubSection() {
  return (
    <section className="w-full max-w-5xl mt-16 px-4 mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-right mb-8">
        Always be coding.
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-8 p-6 border border-zinc-700 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2">
          <img
            src="https://github-readme-stats.vercel.app/api?username=jmwalsh91&theme=react&hide_border=false&include_all_commits=true&count_private=true"
            alt="GitHub stats"
            className="rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=jmwalsh91&theme=react&hide_border=false"
            alt="GitHub streak stats"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
