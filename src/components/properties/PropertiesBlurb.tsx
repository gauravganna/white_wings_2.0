import data from '@/data/properties.json'
import React from 'react'

export type PropertiesBlurbType = 'residential' | 'commercial' | 'land'

interface PropertiesBlurbProps {
  type: PropertiesBlurbType
}

export const PropertiesBlurb: React.FC<PropertiesBlurbProps> = ({ type }) => {
  const blurbs = (data as any).blurbs ?? {}
  const content = blurbs[type] ?? {}
  const title: string = content.title ?? '{data.properties.blurbs.' + type + '.title}'
  const body: string = content.body ?? '{data.properties.blurbs.' + type + '.body}'

  return (
    <section aria-labelledby="properties-blurb-title" className="bg-white">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <h3 id="properties-blurb-title" className="text-2xl md:text-3xl font-medium text-ww-gray-800 mb-4">
          {title}
        </h3>
        <p className="text-ww-gray-600 leading-relaxed max-w-5xl">
          {body}
        </p>
      </div>
    </section>
  )
}

export default PropertiesBlurb


