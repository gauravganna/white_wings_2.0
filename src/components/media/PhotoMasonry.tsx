import React from 'react'
import { Link } from 'react-router-dom'

interface PhotoMasonryProps {
  title?: string
  subtitle?: string
  images: string[]
  viewAllHref?: string
  desktopLimit?: number
  mobileLimit?: number
}

export const PhotoMasonry: React.FC<PhotoMasonryProps> = ({
  title = 'Photo Gallery',
  subtitle,
  images,
  viewAllHref = '/media/photo',
  desktopLimit = 6, // approximate “2 rows” worth
  mobileLimit = 6, // 2 cols x 3 rows
}) => {
  const mobileImages = images.slice(0, mobileLimit)
  const desktopImages = images.slice(0, desktopLimit)

  const hasMoreMobile = images.length > mobileLimit
  const hasMoreDesktop = images.length > desktopLimit

  if (!images.length) return null

  return (
    <section id="photo" aria-labelledby="photo-gallery-heading" className="bg-white">
      <div className="container mx-auto px-4 pt-8 md:pt-16">
        <header className="mb-6 md:mb-8">
          <h2 id="photo-gallery-heading" className="text-2xl md:text-3xl font-semibold text-ww-gray-900">
            {title}
          </h2>
          <div className="mt-2 flex items-center gap-1" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-ww-gray-400" />
            <span className="h-px w-40 md:w-64 bg-ww-gray-400" />
          </div>
          {subtitle && <p className="mt-2 text-ww-gray-700 max-w-2xl">{subtitle}</p>}
        </header>

        {/* Mobile: 2-col grid with gradient “More” */}
        <div className="relative block md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {mobileImages.map((src, idx) => (
              <figure key={idx} className="relative overflow-hidden rounded-md bg-ww-gray-200">
                <img src={src} alt={`Photo ${idx + 1}`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="pb-[100%]" aria-hidden="true" />
              </figure>
            ))}
          </div>
          {hasMoreMobile && (
            <>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white to-transparent" />
              <Link
                to={viewAllHref}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 text-2xl font-semibold text-ww-blue-700"
              >
                More
              </Link>
            </>
          )}
        </div>

        {/* Desktop: masonry-like collage with bottom-right “View All” CTA */}
        <div className="relative hidden md:block">
          <div className="columns-3 lg:columns-3 gap-4 [column-fill:_balance]">
            {desktopImages.map((src, idx) => (
              <figure key={idx} className="mb-4 break-inside-avoid rounded-md overflow-hidden bg-ww-gray-200">
                <img src={src} alt={`Photo ${idx + 1}`} className="w-full h-auto object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
          {hasMoreDesktop && (
            <div className="mt-6 flex justify-end">
              <Link to={viewAllHref} className="inline-flex items-center group">
                <span className="text-sm font-medium text-ww-gray-800 group-hover:text-ww-blue-700 transition-colors">
                  View All
                </span>
                <span className="ml-4 h-px w-40 bg-ww-gray-500 group-hover:bg-ww-blue-700 transition-colors" />
                <span className="ml-[-1.25rem] h-12 w-12 rounded-full border border-ww-gray-500 group-hover:border-ww-blue-700 relative transition-colors">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-ww-gray-700 group-hover:bg-ww-blue-700" />
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PhotoMasonry


