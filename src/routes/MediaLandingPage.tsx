import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import MediaBlogsPreview from '@/components/media/MediaBlogsPreview'
import MediaHero from '@/components/media/MediaHero'
import MediaInitiatives from '@/components/media/MediaInitiatives'
import { SubGallery } from '@/components/media/SubGallery'
import { VideoGallerySection } from '@/components/media/VideoGallerySection'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import media from '@/data/media.json'
import React from 'react'
import { Link } from 'react-router-dom'

const MediaLandingPage: React.FC = () => {
  const landing = (media as any)?.landing ?? {}
  const photo = (media as any)?.photo
  const video = (media as any)?.video

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1">
        {/* Hero with left nav + right media */}
        <MediaHero
          item={{
            headline: landing.hero?.headline ?? '',
            summary: landing.hero?.summary ?? '',
            highlightTitle: landing.hero?.highlight?.title ?? '',
            highlightSubtitle: landing.hero?.highlight?.subtitle ?? '',
            highlightSummary: landing.hero?.highlight?.summary ?? '',
            media: { src: landing.hero?.media?.src ?? '/src/assets/images/showcase-1.jpg', alt: landing.hero?.media?.alt },
          }}
        />

        {/* Blogs */}
        <MediaBlogsPreview title={landing.blogs?.title ?? 'Blogs'} />

        {/* Social Initiatives */}
        <MediaInitiatives title={landing.initiatives?.title ?? 'Social Initiatives'} items={landing.initiatives?.items ?? []} />

        {/* Photo Gallery */}
        <section id="photo" aria-labelledby="photo-heading" className="bg-white">
          <div className="container mx-auto px-4 py-10 space-y-6">
            <h2 id="photo-heading" className="text-2xl md:text-3xl font-semibold text-ww-gray-900">
              {photo?.title ?? '{data.media.photo.title}'}
            </h2>
            {(photo?.galleries ?? []).map((g: any, idx: number) => (
              <SubGallery key={idx} title={g.title ?? `{data.media.photo.galleries[${idx}].title}`} images={g.images ?? []} />
            ))}
            <div className="pt-2">
              <Link to="/media/photo" className="text-sm font-medium text-ww-blue-700 hover:underline">See full photo gallery</Link>
            </div>
          </div>
        </section>

        {/* Video Gallery */}
        <section id="video" aria-labelledby="video-heading" className="bg-white">
          <div className="container mx-auto px-4 py-10 space-y-6">
            <h2 id="video-heading" className="text-2xl md:text-3xl font-semibold text-ww-gray-900">
              {video?.title ?? '{data.media.video.title}'}
            </h2>
            {(video?.galleries ?? []).map((g: any, idx: number) => (
              <VideoGallerySection key={idx} title={g.title ?? `{data.media.video.galleries[${idx}].title}`} videos={g.videos ?? []} />
            ))}
            <div className="pt-2">
              <Link to="/media/video" className="text-sm font-medium text-ww-blue-700 hover:underline">See full video gallery</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer data={footerData as any} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default MediaLandingPage


