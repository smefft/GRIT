'use client';

import { DatasetMetadata } from '@/utils/dataLoader';

interface VisualizationTabProps {
  dataset: DatasetMetadata;
}

export default function VisualizationTab({ dataset }: VisualizationTabProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Visualization Controls</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Variables
            </label>
            <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300 transition-colors">
              <option>Select variables...</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Visualization Type
            </label>
            <select className="w-full border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-300 transition-colors">
              <option>Select type...</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="aspect-video bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center">
          <p className="text-gray-500 text-center">
            Select variables and visualization type to begin
          </p>
        </div>
      </div>
    </div>
  );
} 