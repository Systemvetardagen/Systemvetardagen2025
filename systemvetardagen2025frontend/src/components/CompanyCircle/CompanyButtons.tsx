import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CompanyButton: React.FC = () => {
  const navigate = useNavigate();
  const { companyId } = useParams<{ companyId?: string }>();

  const handleNavigate = () => {
    if (!companyId) {
      console.error("No company ID found");
      return;
    }
    console.log(companyId
    )
    
    // 关键修改点：使用对象形式的导航参数确保 hash 被正确处理
    navigate({
      pathname: `/visit-info/${companyId}`,
      hash: 'map-section'
    });
  };

  return (
    <button
      onClick={handleNavigate} // 使用统一的处理函数
      className="bg-gradient-to-r from-primary via-secondary to-accent p-[3px] rounded-2xl"
    >
      <div className="p-4 bg-white rounded-xl text-center">
        Go to Company map
      </div>
    </button>
  );
};

export default CompanyButton;