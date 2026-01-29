'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useScrollDirection } from '@/hooks/useScrollDirection'
import { motion, AnimatePresence } from 'framer-motion'
import { Turn as Hamburger } from 'hamburger-react'
import FlipLink from '@/components/ui/flip-link'

const links = [
  { href: '/shop', label: 'SHOP' },
  { href: '/about', label: 'ABOUT' },
  { href: '/contact', label: 'CONTACT' },
  { href: '/lookbook', label: 'LOOKBOOK' },
  //ADDED: appointment in mobile menu
  { href: '/appointment', label: 'BOOK APPOINTMENT' },
]

export default function Navbar() {
  const direction = useScrollDirection()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const overlayVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.25, ease: 'easeIn' },
    },
  }

  const panelVariants = {
    hidden: { opacity: 0, y: -10, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      y: -8,
      filter: 'blur(6px)',
      transition: { duration: 0.25, ease: 'easeIn' },
    },
  }

  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10, filter: 'blur(6px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: direction === 'down' && !open ? '-110%' : '0%' }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="fixed top-0 inset-x-0 z-50 w-full bg-[#0f0f0f] backdrop-blur border-b border-white/30"
      >
        {/* Desktop */}
        <div className="hidden md:block">
          <div className="h-16">
            <div className="mx-auto h-full max-w-7xl">
              <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center">
                {/* Left */}
                <div className="h-full border-r border-white/30">
                  <nav className="flex h-full items-center gap-10 px-10 text-[18px] lg:text-[20px] font-medium text-white/90">
                    <motion.span initial="rest" whileHover="hover" animate="rest">
                      <FlipLink href="/shop" className="text-white hover:text-white transition">
                        Shop
                      </FlipLink>
                    </motion.span>

                    <motion.span initial="rest" whileHover="hover" animate="rest">
                      <FlipLink href="/about" className="text-white hover:text-white transition">
                        About
                      </FlipLink>
                    </motion.span>

                    <motion.span initial="rest" whileHover="hover" animate="rest">
                      <FlipLink href="/lookbook" className="text-white hover:text-white transition">
                        Lookbook
                      </FlipLink>
                    </motion.span>
                  </nav>
                </div>

                {/* Center logo */}
                <div className="h-full border-r border-white/30 px-16 flex items-center justify-center">
                  <Link
                    href="/"
                    className="brand-mark text-[40px] leading-none text-white/95 tracking-[0.18em]"
                  >
                    NAKSHAT
                  </Link>
                </div>

                {/* Right */}
                <div className="h-full">
                  <div className="flex h-full items-center justify-end gap-10 px-10 text-[18px] lg:text-[20px] font-medium text-white/90">
                    {/* ADDED: Book Appointment left of Cart with same hover animation */}
                    <motion.span initial="rest" whileHover="hover" animate="rest">
                      <FlipLink href="/appointment" className="text-white hover:text-white transition">
                        Book Appointment
                      </FlipLink>
                    </motion.span>

                    {/* CHANGED: give Cart the same FlipLink hover animation */}
                    <motion.span initial="rest" whileHover="hover" animate="rest">
                      <FlipLink href="/cart" className="text-white hover:text-white transition">
                        Cart (0)
                      </FlipLink>
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden h-16 flex items-center justify-between px-5">
          <Link href="/" className="brand-mark text-[28px] text-white/95">
            NAKSHAT
          </Link>

          <div className="flex items-center gap-5">
            <Link href="/cart" className="text-[16px] font-medium text-white/90">
              Cart (0)
            </Link>

            <Hamburger
              toggled={open}
              toggle={setOpen}
              size={22}
              duration={0.3}
              distance="md"
              rounded
              label="Toggle menu"
              color="#ffffff"
            />
          </div>
        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/70"
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.div
              className="absolute inset-x-0 top-0 bg-[#0f0f0f] border-b border-white/15"
              variants={panelVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <div className="h-16 flex items-center justify-between px-5">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="brand-mark text-[28px] text-white/95 tracking-[0.08em]"
                >
                  NAKSHAT
                </Link>

                <Hamburger
                  toggled={open}
                  toggle={setOpen}
                  size={24}
                  duration={0.35}
                  distance="md"
                  rounded
                  label="Close menu"
                  color="#ffffff"
                />
              </div>

              <div className="h-px w-full bg-white/30" />

              <motion.nav className="px-5 pt-10 pb-12">
                <motion.div
                  className="flex flex-col gap-7"
                  variants={listVariants}
                  initial="hidden"
                  animate="show"
                >
                  {links.map((l) => (
                    <motion.div key={l.href} variants={itemVariants}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="text-white/90 hover:text-white transition text-[22px] tracking-[0.18em] font-medium subheading"
                      >
                        {l.label}
                      </Link>

                      <div className="mt-4 h-px w-full bg-white/10" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.nav>
            </motion.div>

            <button
              aria-label="Close menu"
              className="absolute inset-0"
              onClick={() => setOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
