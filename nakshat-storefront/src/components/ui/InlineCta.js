'use client'

export default function InlineCta({ label, className = '' }) {
  return (
    <div className={['inline-flex items-center gap-3 transition-colors', className].join(' ')}>
      <span className="subheading text-[20px] md:text-[26px] text-white/75 border-b border-transparent pb-1 transition-all group-hover:text-white group-hover:border-white">
        {label}
      </span>
      <span className="text-lg text-white/75 transition-transform group-hover:translate-x-2 group-hover:text-white">
        →
      </span>
    </div>
  )
}