'use client';

import { useEffect, useState } from 'react';
import { loadDataDictionary } from '@/utils/dataLoader';
import { DatasetMetadata } from '@/types/dataset';

interface DataDictionaryProps {
  dataset: DatasetMetadata;
}

export default function DataDictionary({ dataset }: DataDictionaryProps) {
  const [dictionary, setDictionary] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Helper function to get the correct column names based on year
  const getColumnNames = (year: string) => {
    // For 2022 dataset, use different column names
    if (year === '2022') {
      return {
        variableName: '2022 VARIABLE NAME',
        variableDescription: '2022 DESCRIPTION',
        module: 'MODULE',
        domain: 'DOMAIN'
      };
    }
    // For 2024 dataset
    return {
      variableName: `${year} VARIABLE NAME`,
      variableDescription: `${year} VARIABLE DESCRIPTION`,
      module: 'MODULE',
      domain: 'DOMAIN'
    };
  };

  const loadDictionary = async () => {
    try {
      setLoading(true);
      setError(null);
      const dictionary = await loadDataDictionary(dataset.year);
      setDictionary(dictionary);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data dictionary');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dataset?.year) {
      loadDictionary();
    }
  }, [dataset]);

  if (!dataset) {
    return null;
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <span className="ml-3 text-gray-600">Loading data dictionary...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="text-red-500 mb-2">Error: {error}</div>
          <div className="text-sm text-gray-600">
            Attempted to load: /data/{dataset.name}_{dataset.year}/{dataset.name}_DATADICTIONARY_{dataset.year}.json
          </div>
        </div>
      </div>
    );
  }

  if (!dictionary?.data) {
    return (
      <div className="p-6">
        <div className="bg-yellow-50 rounded-md p-4" style={{ border: '2px solid var(--color-gold)' }}>
          <div style={{ color: 'var(--color-gold)', fontWeight: 600 }}>No data available</div>
          <div className="text-sm mt-1" style={{ color: 'var(--color-gold)' }}>
            The data dictionary structure appears to be invalid or empty.
          </div>
        </div>
      </div>
    );
  }

  const columns = getColumnNames(dataset.year);
  const filteredData = dictionary.data.filter((item: any) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      item[columns.variableName]?.toLowerCase().includes(searchLower) ||
      item[columns.variableDescription]?.toLowerCase().includes(searchLower) ||
      item[columns.module]?.toLowerCase().includes(searchLower) ||
      item[columns.domain]?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Data Dictionary
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search variables..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden border border-gray-200 rounded-lg">
        <div className="h-[calc(100vh-300px)] overflow-auto custom-scrollbar">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Variable
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Module
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Domain
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.map((item: any, index: number) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item[columns.variableName]}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item[columns.variableDescription]}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item[columns.module]}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {item[columns.domain]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 