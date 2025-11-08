import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import media from '@/data/media.json'
import React from 'react'
import { Link } from 'react-router-dom'

interface MediaLandingSection {
  id?: string
  title?: string
  description?: string
  href?: string
}

const MediaLandingPage: React.FC = () => {
  const landing = (media as any)?.landing ?? {}
  const sections = Array.isArray(landing.sections) ? (landing.sections as MediaLandingSection[]) : []

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-12 md:py-16 space-y-12">
          <header className="space-y-4 max-w-3xl">
            <p className="text-sm uppercase tracking-wider text-ww-gray-600">{landing.overline ?? '{data.media.landing.overline}'}</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-ww-gray-900">
              {landing.title ?? '{data.media.landing.title}'}
            </h1>
            {landing.subtitle && (
              <p className="text-lg text-ww-gray-700">
                {landing.subtitle}
              </p>
            )}
            {landing.description && (
              <p className="text-base text-ww-gray-600">
                {landing.description}
              </p>
            )}
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <article
                key={section.id ?? index}
                className="rounded-xl border border-ww-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h2 className="text-xl font-semibold text-ww-gray-900">
                  {section.title ?? `{data.media.landing.sections[${index}].title}`}
                </h2>
                {section.description && (
                  <p className="mt-3 text-ww-gray-700 text-sm">
                    {section.description}
                  </p>
                )}
                {section.href && (
                  <Link
                    to={section.href}
                    className="mt-6 inline-flex items-center text-sm font-medium text-ww-blue-700 hover:underline"
                  >
                    Explore
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer data={footerData as any} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default MediaLandingPage


