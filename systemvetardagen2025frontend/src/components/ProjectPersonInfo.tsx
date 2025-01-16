import React from 'react';
import '../App.css';

interface ProjectPersonInfoProps {
    name: string;
    label: string;
    LinkedIn?: string;
    Email?: string;
    Phone?: string;
    imageUrl?: string;
}

const ProjectPersonInfo: React.FC<ProjectPersonInfoProps> = ({
    name,
    label,
    LinkedIn,
    Email,
    Phone,
    imageUrl,
}) => {
    return (
        <div className="flex flex-col items-center p-4">
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={`Portrait of ${name}`}
                    className="w-48 h-48 object-cover rounded-lg mb-4"
                />
            )}
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">{label}</p>
            <div className="flex gap-3">
                {LinkedIn && (
                    <a
                        href={LinkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[rgb(var(--primary))] hover:underline"
                    >
                        LinkedIn
                    </a>
                )}
                {Email && (
                    <>
                        <span className="text-gray-400">|</span>
                        <a
                            href={`mailto:${Email}`}
                            className="text-[rgb(var(--primary))] hover:underline"
                        >
                            Email
                        </a>
                    </>
                )}
                {Phone && (
                    <>
                        <span className="text-gray-400">|</span>
                        <a
                            href={`tel:${Phone}`}
                            className="text-[rgb(var(--primary))] hover:underline"
                        >
                            Phone
                        </a>
                    </>
                )}
            </div>
        </div>
    );
};

export default ProjectPersonInfo;
