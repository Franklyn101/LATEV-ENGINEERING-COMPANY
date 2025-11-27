'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

const AboutUs = () => {
  const teamScrollRef = useRef<HTMLDivElement>(null);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref7, inView7] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref8, inView8] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollTeam = (direction: 'left' | 'right') => {
    if (teamScrollRef.current) {
      const scrollAmount = 300;
      teamScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const benefits = [
    {
      title: "Live Well Operations",
      description: "Enables intervention without halting production",
      icon: "⚡"
    },
    {
      title: "Cost & Time Efficiency",
      description: "Reduces downtime and speeds up execution",
      icon: "⏱️"
    },
    {
      title: "Pressure Control",
      description: "Safe deployment under pressurized well conditions",
      icon: "🛡️"
    },
    {
      title: "Compact & Versatile",
      description: "Ideal for space-limited or offshore locations",
      icon: "🏗️"
    },
    {
      title: "Customizable Solutions",
      description: "All tools are adaptable to meet specific client needs",
      icon: "🔧"
    },
    {
      title: "Technical Expertise",
      description: "Decades of combined experience in coiled tubing",
      icon: "🎯"
    }
  ];

  const productCategories = [
    {
      name: "Connectors",
      description: "High-integrity mechanical solutions for connecting coiled tubing to tools or splicing segments"
    },
    {
      name: "Basic Tools",
      description: "Tools that improve operational control, tool string functionality, and wellbore cleaning"
    },
    {
      name: "Bridge Plugs",
      description: "Reliable solutions for wellbore isolation during interventions"
    },
    {
      name: "Fishing Tools",
      description: "Precision-engineered tools for retrieval of lost or stuck equipment"
    },
    {
      name: "Mills & Impression Tools",
      description: "Effective solutions for milling obstructions and identifying downhole features"
    }
  ];

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

  const milestones = [
    { year: "2010", event: "Company Founded", detail: "Started operations with focus on coiled tubing innovation" },
    { year: "2013", event: "First Major Offshore Contract", detail: "Secured $5M contract with major offshore operator" },
    { year: "2016", event: "Partnership with Marlin Oil Tools", detail: "Strategic alliance expanding technology portfolio" },
    { year: "2018", event: "ISO 9001 Certification", detail: "Achieved quality management system certification" },
    { year: "2019", event: "Expansion to International Markets", detail: "Opened offices in Middle East and Southeast Asia" },
    { year: "2021", event: "50+ Team Members", detail: "Grew to over 50 engineering and field specialists" },
    { year: "2022", event: "Launch of Next-Gen CT Tools", detail: "Introduced revolutionary pressure control systems" },
    { year: "2024", event: "100+ Successful Projects", detail: "Completed over 100 major well intervention projects" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Continuously pushing boundaries in coiled tubing technology",
      icon: "💡"
    },
    {
      title: "Safety",
      description: "Zero compromise on safety standards and environmental protection",
      icon: "🛡️"
    },
    {
      title: "Excellence",
      description: "Commitment to delivering superior quality in every project",
      icon: "⭐"
    },
    {
      title: "Partnership",
      description: "Building long-term relationships based on trust and mutual success",
      icon: "🤝"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management System" },
    { name: "API Q2", description: "Quality Management for Service Providers" },
    { name: "ISO 14001", description: "Environmental Management" },
    { name: "OHSAS 18001", description: "Occupational Health & Safety" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-red-600"
          >
            About Latev Engineering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
          >
            Pioneering Excellence in Coiled Tubing Solutions for Over a Decade
          </motion.p>
        </motion.div>
        
        {/* Animated background elements */}
        <motion.div
          animate={{
            rotate: 360,
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            transition: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"
        />
      </section>

      {/* Company Story Section */}
      <motion.section
        ref={ref1}
        initial="initial"
        animate={inView1 ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-brand-red/10 to-red-600/10 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Company Headquarters Image</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-red">Our Foundation</h3>
                <p className="text-gray-600">
                  Established with a vision to revolutionize coiled tubing technology, Latev Engineering 
                  has grown from a local startup to an international leader in well intervention solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2010, <span className="text-brand-red font-semibold">Latev Engineering Services LTD</span> 
                  emerged from a simple yet powerful vision: to deliver superior coiled tubing solutions 
                  that address the evolving challenges of modern well intervention.
                </p>
                <p>
                  Our strategic partnership with <span className="text-brand-red font-semibold">Marlin Oil Tools</span> 
                  has been instrumental in expanding our capabilities and delivering cutting-edge 
                  technology to clients worldwide.
                </p>
                <p>
                  Today, we operate across multiple continents, serving major energy companies with 
                  innovative solutions that enhance operational efficiency while maintaining the highest 
                  safety standards.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        ref={ref2}
        initial="initial"
        animate={inView2 ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
          >
            Our Mission & Vision
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-lg"
            >
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-brand-red">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To deliver innovative, reliable, and efficient coiled tubing solutions that empower 
                our clients to maximize well productivity while ensuring operational safety and 
                environmental responsibility.
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-100 shadow-lg"
            >
              <div className="text-4xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold mb-4 text-brand-red">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the global leader in coiled tubing technology, setting new standards for 
                innovation, safety, and sustainability in well intervention operations worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        ref={ref3}
        initial="initial"
        animate={inView3 ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-red">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products & Services Section */}
      <motion.section
        ref={ref4}
        initial="initial"
        animate={inView4 ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
          >
            Our Core Products
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:border-brand-red/30 transition-all duration-300"
              >
                <div className="w-full h-32 bg-gradient-to-br from-brand-red/10 to-red-600/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">{product.name} Image</span>
                </div>
                <div className="text-brand-red text-lg font-semibold mb-3">
                  {product.name}
                </div>
                <p className="text-gray-600">
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership Team Section with Horizontal Scroll */}
      <motion.section
        ref={ref5}
        initial="initial"
        animate={inView5 ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
          >
            Leadership Team
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
            
            <span className="text-gray-600 font-medium">Scroll to explore our team</span>
            
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
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-red/20 to-red-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
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

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {leadershipTeam.map((_, index) => (
              <div 
                key={index}
                className="w-2 h-2 bg-gray-300 rounded-full transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Certifications & Standards Section */}
      <motion.section
        ref={ref6}
        initial="initial"
        animate={inView6 ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
          >
            Certifications & Standards
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-red font-bold text-xl">✓</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        ref={ref7}
        initial="initial"
        animate={inView7 ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
          >
            Why Choose Latev Engineering?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:border-brand-red/30 transition-all duration-300"
              >
                <div className="text-2xl mb-3">{benefit.icon}</div>
                <div className="text-brand-red text-lg font-semibold mb-3">
                  {benefit.title}
                </div>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Global Presence Section */}
      <motion.section
        ref={ref8}
        initial="initial"
        animate={inView8 ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900"
          >
            Global Presence
          </motion.h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-lg"
            >
              <div className="w-full h-64 bg-gradient-to-br from-brand-red/10 to-red-600/10 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-gray-500 text-lg">World Map with Office Locations</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-red">Worldwide Operations</h3>
              <p className="text-gray-600 mb-4">
                With offices and operations across three continents, Latev Engineering delivers 
                coiled tubing solutions to energy companies worldwide.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Headquarters: Houston, Texas</li>
                <li>• Middle East Office: Dubai, UAE</li>
                <li>• Asia Pacific Office: Singapore</li>
                <li>• European Operations: Aberdeen, UK</li>
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Reach</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl mr-4 text-brand-red">🌍</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Projects</h4>
                    <p className="text-gray-600">Successfully completed projects in over 15 countries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4 text-brand-red">⛴️</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Offshore Expertise</h4>
                    <p className="text-gray-600">Specialized solutions for deepwater and offshore operations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-2xl mr-4 text-brand-red">🤝</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Partnerships</h4>
                    <p className="text-gray-600">Strong network of local partners ensuring seamless operations</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-red to-red-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-8 text-white"
          >
            Ready to Transform Your Well Operations?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-red-100 mb-8 leading-relaxed"
          >
            Join the growing list of energy companies that trust Latev Engineering for their 
            coiled tubing needs. Contact us today to discuss how we can optimize your operations.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-brand-red hover:bg-gray-100 font-semibold rounded-xl transition-colors duration-300"
            >
              Contact Our Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white text-white hover:bg-white/10 font-semibold rounded-xl transition-colors duration-300"
            >
              Download Brochure
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;