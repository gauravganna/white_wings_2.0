import React from 'react'

interface AchievementItem {
  icon?: string
  title: string
  description?: string
}

interface AboutAchievementsProps {
  title?: string
  items: AchievementItem[]
}

export const AboutAchievements: React.FC<AboutAchievementsProps> = ({ title = 'Achievements', items = [] }) => {
  if (!items || items.length === 0) return null
  return (
    <section aria-labelledby="about-achievements-heading" className="bg-white">
      <div className="container mx-auto px-4 pt-12 md:pt-16">
        <h2 id="about-achievements-heading" className="text-4xl md:text-4xl text-ww-gray-900 mb-6 md:mb-8">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {items.map((it, idx) => (
            <article key={idx} className="border-ww-gray-200 bg-white p-5 h-full">
              <div className="flex items-center gap-4">
                {it.icon && (
                  <img src={it.icon} alt="" className="h-10 w-10 md:h-12 md:w-12 object-contain" aria-hidden="true" />
                )}
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl text-ww-gray-900">{it.title}</h3>
                  {it.description && <p className="text-sm text-ww-gray-700">{it.description}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutAchievements


