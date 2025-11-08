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
    <section aria-label="Media overview" className="bg-white relative">
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
                    <a href={`#${n.id}`} className="block text-ww-gray-700 hover:text-ww-gray-900 text-lg md:text-base">
                      {n.label}
                    </a>
                    <div className="flex items-center gap-1" aria-hidden="true">
                      <span className="h-1 w-1 rounded-full bg-ww-gray-400" />
                      <span className="h-px w-[50%] bg-ww-gray-400" />
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="relative mr-0 md:mr-[20%] p-1 md:p-8 border-0 md:border-2 border-ww-gray-300 rounded-md md:rounded-lg">
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
    </section>
  )
}

export default MediaHero


