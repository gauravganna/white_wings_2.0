import AboutCertificates from '@/components/about/AboutCertificates'
import AboutHeroAnimated from '@/components/about/AboutHeroAnimated'
import AboutIntro from '@/components/about/AboutIntro'
import AboutShowcase from '@/components/about/AboutShowcase'
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
        {/* Animated Hero */}
        <AboutHeroAnimated
          videoSrc={(about as any).hero?.videoSrc}
          leftText={(about as any).hero?.leftText}
          rightText={(about as any).hero?.rightText}
          carouselImages={((about as any).hero?.carousel?.images ?? []) as any}
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

        {/* Founder + Leadership + Achievements – stacked on mobile, single-view carousel on desktop */}
        <AboutShowcase
          founder={{
            title: (about as any).founder?.title,
            name: (about as any).founder?.name,
            image: (about as any).founder?.image,
            visionaryTitle: (about as any).founder?.visionaryTitle,
            visionaryText: (about as any).founder?.visionaryText,
            socials: (about as any).founder?.socials,
          }}
          leaders={((about as any).leadership?.members ?? []) as any}
          achievementsTitle={(about as any).achievements?.title}
          achievementsItems={((about as any).achievements?.items ?? []) as any}
        />

        {/* Certificate & Awards */}
        <AboutCertificates
          title={(about as any).certificates?.title}
          images={((about as any).certificates?.images ?? []) as any}
        />

      </main>
      <Footer data={footerData as any} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default AboutPage


