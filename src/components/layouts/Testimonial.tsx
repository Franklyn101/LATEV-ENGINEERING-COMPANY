import React from 'react'
import { Carousel, Card } from '../ui/Carousel'

const testimonialItems = [
  {
    src: "/images/testimonial.jpeg",
    title: "John Doe",
    category: "CEO, Company A",
    excerpt: "This service completely transformed our business. The results were beyond our expectations! We saw a 200% increase in productivity...",
    content: (
      <div className="space-y-6">
        <div className="flex items-center space-x-1 text-yellow-400">
          {"★".repeat(5)}
        </div>
        <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          "This service completely transformed our business. The results were beyond our expectations!
          We saw a 200% increase in productivity and customer satisfaction. The team was professional,
          responsive, and delivered exceptional quality throughout the entire project."
        </blockquote>
        <div className="pt-4">
          <p className="font-semibold text-gray-900 dark:text-white">John Doe</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">CEO, Company A</p>
        </div>
      </div>
    )
  },
  {
    src: "/images/testimonial.jpeg",
    title: "Jane Smith",
    category: "Marketing Director",
    excerpt: "Outstanding support and incredible features. Our team loves working with this platform. The onboarding process was smooth...",
    content: (
      <div className="space-y-6">
        <div className="flex items-center space-x-1 text-yellow-400">
          {"★".repeat(5)}
        </div>
        <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          "Outstanding support and incredible features. Our team loves working with this platform.
          The onboarding process was smooth and the team was always available to help us navigate
          any challenges. This has been a game-changer for our marketing efforts."
        </blockquote>
        <div className="pt-4">
          <p className="font-semibold text-gray-900 dark:text-white">Jane Smith</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Marketing Director</p>
        </div>
      </div>
    )
  },
  {
    src: "/images/testimonial.jpeg",
    title: "John Doe",
    category: "CEO, Company A",
    excerpt: "This service completely transformed our business. The results were beyond our expectations! We saw a 200% increase in productivity...",
    content: (
      <div className="space-y-6">
        <div className="flex items-center space-x-1 text-yellow-400">
          {"★".repeat(5)}
        </div>
        <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          "This service completely transformed our business. The results were beyond our expectations!
          We saw a 200% increase in productivity and customer satisfaction. The team was professional,
          responsive, and delivered exceptional quality throughout the entire project."
        </blockquote>
        <div className="pt-4">
          <p className="font-semibold text-gray-900 dark:text-white">John Doe</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">CEO, Company A</p>
        </div>
      </div>
    )
  },
  {
    src: "/images/testimonial.jpeg",
    title: "Jane Smith",
    category: "Marketing Director",
    excerpt: "Outstanding support and incredible features. Our team loves working with this platform. The onboarding process was smooth...",
    content: (
      <div className="space-y-6">
        <div className="flex items-center space-x-1 text-yellow-400">
          {"★".repeat(5)}
        </div>
        <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          "Outstanding support and incredible features. Our team loves working with this platform.
          The onboarding process was smooth and the team was always available to help us navigate
          any challenges. This has been a game-changer for our marketing efforts."
        </blockquote>
        <div className="pt-4">
          <p className="font-semibold text-gray-900 dark:text-white">Jane Smith</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Marketing Director</p>
        </div>
      </div>
    )
  },
  {
    src: "/images/testimonial.jpeg",
    title: "John Doe",
    category: "CEO, Company A",
    excerpt: "This service completely transformed our business. The results were beyond our expectations! We saw a 200% increase in productivity...",
    content: (
      <div className="space-y-6">
        <div className="flex items-center space-x-1 text-yellow-400">
          {"★".repeat(5)}
        </div>
        <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          "This service completely transformed our business. The results were beyond our expectations!
          We saw a 200% increase in productivity and customer satisfaction. The team was professional,
          responsive, and delivered exceptional quality throughout the entire project."
        </blockquote>
        <div className="pt-4">
          <p className="font-semibold text-gray-900 dark:text-white">John Doe</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">CEO, Company A</p>
        </div>
      </div>
    )
  },
  {
    src: "/images/testimonial.jpeg",
    title: "Jane Smith",
    category: "Marketing Director",
    excerpt: "Outstanding support and incredible features. Our team loves working with this platform. The onboarding process was smooth...",
    content: (
      <div className="space-y-6">
        <div className="flex items-center space-x-1 text-yellow-400">
          {"★".repeat(5)}
        </div>
        <blockquote className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          "Outstanding support and incredible features. Our team loves working with this platform.
          The onboarding process was smooth and the team was always available to help us navigate
          any challenges. This has been a game-changer for our marketing efforts."
        </blockquote>
        <div className="pt-4">
          <p className="font-semibold text-gray-900 dark:text-white">Jane Smith</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Marketing Director</p>
        </div>
      </div>
    )
  },
]

export default function Testimonial() {
  const carouselItems = testimonialItems.map((testimonial, index) => (
    <Card
      key={index}
      card={testimonial}
      index={index}
      layout={true}
    />
  ))

  return (
    <div className="py-10 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-neutral-900">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-2xl lg:text-2xl text-gray-800 mb-5 lg:mb-8 max-w-2xl">
            Discover why businesses trust us to deliver exceptional results and outstanding service.
          </p>
        </div>
        <div className="w-full overflow-hidden">
          <Carousel items={carouselItems} initialScroll={0} />
        </div>
      </div>
    </div>
  )
}