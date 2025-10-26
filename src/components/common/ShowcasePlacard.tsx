import { Button } from '@/components/ui/button';
import data from '@/data/placard-showcase.json';
import React from 'react';

export const ShowcasePlacard: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left copy */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-ww-gray-900 mb-3">
            {data.title}
          </h2>
          <p className="text-ww-gray-700 leading-relaxed mb-5 max-w-[65ch] mx-auto md:mx-0">
            {data.text}
          </p>
          <Button 
            asChild 
            className="bg-ww-blue-800 hover:bg-ww-blue-900 text-white md:inline-flex hidden"
          >
            <a href={data.cta.href}>{data.cta.label}</a>
          </Button>
          <Button 
            asChild 
            variant="ghost"
            className="text-ww-blue-600 hover:text-ww-blue-700 hover:bg-transparent md:hidden inline-flex"
          >
            <a href={data.cta.href} className="flex items-center gap-2">
              {data.cta.label}
              <span className="text-xl">→</span>
            </a>
          </Button>
        </div>

        {/* Right swastik arrangement - Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-6">
            {/* Left column (small on top, large below) */}
            <div className="grid gap-6" style={{ gridTemplateRows: '140px 300px' }}>
              <div className="rounded-lg overflow-hidden">
                <img src={data.images[0]} alt="showcase 1" className="h-full w-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src={data.images[2]} alt="showcase 3" className="h-full w-full object-cover" />
              </div>
            </div>
            {/* Right column (large on top, small below) */}
            <div className="grid gap-6" style={{ gridTemplateRows: '300px 140px' }}>
              <div className="rounded-lg overflow-hidden">
                <img src={data.images[1]} alt="showcase 2" className="h-full w-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src={data.images[3]} alt="showcase 4" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: stacked with two images side-by-side at bottom */}
        <div className="md:hidden col-span-1">
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img src={data.images[1]} alt="showcase mobile 3" className="h-full w-full object-cover" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src={data.images[3]} alt="showcase mobile 4" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcasePlacard;
