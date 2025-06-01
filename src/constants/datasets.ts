export const AVAILABLE_YEARS = ['2024', '2022'] as const;
export type AvailableYear = typeof AVAILABLE_YEARS[number];

export const DATASET_NAMES = {
  EJI: 'EJI',
  PLACEHOLDER: 'Placeholder'
} as const; 