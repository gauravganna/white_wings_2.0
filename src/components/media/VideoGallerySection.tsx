import React from 'react'

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

export interface VideoGallerySectionProps {
  title?: string
  videos?: VideoItem[]
}

const renderVideoContent = (video: VideoItem, index: number) => {
  const source = video.source ?? {}
  const title = video.title ?? `Video ${index + 1}`
  const poster = video.thumbnail

  switch (source.type) {
    case 'youtube':
    case 'vimeo':
      if (!source.embedUrl) {
        return null
      }
      return (
        <iframe
          title={title}
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
        <video
          className="absolute inset-0 h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={source.fileUrl} type={source.mimeType ?? 'video/mp4'} />
          Your browser does not support the video tag.
        </video>
      )

    default:
      return poster ? (
        <img src={poster} alt={title} className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-ww-gray-500 text-sm">
          {title}
        </div>
      )
  }
}

export const VideoGallerySection: React.FC<VideoGallerySectionProps> = ({ title, videos = [] }) => {
  if (!videos.length) {
    return null
  }

  const sectionIdBase = title ? title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'section'
  const sectionId = `video-gallery-${sectionIdBase}`.replace(/-+/g, '-')

  return (
    <section aria-labelledby={sectionId} className="space-y-6 pt-6">
      {title && (
        <div className="space-y-2">
          <h2 id={sectionId} className="text-lg md:text-xl font-semibold text-ww-gray-900 uppercase tracking-wide">
            {title}
          </h2>
          <div className="bg-ww-gray-300 h-px" />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <article key={index} className="flex flex-col gap-3">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
              {renderVideoContent(video, index)}
            </div>
            {(video.title || video.description) && (
              <div className="space-y-1">
                {video.title && <h3 className="text-base font-semibold text-ww-gray-900">{video.title}</h3>}
                {video.description && <p className="text-sm text-ww-gray-700">{video.description}</p>}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default VideoGallerySection


