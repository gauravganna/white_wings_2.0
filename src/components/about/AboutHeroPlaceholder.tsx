import React from 'react';

interface AboutHeroPlaceholderProps {
  title?: string
  subtitle?: string
  image?: { src: string; alt?: string }
}

export const AboutHeroPlaceholder: React.FC<AboutHeroPlaceholderProps> = ({ title, subtitle, image }) => {
  return (
    <section aria-label="About hero placeholder" className="bg-white">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="relative rounded-xl overflow-hidden bg-ww-gray-200">
          <div className="aspect-[16/7] md:aspect-[21/9]">
            {image?.src && (
              <img src={image.src} alt={image.alt ?? ''} className="absolute inset-0 h-full w-full object-cover opacity-40" />
            )}
            <div className="absolute inset-0 flex flex-col items-start justify-center p-6 md:p-10">
              {title && <h1 className="text-3xl md:text-5xl font-semibold text-ww-gray-900">{title}</h1>}
              {subtitle && <p className="mt-3 text-ww-gray-700 max-w-2xl">{subtitle}</p>}
              <span className="mt-6 inline-flex items-center rounded-full bg-ww-gray-900/80 text-white px-3 py-1 text-xs uppercase tracking-wide">
                Coming soon: hero design
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroPlaceholder


