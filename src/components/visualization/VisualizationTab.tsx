'use client';

import { DatasetMetadata } from '@/types/dataset';
import ArcGISMap from './ArcGISMap';

interface VisualizationTabProps {
  dataset: DatasetMetadata;
}

export default function VisualizationTab({ dataset }: VisualizationTabProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">Map Visualization</h3>
          <p className="text-sm text-gray-500 mt-1">
            Interactive map showing data distribution across regions
          </p>
        </div>
        
        <div className="relative h-[600px]">
          <ArcGISMap dataset={dataset} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Layer Selection</h3>
          <div className="space-y-4">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox text-primary" />
              <span className="text-sm text-gray-700">Show Data Points</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="form-checkbox text-primary" defaultChecked />
              <span className="text-sm text-gray-700">Show County Boundaries</span>
            </label>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Data Filters</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Value Range
              </label>
              <select className="modern-input w-full">
                <option>All Values</option>
                <option>High Risk (Top 25%)</option>
                <option>Medium Risk (25-75%)</option>
                <option>Low Risk (Bottom 25%)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Geographic Region
              </label>
              <select className="modern-input w-full">
                <option>All Regions</option>
                <option>Northeast</option>
                <option>Southeast</option>
                <option>Midwest</option>
                <option>Southwest</option>
                <option>West</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 