import React from 'react'

interface GalleryImage {
  src: string
  alt?: string
}

interface PropertyImagesProps {
  title?: string
  images: GalleryImage[]
}

export const PropertyImages: React.FC<PropertyImagesProps> = ({ title = 'Images', images }) => {
  const items = (images ?? []).slice(0, 4)

  return (
    <section id="images" aria-labelledby="images-title" className="bg-white">
      <div className="container mx-auto px-2 md:px-4 py-0 md:pt-6">
        <h2 id="images-title" className="text-2xl md:text-3xl font-semibold text-ww-gray-900 mb-4 md:mb-6">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-3 md:gap-6 px-0 md:px-8">
          {items.map((img, idx) => (
            <div key={idx} className="aspect-[4/3] overflow-hidden rounded-md bg-ww-gray-200">
              <img
                src={img.src}
                alt={img.alt ?? `${title} ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertyImages


