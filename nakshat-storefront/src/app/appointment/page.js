export const metadata = {
  title: 'Book an Appointment | Nakshat Jewellery',
}

export default function AppointmentPage() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL

  return (
    <main className="min-h-[100svh] bg-[#0f0f0f] text-white">
      {/* Top spacing so it sits nicely under your navbar */}
      <div className="pt-20 sm:pt-24" />

      {/* Header strip (matches your site borders) */}
      <section className="border-t border-white/0">
        <div className="border-b border-white/0 px-4 sm:px-6 py-6 sm:py-8">
          <h1 className="subheading uppercase tracking-wide leading-none text-4xl sm:text-6xl">
            Book an <span className="font-light">Appointment</span>
          </h1>
          <p className="mt-3 text-white/70 text-sm sm:text-base max-w-3xl">
            Choose a time to meet a Nakshat specialist for sizing, styling, and custom requests.
          </p>
        </div>

        {/* Framed embed area */}
        <div className="px-3 sm:px-6 py-6 sm:py-10">
          <div className="border border-white/55 bg-white">
            {/* Responsive height (works on iPhone/iPad/desktop) */}
            <div className="h-[78svh] min-h-[520px] sm:h-[76svh]">
              {bookingUrl ? (
                <iframe
                  title="Book appointment"
                  src={bookingUrl}
                  className="h-full w-full"
                  frameBorder="0"
                  // helps iOS scrolling inside iframe
                  allow="camera; microphone; fullscreen"
                />
              ) : (
                <div className="p-6 text-black/80">
                  Add <span className="text-black">NEXT_PUBLIC_BOOKING_URL</span> in{' '}
                  <span className="text-black">.env.local</span> to embed your booking page.
                </div>
              )}
            </div>
          </div>

          {/* Bottom breathing room */}
          <div className="h-10 sm:h-16" />
        </div>
      </section>
    </main>
  )
}
