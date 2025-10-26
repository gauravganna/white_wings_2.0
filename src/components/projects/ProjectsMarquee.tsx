import data from '@/data/projects.json';
import React, { useMemo } from 'react';

export const ProjectsMarquee: React.FC = () => {
  const track = useMemo(() => [...data.logos, ...data.logos], []);

  return (
    <section aria-labelledby="projects-title" className="bg-white">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <h2 id="projects-title" className="text-center text-4xl md:text-5xl uppercase mb-2">
          {data.title}
        </h2>
        <div className="h-[2px] bg-ww-blue-300 w-50 md:w-64 mx-auto mb-4" aria-hidden />

        {/* Marquee wrapper */}
        <div className="relative overflow-hidden rounded-r-2xl" style={{ height: 300 }}>
          {/* gradient masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" aria-hidden />

          {/* Track */}
          <div className="absolute inset-0 flex items-center">
            <div className="flex items-center gap-6 pr-6 animate-marquee" role="list" aria-label="Project brands">
              {track.map((logo, idx) => (
                <a
                  key={idx}
                  href={logo.href}
                  role="listitem"
                  className="block shrink-0 h-[186px] w-auto px-6"
                  aria-label={logo.alt}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-full w-auto object-contain"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile adjustments */}
        <div className="md:hidden h-3" />
      </div>
    </section>
  );
};

export default ProjectsMarquee;
