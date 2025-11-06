import data from '@/data/properties.json';
import React from 'react';
import { PropertyCard } from './PropertyCard';

interface Props {
  type?: 'residential' | 'commercial' | 'land';
  title?: string;
  showCta?: boolean; // controls rendering of header CTA (e.g., "More")
  mobileStack?: boolean; // when true, mobile view stacks vertically instead of horizontal scroll
  limit?: number; // max items to show on desktop; default 3
}

export const PropertiesSection: React.FC<Props> = ({ type, title, showCta = true, mobileStack = false, limit = 3 }) => {
  const items = type ? (data.items as any[]).filter((p) => p.type === type) : (data.items as any[]);
  const sectionTitle = title ?? (type ? (type === 'commercial' ? 'Commercial' : type === 'land' ? 'Land Development' : 'Residential') : data.title);
  const desktopItems = Number.isFinite(limit) ? items.slice(0, limit) : items;

  return (
    <section aria-labelledby="properties-title" className="bg-gradient-to-b from-white to-ww-gray-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header - Desktop */}
        <div className="hidden md:flex items-center mb-6">
          <h2 id="properties-title" className="text-2xl md:text-3xl text-ww-gray-900 whitespace-nowrap">
            {sectionTitle}
          </h2>
          <div className="mx-4 h-[2px] bg-ww-blue-300 flex-1" />
          {showCta && data.cta?.href && (
            <a href={data.cta.href} className="text-base text-ww-blue-700 hover:underline whitespace-nowrap">
              {data.cta.label}
            </a>
          )}
          <div className={(showCta && data.cta?.href ? 'ml-4 ' : 'ml-0 ') + 'flex items-center gap-0 flex-shrink-0'}>
            <div className={"h-[2px] w-28 " + (showCta && data.cta?.href ? 'bg-ww-gray-400' : 'hidden bg-ww-blue-300')} />
            <div className="ml-4 h-16 w-16 rounded-full border border-ww-gray-700 flex items-center justify-center">
              <span className="h-2 w-2 rounded-full bg-ww-gray-700" />
            </div>
          </div>
        </div>

        {/* Header - Mobile simple */}
        <div className="flex md:hidden items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-ww-gray-900">{sectionTitle}</h2>
          {showCta && data.cta?.href && (
            <a href={data.cta.href} className="text-sm text-ww-blue-700 hover:underline">
              {data.cta.label}
            </a>
          )}
        </div>

        {/* Desktop vertical list */}
        <div className="hidden md:flex flex-col gap-6">
          {desktopItems.map((item: any) => (
            <PropertyCard key={item.id} item={item} />
          ))}
        </div>

        {/* Mobile layout */}
        {mobileStack ? (
          <div className="md:hidden flex flex-col gap-4">
            {items.map((item: any) => (
              <PropertyCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="md:hidden no-scrollbar overflow-x-auto" style={{ padding: '12px 16px' }}>
            <div className="flex" style={{ gap: '12px' }}>
              {items.map((item: any) => (
                <div key={item.id} className="shrink-0 w-[280px]">
                  <PropertyCard item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;
