import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import properties from '@/data/properties.json'
import React from 'react'
import { useParams } from 'react-router-dom'

const PropertyDetailPage: React.FC = () => {
  const { slug } = useParams()
  const property = (properties.items as any[]).find(p => p.slug === slug)

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={require('@/data/header.json')} />
      <main className="flex-1 container mx-auto px-4 py-10">
        {!property ? (
          <p className="text-ww-gray-700">Property not found.</p>
        ) : (
          <article aria-labelledby="prop-title" className="space-y-6">
            <header>
              <h1 id="prop-title" className="text-3xl font-semibold">{property.title}</h1>
              <p className="text-ww-gray-600">{property.location}</p>
            </header>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src={property.image} alt={property.title} className="rounded-lg object-cover w-full h-64 md:h-96" />
              <div className="space-y-3">
                <div>
                  <h2 className="font-semibold">Overview</h2>
                  <p className="text-ww-gray-700">{property.description}</p>
                </div>
                <a href={property.brochureUrl} className="text-ww-blue-700 underline">Download brochure</a>
                <a href={`tel:${property.phone}`} className="text-ww-blue-700 underline block">Call: {property.phone}</a>
              </div>
            </section>
          </article>
        )}
      </main>
      <Footer data={require('@/data/footer.json')} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default PropertyDetailPage


