import React from 'react';
import { useNavigate } from 'react-router-dom';
import { companies } from './Company';

const CompanyButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {companies.map((company) => (
        <button
          key={company.id}
          onClick={() => navigate(`/info/${company.id}`)}
          className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          {company.name}
        </button>
      ))}
    </div>
  );
};

export default CompanyButtons;