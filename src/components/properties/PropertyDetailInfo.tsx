import React from 'react'

export interface InfoBlock {
  title: string
  body: string
}

interface PropertyDetailInfoProps {
  blocks: InfoBlock[]
}

export const PropertyDetailInfo: React.FC<PropertyDetailInfoProps> = ({ blocks }) => {
  const items = (blocks ?? []).slice(0, 3)
  const left = items[0] ?? { title: '', body: '' }
  const middle = items[1] ?? { title: '', body: '' }
  const right = items[2] ?? { title: '', body: '' }

  return (
    <section aria-labelledby="property-detail-info-title" className="bg-ww-gray-50 md:bg-[#F4F2FE] ">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-[15%_55%_25%] gap-8">
          <div className="space-y-2">
            {left.title && (
              <h3 className="text-sm md:text-base font-semibold text-ww-gray-900">{left.title}</h3>
            )}
            <p className="text-md md:text-base text-ww-gray-700 leading-relaxed whitespace-pre-line">{left.body}</p>
          </div>

          {/* Middle column (primary copy, larger) */}
          <div className="space-y-3">
            {middle.title && (
              <h3 className="text-base md:text-2xl font-semibold text-ww-gray-900">{middle.title}</h3>
            )}
            <p className="text-base md:text-sm text-ww-gray-700 leading-relaxed whitespace-pre-line">{middle.body}</p>
          </div>

          {/* Right column (medium emphasis) */}
          <div className="space-y-2 p-10 border border-ww-gray-400 hidden md:block">
            {right.title && (
              <h3 className="text-sm md:text-5xl font-semibold text-ww-gray-900">{right.title}</h3>
            )}
            <p className="text-sm md:text-3xl text-ww-gray-700 leading-relaxed whitespace-pre-line">{right.body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetailInfo


