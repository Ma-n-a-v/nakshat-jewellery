'use client'

import { ReactLenis } from '@studio-freight/react-lenis'

export default function SmoothScroll({ children }) {
  // Lerp: 0.05 to 0.1 is the "Sweet Spot" for that sticky, heavy feeling
  const lenisOptions = {
    lerp: 0.07,
    duration: 1.5,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.5, // Helps it feel "sticky" but not broken on iPad
    infinite: false,
  }

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  )
}