'use client';

import { DatasetMetadata } from '@/types/dataset';
import VisualizationTab from '../visualization/VisualizationTab';
import DataDictionary from '../dataset/DataDictionary';
import TabNavigation from '../navigation/TabNavigation';

interface TabContentProps {
  activeTab: 'visualization' | 'dictionary';
  dataset: DatasetMetadata;
}

export default function TabContent({ activeTab, dataset }: TabContentProps) {
  return (
    <div className="mt-4">
      {activeTab === 'visualization' ? (
        <VisualizationTab dataset={dataset} />
      ) : (
        <DataDictionary dataset={dataset} />
      )}
    </div>
  );
} 