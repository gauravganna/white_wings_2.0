import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import MediaBlogsPreview from '@/components/media/MediaBlogsPreview'
import MediaHero from '@/components/media/MediaHero'
import PhotoMasonry from '@/components/media/PhotoMasonry'
import SocialInitiatives from '@/components/media/SocialInitiatives'
import VideoMasonry from '@/components/media/VideoMasonry'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import media from '@/data/media.json'
import React from 'react'

const MediaLandingPage: React.FC = () => {
  const landing = (media as any)?.landing ?? {}
  const photo = (media as any)?.photo
  const video = (media as any)?.video

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1 pb-6">
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

        {/* Video Gallery - unstructured collage like photo */}
        <VideoMasonry
          title="Video Gallery"
          videos={((video?.galleries ?? []) as any[]).flatMap((g) => (g.videos ?? []))}
          viewAllHref="/media/video"
        />
      </main>
      <Footer data={footerData as any} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default MediaLandingPage


