import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import MediaBlogsPreview from '@/components/media/MediaBlogsPreview'
import MediaHero from '@/components/media/MediaHero'
import PhotoMasonry from '@/components/media/PhotoMasonry'
import SocialInitiatives from '@/components/media/SocialInitiatives'
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
            gridImages: Array.isArray(landing.hero?.gridImages)
              ? landing.hero.gridImages
              : [
                  { src: '/src/assets/images/showcase-1.jpg', alt: '{data.media.landing.hero.gridImages[0].alt}' },
                  { src: '/src/assets/images/showcase-2.jpg', alt: '{data.media.landing.hero.gridImages[1].alt}' },
                  { src: '/src/assets/images/showcase-3.png', alt: '{data.media.landing.hero.gridImages[2].alt}' }
                ],
          }}
        />

        {/* Blogs */}
        <MediaBlogsPreview title={landing.blogs?.title ?? 'Blogs'} />

        {/* Social Initiatives */}
        <SocialInitiatives
          title={landing.initiatives?.title ?? 'Social Initiatives'}
          subtitle={landing.initiatives?.subtitle ?? '{data.media.landing.initiatives.subtitle}'}
          images={landing.initiatives?.images ?? []}
        />

        {/* Photo Gallery - unstructured collage with limits + CTAs */}
        <PhotoMasonry
          images={((photo?.galleries ?? []) as any[]).flatMap((g) => g.images ?? [])}
          viewAllHref="/media/photo"
        />

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


