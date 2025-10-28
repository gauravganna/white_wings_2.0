import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import { PropertiesSection } from '@/components/properties/PropertiesSection'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import React from 'react'

const PropertiesIndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1 container mx-auto px-4 py-10 space-y-10">
        <PropertiesSection type="commercial" title="Commercial" />
        <PropertiesSection type="residential" title="Residential" />
      </main>
      <Footer data={footerData} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default PropertiesIndexPage


