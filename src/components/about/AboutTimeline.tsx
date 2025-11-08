import React from 'react'

interface TimelineItem {
  year: string
  title?: string
  description?: string
}

interface AboutTimelineProps {
  title?: string
  items: TimelineItem[]
}

export const AboutTimeline: React.FC<AboutTimelineProps> = ({ title = 'Milestones', items }) => {
  if (!items || items.length === 0) return null
  return (
    <section aria-labelledby="about-timeline-heading" className="bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h3 id="about-timeline-heading" className="text-2xl md:text-3xl font-semibold text-ww-gray-900">{title}</h3>
        <div className="mt-2 flex items-center gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-ww-gray-400" />
          <span className="h-px w-40 md:w-64 bg-ww-gray-400" />
        </div>
        <ol className="mt-6 relative border-l border-ww-gray-300">
          {items.map((it, idx) => (
            <li key={idx} className="ml-4 pl-6 pb-6 relative">
              <span className="absolute left-[-7px] top-1.5 h-3 w-3 rounded-full bg-ww-gray-400" aria-hidden="true" />
              <div className="text-sm text-ww-gray-600">{it.year}</div>
              {it.title && <div className="text-lg font-semibold text-ww-gray-900">{it.title}</div>}
              {it.description && <p className="text-ww-gray-700">{it.description}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default AboutTimeline


