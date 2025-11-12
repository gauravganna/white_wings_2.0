import AboutAchievements from '@/components/about/AboutAchievements';
import AboutFounder from '@/components/about/AboutFounder';
import AboutLeadership from '@/components/about/AboutLeadership';
import React, { useMemo, useState } from 'react';

interface ImageData { src: string; alt?: string }
interface SocialItem { id: string; label?: string; href: string }

interface FounderData {
  name: string
  image: ImageData
  visionaryTitle?: string
  visionaryText?: string
  socials?: SocialItem[]
  title?: string
}

interface Leader {
  name: string
  title?: string
  image: ImageData
  description: string
  imageLeft?: boolean
}

interface AchievementsItem { icon?: string; title: string; description?: string }

interface AboutShowcaseProps {
  founder: FounderData
  leaders: Leader[]
  achievementsTitle?: string
  achievementsItems: AchievementsItem[]
}

const AboutShowcase: React.FC<AboutShowcaseProps> = ({
  founder,
  leaders,
  achievementsTitle,
  achievementsItems,
}) => {
  const [active, setActive] = useState(0)

  // Prepare the desktop slides
  const slides = useMemo(
    () => [
      { key: 'founder', render: () => <AboutFounder title={founder.title} founder={founder} /> },
      { key: 'leadership', render: () => <AboutLeadership leaders={leaders} /> },
      { key: 'achievements', render: () => <AboutAchievements title={achievementsTitle} items={achievementsItems} /> },
    ],
    [founder, leaders, achievementsTitle, achievementsItems],
  )

  const goPrev = () => setActive((i) => (i <= 0 ? slides.length - 1 : i - 1))
  const goNext = () => setActive((i) => (i >= slides.length - 1 ? 0 : i + 1))

  return (
    <section aria-label="About showcase" className="bg-[#F8F8F8]">
      {/* Mobile: stacked sections */}
      <div className="md:hidden">
        {slides.map((s, idx) => (
          <div key={s.key} className={idx === 0 ? '' : ''}>
            {s.render()}
          </div>
        ))}
      </div>

      {/* Desktop: show single active with navigation buttons */}
      <div className="hidden md:block">
        <div className="relative">{slides[active].render()}</div>
        <div className="container mx-auto px-4 pt-8 flex items-center justify-between">
          <div className="w-full flex justify-center gap-2 bg-[#F8F8F8]">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to section ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full ${active === i ? 'bg-ww-gray-800' : 'bg-ww-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutShowcase


