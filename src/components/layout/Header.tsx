'use client';

import { DatasetMetadata } from '@/types/dataset';
import DatasetSelector from '../dataset/DatasetSelector';

interface HeaderProps {
  selectedDataset: DatasetMetadata | null;
  onSelect: (dataset: DatasetMetadata | null) => void;
  datasets: DatasetMetadata[];
}

export default function Header({ selectedDataset, onSelect, datasets }: HeaderProps) {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-6 bg-emerald-500" />
            <h1 className="text-xl font-light tracking-tight">GRIT Lab</h1>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onSelect(null)}
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              Home
            </button>
            <DatasetSelector
              selectedDataset={selectedDataset}
              onSelect={onSelect}
              datasets={datasets}
            />
          </div>
        </div>
      </div>
    </header>
  );
} 