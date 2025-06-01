export interface DatasetMetadata {
  name: string;
  year: string;
  description: string;
  data?: Record<string, unknown>;
  dataDictionary?: DataDictionaryEntry[];
}

export interface DataDictionaryEntry {
  variable: string;
  description: string;
  module: string;
  domain: string;
} 