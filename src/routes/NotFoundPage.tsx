import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1">
        <section aria-labelledby="not-found-title" className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-7xl md:text-8xl font-bold tracking-tight text-ww-blue-800/20 select-none">404</p>
            <h1 id="not-found-title" className="mt-2 text-2xl md:text-3xl font-semibold text-ww-gray-900">Page not found</h1>
            <p className="mt-3 text-ww-gray-700">The page you're looking for doesn’t exist or was moved. Use the links below to continue browsing.</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/" className="inline-flex items-center justify-center rounded-md bg-ww-blue-800 px-4 py-2 text-white hover:bg-ww-blue-900">Go to Home</Link>
              {/* <Link to="/properties" className="inline-flex items-center justify-center rounded-md border border-ww-blue-800 px-4 py-2 text-ww-blue-800 hover:bg-ww-blue-50">Browse Properties</Link> */}
              {/* <Link to="/photos" className="inline-flex items-center justify-center rounded-md border border-ww-gray-300 px-4 py-2 text-ww-gray-800 hover:bg-white">Photo Gallery</Link> */}
            </div>
          </div>
        </section>
      </main>
      <Footer data={footerData} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default NotFoundPage


