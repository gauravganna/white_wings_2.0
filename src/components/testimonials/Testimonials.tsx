import data from '@/data/testimonials.json';
import React from 'react';
import { TestimonialCard } from './TestimonialCard';

export const Testimonials: React.FC = () => {
  return (
    <section aria-labelledby="testimonials-title" className="bg-ww-gray-50 relative">
      {/* Decorative fixed quotes on the right (desktop only) */}
      <div className="hidden md:block absolute top-20 right-60 translate-x-1/4 select-none pointer-events-none" aria-hidden>
        <div className="text-ww-gray-600 text-[164px] font-serif leading-none">”</div>
      </div>

      <div className="container mx-auto px-4 py-10 md:py-14">
        {/* Section heading */}
        <div className="mb-6">
          <h2 id="testimonials-title" className="text-3xl md:text-3xl text-ww-gray-900">
            {data.title}
          </h2>
        </div>

        {/* Desktop: horizontally scrollable list of cards */}
        <div className="hidden md:block">
          <div
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-2"
            role="list"
            aria-label="Client reviews"
          >
            {data.items.map((item) => (
              <div
                key={item.id}
                role="listitem"
                className="snap-start shrink-0 w-[1051px]"
                style={{ minHeight: 343 }}
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked cards (limit to 5) */}
        <div className="md:hidden space-y-6 border-l border-ww-gray-300 pl-3 pr-3 pt-1" style={{ maxWidth: 420 }}>
          {data.items.slice(0, 5).map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
