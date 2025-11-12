import { ArrowUpRight } from 'lucide-react'
import React from 'react'

interface VideoLink {
  label: string
  href: string
  newTab?: boolean
}

interface VideoData {
  embedUrl: string
  title?: string
}

interface PropertyVideoProps {
  heading?: string
  title?: string
  summary?: string
  cta?: VideoLink
  video: VideoData
}

export const PropertyVideo: React.FC<PropertyVideoProps> = ({
  heading = 'Video',
  title,
  summary,
  cta,
  video,
}) => {
  if (!video?.embedUrl) {
    return null
  }

  return (
    <section id="videos" aria-labelledby="videos-heading" className="bg-[#F8F8F8]">
      <div className="container mx-auto px-2 md:px-4 py-0 md:pt-6">
        <h2 id="videos-heading" className="text-2xl md:text-3xl font-semibold text-ww-gray-900 mb-6">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[0.32fr_0.68fr] gap-6 md:gap-12 items-start">
          {/* Video player - first on mobile */}
          <div className="order-1 md:order-2 w-full">
            <div className="relative w-full overflow-hidden rounded-xl shadow-md bg-black">
              <iframe
                src={video.embedUrl}
                title={video.title ?? title ?? heading}
                className="w-full aspect-video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Textual content */}
          <div className="order-2 md:order-1 space-y-4 md:space-y-6">
            {title && <h3 className="text-lg md:text-2xl font-semibold text-ww-gray-900">{title}</h3>}
            {summary && <p className="text-sm md:text-base text-ww-gray-700 leading-relaxed whitespace-pre-line">{summary}</p>}
            {cta && (
              <div>
                <a
                  href={cta.href}
                  target={cta.newTab ? '_blank' : undefined}
                  rel={cta.newTab ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-md border border-ww-blue-700 px-4 py-2 text-sm md:text-base font-medium text-white bg-ww-blue-700 transition-colors hover:bg-white hover:text-ww-blue-700"
                >
                  {cta.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyVideo


