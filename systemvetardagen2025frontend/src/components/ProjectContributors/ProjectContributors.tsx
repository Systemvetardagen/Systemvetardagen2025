import React, { useState } from 'react';
import { ChevronDown, Mail, Linkedin, Github } from 'lucide-react';
import { teamData } from './teamData.js';

const SocialLinks = ({ email, linkedin, github }) => (
  <div className="flex gap-2 mt-2">
    {email && (
      <a href={`mailto:${email}`} className="text-link hover:text-opacity-80">
        <Mail size={20} />
      </a>
    )}
    {linkedin && (
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-link hover:text-opacity-80">
        <Linkedin size={20} />
      </a>
    )}
    {github && (
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-link hover:text-opacity-80">
        <Github size={20} />
      </a>
    )}
  </div>
);

const TeamSection = ({ title, head, viceHead, teamMembers }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <p className="font-medium">Head</p>
          <p>{head.name}</p>
          <SocialLinks {...head} />
        </div>
        <div className="space-y-2">
          <p className="font-medium">Vice Head</p>
          <p>{viceHead.name}</p>
          <SocialLinks {...viceHead} />
        </div>
      </div>
      {teamMembers && teamMembers.length > 0 && (
        <div className="space-y-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-4 py-2 bg-link text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Team Members
            <ChevronDown
              className={`transform transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="space-y-2">
                <p>{member.name}</p>
                <SocialLinks {...member} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

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

export default ProjectGroup;