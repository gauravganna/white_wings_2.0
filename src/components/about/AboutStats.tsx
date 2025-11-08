import React from 'react'

interface StatItem { label: string; value: string }
interface AboutStatsProps { items: StatItem[] }

export const AboutStats: React.FC<AboutStatsProps> = ({ items }) => {
  if (!items || items.length === 0) return null
  return (
    <section aria-label="Company stats" className="bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((s, i) => (
            <div key={i} className="rounded-lg border border-ww-gray-200 bg-white p-6 text-center">
              <div className="text-2xl md:text-3xl font-semibold text-ww-gray-900">{s.value}</div>
              <div className="mt-1 text-sm text-ww-gray-700">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStats


