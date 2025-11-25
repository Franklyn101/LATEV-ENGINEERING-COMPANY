
export default function HeroBanner() {
  return (
    <div className="bg-brand-red bg-[url('/images/banner-bg.svg')] bg-cover xl:bg-contain bg-center min-h-screen flex items-center justify-center border rounded relative overflow-hidden transition-all">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl xl:text-9xl font-serif font-black text-white mb-6">LATEV ENGINEERING</h1>
        <h2 className="text-2xl lg:text-4xl font-bold text-white/90 mb-8">Excellence in Construction</h2>
        <p className="text-lg lg:text-2xl font-medium text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">Transforming visions into reality with precision engineering and quality construction. Your trusted partner for innovative building solutions.</p>
      </div>
    </div>
  )
}
