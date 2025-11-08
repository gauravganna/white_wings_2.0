import React from 'react'

interface TeamMember {
  name: string
  role: string
  photo?: string
}

interface AboutTeamProps {
  title?: string
  people: TeamMember[]
}

export const AboutTeam: React.FC<AboutTeamProps> = ({ title = 'Leadership', people }) => {
  if (!people || people.length === 0) return null
  return (
    <section aria-labelledby="about-team-heading" className="bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h3 id="about-team-heading" className="text-2xl md:text-3xl font-semibold text-ww-gray-900">{title}</h3>
        <div className="mt-2 flex items-center gap-1" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-ww-gray-400" />
          <span className="h-px w-40 md:w-64 bg-ww-gray-400" />
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p, i) => (
            <article key={i} className="rounded-lg border border-ww-gray-200 overflow-hidden bg-white">
              <div className="relative aspect-[16/11] bg-ww-gray-200">
                {p.photo && <img src={p.photo} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />}
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-ww-gray-900">{p.name}</h4>
                <p className="text-sm text-ww-gray-700">{p.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeam


