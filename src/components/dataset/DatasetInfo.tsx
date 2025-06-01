'use client';

import { DatasetMetadata } from '@/types/dataset';

interface DatasetInfoProps {
  dataset: DatasetMetadata;
}

export default function DatasetInfo({ dataset }: DatasetInfoProps) {
  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <h3 className="text-xl font-medium">
            {dataset.name} {dataset.year}
          </h3>
        </div>
        <p className="text-gray-600">{dataset.description}</p>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-900 mb-4">Data Domains</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-sm text-gray-600">Environmental Burden</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-sm text-gray-600">Social Vulnerability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-sm text-gray-600">Health Vulnerability</span>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-200">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-md hover:bg-emerald-100 transition-colors"
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