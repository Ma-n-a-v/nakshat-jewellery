import Link from 'next/link'
import Image from 'next/image'

function UnderlineLink({ href, children, className = '' }) {
  return (
    <Link href={href} className={`group inline-block ${className}`}>
      <span className="relative inline-block">
        {children}
        {/* underline animation */}
        <span className="absolute left-0 -bottom-[3px] h-px w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 group-hover:scale-x-100" />
      </span>
    </Link>
  )
}

function UnderlineText({ children, className = '' }) {
  return (
    <span className={`group inline-block cursor-pointer ${className}`}>
      <span className="relative inline-block">
        {children}
        <span className="absolute left-0 -bottom-[4px] h-px w-full origin-left scale-x-0 bg-white/50 transition-transform duration-400 group-hover:scale-x-100" />
      </span>
    </span>
  )
}

export default function Footer() {
  return (
    <footer className="mt-8 bg-[#0f0f0f]">
      {/* Top footer columns */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
        {/* Navigation */}
        <div>
          <h4 className="text-heading text-[11px] tracking-[0.22em] text-white/60 font-bold">
            Navigation
          </h4>

          <ul className="subheading text-section mt-6 space-y-1 text-[18px] md:text-[20px] text-white/90">
            <li><UnderlineLink href="/">Home</UnderlineLink></li>
            <li><UnderlineLink href="/shop">Shop</UnderlineLink></li>
            <li><UnderlineLink href="/about">About</UnderlineLink></li>
            <li><UnderlineLink href="/lookbook">Lookbook</UnderlineLink></li>
            <li><UnderlineLink href="/contact">Contact</UnderlineLink></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-heading font-bold text-[11px] tracking-[0.22em] text-white/60">
            Social
          </h4>

          <ul className="text-section subheading mt-6 space-y-1 text-sm text-white/90">
            {/* Replace # with your actual urls later */}
            <li>
              <a href="#" target="_blank" rel="noreferrer" className="group inline-block">
                <span className="relative inline-block">
                  Instagram
                  <span className="absolute left-0 -bottom-[3px] h-px w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </a>
            </li>

            <li>
              <a href="#" target="_blank" rel="noreferrer" className="group inline-block">
                <span className="relative inline-block">
                  Facebook
                  <span className="absolute left-0 -bottom-[3px] h-px w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </a>
            </li>

            <li>
              <a href="#" target="_blank" rel="noreferrer" className="group inline-block">
                <span className="relative inline-block">
                  Twitter
                  <span className="absolute left-0 -bottom-[3px] h-px w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:text-right">
          <h4 className="text-heading font-bold text-[11px] tracking-[0.22em] text-white/60">
            Contact
          </h4>

          <div className="text-section subheading mt-6 space-y-1 text-sm text-white/90">
            {/* email with underline hover */}
            <a
              href="mailto:support@nakshatjewellery.com"
              className="group inline-block text-[18px] md:text-[20px] break-all"
            >
              <span className="relative inline-block">
                support@nakshatjewellery.com
                <span className="absolute left-0 -bottom-[3px] h-px w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </a>

            <p className="text-white/80">Worldwide Shipping</p>
          </div>
        </div>
      </div>

        {/* BOTTOM ROW */}
      <div className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center text-[14px] tracking-[0.02em] text-white/90">
          {/* Left */}
          <div className="text-left uppercase text-small text-sm">
            Design by Manav
          </div>

          {/* Middle (true center) */}
          <div className="text-center">
            <UnderlineLink
              href="/privacy"
              className="text-white/90 hover:text-white text-small"
            >
              Privacy Policy
            </UnderlineLink>
          </div>

          {/* Right */}
          <div className="text-right text-small">
            © {new Date().getFullYear()} Nakshat Jewellery. All rights reserved.
          </div>
        </div>
      </div>


      {/* Big brand word */}
      <div className="border-t border-white/0 overflow-hidden">
        <div className="w-full pt-8 pb-8 text-center">
          {/* CHANGED: full-width stretched wordmark (spans the footer like reference) */}
          <div
            className="brand-mark text-white/95 leading-none uppercase whitespace-nowrap select-none
                       text-[22vw] sm:text-[20vw] md:text-[18vw] tracking-[0.4em]"
            style={{ transform: 'translateX(-0.18em)' }}
          >
            NAKSHAT
          </div>

          <div className="brand-owner-mark text-[40px] sm:text-[56px] md:text-[68px] leading-none text-white/90 flex flex-wrap items-center justify-center gap-3 -mt-1">
            <span>BY VIVIDDIAM</span>

            <Link href="/" className="group relative flex items-center">
              <Image
                src="/logo/nakshat-logo-1.png"
                alt="Nakshat Jewellery"
                width={60}
                height={40}
                priority
                className="object-contain"
              />
              <span className="absolute left-0 -bottom-[6px] h-px w-full origin-left scale-x-0 bg-white/50 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
