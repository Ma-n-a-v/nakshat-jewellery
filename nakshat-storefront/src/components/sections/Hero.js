'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()

  // Diamond rotation: instant on the first tiny scroll
  const rotate = useTransform(scrollY, [0, 600], [0, 180])

  // 3D parallax for text (obvious + smooth)
  const brandY = useTransform(scrollY, [0, 400], [0, 48])
  const copyY = useTransform(scrollY, [0, 400], [0, 28])
  // Mobile: move the whole text block up strongly (3D feel)
  const mobileTextY = useTransform(scrollY, [0, 450], [0, -220])

     // ✅ iPad/IOS full-screen height fix
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

  return (
    <section className="relative isolate h-[calc(var(--vh)*100)] w-screen min-w-[100vw] overflow-hidden bg-[#0f0f0f] pt-16">
      {/* Background */}
      <div className='absolute inset-0 z-0 w-screen min-w-[100vw]'>
        <Image
            src="/images/hero.avif"
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/25" />

      {/* Diamond */}
      <motion.div
        style={{ rotate }}
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
        style={{ y: brandY }}
        className="hidden md:block absolute inset-x-0 bottom-10 z-10 px-6 will-change-transform"
        >
        <div className="mx-auto max-w-7xl">
            {/* Logo block */}
            <div className="relative text-center">
            <h1
                className="
                heading uppercase font-medium text-white/95 select-none
                tracking-[0.08em]
                leading-[1.5]
                "
            >
                <span className="block text-[200px] whitespace-nowrap">NAKSHAT</span>
                <span className="block -mt-[40px] text-[200px] whitespace-nowrap">JEWELLERY</span>
            </h1>
            </div>

            {/* Small text (left/right) placed UNDER the logo, not across it */}
                <motion.div
                style={{ y: copyY }}
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
        </motion.div>



      {/* MOBILE: Caelora-style + 3D upward travel */}
        <div className="md:hidden absolute inset-x-0 bottom-7 z-10 px-5">
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
            <div className="home-text mt-3 space-y-2 text-white/90 text-[14px] leading-[1.35]">
            <p>Timeless elegance for a New Generation</p>
            <p>
                Discover jewelry that shines with sophistication, designed for those who embrace modern luxury.
            </p>
            </div>
        </motion.div>
        </div>


    </section>
  )
}
