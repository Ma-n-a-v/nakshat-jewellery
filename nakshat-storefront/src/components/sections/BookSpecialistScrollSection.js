'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link' //link ADDED

export default function BookSpecialistRevealSection() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const REVEAL_END = 0.38

  const [revealed, setRevealed] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v >= REVEAL_END && !revealed) setRevealed(true)
  })

  const clipScroll = useTransform(
    scrollYProgress,
    [0.0, REVEAL_END],
    ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)']
  )
  const imgYScroll = useTransform(scrollYProgress, [0.0, REVEAL_END], [-30, 0])
  const imgScaleScroll = useTransform(scrollYProgress, [0.0, REVEAL_END], [1.05, 1])
  const overlayOpacityScroll = useTransform(scrollYProgress, [0.0, REVEAL_END], [0.7, 0.45])

  const cardY = useTransform(scrollYProgress, [0.32, 0.6], [60, 0])
  const cardOpacity = useTransform(scrollYProgress, [0.32, 0.52], [0, 1])

  return (
    <section ref={ref} className="bg-[#0f0f0f] mt-[clamp(48px,8vw,140px)]">
      <div className="h-[220vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden border-t border-white/0">
          <motion.div
            style={{
              clipPath: revealed ? 'inset(0% 0% 0% 0%)' : clipScroll,
              y: revealed ? 0 : imgYScroll,
              scale: revealed ? 1 : imgScaleScroll,
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/book-an-app-bg.avif"
              alt="Specialist appointment"
              fill
              className="object-cover object-center"
            />
          </motion.div>

          <motion.div
            style={{ opacity: revealed ? 0.45 : overlayOpacityScroll }}
            className="absolute inset-0 bg-[#0f0f0f]"
          />

          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.9)]" />

          <motion.div
            style={{ y: cardY, opacity: cardOpacity }}
            className="absolute left-1/2 top-1/2 w-[92vw] max-w-[980px] -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-white text-black border border-black/10">
              <div className="px-5 sm:px-8 py-7 sm:py-10">
                <h3 className="subheading uppercase tracking-wide leading-none text-3xl sm:text-5xl">
                  Book an appointment
                </h3>

                <p className="mt-4 text-sm sm:text-base text-black/70 max-w-2xl">
                  Meet a Nakshat specialist for diamond guidance, sizing, styling, and custom requests.
                </p>

                <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="border border-black/10 p-4">
                    <p className="uppercase tracking-[0.18em] text-black/60 text-xs">Session</p>
                    <p className="mt-2">1 Hour</p>
                  </div>
                  <div className="border border-black/10 p-4">
                    <p className="uppercase tracking-[0.18em] text-black/60 text-xs">Format</p>
                    <p className="mt-2">Virtual</p>
                  </div>
                  <div className="border border-black/10 p-4">
                    <p className="uppercase tracking-[0.18em] text-black/60 text-xs">Focus</p>
                    <p className="mt-2">Styling and custom</p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  {/*CHANGED: go to your /appointment page (Calendly embedded there) */}
                  <Link
                    href="/appointment"
                    className="inline-flex items-center justify-center rounded-none bg-black text-white
                               px-6 py-3 text-sm uppercase tracking-[0.22em]
                               hover:bg-black/90 transition-colors"
                  >
                    Book now
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-none border border-black/20
                               px-6 py-3 text-sm uppercase tracking-[0.22em]
                               hover:border-black/60 transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              <div className="h-px bg-[#0f0f0f]/10" />
            </div>
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/0" />
        </div>
      </div>
    </section>
  )
}
