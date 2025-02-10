import React from 'react';
import { useParams } from 'react-router-dom';
import { companies } from './Company';

const InteractiveMap = () => {
  const { companyId } = useParams();
  const selectedCompanyId = companyId ? parseInt(companyId) : null;

  // Convert SVG coordinates to relative percentages
  const getRelativePosition = (position: { top: number; left: number }) => {
    const viewportSize = 2000;
    return {
      top: `${(position.top / viewportSize) * 100}%`,
      left: `${(position.left / viewportSize) * 100}%`,
    };
  };

  return (
    <div className="relative w-full max-w-4xl h-[600px] bg-gray-100 border">
      <img
        src="/svgs/floormap.svg"
        alt="Floor Map 2024"
        className="w-full h-full object-contain"
      />
      {companies.map((company) => {
        const position = getRelativePosition(company.position);
        return (
          <div
            key={company.id}
            className={`absolute w-6 h-6 -mt-3 -ml-3 rounded-full transition-all duration-300 ${
              selectedCompanyId === company.id
                ? "bg-red-500 scale-125"
                : "bg-blue-400"
            }`}
            style={{
              top: position.top,
              left: position.left,
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractiveMap;