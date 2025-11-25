
export default function HeroBanner() {
  return (
    <div className="bg-black/90 min-h-screen flex items-center justify-center border border-dark-background rounded p-12 text-center relative overflow-hidden hover:scale-105 transition-all">
      <div className="absolute inset-0 bg-red-300 bg-cover bg-center"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-6xl xl:text-8xl font-serif font-black text-white mb-6">LATEV ENGINEERING</div>
        <div className="text-2xl font-bold text-white/90 mb-8">Excellence in Construction</div>
        <p className="text-lg text-white/90 mb-8 leading-relaxed">Transforming visions into reality with precision engineering and quality construction. Your trusted partner for innovative building solutions.</p>
      </div>
    </div>
  )
}
