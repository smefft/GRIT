'use client';

import { useState } from 'react';
import { datasets } from '@/utils/dataLoader';
import { DatasetMetadata } from '@/types/dataset';
import { DATASET_NAMES } from '@/constants/datasets';
import { useDatasetSelection } from '@/hooks/useDatasetSelection';
import Header from '@/components/layout/Header';
import DatasetInfo from '@/components/dataset/DatasetInfo';
import TabNavigation from '@/components/navigation/TabNavigation';
import TabContent from '@/components/layout/TabContent';

export default function Home() {
  const { selectedDataset, setSelectedDataset } = useDatasetSelection();
  const [activeTab, setActiveTab] = useState<'visualization' | 'dictionary'>('visualization');

  return (
    <main className="min-h-screen bg-white">
      <Header
        selectedDataset={selectedDataset}
        onSelect={setSelectedDataset}
        datasets={datasets.filter(d => d.name !== DATASET_NAMES.PLACEHOLDER)}
      />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedDataset ? (
          <div className="space-y-12">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-light tracking-tight mb-4">
                Data Explorer
              </h1>
              <p className="text-lg text-gray-600">
                Select a dataset to begin your analysis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {datasets.map((dataset) => (
                <div
                  key={`${dataset.name}_${dataset.year}`}
                  className={`group relative block w-full text-left p-8 border border-gray-200 ${
                    dataset.name !== DATASET_NAMES.PLACEHOLDER ? 'hover:border-gray-300 transition-colors cursor-pointer' : ''
                  }`}
                  onClick={() => dataset.name !== DATASET_NAMES.PLACEHOLDER && setSelectedDataset(dataset)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <h3 className="text-xl font-medium">
                          {dataset.name} {dataset.year}
                        </h3>
                      </div>
                      <p className="text-gray-600">{dataset.description}</p>
                    </div>
                    {dataset.name !== DATASET_NAMES.PLACEHOLDER && (
                      <div className="text-gray-400 group-hover:text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {dataset.name !== DATASET_NAMES.PLACEHOLDER && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity -z-10 bg-emerald-50" />
                  )}
                </div>
              ))}
            </div>

            <div className="max-w-2xl pt-8 border-t border-gray-200">
              <h2 className="text-xl font-medium mb-4">About</h2>
              <p className="text-gray-600 mb-4">
                This tool provides a platform for exploring and analyzing various datasets. 
                More features and capabilities will be added as development continues.
              </p>
              <p className="text-sm text-gray-500 italic">
                This is a work in progress. Features and functionality may change as development continues.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <DatasetInfo dataset={selectedDataset} />
            </div>
            <div className="lg:col-span-2">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
              <TabContent activeTab={activeTab} dataset={selectedDataset} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 