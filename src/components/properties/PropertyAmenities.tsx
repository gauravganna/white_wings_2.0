import { BadgeCheck } from 'lucide-react'
import React from 'react'

export interface AmenityItem {
  label: string
  icon?: string // optional path to an icon (SVG/PNG/WebP)
  alt?: string
}

interface PropertyAmenitiesProps {
  title?: string
  image?: string
  amenities: AmenityItem[]
}

export const PropertyAmenities: React.FC<PropertyAmenitiesProps> = ({ title = 'Amenities', image, amenities }) => {
  const items = amenities ?? []

  return (
    <section id="amenities" aria-labelledby="amenities-title" className="bg-white">
      <div className="container mx-auto px-2 md:px-4 py-0 md:pt-6">
        <h2 id="amenities-title" className="text-2xl md:text-3xl font-semibold text-ww-gray-900 mb-6 md:mb-8">
          Amenities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-start">
          {/* Left image (hidden on mobile) */}
          <div className="hidden md:block self-stretch h-full">
            {image ? (
              <div className="h-full w-full py-4">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-fill rounded-md"
                  loading="lazy"
                />
              </div>
            ) : null}
          </div>

          {/* Right title + grid */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-xl md:text-2xl uppercase text-ww-gray-700">{title}</h3>
            <ul className="grid grid-cols-2 gap-4 md:gap-6" role="list">
              {items.map((a, idx) => (
                <li key={idx} className="flex flex-col items-center text-center justify-center rounded-md bg-[#CADCF0] md:bg-[#f7f2fe] p-6 md:p-8">
                  {a.icon ? (
                    <img src={a.icon} alt={a.alt ?? a.label} className="h-10 w-10 md:h-12 md:w-12 object-contain" />
                  ) : (
                    <BadgeCheck className="h-10 w-10 md:h-12 md:w-12 text-ww-blue-700" aria-hidden="true" />
                  )}
                  <span className="mt-4 text-sm md:text-base text-ww-gray-800 leading-snug">
                    {a.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyAmenities


