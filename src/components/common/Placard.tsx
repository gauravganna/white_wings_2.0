import data from '@/data/placard.json';
import React from 'react';

export interface PlacardData {
  background: string;
  description: string;
  stats: { label: string; value: string }[];
}

export const Placard: React.FC<{ override?: Partial<PlacardData> }> = ({ override }) => {
  const d = { ...data, ...override } as PlacardData;

  return (
    <section aria-labelledby="placard-title" className="relative">
      {/* Background (desktop) */}
      <div
        className="hidden md:block relative w-full"
        style={{ height: 325, maxHeight: 425, maxWidth: 1376, margin: '0 auto' }}
      >
        <img src={d.background} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-white/30" aria-hidden />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-full md:w-[60%] lg:w-[55%] px-6 md:px-10 lg:px-14 py-6 text-ww-gray-800">
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-[68ch] ml-auto">
              {d.description}
            </p>

            <div className="grid grid-cols-3 gap-6 md:gap-10 text-right">
              {d.stats.map((s, idx) => (
                <div key={idx}>
                  <div className="text-3xl md:text-5xl font-bold text-ww-blue-400 text-center">{s.value}</div>
                  <div className="text-xs md:text-sm text-ww-gray-600 mt-2 text-center">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version (stacks content with padding) */}
      <div className="md:hidden">
        <div className="relative w-full" style={{ height: 241, maxHeight: 425, maxWidth: 1376, margin: '0 auto' }}>
          <img src={d.background} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-white/30" aria-hidden />
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="w-full px-6 py-5 text-ww-gray-800">
              <p className="text-sm leading-relaxed mb-4 line-clamp-5">
                {d.description}
              </p>
              <div className="grid grid-cols-3 gap-4 text-right">
                {d.stats.map((s, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-bold text-ww-blue-400 text-center">{s.value}</div>
                    <div className="text-[11px] text-ww-gray-600 mt-1 text-center">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placard;
