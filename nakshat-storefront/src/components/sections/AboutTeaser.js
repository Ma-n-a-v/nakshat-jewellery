'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useMemo, useRef } from 'react'

const WORD_STAGGER = 0.15
const WORD_START_DELAY = 0.30
const WORD_ANIM_DURATION = 0.35

function WordReveal({ text, className = '' }) {
  const words = useMemo(() => text.split(' '), [text])

  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: WORD_START_DELAY,
        staggerChildren: WORD_STAGGER,
      },
    },
  }

  const word = {
    hidden: { opacity: 0, y: 8, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: WORD_ANIM_DURATION, ease: 'easeOut' },
    },
  }

  return (
    <motion.h2 variants={container} className={className}>
      {words.map((w, i) => (
        <motion.span key={i} variants={word} className="inline-block">
          {w}&nbsp;
        </motion.span>
      ))}
    </motion.h2>
  )
}

export default function AboutTeaser() {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    amount: 0.01,
    margin: '0px 0px -85% 0px',
  })

  const text =
    "At Nakshat, we merge contemporary design with timeless craftsmanship. Each piece is more than jewellery, it's a statement of individuality and style."

  const wordsCount = text.split(' ').length

  //exact moment when the last word finishes
  const CTA_DELAY =
    WORD_START_DELAY +
    wordsCount * WORD_STAGGER +
    WORD_ANIM_DURATION

  return (
    <section ref={ref} className="relative z-30 min-h-screen bg-[#0f0f0f] px-6 py-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        {/* Image reveal from top */}
        <div className="w-full max-w-[320px] sm:max-w-[360px]">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/images/about-teaser.png"
              alt="Jewellery close-up"
              fill
              className="object-cover"
            />
            <motion.div
              initial={{ y: '0%' }}
              animate={inView ? { y: '-105%' } : { y: '0%' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-[#0f0f0f]"
            />
          </div>
        </div>

        {/* Text */}
        <motion.div
          className="mt-14 w-full"
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <WordReveal
            text={text}
            className="teaser-heading max-w-4xl mx-auto text-center uppercase tracking-wide text-white leading-[1.05] text-[2.1rem] sm:text-[3rem] md:text-[3.8rem]"
          />
        </motion.div>

        {/*Learn More AFTER full sentence */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
            delay: CTA_DELAY,
          }}
        >
          <Link
            href="/about"
            className="group mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/75 hover:text-white"
          >
            <span className="subheading text-2xl border-b border-white/80 pb-1 group-hover:border-white transition-colors">
              Learn More
            </span>
            <span className="text-base translate-y-[1px] group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
