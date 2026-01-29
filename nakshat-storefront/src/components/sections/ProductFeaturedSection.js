'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const products = [
  { href: '/products/serene-teardrop-earrings', src: '/images/earrings-home/e-1.avif', alt: 'Serene Teardrop Earrings' },
  { href: '/products/stud-earrings', src: '/images/earrings-home/e-2.avif', alt: 'Stella Earrings' },
  { href: '/products/bangle-1', src: '/images/bracelet-home/b-1.avif', alt: 'Unity Bangle' },
  { href: '/products/bangle-2', src: '/images/bracelet-home/b-2.avif', alt: 'Unity Diamond Bangle' },
]

function CellFrame({ children }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-[#0f0f0f]">
      {children}
      <div className="pointer-events-none absolute inset-0 z-[50] border border-white/80" />
    </div>
  )
}

function ProductCell({ href, src, alt }) {
  return (
    <CellFrame>
      <Link href={href} className="group absolute inset-0 z-20">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40" />

          <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end">
            <p className="text-white text-[13px] sm:text-[15px] uppercase tracking-[0.2em] font-light translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              {alt}
            </p>
          </div>
        </motion.div>
      </Link>
    </CellFrame>
  )
}

export default function ProductFeaturedSection() {
  return (
    <section className="w-screen bg-[#0f0f0f] text-white pt-20 sm:pt-28 overflow-hidden">
      <div className="border-t border-white/0">
        {/* Header */}
        <div className="border-b border-white/0 px-4 sm:px-6 py-8 sm:py-10 mb-16 sm:mb-24">
          <h2
            className="heading uppercase tracking-wide
                       text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-none"
          >
            PRODUCT <span className="font-light">FEATURED</span>
          </h2>
        </div>

        {/* 2×2 desktop, 1×mobile */}
        <div className="grid w-screen grid-cols-1 md:grid-cols-2 -space-x-[1px] -space-y-[1px]">
          {products.map((p, idx) => (
            <div key={idx} className="w-full aspect-square border-collapse">
              <ProductCell href={p.href} src={p.src} alt={p.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
