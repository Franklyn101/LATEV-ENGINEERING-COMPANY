'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const LeadershipTeam = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const teamScrollRef = useRef<HTMLDivElement>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const scrollTeam = (direction: 'left' | 'right') => {
    if (teamScrollRef.current) {
      const scrollAmount = 300;
      teamScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const leadershipTeam = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      bio: "Over 25 years of experience in oilfield services and engineering innovation. Former Director at Schlumberger.",
      expertise: ["Strategic Planning", "Business Development", "Oilfield Technology"]
    },
    {
      name: "Dr. Sarah Chen",
      position: "Technical Director",
      bio: "PhD in Petroleum Engineering with expertise in downhole tool design and development. 15+ patents.",
      expertise: ["R&D Management", "Tool Design", "Patent Development"]
    },
    {
      name: "Michael Rodriguez",
      position: "Operations Manager",
      bio: "Specialized in offshore operations and complex well intervention projects. 20 years field experience.",
      expertise: ["Offshore Operations", "Project Management", "Safety Compliance"]
    },
    {
      name: "Emily Watson",
      position: "Partnership Director",
      bio: "Manages strategic partnerships including our collaboration with Marlin Oil Tools. MBA from Harvard.",
      expertise: ["Strategic Alliances", "Client Relations", "Contract Negotiation"]
    },
    {
      name: "Robert Kim",
      position: "Engineering Manager",
      bio: "Mechanical Engineering PhD with focus on downhole tool reliability and performance optimization.",
      expertise: ["Mechanical Design", "Quality Control", "Performance Testing"]
    },
    {
      name: "Lisa Thompson",
      position: "HSE Director",
      bio: "20+ years ensuring compliance with international health, safety, and environmental standards.",
      expertise: ["HSE Compliance", "Risk Assessment", "Environmental Protection"]
    },
    {
      name: "David Wilson",
      position: "Finance Director",
      bio: "CFA with extensive experience in energy sector finance and international business operations.",
      expertise: ["Financial Planning", "International Finance", "Investment Strategy"]
    },
    {
      name: "Maria Garcia",
      position: "R&D Lead",
      bio: "Materials Science expert specializing in corrosion-resistant alloys for downhole applications.",
      expertise: ["Materials Science", "Corrosion Engineering", "Product Innovation"]
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-10 lg:mb-16 text-center text-gray-900"
        >
          Management
        </motion.h2>

        {/* Scroll Controls */}
        <div className="flex justify-between items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollTeam('left')}
            className="p-3 rounded-full bg-white border border-gray-300 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>


          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollTeam('right')}
            className="p-3 rounded-full bg-white border border-gray-300 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={teamScrollRef}
          className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="shrink-0 w-80 bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-linear-to-br from-brand-red/20 to-red-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-brand-red font-bold text-lg">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-red mb-2">{member.name}</h3>
                <p className="text-gray-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-500 text-sm mb-4">{member.bio}</p>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Areas of Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-brand-red/10 text-brand-red text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default LeadershipTeam;