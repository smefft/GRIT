'use client';

import { DatasetMetadata } from '@/types/dataset';
import { availableYears } from '@/utils/dataLoader';

interface DatasetSelectorProps {
  selectedDataset: DatasetMetadata | null;
  onSelect: (dataset: DatasetMetadata) => void;
  datasets: DatasetMetadata[];
}

export default function DatasetSelector({ selectedDataset, onSelect, datasets }: DatasetSelectorProps) {
  const handleYearChange = (year: string) => {
    if (selectedDataset) {
      onSelect({
        ...selectedDataset,
        year
      });
    }
  };

  return (
    <div className="flex items-center gap-4">
      <select
        value={selectedDataset ? selectedDataset.name : ''}
        onChange={(e) => {
          const name = e.target.value;
          const dataset = datasets.find(d => d.name === name);
          if (dataset) {
            onSelect({
              ...dataset,
              year: selectedDataset?.year || '2024'
            });
          }
        }}
        className="text-sm border-0 bg-transparent text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-0"
      >
        <option value="">Select a dataset...</option>
        {datasets.map(dataset => (
          <option key={dataset.name} value={dataset.name}>
            {dataset.name}
          </option>
        ))}
      </select>

      {selectedDataset && (
        <select
          value={selectedDataset.year}
          onChange={(e) => handleYearChange(e.target.value)}
          className="text-sm border-0 bg-transparent text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-0"
        >
          {availableYears.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      )}
    </div>
  );
} 