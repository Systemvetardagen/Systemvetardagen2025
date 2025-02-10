import React, { useState } from "react";

// sepreat to two component  
// 1 button ,pass in company id , when click , redirect to info/company_id
// 2 InteractiveMap,  get companyid from url ,and map id to postion ,postion to circle

type Company = {
  id: number;
  name: string;
  position: { top: string; left: string };
};

type InteractiveMapProps = {
  initialCompanyId?: number;
};

const companies: Company[] = [
  { id: 19, name: "Accenture", position: { top: "40%", left: "20%" } },
  { id: 45, name: "Capgemini", position: { top: "10%", left: "50%" } },
  { id: 36, name: "Banqsoft", position: { top: "50%", left: "60%" } },
  // Add more companies here as needed
];

const InteractiveMap: React.FC<InteractiveMapProps> = ({ initialCompanyId }) => {
  const [selectedCompany, setSelectedCompany] = useState<number | null>(initialCompanyId || null);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex gap-4 mb-4">
        {companies.map((company) => (
          <button
            key={company.id}
            onClick={() => setSelectedCompany(company.id)}
            className={`px-4 py-2 border rounded ${
              selectedCompany === company.id ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {company.name}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-4xl h-[600px] bg-gray-200">
        <img
          src="/svgs/floormap.svg"
          alt="Floor Map 2024"
          className="w-full h-full object-contain"
        />
        {companies.map((company) => (
          <div
            key={company.id}
            className={`absolute w-8 h-8 rounded-full border-4 ${
              selectedCompany === company.id ? "border-red-500" : "border-transparent"
            }`}
            style={{ top: company.position.top, left: company.position.left }}
          />
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;