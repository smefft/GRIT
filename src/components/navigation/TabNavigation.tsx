'use client';

type Tab = 'visualization' | 'dictionary';

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  accentColor?: string;
}

export default function TabNavigation({ activeTab, onTabChange, accentColor }: TabNavigationProps) {
  const gold = accentColor || 'var(--color-gold)';
  const green = 'var(--color-teal)';
  return (
    <div className="border-b border-gray-200">
      <nav className="flex gap-2">
        <button
          onClick={() => onTabChange('visualization')}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-200 border-b-2 ${activeTab === 'visualization' ? 'text-primary' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
          style={activeTab === 'visualization' ? { borderBottomColor: gold, color: green } : {}}
        >
          Visualization
        </button>
        <button
          onClick={() => onTabChange('dictionary')}
          className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-200 border-b-2 ${activeTab === 'dictionary' ? 'text-primary' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
          style={activeTab === 'dictionary' ? { borderBottomColor: gold, color: green } : {}}
        >
          Data Dictionary
        </button>
      </nav>
    </div>
  );
} 