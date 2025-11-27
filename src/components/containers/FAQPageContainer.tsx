"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IconChevronDown, 
  IconTool, 
  IconSettings,
  IconShield,
  IconClock,
  IconAnchor, // Replaced IconBuildingOffshore
  IconChecklist,
  IconMail,
  IconHelp,
  IconCategory
} from '@tabler/icons-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon?: React.ReactNode;
}

export default function EngineeringFAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What are Coiled Tubing Downhole Tools and what are they used for?",
      answer: "Coiled Tubing (CT) Downhole Tools are specialized equipment deployed using continuous coiled tubing for well intervention and completion operations. They enable efficient, pressure-controlled solutions without interrupting production, making them ideal for both onshore and offshore applications.",
      category: "general",
      icon: <IconTool className="h-5 w-5" />
    },
    {
      id: 2,
      question: "What types of connectors do you offer for coiled tubing operations?",
      answer: "We provide high-integrity mechanical connectors for securely linking coiled tubing to downhole tools or splicing tubing segments. These connectors are engineered for reliability and performance in challenging downhole environments.",
      category: "connectors",
      icon: <IconSettings className="h-5 w-5" />
    },
    {
      id: 3,
      question: "What basic tools are available in your product line?",
      answer: "Our basic tools category includes equipment that enhances operational control, improves tool string functionality, and facilitates effective wellbore cleaning. These tools form the foundation of efficient coiled tubing operations.",
      category: "basic-tools",
      icon: <IconChecklist className="h-5 w-5" />
    },
    {
      id: 4,
      question: "How do your bridge plugs work for wellbore isolation?",
      answer: "Our bridge plugs provide reliable wellbore isolation during intervention operations. They are designed for precise deployment using coiled tubing and offer secure zonal isolation while maintaining pressure control integrity.",
      category: "bridge-plugs",
      icon: <IconShield className="h-5 w-5" />
    },
    {
      id: 5,
      question: "What fishing tools do you provide for equipment retrieval?",
      answer: "We offer precision-engineered fishing tools specifically designed for retrieving lost or stuck equipment from wellbores. These tools are crucial for recovering valuable equipment and maintaining operational continuity.",
      category: "fishing-tools",
      icon: <IconSettings className="h-5 w-5" />
    },
    {
      id: 6,
      question: "What milling and impression tools are available?",
      answer: "Our product line includes effective mills for removing obstructions and impression tools for identifying downhole features. These tools help maintain wellbore integrity and provide valuable diagnostic information.",
      category: "milling-tools",
      icon: <IconTool className="h-5 w-5" />
    },
    {
      id: 7,
      question: "Can operations be performed on live wells?",
      answer: "Yes, our tools enable live well operations, allowing interventions to be conducted without halting production. This capability significantly reduces operational downtime and maintains revenue streams.",
      category: "benefits",
      icon: <IconClock className="h-5 w-5" />
    },
    {
      id: 8,
      question: "How do your tools improve cost and time efficiency?",
      answer: "Our tools are designed to reduce downtime and speed up execution through efficient deployment and operation. The ability to work on live wells and the compact nature of our equipment contribute to significant time and cost savings.",
      category: "benefits",
      icon: <IconClock className="h-5 w-5" />
    },
    {
      id: 9,
      question: "What pressure control features do your tools offer?",
      answer: "All our tools are engineered for safe deployment under pressurized well conditions. They incorporate robust pressure control mechanisms that ensure operational safety and environmental protection.",
      category: "benefits",
      icon: <IconShield className="h-5 w-5" />
    },
    {
      id: 10,
      question: "Are your tools suitable for offshore applications?",
      answer: "Absolutely. Our tools are compact and versatile, making them ideal for space-limited offshore locations. They are designed to meet the rigorous demands of both onshore and offshore environments.",
      category: "benefits",
      icon: <IconAnchor className="h-5 w-5" />
    },
    {
      id: 11,
      question: "Can tools be customized for specific client needs?",
      answer: "Yes, we offer customizable solutions where all tools can be adapted to meet specific client requirements and operational challenges. Our technical team works closely with clients to develop tailored solutions.",
      category: "benefits",
      icon: <IconSettings className="h-5 w-5" />
    },
    {
      id: 12,
      question: "What technical support do you provide?",
      answer: "LATEV ENGINEERING SERVICES LTD provides comprehensive technical support through our partnership with Marlin Oil Tools. This includes operational guidance, maintenance support, and technical consultation throughout the project lifecycle.",
      category: "support",
      icon: <IconMail className="h-5 w-5" />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', count: faqData.length, icon: <IconHelp className="h-4 w-4" /> },
    { id: 'general', name: 'General', count: faqData.filter(item => item.category === 'general').length, icon: <IconTool className="h-4 w-4" /> },
    { id: 'connectors', name: 'Connectors', count: faqData.filter(item => item.category === 'connectors').length, icon: <IconSettings className="h-4 w-4" /> },
    { id: 'basic-tools', name: 'Basic Tools', count: faqData.filter(item => item.category === 'basic-tools').length, icon: <IconChecklist className="h-4 w-4" /> },
    { id: 'bridge-plugs', name: 'Bridge Plugs', count: faqData.filter(item => item.category === 'bridge-plugs').length, icon: <IconShield className="h-4 w-4" /> },
    { id: 'fishing-tools', name: 'Fishing Tools', count: faqData.filter(item => item.category === 'fishing-tools').length, icon: <IconSettings className="h-4 w-4" /> },
    { id: 'milling-tools', name: 'Milling Tools', count: faqData.filter(item => item.category === 'milling-tools').length, icon: <IconTool className="h-4 w-4" /> },
    { id: 'benefits', name: 'Benefits', count: faqData.filter(item => item.category === 'benefits').length, icon: <IconCategory className="h-4 w-4" /> },
    { id: 'support', name: 'Support', count: faqData.filter(item => item.category === 'support').length, icon: <IconMail className="h-4 w-4" /> },
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-red-200 max-w-3xl mx-auto">
              Get answers about our Coiled Tubing Downhole Tools and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24"
            >
              <h3 className="font-semibold text-gray-900 text-lg mb-4 flex items-center">
                <IconCategory className="h-5 w-5 mr-2 text-brand-red" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-200 flex justify-between items-center group ${
                      activeCategory === category.id
                        ? 'bg-red-50 text-brand-red border border-red-200'
                        : 'text-gray-700 hover:bg-gray-50 hover:border-gray-200 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`${
                        activeCategory === category.id 
                          ? 'text-brand-red' 
                          : 'text-gray-400 group-hover:text-brand-red'
                      }`}>
                        {category.icon}
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      activeCategory === category.id
                        ? 'bg-brand-red text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-red-100 group-hover:text-brand-red'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-50 to-gray-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {categories.find(cat => cat.id === activeCategory)?.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''} available
                  </p>
                </div>

                {/* FAQ Items */}
                <div className="divide-y divide-gray-200">
                  <AnimatePresence>
                    {filteredFAQs.map((faq, index) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <button
                          onClick={() => toggleItem(faq.id)}
                          className="w-full px-6 py-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-start justify-between group"
                        >
                          <div className="flex items-start space-x-4 flex-1">
                            <div className="text-brand-red mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                              {faq.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 text-lg pr-8 group-hover:text-brand-red transition-colors duration-200">
                                {faq.question}
                              </h3>
                            </div>
                          </div>
                          <motion.div
                            animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-gray-400 flex-shrink-0 ml-4 group-hover:text-brand-red"
                          >
                            <IconChevronDown className="h-5 w-5" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {openItems.includes(faq.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 ml-9 border-l-2 border-brand-red">
                                <div className="prose prose-red max-w-none">
                                  <p className="text-gray-700 leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Empty State */}
                {filteredFAQs.length === 0 && (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <IconTool className="h-12 w-12 mx-auto" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No questions found
                    </h3>
                    <p className="text-gray-600">
                      Try selecting a different category or check back later.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 bg-gradient-to-r from-brand-red to-red-700 rounded-lg shadow-lg p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-red-100 text-lg mb-6 max-w-2xl mx-auto">
                Our technical experts are ready to provide detailed information about our Coiled Tubing Downhole Tools and how they can benefit your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-brand-red px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 flex items-center justify-center">
                  <IconMail className="h-5 w-5 mr-2" />
                  Contact Sales
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200">
                  Request Technical Documentation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}