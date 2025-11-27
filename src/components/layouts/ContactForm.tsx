"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { IconSend } from '@tabler/icons-react';
import { RippleButton } from '@/components/shared/button';
import { InputField } from '../shared/input';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  formData: FormData;
  isSubmitting: boolean;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isFormValid: boolean;
  initialAnimation?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  isSubmitting,
  onFormChange,
  onSubmit,
  isFormValid,
  initialAnimation = true
}) => {
  return (
    <motion.div
      initial={initialAnimation ? { opacity: 0, x: 20 } : {}}
      animate={initialAnimation ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.4 }}
      className="lg:col-span-2"
    >
      <div className="bg-white rounded lg:border border-gray-200 lg:p-8 xl:py-14">
        <form onSubmit={onSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={onFormChange}
              required
              placeholder="Enter your full name"
              label="Full Name"
            />
            <InputField
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={onFormChange}
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
            onChange={onFormChange}
            required
            placeholder="What's this about?"
            label="Subject"
          />

          <InputField
            id="message"
            name="message"
            type="textarea"
            value={formData.message}
            onChange={onFormChange}
            required
            placeholder="Tell us about your project or inquiry..."
            label="Message"
            rows={6}
          />

          <SubmitButton 
            isSubmitting={isSubmitting}
            isFormValid={isFormValid}
          />
        </form>
      </div>
    </motion.div>
  );
};

const SubmitButton: React.FC<{
  isSubmitting: boolean;
  isFormValid: boolean;
}> = ({ isSubmitting, isFormValid }) => (
  <RippleButton
    type="submit"
    disabled={isSubmitting || !isFormValid}
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
);