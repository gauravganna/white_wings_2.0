import { Footer } from '@/components/footer'
import { Header } from '@/components/layout'
import { PropertiesSection } from '@/components/properties/PropertiesSection'
import { PropertyScopeHero, PropertyType } from '@/components/properties/PropertyScopeHero'
import footerData from '@/data/footer.json'
import headerData from '@/data/header.json'
import React, { useState } from 'react'

const PropertiesIndexPage: React.FC = () => {
  const [type, setType] = useState<PropertyType>('residential')

  return (
    <div className="min-h-screen bg-ww-gray-50 flex flex-col">
      <Header data={headerData} />
      <main className="flex-1">
        <PropertyScopeHero value={type} onChange={setType} />
        <div className="container mx-auto px-4 py-10">
          <PropertiesSection type={type} />
        </div>
      </main>
      <Footer data={footerData} onNewsletterSubscribe={async () => {}} />
    </div>
  )
}

export default PropertiesIndexPage


