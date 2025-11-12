import { PropertyDetailInfo } from '@/components/properties/PropertyDetailInfo'
import { ArrowDown } from 'lucide-react'
import React from 'react'

export interface PropertyHeroItem {
  name: string
  phone?: string
  brochureUrl?: string
  heroImages?: string[]
  image?: string
  detailInfo?: any
}

interface PropertyHeroProps {
  item: PropertyHeroItem
  sections?: { id: string; label: string }[]
}

/**
 * PropertyHero: Desktop left sidebar + media canvas + top bar
 * - Data-driven; all text and links come from the provided item/sections
 * - Mobile stacks vertically, with sidebar rendered as a simple list
 */
export const PropertyHero: React.FC<PropertyHeroProps> = ({ item, sections }) => {
  const media = item.heroImages?.[0] ?? item.image ?? '/assets/images/sample-image1.webp'
  const nav = sections ?? [
    { id: 'amenities', label: 'Amenities' },
    { id: 'images', label: 'Images' },
    { id: 'videos', label: 'Videos' },
    { id: 'plans', label: 'Plans' },
  ]

  return (
    <section
      aria-labelledby="property-hero-title"
      className="px-0 md:px-4 bg-[#f7f2fe] md:bg-[linear-gradient(to_bottom,_white_0%,_white_20%,_#f7f2fe_20%,_#f7f2fe_100%)]"
    >
      {/* Top bar */}
      <div className="">
        <div className="container mx-auto px-4 py-4 flex items-end justify-center md:justify-between">
          <h1 id="property-hero-title" className="text-6xl tracking-wider uppercase md:text-5xl font-semibold text-ww-gray-900">
            {item.name}
          </h1>
          {item.phone && (
            <div className="text-right text-ww-gray-800 font-medium self-end hidden md:block">
              <span className="text-sm md:text-base ">Phone No:</span>{' '}
              <a href={`tel:${item.phone}`} className="text-ww-gray-900 hover:text-ww-blue-700 underline">
                {item.phone}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Body: sidebar + media */}
      <div className="container mx-auto px-4 grid grid-cols-[80px_1fr] md:grid-cols-[240px_1fr] md:gap-16 gap-4">
        {/* Sidebar + Desktop CTA */}
        <div className="p-4 md:sticky md:top-24 h-max">
          <nav aria-label="Property sections" className="rounded-md">
            <ul className="space-y-3">
              {nav.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-ww-gray-600 hover:text-ww-gray-900">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {item.brochureUrl && (
            <div className="mt-6 hidden md:block">
              <a
                href={item.brochureUrl}
                className="inline-flex items-center rounded-md bg-ww-blue-700 text-white px-4 py-2 text-sm shadow hover:bg-ww-blue-800 focus:outline-none focus:ring-2 focus:ring-ww-blue-400"
              >
                Brochure <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Media Canvas */}
        <div className="relative rounded-md overflow-hidden bg-ww-gray-200">
          {/* Placeholder image/video area */}
          <img
            src={media}
            alt={`${item.name} hero`}
            className="w-full h-[260px] md:h-[560px] object-cover"
            loading="lazy"
          />

        </div>
      </div>
      
      {/* Mobile-only two-column bar beneath: left contact + right info box */}
      <div className="space-y-2 block md:hidden p-4">
        <div className="grid grid-cols-2 gap-4 items-start">
            <div className="space-y-3">
                {item.phone && (
                <div>
                    <div className="text-base font-semibold text-ww-gray-900">Phone No:</div>
                    <a href={`tel:${item.phone}`} className="text-ww-blue-700 underline">{item.phone}</a>
                </div>
            )}
                <a
                    href={item.brochureUrl}
                    className="inline-flex items-center rounded-md bg-ww-blue-700 text-white px-4 py-2 text-sm shadow hover:bg-ww-blue-800 focus:outline-none focus:ring-2 focus:ring-ww-blue-400"
                >
                    Brochure <ArrowDown className="w-4 h-4 ml-2" />
                </a>
            </div>
            <div className="border border-ww-gray-400 p-1 pl-4 rounded-sm">
                {item.detailInfo?.[2]?.title && (
                <div className="text-lg font-semibold text-ww-gray-900">{item.detailInfo?.[2]?.title}</div>
                )}
                <div className="text-ww-gray-700 whitespace-pre-line leading-relaxed">{item.detailInfo?.[2]?.body}</div>
            </div>
        </div>
      </div>
      {/* Bottom text blocks (3) */}
      <PropertyDetailInfo
        blocks={(item.detailInfo as any)}
      />
    </section>
  )
}

export default PropertyHero


