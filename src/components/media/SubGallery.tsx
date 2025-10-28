import React from 'react'

export interface SubGalleryProps {
  title: string
  images: string[]
  maxRows?: number
}

export const SubGallery: React.FC<SubGalleryProps> = ({ title, images, maxRows = 3 }) => {
  // Each item is a 4:3 tile. Row height ~ 180 on desktop, smaller on mobile
  const columns = 5
  const maxItems = columns * maxRows
  const visible = images.slice(0, maxItems)
  const remaining = Math.max(images.length - maxItems, 0)

  return (
    <section aria-labelledby={`gallery-${title}`} className="space-y-4 pt-6">
      <h2 id={`gallery-${title}`} className="text-lg md:text-base font-semibold tracking-wide text-ww-gray-900 uppercase">
        {title}
      </h2>
      <div className="bg-ww-gray-300 h-px mb-4" />
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {visible.map((src, i) => (
          <figure key={i} className="relative bg-white rounded-sm overflow-hidden aspect-[4/3]">
            <img src={src} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-" />
          </figure>
        ))}
        {remaining > 0 && (
          <div className="relative aspect-[4/3] bg-ww-gray-200 text-ww-gray-700 rounded-sm text-sm flex items-center justify-center select-none">
            +{remaining}
          </div>
        )}
      </div>
    </section>
  )
}

export default SubGallery


