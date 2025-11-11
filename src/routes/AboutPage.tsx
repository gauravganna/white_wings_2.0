import AboutAchievements from '@/components/about/AboutAchievements'
import AboutFounder from '@/components/about/AboutFounder'
import AboutHeroPlaceholder from '@/components/about/AboutHeroPlaceholder'
import AboutIntro from '@/components/about/AboutIntro'
import AboutLeadership from '@/components/about/AboutLeadership'
import AboutTeam from '@/components/about/AboutTeam'
import AboutTimeline from '@/components/about/AboutTimeline'
import AboutWhyChooseUs from '@/components/about/AboutWhyChooseUs'
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

        {/* Why Choose Us */}
        <AboutWhyChooseUs
          title={(about as any).why?.title}
          description={(about as any).why?.description}
          background={(about as any).why?.background}
          items={(about as any).why?.items}
        />

        {/* About Founder */}
        <AboutFounder
          title={(about as any).founder?.title}
          founder={{
            name: (about as any).founder?.name,
            image: (about as any).founder?.image,
            visionaryTitle: (about as any).founder?.visionaryTitle,
            visionaryText: (about as any).founder?.visionaryText,
            socials: (about as any).founder?.socials,
          }}
        />

        {/* Leadership rows (Founder and Wife) */}
        <AboutLeadership leaders={((about as any).leadership?.members ?? []) as any} />

        {/* Achievements / Memberships */}
        <AboutAchievements title={(about as any).achievements?.title} items={((about as any).achievements?.items ?? []) as any} />

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


