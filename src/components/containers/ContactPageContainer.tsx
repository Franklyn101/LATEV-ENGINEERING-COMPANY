"use client";
import React, { useState } from 'react';
import { toast } from 'sonner';
import { ContactForm } from '../layouts/ContactForm';
import { ContactInformation } from '../layouts/ContactInformation';
import { MapSection } from '../layouts/MapSection';
import { SectionHero } from '../layouts/SectionHero';

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
    <div className="min-h-screen">
      <SectionHero
        title="We Want to Hear From You"
        subtitle="We're here to help and answer any questions you might have"
        imageUrl="/images/contact-hero.png"
        overlayOpacity={0.6}
      />

      {/* Contact Content */}
      <div className="min-h-screen lg:mt-8 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-20">
            <ContactInformation />

            <ContactForm
              formData={formData}
              isSubmitting={isSubmitting}
              onFormChange={handleChange}
              onSubmit={handleSubmit}
              isFormValid={isFormValid()}
            />
          </div>

          <MapSection />
        </div>
      </div>
    </div>
  );
}