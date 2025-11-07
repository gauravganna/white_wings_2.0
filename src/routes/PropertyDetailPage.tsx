import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'

import { PropertyAmenities } from '@/components/properties/PropertyAmenities'
import { PropertyDetailInfo } from '@/components/properties/PropertyDetailInfo'
import { PropertyHero } from '@/components/properties/PropertyHero'
import { PropertyImages } from '@/components/properties/PropertyImages'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import properties from '@/data/properties.json'
import React from 'react'
import { useParams } from 'react-router-dom'

const PropertyDetailPage: React.FC = () => {
  const { slug } = useParams()
  const items = (properties.items as any[])
  const property = items.find(p => (p.slug ?? p.detailUrl?.split('/').pop()) === slug)

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1">
        {!property ? (
          <div className="container mx-auto px-4 py-10">
            <p className="text-ww-gray-700">Property not found.</p>
          </div>
        ) : (
          <>
            <PropertyHero
              item={{
                name: property.name ?? property.title,
                phone: property.phone,
                brochureUrl: property.brochureUrl,
                heroImages: property.heroImages,
                image: property.image,
                detailInfo: property.detailInfo,
              }}
            />

            {/* Anchor target sections – placeholders for real data */}
            <div className="container mx-auto px-2 py-4 space-y-16">
              <PropertyAmenities
                title={(property.amenities && (property.amenities as any).title) || ((properties as any).amenitiesDefaults.title)}
                image={(property.amenities && (property.amenities as any).image) || ((properties as any).amenitiesDefaults.image)}
                amenities={(property.amenities && (property.amenities as any).items) || ((properties as any).amenitiesDefaults.items)}
              />

              <PropertyImages
                title={(property.gallery && (property.gallery as any).title) || ((properties as any).galleryDefaults.title)}
                images={(property.gallery && (property.gallery as any).items) || ((properties as any).galleryDefaults.items)}
              />

              <section id="videos" aria-labelledby="videos-title">
                <h2 id="videos-title" className="text-2xl font-semibold mb-4">{`{data.property.videos.title}`}</h2>
                <div className="aspect-video bg-ww-gray-200 rounded-md" aria-hidden="true" />
              </section>

              <section id="plans" aria-labelledby="plans-title">
                <h2 id="plans-title" className="text-2xl font-semibold mb-4">{`{data.property.plans.title}`}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="aspect-[4/3] bg-ww-gray-200 rounded-md" aria-hidden="true" />
                  <div className="aspect-[4/3] bg-ww-gray-200 rounded-md" aria-hidden="true" />
                </div>
              </section>

              {/* Bottom text blocks with responsive mobile bar */}
              <PropertyDetailInfo
                blocks={(property.detailInfo as any) ?? ((properties as any).detailInfoDefaults as any)}
                phone={property.phone}
                brochureUrl={property.brochureUrl}
              />

            </div>
          </>
        )}
      </main>
      <Footer data={footerData as any} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default PropertyDetailPage


