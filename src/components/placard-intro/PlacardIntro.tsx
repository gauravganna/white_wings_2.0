import { Button } from '@/components/ui/button';
import data from '@/data/placard-intro.json';
import React from 'react';

export const PlacardIntro: React.FC = () => {
  return (
    <section className="bg-white md:mx-6 md:px-8 text-center md:text-left">
      <div className="container mx-auto px-4 py-8 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 gap-4 items-center">
          {/* Left: Image Mosaic - Desktop */}
          <div className="hidden md:block order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Top row: two equal images */}
              <div className="rounded-lg overflow-hidden h-[240px]">
                <img 
                  src={data.images[0]} 
                  alt="White Wings project 1" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-[240px]">
                <img 
                  src={data.images[1]} 
                  alt="White Wings project 2" 
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Bottom row: one full-width image */}
              <div className="col-span-2 rounded-lg overflow-hidden h-[280px]">
                <img 
                  src={data.images[2]} 
                  alt="White Wings project 3" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2">
            {/* Welcome text */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-ww-gray-900 mb-4">
              {data.title}
            </h1>
            <p className="text-ww-gray-700 leading-relaxed mb-6 text-sm md:text-base">
              {data.description}
            </p>

            {/* Process */}
            <div className="text-left mb-6">
              <h3 className="text-lg font-semibold text-ww-gray-900 mb-2">
                {data.process.title}
              </h3>
              <p className="text-ww-gray-700 text-sm md:text-base">
                {data.process.steps}
              </p>

              <div className="py-4 bg-ww-gray-50/50 md:hidden">
                <dl className="space-y-0.2">
                  {data.processDetails?.map((item: { title: string; text: string }, idx: number) => (
                    <div key={idx} className="grid grid-cols-[auto_1fr] gap-2 text-sm md:text-base">
                      <dt className="font-semibold text-ww-gray-900">{item.title}</dt>
                      <dd className="text-ww-gray-700">{item.text}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* CTA Button - Desktop */}
            <Button 
              asChild 
              className="bg-ww-blue-800 hover:bg-ww-blue-900 text-white mb-8 hidden md:inline-flex"
            >
              <a href={data.cta.href}>{data.cta.label}</a>
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-2xl md:text-2xl font-bold text-ww-blue-800 md:text-ww-blue-400 mb-1 text-center">
                    {stat.value}
                  </div>
                  <div className="text-sm text-ww-gray-600 text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Process details list + centered ghost CTA */}
          <div className="md:hidden order-3 col-span-1">
            <div className="text-center mt-4">
              <Button
                asChild
                variant="ghost"
                className="text-ww-blue-600 hover:text-ww-blue-700 hover:bg-transparent inline-flex"
              >
                <a href={data.cta.href} className="flex items-center gap-2">
                  {data.cta.label}
                  <span className="text-xl">→</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacardIntro;

