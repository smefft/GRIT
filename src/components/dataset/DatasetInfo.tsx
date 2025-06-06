'use client';

import { DatasetMetadata } from '@/types/dataset';
import { availableYears } from '@/utils/dataLoader';

interface DatasetInfoProps {
  dataset: DatasetMetadata;
  onYearChange: (year: string) => void;
}

export default function DatasetInfo({ dataset, onYearChange }: DatasetInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1 h-6 rounded-full" style={{ background: 'var(--color-gold)' }} />
          <h3 className="text-xl font-medium text-gray-900">
            {dataset.name}
          </h3>
        </div>
        <p className="text-gray-600">{dataset.description}</p>
      </div>

      {/* Year Selection */}
      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Dataset Version</h4>
        <div className="flex gap-2">
          {availableYears.map(year => (
            <button
              key={year}
              onClick={() => onYearChange(year)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                dataset.year === year
                  ? 'text-white shadow-sm'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
              style={dataset.year === year ? { background: 'var(--color-gold)', border: '2px solid var(--color-gold)' } : {}}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Data Domains</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm text-gray-600">Environmental Burden</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm text-gray-600">Social Vulnerability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm text-gray-600">Health Vulnerability</span>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-all duration-200 shadow-sm"
          onClick={() => {
            // Download functionality will be implemented later
            console.log('Download clicked');
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Data
        </button>
      </div>
    </div>
  );
} 