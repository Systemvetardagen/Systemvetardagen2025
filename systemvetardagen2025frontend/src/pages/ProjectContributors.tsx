import TeamSection from "../components/TeamSection/TeamSection";
import { teamData } from "../components/TeamSection/teamData"


const ProjectGroup = () => {
    return (
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold mb-6">Project Group</h2>
        <div className="space-y-12">
          {Object.entries(teamData).map(([title, data]) => (
            <TeamSection
              key={title}
              title={title}
              head={data.head}
              viceHead={data.viceHead}
              teamMembers={data.teamMembers}
            />
          ))}
        </div>
      </section>
    );
  };
export default ProjectGroup