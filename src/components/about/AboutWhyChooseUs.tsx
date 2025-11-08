import React from 'react'

interface WhyItem {
  title: string
  description?: string
  icon?: string
}

interface BackgroundImage {
  src: string
  alt?: string
}

interface AboutWhyChooseUsProps {
  title?: string
  description?: string
  background?: BackgroundImage
  items?: WhyItem[]
}

export const AboutWhyChooseUs: React.FC<AboutWhyChooseUsProps> = ({
  title = 'Why Choose Us?',
  description,
  background,
  items = [],
}) => {
  if (!items || items.length === 0) {
    return null
  }

  const renderIcon = (src?: string) => {
    if (src) {
      return <img src={src} alt="" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
    }
    // Fallback: simple building icon
    return (
      <svg
        className="h-8 w-8 md:h-10 md:w-10 text-ww-gray-700"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="14" height="18" rx="2" />
        <path d="M7 7h2M11 7h2M7 11h2M11 11h2M7 15h2M11 15h2" />
        <path d="M17 9h4v12H7" />
      </svg>
    )
  }

  return (
    <section aria-labelledby="why-choose-us-heading" className="bg-white relative">
      <div className="container mx-auto mt-6 md:mt-12 px-4 py-10 md:py-14 relative">
        {/* Desktop background image occupying left 75% */}
        {background?.src && (
          <div className="absolute inset-y-0 left-0 w-full md:w-[75%]">
            <img
              src={background.src}
              alt={background.alt ?? ''}
                className="h-full w-full object-cover rounded-lg brightness-50"
            />
              <div className="hidden md:block absolute inset-0 rounded-lg bg-black/30 pointer-events-none" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 items-center md:pl-8">
          {/* Left 25% column */}
          <div className="md:col-span-1">
            {title && (
              <h2 id="why-choose-us-heading" className="text-2xl md:text-4xl font-semibold text-white md:text-ww-gray-50 drop-shadow">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-white/90 md:text-ww-gray-100 max-w-xs md:max-w-none drop-shadow pt-6">
                {description}
              </p>
            )}
          </div>

          {/* Right 75% column: 2x2 grid on desktop; stack on mobile */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {items.slice(0, 4).map((it, idx) => (
                <article key={idx} className="bg-white/95 md:bg-white shadow-sm border border-ww-gray-200 p-2 md:p-5 z-10">
                  <div className="space-y-3">
                    <div className="shrink-0">{renderIcon(it.icon)}</div>
                    <h3 className="text-lg md:text-xl font-semibold text-ww-gray-900">{it.title}</h3>
                    {it.description && <p className="text-sm text-ww-gray-700">{it.description}</p>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutWhyChooseUs


