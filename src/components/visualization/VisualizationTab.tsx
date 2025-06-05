'use client';

import { DatasetMetadata } from '@/types/dataset';
import ArcGISMap from './ArcGISMap';

interface VisualizationTabProps {
  dataset: DatasetMetadata;
}

export default function VisualizationTab({ dataset }: VisualizationTabProps) {
  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <ArcGISMap year={dataset.year} />
      </div>

      {/* Layer and Filter Controls */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Map Controls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Layer Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Layer Selection
            </h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600">Environmental Indicators</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600">Social Vulnerability</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600">Health Index</span>
              </label>
            </div>
          </div>

          {/* Filters */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Data Filters
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Value Range</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Values</option>
                  <option>High Risk (Top 25%)</option>
                  <option>Medium Risk (25-75%)</option>
                  <option>Low Risk (Bottom 25%)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Geographic Region</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
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
    </div>
  );
} 