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

  const isFormValid = () => {
    const { name, email, subject, message } = formData;

    const isNameValid = name.trim().length >= 2;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isSubjectValid = subject.trim().length >= 3;
    const isMessageValid = message.trim().length >= 10;

    return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast.error("Please check all fields", {
        description: "Some fields are invalid or incomplete.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Add correct mail address
      const mailtoLink = `mailto:info@latevengineering.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      toast.success("Opening your email app...");
      
      setFormData({ name: "", email: "", subject: "", message: "" });
      
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <SectionHero
        title="We Want to Hear From You"
        subtitle="We're here to help and answer any questions you might have"
        imageUrl="/images/contact-hero.png"
        overlayOpacity={0.6}
      />

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
