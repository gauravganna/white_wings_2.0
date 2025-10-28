import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import { SubGallery } from '@/components/media/SubGallery'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import media from '@/data/media.json'
import React from 'react'

const MediaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1 container mx-auto px-4 py-10 space-y-8">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-ww-gray-900">
            {media.title}
          </h1>
        </header>

        {media.galleries.map((g, idx) => (
          <SubGallery key={idx} title={g.title} images={g.images} />
        ))}
      </main>
      <Footer data={footerData} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default MediaPage


