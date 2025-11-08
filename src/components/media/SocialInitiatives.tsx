import React from 'react'

interface SocialInitiativesProps {
  title?: string
  subtitle?: string
  images?: string[]
}

// Utility to load images from /src/assets/social-initiatives via Vite glob import
function useInitiativeImages(explicit?: string[]): string[] {
  if (explicit && explicit.length > 0) {
    return explicit
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const modules: Record<string, any> = import.meta.glob('/src/assets/social-initiatives/*.{png,jpg,jpeg,webp}', {
    eager: true,
  }) as any
  const urls = Object.values(modules)
    // vite image modules expose url at .default
    .map((m: any) => (typeof m === 'string' ? m : (m?.default as string) ?? ''))
    .filter(Boolean)
  return urls
}

export const SocialInitiatives: React.FC<SocialInitiativesProps> = ({ title = 'Social Initiatives', subtitle, images = [] }) => {
  const imgs = useInitiativeImages(images)
  if (!imgs.length) return null

  return (
    <section id="initiatives" aria-labelledby="initiatives-heading" className="bg-white">
      <div className="container mx-auto px-4 pt-0 md:pt-6">
        <header className="mb-6 md:mb-8">
          <h2 id="initiatives-heading" className="text-2xl md:text-3xl font-semibold text-ww-gray-900">
            {title}
          </h2>
          <div className="mt-2 flex items-center gap-1" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-ww-gray-400" />
            <span className="h-px w-40 md:w-64 bg-ww-gray-400" />
          </div>
          {subtitle && <p className="mt-2 text-ww-gray-700 max-w-2xl">{subtitle}</p>}
          
        </header>

        {/* Mobile: simple 2-col grid */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {imgs.map((src, idx) => (
            <figure key={idx} className="relative overflow-hidden rounded-md bg-ww-gray-200">
              <img src={src} alt={`Initiative ${idx + 1}`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="pb-[100%]" aria-hidden="true" />
            </figure>
          ))}
        </div>

        {/* Desktop: loose masonry-style collage using CSS columns */}
        <div className="hidden md:block">
          <div className="columns-3 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {imgs.map((src, idx) => (
              <figure key={idx} className="mb-4 break-inside-avoid rounded-md overflow-hidden bg-ww-gray-200">
                <img src={src} alt={`Initiative ${idx + 1}`} className="w-full h-auto object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialInitiatives


