import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="mt-32">
      {/* Top footer columns */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Navigation */}
        <div>
          <h4 className="text-heading text-[11px] tracking-[0.22em] text-white">
            Navigation
          </h4>
          <ul className="subheading text-section mt-5 space-y-2 text-sm text-white">
            <li><Link className="hover:text-white transition" href="/">Home</Link></li>
            <li><Link className="hover:text-white transition" href="/shop">Shop</Link></li>
            <li><Link className="hover:text-white transition" href="/about">About</Link></li>
            <li><Link className="hover:text-white transition" href="/lookbook">Lookbook</Link></li>
            <li><Link className="hover:text-white transition" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-white transition" href="/privacy">Privacy</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-heading text-[11px] tracking-[0.22em] text-white">
            Social
          </h4>
          <ul className="text-section subheading mt-5 space-y-2 text-sm text-white/95">
            <li className="hover:text-white transition cursor-pointer">Instagram</li>
            <li className="hover:text-white transition cursor-pointer">Facebook</li>
            <li className="hover:text-white transition cursor-pointer">Twitter</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-heading text-[11px] tracking-[0.22em] text-white">
            Contact
          </h4>
          <div className="text-section subheading mt-5 space-y-2 text-sm text-white/95">
            <p>support@nakshatjewellery.com</p>
            <p>Worldwide Shipping</p>
          </div>
        </div>
      </div>

      {/* Big brand word */}
      <div className="border-t border-white/0">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center">
          <div className="brand-mark text-[72px] sm:text-[110px] md:text-[150px] leading-none text-white/95">
            NAKSHAT
          </div>
          <div className="brand-owner-mark text-[72px] sm:text-[110px] md:text-[150px] leading-none text-white/95 flex justify-center">
            BY VIVIDDIAM
            <Link href="/" className="flex items-center">
            <Image
              src="/logo/nakshat-logo-1.png"
              alt="Nakshat Jewellery"
              width={60}
              height={40}
              priority
              className="object-contain"
            />
          </Link>
          </div>
          <p className="mt-6 text-xs text-white/45">
            © {new Date().getFullYear()} Nakshat Jewellery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
