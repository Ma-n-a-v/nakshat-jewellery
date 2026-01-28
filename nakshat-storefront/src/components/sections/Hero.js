'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useAnimationControls,
  useMotionValue,
  useReducedMotion,
  animate,
} from 'framer-motion'

export default function Hero() {
  const controls = useAnimationControls()
  const reduceMotion = useReducedMotion()

  const { scrollY } = useScroll()

  // Gate scroll effects until intro ends
  const gate = useMotionValue(0)

  // Diamond rotation: instant on the first tiny scroll (but only after intro)
  const rotateScroll = useTransform(scrollY, [0, 600], [0, 180])

  // 3D parallax for text (obvious + smooth) (but only after intro)
  const brandYRaw = useTransform(scrollY, [0, 400], [0, 48])
  const copyYRaw = useTransform(scrollY, [0, 400], [0, 28])
  // Mobile: move the whole text block up strongly (3D feel) (but only after intro)
  const mobileTextYRaw = useTransform(scrollY, [0, 450], [0, -220])

  const brandY = useTransform([brandYRaw, gate], ([y, g]) => y * g)
  const copyY = useTransform([copyYRaw, gate], ([y, g]) => y * g)
  const mobileTextY = useTransform([mobileTextYRaw, gate], ([y, g]) => y * g)

  // Intro-only rotate that settles to 0, then scroll rotation takes over
  const introRotate = useMotionValue(-28)
  const rotate = useTransform([introRotate, rotateScroll], ([a, b]) => a + b)

  // iPad/IOS full-screen height fix
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    setVH()
    window.addEventListener('resize', setVH)
    window.addEventListener('orientationchange', setVH)
    return () => {
      window.removeEventListener('resize', setVH)
      window.removeEventListener('orientationchange', setVH)
    }
  }, [])

  // Intro animation (everything runs concurrently)
  useEffect(() => {
    if (reduceMotion) {
      gate.set(1)
      introRotate.set(0)
      controls.set('done')
      return
    }

    // Start in intro state immediately
    gate.set(0)
    introRotate.set(-28)
    controls.set('start')

    // Kick off all variants at once
    controls.start('intro')

    // Smooth intro rotate to 0 (so scroll rotate feels clean after)
    animate(introRotate, 0, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    })

    // Unlock scroll after intro finishes
    const t = setTimeout(() => {
      animate(gate, 1, { duration: 0.35, ease: 'easeOut' })
      controls.start('done')
    }, 1100)

    return () => clearTimeout(t)
  }, [controls, reduceMotion, gate, introRotate])

  return (
    <section className="relative isolate h-[calc(var(--vh)*100)] w-full min-w-[100vw] overflow-hidden bg-[#0f0f0f]">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-0"
        // inline initial style removes the “1-frame delay” flash
        style={{ scale: 1.16, filter: 'blur(1px)', transformOrigin: 'center center'}}
        variants={{
          intro: {
            left: '-1%',
            width: '102%',
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
          },
          done: { scale: 1, filter: 'blur(0px)' },
        }}
        animate={controls}
      >
        <Image
          src="/images/hero.avif"
          alt="Hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/25" />

      {/* Diamond */}
      <motion.div
        style={{ rotate, scale: 1.55 }} // scale starts big instantly
        variants={{
          intro: {
            scale: 1,
            transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
          },
          done: { scale: 1 },
        }}
        animate={controls}
        className="
          absolute left-1/2 top-1/2 z-20
          -translate-x-1/2 -translate-y-[50%]
          pointer-events-none
          w-full
          max-w-[600px]
          md:max-w-[680px]
          lg:max-w-[580px]
          aspect-square
          transform-gpu
          will-change-transform
        "
      >
        <Image
          src="/images/diamond-2.avif"
          alt="Diamond"
          fill
          priority
          className="object-contain scale-[2.25] drop-shadow-[0_45px_90px_rgba(0,0,0,0.65)]"
        />
      </motion.div>

      {/* DESKTOP: Caelora layout but 2-line */}
      <motion.div
        style={{ y: brandY, opacity: 0, translateY: 22 }}
        variants={{
          intro: {
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
          },
          done: { opacity: 1, translateY: 0 },
        }}
        animate={controls}
        className="hidden md:block absolute inset-x-0 bottom-10 z-10 px-6 will-change-transform"
      >
      <div className='translate-y-10'>
        <div className="mx-auto max-w-7xl">
          {/* Logo block */}
          <div className="relative text-center">
            <h1
              className="
                heading uppercase font-medium text-white/95 select-none
                tracking-[0.08em]
                leading-[1.4]
              "
            >
              <span className="block text-[200px] whitespace-nowrap">NAKSHAT</span>
              <span className="block -mt-[40px] text-[200px] whitespace-nowrap">JEWELLERY</span>
            </h1>
          </div>

          {/* Small text (left/right) placed UNDER the logo, not across it */}
          <motion.div
            style={{ y: copyY, opacity: 0, translateY: 18 }}
            variants={{
              intro: {
                opacity: 1,
                translateY: 0,
                transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
              },
              done: { opacity: 1, translateY: 0 },
            }}
            animate={controls}
            className="
              relative -top-15
              grid grid-cols-2
              items-baseline
              gap-6
            "
          >
            {/* Left small text */}
            <p className="home-text col-span-1 text-white leading-[1.35] text-left">
              Timeless elegance for a new generation
            </p>

            {/* Right small text */}
            <p className="home-text col-span-1 text-white leading-[1.35] text-right">
              Discover jewelry that shines with sophistication, designed for modern luxury
            </p>
          </motion.div>
        </div>
      </div>
      </motion.div>

      {/* MOBILE: Caelora-style + 3D upward travel */}
      <motion.div
        style={{ opacity: 0, translateY: 22 }}
        variants={{
          intro: {
            opacity: 1,
            translateY: 0,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
          },
          done: { opacity: 1, translateY: 0 },
        }}
        animate={controls}
        className="md:hidden absolute inset-x-0 bottom-7 z-10 px-5"
      >
        <motion.div
          style={{ y: mobileTextY }}
          className="mx-auto max-w-[520px] will-change-transform"
        >
          {/* Big logo under diamond */}
          <div
            className="
              heading uppercase font-medium text-white/95 select-none
              tracking-[0.06em]
              text-left
              leading-none
            "
          >
            <span className="heading block text-[100px]">NAKSHAT</span>
            <span className="heading block -mt-[10px] text-[100px]">JEWELLERY</span>
          </div>

          {/* Small copy stacked under logo */}
          <div className="home-text mt-2 max-w-[300px] space-y-1.5 text-white/90 text-[10px] leading-[1.35]">
            <p>Timeless elegance for a New Generation</p>
            <p>
              Discover jewelry that shines with sophistication, designed for those who embrace modern luxury.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
