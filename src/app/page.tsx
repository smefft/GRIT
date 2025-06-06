'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { datasets } from '@/utils/dataLoader';
import { DatasetMetadata } from '@/types/dataset';
import { DATASET_NAMES } from '@/constants/datasets';
import { useDatasetSelection } from '@/hooks/useDatasetSelection';
import Header from '@/components/layout/Header';
import DatasetInfo from '@/components/dataset/DatasetInfo';
import TabNavigation from '@/components/navigation/TabNavigation';
import TabContent from '@/components/layout/TabContent';
import React from 'react';
import Link from 'next/link';
import DatasetCard from '@/components/dataset/DatasetCard';

// Featured dataset card component
function FeaturedDatasetCard({ dataset, onSelect }: { dataset: DatasetMetadata, onSelect: (dataset: DatasetMetadata) => void }) {
  return (
    <div
      className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 p-6 group focus:outline-none focus:ring-2 focus:ring-teal-400 hover:scale-[1.02] cursor-pointer"
      style={{ textDecoration: 'none' }}
      onClick={() => onSelect(dataset)}
      tabIndex={0}
      role="button"
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onSelect(dataset); }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1.5 h-7 rounded-full" style={{ background: 'var(--color-teal)' }} />
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
          {dataset.name}
        </h3>
      </div>
      <p className="text-gray-600 text-sm mb-3">{dataset.description}</p>
    </div>
  );
}

export default function Home() {
  const { selectedDataset, setSelectedDataset } = useDatasetSelection();
  const [activeTab, setActiveTab] = useState<'visualization' | 'dictionary'>('visualization');

  const handleYearChange = (year: string) => {
    if (selectedDataset) {
      setSelectedDataset({
        ...selectedDataset,
        year
      });
    }
  };

  // Pick up to 3 featured datasets
  const featured = datasets.slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50" style={{ overflowX: 'hidden' }}>
      <Header
        selectedDataset={selectedDataset}
        onSelect={setSelectedDataset}
        datasets={datasets.filter(d => d.name !== DATASET_NAMES.PLACEHOLDER)}
      />

      {selectedDataset ? (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="card p-6">
                <DatasetInfo 
                  dataset={selectedDataset} 
                  onYearChange={handleYearChange}
                />
              </div>
            </div>
            <div className="lg:col-span-2 card p-6">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
              <TabContent activeTab={activeTab} dataset={selectedDataset} />
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section - Unique Design */}
          <section
            className="hero-diagonal-bg w-full px-0"
            style={{
              position: 'relative',
              overflow: 'visible',
              minHeight: '80vh',
              height: '80vh',
              paddingTop: 0,
              paddingBottom: 0,
              display: 'flex',
              alignItems: 'stretch',
              maxWidth: '100vw',
            }}
          >
            <div
              className="hero-card"
              style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: 0,
                marginLeft: '-400px',
                boxShadow: 'none',
                background: 'var(--color-bg)',
                border: 'none',
                padding: '3rem 2.5rem 0 2.5rem',
                maxWidth: 540,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
              }}
            >
              <h1 className="hero-headline-unique" style={{ marginBottom: '1.2rem' }}>
                Explore Data.<br />
                <span className="accent" style={{ display: 'block', marginBottom: '0.2em' }}>Inspire Change.</span>
                <span style={{ fontWeight: 700, color: 'var(--color-teal)', display: 'block', marginBottom: '1.2rem' }}>
                  Environmental insights for a brighter tomorrow.
                </span>
              </h1>
              <div
                className="hero-description-unique"
                style={{
                  marginBottom: '1.2rem',
                  fontSize: '1.22rem',
                  lineHeight: 1.8,
                  color: '#374151',
                }}
              >
                Dive into interactive maps and analytics that empower communities and decision-makers to create a sustainable future.
              </div>
              <button
                className="hero-btn-unique"
                type="button"
                onClick={() => {
                  const el = document.getElementById('featured-datasets');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore Now
                <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '0.2em'}}><path d="M6 11h10m0 0l-4-4m4 4l-4 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
            <img
              src="/assets/flowers.png"
              alt="Flower illustration"
              style={{
                position: 'absolute',
                right: '-100px',
                bottom: '-80px',
                width: '650px',
                minWidth: 340,
                maxWidth: '100vw',
                opacity: 0.92,
                boxShadow: 'none',
                transform: 'rotate(-70deg) scaleX(-1)',
                zIndex: 3,
                pointerEvents: 'none',
              }}
            />
          </section>

          {/* Featured Datasets Section */}
          <section id="featured-datasets" className="w-full max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-left">
              Featured Datasets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {featured.map(ds => (
                <FeaturedDatasetCard key={ds.name} dataset={ds} onSelect={setSelectedDataset} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
