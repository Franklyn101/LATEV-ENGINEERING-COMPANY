import TestimonialCarousel from './TestimonialCarousel'


export default function Testimonial() {
  return (
    <div className="pt-10 lg:pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-neutral-900">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-2xl lg:text-2xl text-gray-800 mb-5 lg:mb-8 max-w-2xl">
            Discover why businesses trust us to deliver exceptional results and outstanding service.
          </p>
        </div>
      </div>
        <TestimonialCarousel />
    </div>
  )
}