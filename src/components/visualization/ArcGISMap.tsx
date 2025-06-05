import React from 'react';

interface ArcGISMapProps {
  year: string;
}

const ArcGISMap: React.FC<ArcGISMapProps> = ({ year }) => {
  return (
    <div className="w-full h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Placeholder for ArcGIS Web AppBuilder */}
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
        <div className="text-lg font-semibold text-gray-700 mb-2">
          ArcGIS Web AppBuilder Visualization
        </div>
        <div className="text-sm text-gray-500">
          {`Displaying EJI Data for ${year}`}
        </div>
        {/* This div will be replaced with the actual iframe */}
        <div className="mt-4 p-4 bg-gray-200 rounded">
          <p className="text-sm text-gray-600">
            Placeholder: ArcGIS Web AppBuilder will be integrated here
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArcGISMap; 