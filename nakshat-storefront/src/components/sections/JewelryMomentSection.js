'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function JewelryMomentSection() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // --- KEY CHANGE HERE ---
  // Change [0, 1] to [0, 0.35]. 
  // Now the video grows to full size in the first 35% of the scroll.
  // It stays full size for the remaining 65%.
  const width = useTransform(scrollYProgress, [0, 0.35], ['72vw', '100vw'])
  const height = useTransform(scrollYProgress, [0, 0.35], ['42vw', '100vh'])
  
  // Adjust other animations to match the new speed (0.35)
  const borderRadius = useTransform(scrollYProgress, [0, 0.35], ['8px', '0px'])
  const y = useTransform(scrollYProgress, [0, 0.35], [20, 0])
  
  // Opacity can happen even faster if you want (e.g., 0.1)
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.7, 1])

  return (
    <section ref={sectionRef} className="bg-[#0f0f0f]">
      {/* Kept your original size */}
      <div className="h-[280vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              style={{ width, height, borderRadius, opacity, y }}
              className="overflow-hidden shadow-2xl"
            >
              <video
                className="h-full w-full object-cover"
                src="/videos/jewelry-moment.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-6">
            <p className="subheading text-white/90 text-3xl sm:text-4xl md:text-5xl tracking-wide">
              JEWELRY FOR
            </p>
            <p className="subheading text-white/90 text-3xl sm:text-4xl md:text-5xl tracking-wide">
              EVERY MOMENT
            </p>
          </div>

          <div className="pointer-events-none absolute inset-0 z-10 bg-black/15" />
        </div>
      </div>
    </section>
  )
}