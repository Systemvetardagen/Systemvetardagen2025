import React from 'react';
import '../App.css';
import ProjectPersonInfo from './projectPersonInfo';

const ProjectGroup: React.FC = () => {
    const teamMembers = {
      management: [
        {
          name: "Giancarlo Valverde",
          label: "Project Manager",
          imageUrl: "/api/placeholder/200/200",
          LinkedIn: "#",
          Email: "giancarlo@example.com",
          Phone: "+1234567890"
        },
        {
          name: "Sofia Roos",
          label: "Project Coordinator",
          imageUrl: "/api/placeholder/200/200",
          LinkedIn: "#",
          Email: "sofia@example.com",
          Phone: "+1234567890"
        }
      ],
      webDev: [
        {
          name: "Ole Höfner",
          label: "Head of Web Development & Design",
          imageUrl: "/api/placeholder/200/200",
          LinkedIn: "#",
          Email: "ole@example.com"
        }
      ]
    };
  
    return (
      <div className="py-12 bg-[rgb(var(--background))] text-[rgb(var(--text))]">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12">Project Group 2024</h1>
          
          {/* Project Management Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 tracking-wide uppercase">
              Project Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.management.map((member, index) => (
                <ProjectPersonInfo
                  key={index}
                  {...member}
                />
              ))}
            </div>
          </section>
  
          {/* Web Development Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 tracking-wide uppercase">
              Web Development & Design
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.webDev.map((member, index) => (
                <ProjectPersonInfo
                  key={index}
                  {...member}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  
  export default ProjectGroup;