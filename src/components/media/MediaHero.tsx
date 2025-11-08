import React from 'react'

interface MediaHeroNavItem {
  id: string
  label: string
}

interface MediaHeroMedia {
  src: string
  alt?: string
}

export interface MediaHeroItem {
  headline?: string
  subtitle?: string
  summary?: string
  highlightTitle?: string
  highlightSubtitle?: string
  highlightSummary?: string
  media?: MediaHeroMedia
  nav?: MediaHeroNavItem[]
  gridImages?: MediaHeroMedia[]
}

interface MediaHeroProps {
  item: MediaHeroItem
}

export const MediaHero: React.FC<MediaHeroProps> = ({ item }) => {
  const nav =
    item.nav ??
    [
      { id: 'blogs', label: 'Blogs' },
      { id: 'initiatives', label: 'Social Initiatives' },
      { id: 'photo', label: 'Photo Gallery' },
      { id: 'video', label: 'Video Gallery' },
    ]

  return (
    <section aria-label="Media overview" className="bg-white relative pt-px">
      <div className="container mx-auto px-4 space-y-8">
        <header className="space-y-3">
          {item.headline && (
            <h1 className="text-3xl md:text-4xl font-semibold text-ww-gray-900">
              {item.headline}
            </h1>
          )}
          {item.summary && <p className="text-ww-gray-700 max-w-3xl">{item.summary}</p>}
        </header>

        {/* Sidebar nav + media preview */}
        <div className="grid grid-cols-2 md:grid-cols-[240px_1fr] md:gap-[40%] gap-1">
          <div className="pr-2 md:p-4 md:sticky md:top-24 h-max">
            <nav aria-label="Media sections" className="rounded-md">
              <ul className="space-y-8">
                {nav.map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className="block text-ww-gray-700 hover:text-ww-gray-900 text-lg md:text-base pl-4">
                      {n.label}
                    </a>
                    <div className="flex items-center gap-1" aria-hidden="true">
                      <span className="h-1.5 w-1.5 rounded-full bg-ww-gray-400" />
                      <span className="h-px w-[50%] bg-ww-gray-400" />
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="relative mr-0 md:mr-[10%] p-1 md:p-8 border-0 md:border-2 border-ww-gray-300 rounded-md md:rounded-lg">
            {item.highlightTitle && (
              <h3 className="text-5xl md:text-8xl font-semibold text-ww-gray-900 leading-none">
                {item.highlightTitle}
              </h3>
            )}
            {item.highlightSubtitle && (
              <div className="mt-4">
                <p className="text-xl md:text-2xl font-medium text-ww-gray-900">
                  {item.highlightSubtitle}
                </p>
                <div className="mt-1 h-1 w-24 bg-ww-blue-600 rounded" aria-hidden="true" />
              </div>
            )}
            {item.highlightSummary && (
              <p className="mt-6 text-sm md:text-base text-ww-gray-700 leading-relaxed whitespace-pre-line">
                {item.highlightSummary}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Mobile: 2-col 50/50 images with no gap */}
      {Array.isArray(item.gridImages) && item.gridImages.length > 0 && (
        <div className="container block md:hidden mx-auto px-4 pt-6">
          {(() => {
            const first = item.gridImages?.[0]
            const second = item.gridImages?.[1] ?? first
            return (
              <div className="grid grid-cols-2 gap-0">
                <figure className="flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-md bg-ww-gray-200">
                    {first && (
                      <img
                        src={first.src}
                        alt={first.alt ?? 'Media image 1'}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <figcaption className="mt-0 rounded-md border border-ww-gray-200 bg-white p-3">
                    <p className="text-ww-gray-700 text-xs leading-relaxed whitespace-pre-line">
                      {item.highlightSummary ?? item.summary ?? ''}
                    </p>
                  </figcaption>
                </figure>
                <figure className="relative aspect-[3/4] overflow-hidden">
                  {second && (
                    <img
                      src={second.src}
                      alt={second.alt ?? 'Media image 2'}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  )}
                </figure>
              </div>
            )
          })()}
        </div>
      )}

      {/* Desktop: 3-col overlapping images */}
      {Array.isArray(item.gridImages) && item.gridImages.length > 0 && (
        <div className="container hidden md:block mx-auto px-4 md:pt-6 pb-10 md:pb-14">
          {(() => {
            const [left, middle, right] = item.gridImages
            return (
              <>
                <div className="flex items-end overflow-visible gap-4">
                  <figure className="relative aspect-[16/9] w-1/3 overflow-hidden rounded-md bg-ww-gray-200 transform scale-[0.8] translate-y-4 md:translate-y-12 translate-x-4 md:translate-x-16 origin-bottom z-30">
                    {left && (
                      <img
                        src={left.src}
                        alt={left.alt ?? 'Media image 1'}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </figure>
                  <figure className="relative aspect-[16/9] w-1/3 overflow-hidden rounded-md bg-ww-gray-200 transform scale-[1.2] -translate-y-4 md:-translate-y-8 origin-bottom -ml-4 md:-ml-8 z-20">
                    {middle && (
                      <img
                        src={middle.src}
                        alt={middle.alt ?? 'Media image 2'}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </figure>
                  <figure className="relative aspect-[16/9] w-1/3 overflow-hidden rounded-md bg-ww-gray-200 transform scale-[1.2] translate-y-4 md:translate-y-24 translate-x-4 md:-translate-x-16 origin-bottom -ml-4 md:-ml-8 z-10">
                    {right && (
                      <img
                        src={right.src}
                        alt={right.alt ?? 'Media image 3'}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </figure>
                </div>
                {/* Desktop caption aligned under the left image */}
                <div className="max-w-md text-ww-gray-700 text-sm leading-relaxed md:ml-16 translate-y-20 px-16">
                  {item.highlightSummary ?? item.summary ?? ''}
                </div>
              </>
            )
          })()}
        </div>
      )}
    </section>
  )
}

export default MediaHero


