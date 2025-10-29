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
          <div className="relative mx-auto w-full max-w-5xl h-20 md:h-24 mb-2">
            <svg className="absolute inset-0 w-full h-full text-ww-gray-400" viewBox="0 0 1000 140" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                </marker>
              </defs>
              {/* Mobile: larger span from title to options */}
              <g className="md:hidden">
                <path
                  d="M 500 8 A 680 220 0 0 0 160 126"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  shapeRendering="geometricPrecision"
                />
                <path
                  d="M 500 8 L 500 126"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  shapeRendering="geometricPrecision"
                />
                <path
                  d="M 500 8 A 680 220 0 0 1 840 126"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  shapeRendering="geometricPrecision"
                />
              </g>

              {/* Desktop: gentle arcs */}
              <g className="hidden md:block">
                <path
                  d="M 500 12 A 360 220 0 0 0 200 90"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  shapeRendering="geometricPrecision"
                />
                <path
                  d="M 500 12 L 500 90"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  shapeRendering="geometricPrecision"
                />
                <path
                  d="M 500 12 A 360 220 0 0 1 800 90"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  shapeRendering="geometricPrecision"
                />
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-center gap-4 md:gap-32">
            {options.map((opt) => {
              const active = value === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onChange(opt.value)}
                className={
                  'text-sm md:text-lg tracking-wide transition-colors' +
                  (active ? 'text-2xl md:text-3xl text-ww-gray-900 font-semibold' : ' text-ww-gray-500 hover:text-ww-gray-800')
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


