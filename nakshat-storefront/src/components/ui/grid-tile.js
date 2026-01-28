'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function GridTile({
  href,
  title,
  imageSrc,
  imageAlt = '',
  className = '',
}) {
  return (
    <Link
      href={href}
      className={`relative block h-full w-full bg-[#0f0f0f] border border-white ${className}`}
    >
      {/* Title overlay (like Framer rich text container) */}
      {title ? (
        <div className="absolute left-0 right-0 top-0 z-10 p-10">
          <h3 className="subheading text-white/95 text-[26px] tracking-[0.06em]">
            {title}
          </h3>
        </div>
      ) : null}

      {/* Image fills entire tile (object-fit: cover like Framer) */}
      {imageSrc ? (
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover object-center"
            priority={false}
          />
        </motion.div>
      ) : null}

      {/* subtle dark overlay (optional but makes text readable) */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition" />
    </Link>
  )
}
