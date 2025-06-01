'use client';

type Tab = 'visualization' | 'dictionary';

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex">
        <button
          onClick={() => onTabChange('visualization')}
          className={`px-6 py-4 text-sm font-medium border-b-2 ${
            activeTab === 'visualization'
              ? 'border-emerald-500 text-emerald-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Visualization
        </button>
        <button
          onClick={() => onTabChange('dictionary')}
          className={`px-6 py-4 text-sm font-medium border-b-2 ${
            activeTab === 'dictionary'
              ? 'border-emerald-500 text-emerald-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          }`}
        >
          Data Dictionary
        </button>
      </nav>
    </div>
  );
} 