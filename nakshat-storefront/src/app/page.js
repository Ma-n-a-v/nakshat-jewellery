import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <main className="bg-[#0f0f0f]">
      <Hero />
      {/* content below so scrolling exists */}
      <section className="relative z-30 min-h-[120vh] bg-[#0f0f0f]">
        {/** content goes here (other components of the home page) */}
        <div className="p-10 text-white">NEXT SECTION</div>
      </section>
    </main>
  )
}
