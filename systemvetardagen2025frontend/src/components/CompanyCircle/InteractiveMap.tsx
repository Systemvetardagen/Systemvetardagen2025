import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { companies } from './Company';

const InteractiveMap: React.FC = () => {
  const { companyId } = useParams<Record<string, string | undefined>>();
  const mapRef = useRef<HTMLImageElement>(null);
  const [, setMapDimensions] = useState({ width: 0, height: 0 });

  const markerSize = 200; // Size in pixels, can be adjusted as needed
const markerScale = 1.25; // Scale factor, 1.25 means 125%
  
  // Parse companyId, ensure type consistency
  const selectedCompanyId = companyId ? companyId : null;
  
  useEffect(() => {
    // Get actual dimensions of the loaded image
    if (mapRef.current && mapRef.current.complete) {
      setMapDimensions({
        width: mapRef.current.naturalWidth,
        height: mapRef.current.naturalHeight
      });
    }
  }, []);
  
  // Handle image load event to get dimensions
  const handleImageLoad = () => {
    if (mapRef.current) {
      setMapDimensions({
        width: mapRef.current.naturalWidth,
        height: mapRef.current.naturalHeight
      });
    }
  };
  
  // Convert SVG coordinates to relative percentages based on actual dimensions
  const getRelativePosition = (position: { top: number; left: number }) => {
    return {
      top: `${(position.top / 3631) * 100}%`,  // Use SVG's actual width (3631px from your comment)
      left: `${(position.left / 2079) * 100}%`,  // Use SVG's actual height (2079px from your comment)
    };
  };
  
  return (
    <div className="max-w-[90vw] relative" id="map-section">
      {/* Background map */}
      <img
        ref={mapRef}
        src="/svgs/floormap.svg"
        alt="Floor Map 2024"
        className="w-full h-full object-contain"
        onLoad={handleImageLoad}
      />
      
      {/* Only show markers for valid companyId */}
      {selectedCompanyId && companies.map((company) => {
        if (company.id === selectedCompanyId) {
          const position = getRelativePosition(company.position);
          return (
            <div
              key={company.id}
              className="absolute -mt-3 -ml-3 rounded-full border-2 border-red-500"
              style={{
                top: position.top,
                left: position.left,
                backgroundColor: 'transparent',
                width: `${markerSize}px`,
                height: `${markerSize}px`,
                transform: `scale(${markerScale})`
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