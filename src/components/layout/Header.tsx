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
    <header className="relative border-b border-white/10 backdrop-blur-sm bg-black/20">
      <div className="max-w-[1400px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            <h1 className="text-2xl font-light tracking-tight text-white">GRIT Lab</h1>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onSelect(null)}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
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