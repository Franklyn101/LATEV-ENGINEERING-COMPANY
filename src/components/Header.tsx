'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto">
        <div className={`gap-3 px-4 py-2 ${scrolled ? 'hidden' : 'flex'}`}>
          <a className="text-xs text-white hover:underline" href="#">Privacy</a>
          <a className="text-xs text-white hover:underline" href="#">Public Relations</a>
        </div>
        <div className="flex justify-between items-center p-3 py-4">
          <Link href="/" className="flex items-center">
            <div className="w-40 h-12 flex items-center justify-center rounded">
              <Image src="/logonobg.png" alt="DUTUM GROUP Logo" width={160} height={48} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#b4393c]' : 'text-white hover:text-[#b4393c]'}`}>Home</Link>
            <Link href="/about" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#b4393c]' : 'text-white hover:text-[#b4393c]'}`}>About</Link>
            <Link href="/services" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#b4393c]' : 'text-white hover:text-[#b4393c]'}`}>Services</Link>
            <Link href="/projects" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#b4393c]' : 'text-white hover:text-[#b4393c]'}`}>Projects</Link>
            <Link href="/contact" className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-[#b4393c]' : 'text-white hover:text-[#b4393c]'}`}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-colors duration-300 ${scrolled ? 'bg-white' : 'bg-white/70 backdrop-blur-md'}`}>
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-medium text-gray-700 hover:text-blue-800">Home</Link>
              <Link href="/about" className="font-medium text-gray-700 hover:text-blue-800">About</Link>
              <Link href="/services" className="font-medium text-gray-700 hover:text-blue-800">Services</Link>
              <Link href="/projects" className="font-medium text-gray-700 hover:text-blue-800">Projects</Link>
              <Link href="/contact" className="font-medium text-gray-700 hover:text-blue-800">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
