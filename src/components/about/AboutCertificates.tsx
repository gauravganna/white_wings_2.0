import React, { useEffect, useMemo, useState } from 'react'

interface AboutCertificatesProps {
  title?: string
  images: string[]
  intervalMs?: number
}

export const AboutCertificates: React.FC<AboutCertificatesProps> = ({
  title = 'Certificate and Awards',
  images,
  intervalMs = 3500,
}) => {
  const slides = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images])
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length)
    }, intervalMs)
    return () => clearInterval(t)
  }, [slides.length, intervalMs])

  if (!slides.length) return null

  return (
    <section aria-labelledby="certificates-heading" className="bg-[#F8F8F8]">
      <div className="container mx-auto px-2 pt-12 md:pb-12 md:pt-16">
        <h2 id="certificates-heading" className="text-4xl text-ww-gray-900 mb-6 md:mb-8">
          {title}
        </h2>

        <div className="relative w-full overflow-hidden rounded-md">
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={`absolute inset-0 px-4 md:px-24 object-cover transition-opacity duration-700 ${
                i === idx ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Keep container height */}
          <div className="invisible">
            <img src={slides[0]} alt="" className="h-auto md:h-[80vh] w-full aspect-[4/3] object-contain" />
          </div>
        </div>

        {/* Dots
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${i === idx ? 'bg-ww-gray-800' : 'bg-ww-gray-300'}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default AboutCertificates


