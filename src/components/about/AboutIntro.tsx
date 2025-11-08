import React from 'react'

interface AboutIntroProps {
  title?: string
  subtitle?: string
  description?: string
  // Backward-compat keys (if existing data is still using them)
  overline?: string
  body?: string
  images?: Array<{ src: string; alt?: string }> | string[]
}

export const AboutIntro: React.FC<AboutIntroProps> = ({ overline, title, subtitle, description, body, images }) => {
  const effectiveDescription = description ?? body
  const introImages =
    (images ?? []) as Array<{ src: string; alt?: string }> | string[]
  const normalizedImages: Array<{ src: string; alt?: string }> = Array.isArray(introImages)
    ? introImages.map((i: any) =>
        typeof i === 'string' ? { src: i } : { src: i?.src, alt: i?.alt },
      )
    : []
  return (
    <section aria-labelledby="about-intro-heading" className="bg-white">
      <div className="container mx-auto px-4 pt-4 md:pt-6">
        {overline && <p className="text-sm uppercase tracking-wider text-ww-gray-600">{overline}</p>}
        {title && <h2 id="about-intro-heading" className="text-2xl md:text-3xl uppercase text-ww-gray-900">{title}</h2>}
        {subtitle && <p className="mt-3 text-ww-gray-800 max-w-3xl">{subtitle}</p>}
        {effectiveDescription && <p className="mt-6 text-xs md:text-sm ml-0 md:ml-[25%]  text-ww-gray-700 whitespace-pre-line">{effectiveDescription}</p>}
        {normalizedImages.length > 0 && (
          <div className="mt-4 md:mt-8 ml-0 md:ml-[25%]">
            {/* Mobile: horizontal scroll */}
            <div className="flex md:hidden overflow-x-auto gap-4 snap-x snap-mandatory">
              {normalizedImages.map((img, idx) => (
                <figure key={idx} className="shrink-0 snap-start relative w-[280px] aspect-[4/3] rounded-md overflow-hidden bg-ww-gray-200">
                  <img src={img.src} alt={img.alt ?? ''} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                </figure>
              ))}
            </div>
            {/* Desktop: two-up grid */}
            <div className="hidden md:grid grid-cols-2 gap-20 p-4">
              {normalizedImages.slice(0, 2).map((img, idx) => (
                <figure key={idx} className="relative aspect-[4/3] rounded-md overflow-hidden bg-ww-gray-200">
                  <img src={img.src} alt={img.alt ?? ''} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default AboutIntro


