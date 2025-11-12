import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

export interface AboutHeroAnimatedProps {
  videoSrc: string
  leftText?: string
  rightText?: string
  carouselImages?: Array<{ src: string; alt?: string }>
  subheading?: string
  mission?: { title: string; description: string }
  vision?: { title: string; description: string }
  /** Delay before animation kicks in (ms) */
  startDelayMs?: number
  /** Duration of the shrink-to-I animation (ms) */
  animationDurationMs?: number
}

const AboutHeroAnimated: React.FC<AboutHeroAnimatedProps> = ({
  videoSrc,
  leftText = 'WH',
  rightText = 'TE',
  carouselImages = [],
  subheading = 'Wings Group',
  mission,
  vision,
  startDelayMs = 500,
  animationDurationMs = 2000,
}) => {
  const [animationStarted, setAnimationStarted] = useState(false)
  const [carouselStarted, setCarouselStarted] = useState(false)
  const [zoomOut, setZoomOut] = useState(false)
  const [dockTopLeft, setDockTopLeft] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStarted(true)
    }, startDelayMs)
    return () => clearTimeout(timer)
  }, [startDelayMs])

  // Start the carousel and then zoom out after 1s pause; then dock to top-left
  useEffect(() => {
    if (!animationStarted) return
    const t1 = setTimeout(() => setCarouselStarted(true), animationDurationMs)
    const t2 = setTimeout(() => setZoomOut(true), animationDurationMs + 1000)
    const t3 = setTimeout(() => setDockTopLeft(true), animationDurationMs + 2000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [animationStarted, animationDurationMs])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay can fail; ignore and allow click-to-play
      })
    }
  }, [])

  const videoVariants: any = {
    initial: {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
      x: '-50vw',
      y: '-50vh',
      transformOrigin: 'center center',
    },
    animate: {
      width: '8.33vw',
      height: '35vh',
      borderRadius: '0.56vw',
      x: 0, 
      y: '-6.5vw',
      transformOrigin: 'center center',
      transition: {
        duration: animationDurationMs / 1000,
        ease: 'easeInOut',
      },
    },
  }

  const leftTextVariants: any = {
    initial: { x: '-55.56vw', opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: animationDurationMs / 1000,
        ease: 'easeInOut',
        delay: 0,
      },
    },
  }

  const rightTextVariants: any = {
    initial: { x: '55.56vw', opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: animationDurationMs / 1000,
        ease: 'easeInOut',
        delay: 0,
      },
    },
  }

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <section className="relative w-full h-[calc(100vh-90px)] bg-white overflow-hidden" aria-label="About hero">
      {/* Group container moves both WHITE and the subheading together */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ x: 0, y: 0 }}
        animate={dockTopLeft ? { x: '-22vw', y: '-22vh' } : { x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* Wrapper around WHITE composition so we can zoom it out after a pause */}
        <motion.div
          className="absolute inset-0 origin-center"
          initial={{ scale: 1, y: 0 }}
          animate={zoomOut ? { scale: 0.55, y: '-6vh' } : { scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          style={{ transformOrigin: 'center center' }}
        >
          {/* Video element transforms into the center “I” */}
          <motion.div
            variants={videoVariants}
            initial="initial"
            animate={animationStarted ? 'animate' : 'initial'}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {videoSrc ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                style={{ borderRadius: 'inherit' }}
                onClick={handleVideoClick}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="w-full h-full bg-ww-gray-200" />
            )}
          </motion.div>

          {/* Left text */}
          <motion.div
            variants={leftTextVariants}
            initial="initial"
            animate={animationStarted ? 'animate' : 'initial'}
            className="absolute top-1/3 -translate-y-1/2"
            style={{ right: 'calc(45% + 4.17vw + 1.39vw)' }}
          >
            <h1
              className="font-extrabold text-black select-none leading-[0.217] tracking-[-0.38%]"
              style={{
                fontSize: 'clamp(15vw, 25vw, 25vw)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
              }}
              aria-hidden="true"
            >
              {leftText}
            </h1>
          </motion.div>

          {/* Right text */}
          <motion.div
            variants={rightTextVariants}
            initial="initial"
            animate={animationStarted ? 'animate' : 'initial'}
            className="absolute top-1/3 -translate-y-1/2"
            style={{ left: 'calc(55% + 4.17vw + 1.39vw)' }}
          >
            <h1
              className="font-extrabold text-black select-none leading-[0.217] tracking-[-0.38%]"
              style={{
                fontSize: 'clamp(15vw, 25vw, 25vw)',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
              }}
              aria-hidden="true"
            >
              {rightText}
            </h1>
          </motion.div>
        </motion.div>

        {/* Subheading appears after zoom out */}
        {zoomOut && (
          <motion.p
            className="absolute left-1/2 top-[44vh] -translate-x-1/2 text-3xl md:text-6xl text-ww-gray-900 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.span
              className="font-semibold"
              initial={{ color: '#111827' }}
              animate={{ color: dockTopLeft ? '#7DAADB' : '#111827' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {(subheading?.split(' ')[0] ?? 'Wings')}
            </motion.span>{' '}
            <span className="text-ww-gray-900">
              {subheading?.split(' ').slice(1).join(' ') || 'Group'}
            </span>
          </motion.p>
        )}
      </motion.div>

      {/* Mission & Vision cards (below title, above carousel) */}
      {zoomOut && dockTopLeft && (mission || vision) && (
        <motion.div
          className="absolute left-0 right-0 top-[22vh] md:top-[30vh] px-4 md:px-8 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {mission && (
              <article className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-5 md:p-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-ww-gray-900 tracking-wide">
                  {mission.title || 'Mission'}
                </h3>
                {mission.description && (
                  <p className="mt-3 md:mt-4 text-ww-gray-700 text-sm md:text-base leading-relaxed">
                    {mission.description}
                  </p>
                )}
              </article>
            )}
            {vision && (
              <article className="rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-5 md:p-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-ww-gray-900 tracking-wide">
                  {vision.title || 'Vision'}
                </h3>
                {vision.description && (
                  <p className="mt-3 md:mt-4 text-ww-gray-700 text-sm md:text-base leading-relaxed">
                    {vision.description}
                  </p>
                )}
              </article>
            )}
          </div>
        </motion.div>
      )}

      {/* Carousel appears after the WHITE animation completes */}
      {carouselStarted && carouselImages.length > 0 && (
        <div className="absolute left-0 right-0 bottom-0 md:bottom-4 overflow-hidden">
          <div className="pointer-events-none">
            <motion.div
              className="flex gap-4 md:gap-6"
              // Start half-track off-screen left, then slide right into place continuously
              initial={{ x: '-50%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              {[...carouselImages, ...carouselImages].map((img, i) => (
                <figure
                  key={i}
                  className="shrink-0 w-[55vw] md:w-[22vw] aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={img.alt ?? ''}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AboutHeroAnimated


