import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'

import { PropertyAmenities } from '@/components/properties/PropertyAmenities'
import { PropertyHero } from '@/components/properties/PropertyHero'
import { PropertyImages } from '@/components/properties/PropertyImages'
import { PropertyPlans } from '@/components/properties/PropertyPlans'
import { PropertyVideo } from '@/components/properties/PropertyVideo'
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

              <PropertyVideo
                heading={(property.video && (property.video as any).heading) || ((properties as any).videoDefaults.heading)}
                title={(property.video && (property.video as any).title) || ((properties as any).videoDefaults.title)}
                summary={(property.video && (property.video as any).summary) || ((properties as any).videoDefaults.summary)}
                cta={(property.video && (property.video as any).cta) || ((properties as any).videoDefaults.cta)}
                video={(property.video && (property.video as any).video) || ((properties as any).videoDefaults.video)}
              />

              {(() => {
                const planItems =
                  (property.plans && Array.isArray((property.plans as any).items) && (property.plans as any).items.length > 0
                    ? (property.plans as any).items
                    : ((properties as any).plansDefaults?.items ?? [])) as any[]

                const filteredPlans = (planItems ?? []).filter((plan) => plan && plan.src)

                if (filteredPlans.length === 0) {
                  return null
                }

                const planTitle =
                  (property.plans && (property.plans as any).title) || ((properties as any).plansDefaults?.title ?? 'Plans')

                return <PropertyPlans title={planTitle} items={filteredPlans} />
              })()}


            </div>
          </>
        )}
      </main>
      <Footer data={footerData as any} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default PropertyDetailPage


