import React from 'react'

interface InitiativeItem {
  title?: string
  description?: string
  image?: string
  href?: string
}

interface MediaInitiativesProps {
  title?: string
  items?: InitiativeItem[]
}

export const MediaInitiatives: React.FC<MediaInitiativesProps> = ({ title = 'Social Initiatives', items = [] }) => {
  if (!items.length) {
    return null
  }

  return (
    <section id="initiatives" aria-labelledby="initiatives-heading" className="bg-white">
      <div className="container mx-auto px-4 py-10 space-y-6">
        <h2 id="initiatives-heading" className="text-2xl md:text-3xl font-semibold text-ww-gray-900">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <article key={idx} className="rounded-lg overflow-hidden border border-ww-gray-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] bg-ww-gray-200">
                {it.image && <img src={it.image} alt={it.title ?? ''} className="absolute inset-0 w-full h-full object-cover" />}
              </div>
              <div className="p-4 space-y-2">
                {it.title && <h3 className="text-base font-semibold text-ww-gray-900">{it.title}</h3>}
                {it.description && <p className="text-sm text-ww-gray-700">{it.description}</p>}
                {it.href && (
                  <a href={it.href} className="inline-flex text-sm font-medium text-ww-blue-700 hover:underline">
                    Learn more
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaInitiatives

