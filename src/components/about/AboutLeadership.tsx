import React from 'react'

interface ImageData {
  src: string
  alt?: string
}

interface Leader {
  name: string
  title?: string
  image: ImageData
  description: string
  imageLeft?: boolean
}

interface AboutLeadershipProps {
  leaders: Leader[]
}

export const AboutLeadership: React.FC<AboutLeadershipProps> = ({ leaders = [] }) => {
  if (!leaders || leaders.length === 0) return null
  return (
    <section aria-labelledby="leadership-bios-heading" className="bg-white">
      <div className="container mx-auto px-4 pt-12 md:pt-16 space-y-12">
        {leaders.map((l, idx) => {
          const imageLeft = l.imageLeft ?? idx % 2 === 0
          return (
            <article
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
              aria-labelledby={`leader-${idx}-name`}
            >
              {/* Image column */}
              <div className={imageLeft ? 'md:col-span-4 order-1' : 'md:col-span-4 order-1 md:order-2'}>
                <figure className="overflow-hidden bg-ww-gray-200 ring-1 ring-ww-gray-300">
                  <img src={l.image.src} alt={l.image.alt ?? l.name} className="w-full h-[320px] object-cover" />
                </figure>
              </div>
              {/* Text column */}
              <div className={imageLeft ? 'md:col-span-8 order-2 md:py-10' : 'md:col-span-8 order-2 md:py-10 md:order-1'}>
                <header className="mb-3">
                  <h3 id={`leader-${idx}-name`} className="text-3xl md:text-4xl text-ww-blue-700">
                    {l.name}
                  </h3>
                  {l.title && <p className="text-sm md:text-base text-ww-gray-700 mt-1">{l.title}</p>}
                </header>
                <p className="text-ww-gray-800 leading-relaxed whitespace-pre-line">{l.description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default AboutLeadership


