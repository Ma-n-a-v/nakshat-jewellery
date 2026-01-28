import Hero from '@/components/sections/Hero'
import AboutTeaser from '@/components/sections/AboutTeaser' 
import CollectionGrid from '@/components/sections/CollectionGrid'

export default function Home() {
  return (
    <main className="bg-[#0f0f0f]">
      <Hero />
      {/* content below so scrolling exists */}
      <section className="relative z-30 min-h-[120vh] bg-[#0f0f0f]">
        {/** content goes here (other components of the home page) */}
        <AboutTeaser />
        <CollectionGrid />
      </section>
    </main>
  )
}
