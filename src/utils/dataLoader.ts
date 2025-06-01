import { DatasetMetadata, DataDictionaryEntry } from '@/types/dataset';
import { getDataDictionaryPath, getDataFilePath, validateDataFiles } from './dataManager';

export const datasets: DatasetMetadata[] = [
  {
    name: 'EJI',
    year: '2024',
    description: 'The Environmental Justice Index (EJI) combines environmental, social, and health data to identify areas of environmental injustice. Select between 2024 and 2022 data using the year dropdown in the top right.'
  },
  {
    name: 'Placeholder',
    year: '2024',
    description: 'This is a placeholder dataset to demonstrate the layout with multiple options.'
  }
];

export const availableYears = ['2024', '2022'];

export async function loadDataDictionary(year: string): Promise<DataDictionaryEntry[]> {
  try {
    const path = getDataDictionaryPath(year);
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load data dictionary for ${year}: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading data dictionary for ${year}:`, error);
    throw error;
  }
}

export async function loadData(year: string): Promise<Record<string, unknown>> {
  try {
    const response = await fetch(getDataFilePath(year));
    if (!response.ok) {
      throw new Error(`Failed to load data for ${year}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading data for ${year}:`, error);
    throw error;
  }
}

export async function initializeDataset(dataset: DatasetMetadata): Promise<DatasetMetadata> {
  try {
    const isValid = await validateDataFiles(dataset.year);
    if (!isValid) {
      throw new Error(`Data files not found for ${dataset.year}`);
    }

    const [data, dataDictionary] = await Promise.all([
      loadData(dataset.year),
      loadDataDictionary(dataset.year)
    ]);

    return {
      ...dataset,
      data,
      dataDictionary
    };
  } catch (error) {
    console.error(`Error initializing dataset ${dataset.year}:`, error);
    throw error;
  }
} 