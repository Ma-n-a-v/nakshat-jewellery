'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

/**
 * FlipLink
 * - Keeps your navbar layout the same
 * - Only animates the label on hover (flip / slide)
 *
 * Props:
 * - href: string
 * - children: string (label)
 * - className?: string (applied to the Link)
 */
export default function FlipLink({ href, children, className = '' }) {
  return (
    <Link href={href} className={`relative inline-block ${className}`}>
      {/* This wrapper clips the flipping text */}
      <span className="relative block h-[1.5em] overflow-hidden">
        {/* Top text (default) */}
        <motion.span
          className="block"
          initial={false}
          variants={{
            rest: { y: '0%', rotateX: 0, opacity: 1 },
            hover: { y: '-115%', rotateX: 90, opacity: 0 },
          }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          {children}
        </motion.span>

        {/* Bottom text (reveals on hover) */}
        <motion.span
          className="block absolute left-0 top-0"
          initial={false}
          variants={{
            rest: { y: '115%', rotateX: -90, opacity: 0 },
            hover: { y: '0%', rotateX: 0, opacity: 1 },
          }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          {children}
        </motion.span>
      </span>

      {/* Motion trigger using group */}
      <style jsx>{`
        a :global(span) {
          transform-style: preserve-3d;
        }
      `}</style>
    </Link>
  )
}

/**
 * Usage tip:
 * Wrap FlipLink with a parent that has: className="group"
 * Then swap "hover" state by CSS? (optional)
 *
 * But easiest is below: use whileHover on a motion wrapper (see Navbar usage).
 */
