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
    <header className="sticky top-0 z-50 header">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 accent-bar rounded-full" />
            <h1 className="text-xl font-semibold tracking-tight text-gray-900">
              GRIT Lab
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(null)}
              className="home-link"
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