import AboutHeroPlaceholder from '@/components/about/AboutHeroPlaceholder'
import AboutIntro from '@/components/about/AboutIntro'
import AboutStats from '@/components/about/AboutStats'
import AboutTeam from '@/components/about/AboutTeam'
import AboutTimeline from '@/components/about/AboutTimeline'
import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import about from '@/data/about.json'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1">
        {/* Hero Placeholder - final hero will replace this section later */}
        <AboutHeroPlaceholder
          title={(about as any).hero?.title}
          subtitle={(about as any).hero?.subtitle}
          image={(about as any).hero?.image}
        />

        {/* Intro */}
        <AboutIntro
          title={(about as any).intro?.title}
          subtitle={(about as any).intro?.subtitle}
          description={(about as any).intro?.description}
          overline={(about as any).intro?.overline}
          images={(about as any).intro?.images}
        />

        {/* Stats */}
        <AboutStats items={(about as any).stats ?? []} />

        {/* Timeline */}
        <AboutTimeline title={(about as any).timeline?.title} items={(about as any).timeline?.items ?? []} />

        {/* Team */}
        <AboutTeam title={(about as any).team?.title} people={(about as any).team?.people ?? []} />
      </main>
      <Footer data={footerData as any} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default AboutPage


