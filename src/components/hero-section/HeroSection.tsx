import { Button } from '@/components/ui/button';
import data from '@/data/hero-section.json';
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section aria-label="Homepage hero" className="bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16 space-y-10">
        {/* Top: Content left, angled marquee right (desktop); mobile shows marquee top */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden px-8">
          {/* Mobile: marquee on top (single image, horizontal scroll animation) */}
          <div className="md:hidden order-1">
            <div className="mx-auto w-[375px] h-[280px] overflow-hidden border-y border-ww-gray-300">
              <div className="flex items-center h-full animate-marquee-right will-change-transform" aria-hidden="true" style={{ width: '200%' }}>
                <img src={data.carouselImage} alt="" className="h-full w-1/2 object-cover" loading="lazy" />
                <img src={data.carouselImage} alt="" className="h-full w-1/2 object-cover" loading="lazy" />
              </div>
            </div>
          </div>

          {/* Left: content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-semibold text-ww-gray-900 tracking-tight mb-4">
              {data.title}
            </h1>
            <p className="text-ww-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-[60ch]">
              {data.subtitle}
            </p>
            <Button asChild className="bg-ww-blue-800 hover:bg-ww-blue-900 text-white">
              <a href={data.cta.href}>{data.cta.label}</a>
            </Button>
          </div>

          {/* Right: tilted carousel (desktop only) */}
          <div className="hidden md:block order-1 md:order-2">
            <div className="relative w-full h-[360px] ">
              {/* Absolute overlay with tilt and animated track */}
              <div className="absolute inset-0 w-full z-[5] pointer-events-none ">
                <div className="absolute top-24 right-0 w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Tilted container — 315deg rotation */}
                    <div className="absolute inset-0 rotate-[320deg] scale-[3] origin-center">
                      {/* Carousel track — repeat single image for seamless loop */}
                      <div className="flex h-full items-center animate-marquee-right will-change-transform" aria-hidden="true" style={{ width: '300%' }}>
                        <img src={data.carouselImage} alt="Properties Carousel" className="carousel-item flex-shrink-0 h-auto w-auto max-h-full object-contain" />
                        <img src={data.carouselImage} alt="Properties Carousel" className="carousel-item flex-shrink-0 h-auto w-auto max-h-full object-contain" />
                        <img src={data.carouselImage} alt="Properties Carousel" className="carousel-item flex-shrink-0 h-auto w-auto max-h-full object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom grid of 3 equally spaced images */}
        <div className="hidden md:grid grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {data.gridImages.map((src: string, i: number) => (
            <div key={i} className="xl overflow-hidden bg-ww-gray-100">
              <img src={src} alt="" className="w-full h-56 md:h-64 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


