import React from 'react';
import TeamSection from '../components/TeamSection/TeamSection';
import { teamData, Team } from '../components/TeamSection/teamData.ts';
import FadeInSection from '../components/FadeInSection/FadeInSection.tsx';

const ProjectGroup: React.FC = () => {
    return (
        <section className="space-y-8">
            <FadeInSection direction='fadeLeft'>
                <h2 className="text-2xl font-semibold mb-6">Project Group</h2>
            </FadeInSection>
            <div className="space-y-12">
                {teamData.map((team: Team) => (
                    <TeamSection
                        key={team.title}
                        title={team.title}
                        head={team.head}
                        viceHead={team.viceHead}
                        teamMembers={team.teamMembers}
                    />
                ))}
            </div>
        </section>
    );
};
export default ProjectGroup;
