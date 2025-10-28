import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import React from 'react'

const PhotoGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={require('@/data/header.json')} />
      <main className="flex-1 container mx-auto px-4 py-10">
        <section aria-labelledby="photos-title">
          <h1 id="photos-title" className="text-3xl font-semibold mb-6">Photo Gallery</h1>
          {/* Placeholder - replace with CMS data later */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-white rounded-lg shadow-sm" />
            ))}
          </div>
        </section>
      </main>
      <Footer data={require('@/data/footer.json')} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default PhotoGalleryPage


