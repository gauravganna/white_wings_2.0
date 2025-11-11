import { Facebook, Instagram, Linkedin, Link as LinkIcon } from 'lucide-react'
import React from 'react'

interface ImageData {
  src: string
  alt?: string
}

interface SocialItem {
  id: 'facebook' | 'instagram' | 'linkedin' | 'linktree' | string
  label?: string
  href: string
}

interface FounderData {
  name: string
  image: ImageData
  visionaryTitle?: string
  visionaryText?: string
  socials?: SocialItem[]
}

interface AboutFounderProps {
  title?: string
  founder: FounderData
}

const SocialIcon: React.FC<{ id: string; className?: string }> = ({ id, className }) => {
  switch (id) {
    case 'facebook':
      return <Facebook className={className} aria-hidden="true" />
    case 'instagram':
      return <Instagram className={className} aria-hidden="true" />
    case 'linkedin':
      return <Linkedin className={className} aria-hidden="true" />
    default:
      return <LinkIcon className={className} aria-hidden="true" />
  }
}

export const AboutFounder: React.FC<AboutFounderProps> = ({ title = 'About Our Founder', founder }) => {
  const socials = founder.socials ?? []
  return (
    <section aria-labelledby="about-founder-heading" className="bg-white">
      <div className="container mx-auto px-4 pt-4 md:pt-16">
        {/* Mobile layout (stacked) */}
        <div className="md:hidden space-y-6">
          <h2 id="about-founder-heading" className="text-4xl  text-ww-gray-900">
            {title}
          </h2>
          <figure className="mx-auto w-full max-w-md rounded-lg overflow-hidden px-8">
            <img src={founder.image?.src} alt={founder.image?.alt ?? founder.name} className="w-full h-auto object-cover" />
          </figure>
          <p className="text-2xl font-semibold text-ww-blue-700 text-center">{founder.name}</p>
          {(founder.visionaryTitle || founder.visionaryText) && (
            <div className="text-center space-y-3">
              {founder.visionaryTitle && <h3 className="text-xl font-semibold text-ww-gray-900">{founder.visionaryTitle}</h3>}
              {founder.visionaryText && <p className="text-ww-gray-700">{founder.visionaryText}</p>}
            </div>
          )}
          {socials.length > 0 && (
            <div className="grid grid-cols-2 gap-4 place-items-center">
              {socials.map((s, i) => (
                <a key={i} href={s.href} className="inline-flex items-center gap-2 text-ww-gray-800 hover:text-ww-blue-700">
                  <SocialIcon id={s.id} className="h-5 w-5" />
                  <span className="text-sm">{s.label ?? s.id}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Desktop layout (content uses ~65% width, right side free) */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
          {/* Left column: title + socials */}
          <div className="md:col-span-4 space-y-8 pl-24">
            <h2 className="text-6xl text-center text-ww-gray-900 mr-2">{title}</h2>
            {socials.length > 0 && (
              <div className="grid grid-cols-2 gap-4 max-w-xs justify-items-center">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} className="inline-flex items-right gap-2 text-ww-gray-800 hover:text-ww-blue-700">
                    <SocialIcon id={s.id} className="h-5 w-5" />
                    <span className="text-sm">{s.label ?? s.id}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          {/* Middle column: visionary text (top-center) + image bottom + name */}
          <div className="md:col-span-4 flex flex-col items-center justify-end min-h-[520px]">
            {(founder.visionaryTitle || founder.visionaryText) && (
              <div className="w-[300px] mb-8">
                {founder.visionaryTitle && <h3 className="text-base font-semibold text-ww-gray-900">{founder.visionaryTitle}</h3>}
                {founder.visionaryText && <p className="mt-2 text-sm text-ww-gray-700 max-w-sm">{founder.visionaryText}</p>}
              </div>
            )}
            <figure className="w-[300px] h-[320px] overflow-hidden bg-ww-gray-200">
              <img src={founder.image?.src} alt={founder.image?.alt ?? founder.name} className="w-full h-full object-cover" />
            </figure>
            <p className="mt-4 text-4xl tracking-wider text-ww-blue-700">{founder.name}</p>
          </div>
          {/* Right column intentionally left empty for breathing room */}
          <div className="md:col-span-4" />
        </div>
      </div>
    </section>
  )
}

export default AboutFounder


