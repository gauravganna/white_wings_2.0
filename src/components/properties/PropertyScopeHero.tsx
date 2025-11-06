import React from 'react'

export type PropertyType = 'residential' | 'commercial' | 'land'

interface Props {
  value: PropertyType
  onChange: (value: PropertyType) => void
}

const options: { label: string; value: PropertyType }[] = [
  { label: 'RESIDENTIAL', value: 'residential' },
  { label: 'COMMERCIAL', value: 'commercial' },
  { label: 'LAND DEVELOPMENT', value: 'land' }
]

export const PropertyScopeHero: React.FC<Props> = ({ value, onChange }) => {
  return (
      <section className="bg-white">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-center text-ww-gray-800 mb-6">Property Scope</h1>
          
          {/* Curved connectors with arrows */}
          <div className="relative mx-auto w-full max-w-5xl h-20 md:h-24">
            <svg className="absolute inset-0 w-full h-full text-ww-gray-400" viewBox="0 0 1000 140" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                </marker>
              </defs>
              {/* Mobile: same style as desktop, width-adjusted and centered, no arrows */}
              <g className="md:hidden" transform="translate(100 0)">
                <path
                  d="M0 100
                    C0 10, 120 10, 300 10
                    H500
                    C680 10, 800 50, 800 100"
                  stroke="currentColor"
                  strokeWidth="2.75"
                  fill="none"
                  opacity="0.45"
                />
                <line
                  x1="400"
                  y1="10"
                  x2="400"
                  y2="80"
                  stroke="currentColor"
                  strokeWidth="1.75"
                />
              </g>

              {/* Desktop: gentle arcs (centered under title) */}
              <g className="hidden md:block" transform="translate(100 0)">
                <path
                  d="M0 100
                    C0 40, 120 0, 300 0
                    H500
                    C680 0, 800 40, 800 100"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  fill="none"
                  opacity="0.4"
                />

                <line
                  x1="400"
                  y1="0"
                  x2="400"
                  y2="70"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </g>
            </svg>
          </div>

          <div className="mx-auto w-full md:w-[80%] md:max-w-[800px] grid grid-cols-3 place-items-center gap-2 sm:gap-6 md:mt-0">
            {options.map((opt) => {
              const active = value === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange(opt.value)}
                  className={
                    'text-xs sm:text-sm md:text-lg tracking-wide transition-colors text-center leading-tight break-words' +
                    (active ? ' text-base sm:text-lg md:text-2xl text-ww-gray-900 font-semibold' : ' text-ww-gray-500 hover:text-ww-gray-800')
                  }
                aria-pressed={active}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PropertyScopeHero


