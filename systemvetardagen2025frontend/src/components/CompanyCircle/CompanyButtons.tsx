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
    setTimeout(() => {
      const target = document.getElementById('map-section');
      if (target) {
        // 使用 'instant' 立即滚动，省略第二个 setTimeout
        target.scrollIntoView({ behavior: 'instant' });
    
        // 立即向上偏移 100px
        window.scrollBy({ top: -50, left: 0 });
      }
    }, 100);
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