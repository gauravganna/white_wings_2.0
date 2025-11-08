import React from 'react'
import { Link } from 'react-router-dom'

export type VideoSourceType = 'youtube' | 'vimeo' | 'file'

export interface VideoSource {
  type?: VideoSourceType
  embedUrl?: string
  fileUrl?: string
  mimeType?: string
}

export interface VideoItem {
  title?: string
  description?: string
  thumbnail?: string
  source?: VideoSource
}

interface VideoMasonryProps {
  title?: string
  subtitle?: string
  videos: VideoItem[]
  viewAllHref?: string
  desktopLimit?: number
  mobileLimit?: number
}

export const VideoMasonry: React.FC<VideoMasonryProps> = ({
  title = 'Video Gallery',
  subtitle,
  videos,
  viewAllHref = '/media/video',
  desktopLimit = 6,
  mobileLimit = 6,
}) => {
  const mobileItems = videos.slice(0, mobileLimit)
  const desktopItems = videos.slice(0, desktopLimit)

  const hasMoreMobile = videos.length > mobileLimit
  const hasMoreDesktop = videos.length > desktopLimit

  if (!videos.length) return null

  const renderVideoContent = (video: VideoItem, index: number) => {
    const source = video.source ?? {}
    const titleText = video.title ?? `Video ${index + 1}`
    const poster = video.thumbnail

    switch (source.type) {
      case 'youtube':
      case 'vimeo':
        if (!source.embedUrl) {
          return null
        }
        return (
          <iframe
            title={titleText}
            src={source.embedUrl}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )

      case 'file':
        if (!source.fileUrl) {
          return null
        }
        return (
          <video className="absolute inset-0 h-full w-full object-cover" controls playsInline preload="metadata" poster={poster}>
            <source src={source.fileUrl} type={source.mimeType ?? 'video/mp4'} />
            Your browser does not support the video tag.
          </video>
        )

      default:
        return poster ? (
          <img src={poster} alt={titleText} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-ww-gray-500 text-sm">{titleText}</div>
        )
    }
  }

  return (
    <section id="video" aria-labelledby="video-gallery-heading" className="bg-white">
      <div className="container mx-auto px-4 pt-8 md:pt-16">
        <header className="mb-6 md:mb-8">
          <h2 id="video-gallery-heading" className="text-2xl md:text-3xl font-semibold text-ww-gray-900">
            {title}
          </h2>
          <div className="mt-2 flex items-center gap-1" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-ww-gray-400" />
            <span className="h-px w-40 md:w-64 bg-ww-gray-400" />
          </div>
          {subtitle && <p className="mt-2 text-ww-gray-700 max-w-2xl">{subtitle}</p>}
        </header>

        {/* Mobile: grid with playable tiles and More */}
        <div className="relative block md:hidden">
          <div className="grid grid-cols-2 gap-3">
            {mobileItems.map((video, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-md bg-black">
                <div className="pb-[56.25%]" aria-hidden="true" />
                <div className="absolute inset-0">{renderVideoContent(video, idx)}</div>
              </div>
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

        {/* Desktop: masonry + playable tiles + View All CTA */}
        <div className="hidden md:block">
          <div className="columns-3 lg:columns-3 gap-4 [column-fill:_balance]">
            {desktopItems.map((video, idx) => (
              <div key={idx} className="mb-4 break-inside-avoid rounded-md overflow-hidden bg-black relative">
                <div className="pb-[56.25%]" aria-hidden="true" />
                <div className="absolute inset-0">{renderVideoContent(video, idx)}</div>
              </div>
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

export default VideoMasonry


