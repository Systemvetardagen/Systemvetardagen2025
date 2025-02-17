import React from 'react';
import { useParams } from 'react-router-dom';
import { companies } from './Company';


const InteractiveMap: React.FC = () => {
  const { companyId } = useParams<Record<string, string | undefined>>();

  // 解析 companyId，确保类型一致
  const selectedCompanyId = companyId ? companyId : null;


  // 将 SVG 坐标转换为相对百分比
  const getRelativePosition = (position: { top: number; left: number }) => {
    const viewportSize = 2000; // 假设 SVG 视口为 2000px
    return {
      top: `${(position.top / viewportSize) * 100}%`,
      left: `${(position.left / viewportSize) * 100}%`,
    };
  };

  return (
    <div className="max-w-[90vw] relative" id="map-section">
      {/* 背景地图 */}
      <img
        src="/svgs/floormap.svg"
        alt="Floor Map 2024"
        className="w-full h-full object-contain"
      />

      {/* 仅当存在有效 companyId 时，显示对应公司的位置圈 */}
      {selectedCompanyId && companies.map((company) => {
  if (company.id === selectedCompanyId) {
    const position = getRelativePosition(company.position);
    return (
      <div
        key={company.id}
        className="absolute w-6 h-6 -mt-3 -ml-3 rounded-full border-2 border-red-500 scale-125"
        style={{
          ...position,
          backgroundColor: 'transparent'  // Remove the background fill
        }}
      />
    );
  }
  return null;
})}
    </div>
  );
};

export default InteractiveMap;