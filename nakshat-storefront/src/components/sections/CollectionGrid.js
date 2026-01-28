'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import InlineCta from '../ui/InlineCta'

const cells = [
  { type: 'category', title: 'EARRINGS', href: '/collection/earrings', align: 'left' },
  { type: 'image', href: '/products/serene-teardrop-earrings', src: '/images/earrings-home/e-1.avif', alt: 'Serene Teardrop Earrings' },
  { type: 'image', href: '/products/stud-earrings', src: '/images/earrings-home/e-2.avif', alt: 'Stella Earrings' },
  { type: 'image', href: '/products/bangle-1', src: '/images/bracelet-home/b-1.avif', alt: 'Unity Bangle' },
  { type: 'image', href: '/products/bangle-2', src: '/images/bracelet-home/b-2.avif', alt: 'Unity Diamond Bangle' },
  { type: 'category', title: 'BRACELETS', href: '/collection/bracelets', align: 'right' },
  { type: 'category', title: 'RING', href: '/collection/rings', align: 'left' },
  { type: 'image', href: '/products/solitaire-ring', src: '/images/ring-home/r-1.avif', alt: 'Solitaire Ring' },
  { type: 'image', href: '/products/pave-ring', src: '/images/ring-home/r-2.avif', alt: 'Dazzling Solitaire Ring' },
]

function CellFrame({ children }) {
  return (
    <div className="relative aspect-square w-full overflow-hidden bg-[#0f0f0f]">
      {children}
      {/* Increased Z-index and forced visibility for iPad Pro */}
      <div className="pointer-events-none absolute inset-0 z-[50] border border-white/80" />
    </div>
  )
}

function CategoryCell({ title, href, align = 'left' }) {
  const isRight = align === 'right'

  return (
    <CellFrame>
      <Link href={href} className="group absolute inset-0 z-20">
        {/* Fixed Flex Alignment: Using items-start/end to keep 'See All' in the box */}
        <div className={`absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-center ${isRight ? 'items-end text-right' : 'items-start text-left'} gap-4 md:gap-8`}>
          <h3 className="heading uppercase text-white/95 leading-none tracking-[0.04em] text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px]">
            {title}
          </h3>

          <div className="flex flex-col w-fit">
            <InlineCta label="See all" />
            <div className="mt-2 h-px w-full bg-white/20 transition-colors duration-500 group-hover:bg-white/80" />
          </div>
        </div>
      </Link>
    </CellFrame>
  )
}

function ImageCell({ href = '#', src, alt }) {
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
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <p className="text-white text-[15px] uppercase tracking-[0.2em] font-light translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              {alt}
            </p>
          </div>
        </motion.div>
      </Link>
    </CellFrame>
  )
}

export default function CollectionGrid() {
  return (
    <section className="w-screen bg-[#0f0f0f] pt-24 md:pt-48 overflow-hidden">
      <div className="hidden md:grid w-screen grid-cols-3 -space-x-[1px] -space-y-[1px]">
        {cells.map((c, idx) => (
          <div key={idx} className="w-full aspect-square border-collapse">
            {c.type === 'category' ? (
              <CategoryCell title={c.title} href={c.href} align={c.align} />
            ) : (
              <ImageCell href={c.href} src={c.src} alt={c.alt} />
            )}
          </div>
        ))}
      </div>

      <div className="md:hidden grid w-screen grid-cols-1">
        {cells
          .filter((c) => c.type === 'category')
          .map((c, idx) => (
            <div key={idx} className="w-full aspect-square">
              <CategoryCell title={c.title} href={c.href} align="left" />
            </div>
          ))}
      </div>
    </section>
  )
}