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

  const handleYearChange = (year: string) => {
    if (selectedDataset) {
      setSelectedDataset({
        ...selectedDataset,
        year
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <Header
        selectedDataset={selectedDataset}
        onSelect={setSelectedDataset}
        datasets={datasets.filter(d => d.name !== DATASET_NAMES.PLACEHOLDER)}
      />
      
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedDataset ? (
          <div className="space-y-12">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold tracking-tight mb-4 gradient-text">
                Environmental Justice Index
              </h1>
              <p className="text-xl text-gray-300">
                Explore and analyze environmental justice data across the United States
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {datasets.map((dataset) => (
                <div
                  key={`${dataset.name}_${dataset.year}`}
                  className={`glass-card relative block w-full text-left p-8 transition-all duration-300 ${
                    dataset.name !== DATASET_NAMES.PLACEHOLDER ? 'hover:scale-[1.02] cursor-pointer' : ''
                  }`}
                  onClick={() => dataset.name !== DATASET_NAMES.PLACEHOLDER && setSelectedDataset(dataset)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                        <h3 className="text-xl font-medium text-white">
                          {dataset.name}
                        </h3>
                      </div>
                      <p className="text-gray-300">{dataset.description}</p>
                    </div>
                    {dataset.name !== DATASET_NAMES.PLACEHOLDER && (
                      <div className="text-gray-400 group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-2xl pt-8 border-t border-white/10">
              <h2 className="text-xl font-medium mb-4 text-white">About the Project</h2>
              <p className="text-gray-300 mb-4">
                This tool provides a comprehensive platform for exploring and analyzing environmental justice data. 
                Visualize patterns, compare regions, and understand the intersection of environmental factors and social vulnerability.
              </p>
              <p className="text-sm text-gray-400 italic">
                A research project by GRIT Lab
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="glass-card p-6">
                <DatasetInfo 
                  dataset={selectedDataset} 
                  onYearChange={handleYearChange}
                />
              </div>
            </div>
            <div className="lg:col-span-2 glass-card p-6">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
              <TabContent activeTab={activeTab} dataset={selectedDataset} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 