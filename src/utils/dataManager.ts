import { DatasetMetadata } from '@/types/dataset';

export const DATA_DIRECTORY = '/data';

export const getDataPath = (year: string) => `${DATA_DIRECTORY}/EJI_DATA_${year}`;

export const getDataDictionaryPath = (year: string) => 
  `${getDataPath(year)}/EJI_DATADICTIONARY_${year}.json`;

export const getDataFilePath = (year: string) => 
  `${getDataPath(year)}/EJI_${year}_United_States.json`;

export const validateDataFiles = async (year: string): Promise<boolean> => {
  try {
    const dictPath = getDataDictionaryPath(year);
    const dataPath = getDataFilePath(year);
    
    const [dictResponse, dataResponse] = await Promise.all([
      fetch(dictPath),
      fetch(dataPath)
    ]);
    
    return dictResponse.ok && dataResponse.ok;
  } catch (error) {
    console.error(`Error validating data files for ${year}:`, error);
    return false;
  }
}; 