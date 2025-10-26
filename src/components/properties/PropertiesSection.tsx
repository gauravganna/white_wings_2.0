import data from '@/data/properties.json';
import React from 'react';
import { PropertyCard } from './PropertyCard';

export const PropertiesSection: React.FC = () => {
  return (
    <section aria-labelledby="properties-title" className="bg-gradient-to-b from-white to-ww-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header - Desktop */}
        <div className="hidden md:flex items-center mb-6">
          <h2 id="properties-title" className="text-2xl md:text-3xl text-ww-gray-900 whitespace-nowrap">
            {data.title}
          </h2>
          <div className="mx-4 h-[2px] bg-ww-blue-300 flex-1" />
          {data.cta?.href && (
            <a href={data.cta.href} className="text-base text-ww-blue-700 hover:underline whitespace-nowrap">
              {data.cta.label}
            </a>
          )}
          <div className="ml-4 flex items-center gap-0 flex-shrink-0">
            <div className="h-[2px] w-28 bg-ww-gray-400" />
            <div className="ml-4 h-16 w-16 rounded-full border border-ww-gray-700 flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-ww-gray-700" />
            </div>
          </div>
        </div>

        {/* Header - Mobile simple */}
        <div className="flex md:hidden items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-ww-gray-900">{data.title}</h2>
          {data.cta?.href && (
            <a href={data.cta.href} className="text-sm text-ww-blue-700 hover:underline">
              {data.cta.label}
            </a>
          )}
        </div>

        {/* Desktop vertical list (max 3 cards visible) */}
        <div className="hidden md:flex flex-col gap-6">
          {data.items.slice(0, 3).map((item) => (
            <PropertyCard key={item.id} item={item as any} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden no-scrollbar overflow-x-auto" style={{ padding: '12px 16px' }}>
          <div className="flex" style={{ gap: '12px' }}>
            {data.items.map((item) => (
              <div key={item.id} className="shrink-0 w-[280px]">
                <PropertyCard item={item as any} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
