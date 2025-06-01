import { useState, useEffect } from 'react';
import { DatasetMetadata } from '@/types/dataset';
import { datasets } from '@/utils/dataLoader';

export function useDatasetSelection() {
  const [selectedDataset, setSelectedDataset] = useState<DatasetMetadata | null>(null);

  // Load selected dataset from localStorage on mount
  useEffect(() => {
    const savedDataset = localStorage.getItem('selectedDataset');
    if (savedDataset) {
      const [name, year] = savedDataset.split('_');
      const dataset = datasets.find((d: DatasetMetadata) => d.name === name && d.year === year);
      if (dataset) {
        setSelectedDataset(dataset);
      }
    }
  }, []);

  // Save selected dataset to localStorage when it changes
  useEffect(() => {
    if (selectedDataset) {
      localStorage.setItem('selectedDataset', `${selectedDataset.name}_${selectedDataset.year}`);
    } else {
      localStorage.removeItem('selectedDataset');
    }
  }, [selectedDataset]);

  return {
    selectedDataset,
    setSelectedDataset
  };
} 