import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import { SubGallery } from '@/components/media/SubGallery'
import { VideoGallerySection, VideoItem } from '@/components/media/VideoGallerySection'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import media from '@/data/media.json'
import React from 'react'

type MediaVariant = 'photo' | 'video'

interface MediaGalleryPageProps {
  variant: MediaVariant
}

interface MediaGallery {
  title?: string
  images?: string[]
}

interface MediaSection {
  title?: string
  description?: string
  galleries?: MediaGallery[]
}

const getMediaSection = (variant: MediaVariant): MediaSection => {
  const source = (media as Record<string, MediaSection | undefined>)[variant]
  return source ?? {}
}

const MediaGalleryPage: React.FC<MediaGalleryPageProps> = ({ variant }) => {
  const section = getMediaSection(variant)
  const galleries = Array.isArray(section.galleries) ? section.galleries : []

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1 container mx-auto px-4 py-10 space-y-8">
        <header className="mb-4 space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold text-ww-gray-900">
            {section.title ?? (variant === 'photo' ? '{data.media.photo.title}' : '{data.media.video.title}')}
          </h1>
          {section.description && <p className="text-ww-gray-700 max-w-3xl">{section.description}</p>}
        </header>

        {variant === 'photo' &&
          galleries.map((gallery, idx) => (
            <SubGallery
              key={gallery.title ? `${gallery.title}-${idx}` : idx}
              title={gallery.title ?? `{data.media.${variant}.galleries[${idx}].title}`}
              images={Array.isArray((gallery as MediaGallery).images) ? (gallery as MediaGallery).images! : []}
            />
          ))}

        {variant === 'video' &&
          galleries.map((gallery, idx) => {
            const videoGallery = gallery as { title?: string; videos?: VideoItem[] }
            const videos = Array.isArray(videoGallery.videos) ? videoGallery.videos : []
            return (
              <VideoGallerySection
                key={gallery.title ? `${gallery.title}-${idx}` : idx}
                title={gallery.title ?? `{data.media.${variant}.galleries[${idx}].title}`}
                videos={videos}
              />
            )
          })}
      </main>
      <Footer data={footerData as any} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export const MediaPhotoPage: React.FC = () => <MediaGalleryPage variant="photo" />

export const MediaVideoPage: React.FC = () => <MediaGalleryPage variant="video" />

export default MediaPhotoPage

