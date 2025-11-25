"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconSend,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok
} from '@tabler/icons-react';
import { RippleButton } from '@/components/shared/button';
import { toast } from 'sonner';
import { InputField } from '../shared/input';


export default function ModernContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation function
  const isFormValid = () => {
    const { name, email, subject, message } = formData;

    // Basic validation
    const isNameValid = name.trim().length >= 2;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isSubjectValid = subject.trim().length >= 3;
    const isMessageValid = message.trim().length >= 10;

    return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error('Please fill all fields correctly', {
        description: 'All fields are required and must meet validation criteria.',
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate successful submission
      console.log('Form submitted:', formData);

      // Show success toast
      toast.success('Message sent successfully!', {
        description: 'We will get back to you within 24 hours.',
        duration: 5000,
      });

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      // Show error toast
      toast.error('Failed to send message', {
        description: 'Please try again later.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen mt-16 py-12 lg:pt-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 lg:mb-12"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold pb-6">
                Get In Touch
              </h1>
              <p className="text-lg lg:text-xl text-gray-900 my-3 lg:my-8">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              <p className="text-lg lg:text-xl text-gray-900">
                We deliver exceptional service and innovative solutions with a personalized approach.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-black">
                  <IconMail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    hello@company.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-black">
                  <IconPhone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    +(234) 2330-45674
                  </p>
                  <p className="text-gray-900 font-medium">
                    +(234) 9872-65434
                  </p>
                  <p className="text-gray-900 font-medium">
                    +(234) 4561-78903
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-black">
                  <IconMapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">
                    No. 3 Lekki Phase 1, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <h3 className="font-semibold text-gray-900 text-lg mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-600 hover:text-brand-red transition-colors"
                >
                  <IconBrandTwitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-600 hover:text-brand-red transition-colors"
                >
                  <IconBrandLinkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-600 hover:text-brand-red transition-colors"
                >
                  <IconBrandInstagram className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-600 hover:text-brand-red transition-colors"
                >
                  <IconBrandFacebook className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-600 hover:text-brand-red transition-colors"
                >
                  <IconBrandTiktok className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded lg:border border-gray-200 lg:p-8 xl:py-14">
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    label="Full Name"
                  />
                  <InputField
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    label="Email Address"
                  />
                </div>

                <InputField
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  label="Subject"
                />

                <InputField
                  id="message"
                  name="message"
                  type="textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project or inquiry..."
                  label="Message"
                  rows={6}
                />

                <RippleButton
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  variant="default"
                  size="lg"
                  className="w-full text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <IconSend className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </RippleButton>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-white rounded lg:border border-gray-200 lg:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us Here</h2>
            <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden h-64 md:h-96 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d507402.31713771424!2d3.4452352900551904!3d6.511481745193726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf75df5c74367%3A0x6a7e7df9d6c1cd4a!2sLekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1764033963823!5m2!1sen!2sng"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}