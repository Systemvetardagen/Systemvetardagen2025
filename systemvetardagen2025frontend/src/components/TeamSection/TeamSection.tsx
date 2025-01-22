import React, { useState } from 'react';
import { ChevronDown,  Linkedin, Github } from 'lucide-react';


const SocialLinks = ({  linkedin, github }) => (
  <div className="flex gap-2 mt-2">

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



export default TeamSection;