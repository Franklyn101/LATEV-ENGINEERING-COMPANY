"use client"

import Image from 'next/image'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHero } from '../layouts/SectionHero'

export interface Project {
id: string
title: string
location: string
year: number
tags: string[]
description: string
image: string
}
export default function ProjectsPageContainer() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState('All')
  const [selected, setSelected] = useState(null)

  const projects: Project[] = useMemo(() => [
    {
      id: 'p1',
      title: 'Reactive Maintenance — Pipeline Rehab',
      location: 'Offshore Platform A',
      year: 2024,
      tags: ['Maintenance', 'Civil'],
      description:
        'Urgent corrective repairs to a corroded pipeline section, including structural reinforcement and pressure testing to restore full serviceability.',
      image:
        '',
    },
    {
      id: 'p2',
      title: 'Facility Upgrade — Tank Farm Resilience',
      location: 'Onshore Terminal B',
      year: 2023,
      tags: ['Upgrade', 'Civil', 'Structural'],
      description:
        'Comprehensive upgrades to tank foundations, access roads and drainage systems to improve resilience and regulatory compliance.',
      image:
        '',
    },
    {
      id: 'p3',
      title: 'Structural Strengthening — Jetty Works',
      location: 'Coastal Jetty C',
      year: 2025,
      tags: ['Civil', 'Marine'],
      description:
        'Structural remediation and strengthening of a jetty to extend service life and support heavier loading during offloading operations.',
      image:
        '',
    },
   
  ], [])



  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery = (p.title + p.description + p.location).toLowerCase().includes(query.toLowerCase())
      const matchesTag = activeTag === 'All' || p.tags.includes(activeTag)
      return matchesQuery && matchesTag
    })
  }, [projects, query, activeTag])

  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.06,
        when: 'beforeChildren',
      },
    },
  }

  const card = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 140, damping: 18 } },
  }

  return (
    <main className="min-h-screen ">
        <SectionHero 
         title="Here are some of our projects in Nigeria."
        subtitle="We're here to help and answer any questions you might have"
        imageUrl="/images/contact-hero.png"
        overlayOpacity={0.6}
        />
      <section className="max-w-6xl p-2 pt-40 mx-auto">
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 24 }}
                className="relative max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close project"
                  className="absolute right-4 top-4 z-10 w-3 h-3  rounded-full p-2 shadow"
                >
                  ✕
                </button>

                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={selected.image}
                      alt={selected.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 md:p-10">
                    <h2 className="text-2xl font-bold">{selected.title}</h2>
                    <p className="text-sm text-gray-500 mt-1">{selected.location} — {selected.year}</p>
                    <p className="mt-4 text-gray-700">{selected.description}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {selected.tags.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 rounded-full border text-gray-700">{t}</span>
                      ))}
                    </div>

                    <div className="mt-6">
                      <a href="#" className="inline-block px-4 py-2 rounded-md bg-brand-red text-white">View gallery</a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                onClick={() => setSelected(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.section variants={container} initial="hidden" animate="show" className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <motion.article
              key={p.id}
              variants={card}
              whileHover={{ y: -6 }}
              layout
              className="group bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 cursor-pointer"
              onClick={() => setSelected(p)}
            >
              <div className="relative h-44 md:h-48 w-full">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{p.location} • {p.year}</p>

                <p className="mt-3 text-gray-600 text-sm line-clamp-3">{p.description}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full border text-gray-700">{t}</span>
                    ))}
                  </div>

                  <div className="text-brand-red text-sm font-medium">View</div>
                </div>
              </div>
            </motion.article>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full p-8 rounded-lg border border-dashed border-gray-200 text-center text-gray-500">
              No projects match your search.
            </div>
          )}
        </motion.section>

       
      </section>
    </main>
  )
}
