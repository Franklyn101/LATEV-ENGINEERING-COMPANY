"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok
} from '@tabler/icons-react';

interface ContactInfoProps {
  initialAnimation?: boolean;
}

export const ContactInformation: React.FC<ContactInfoProps> = ({ 
  initialAnimation = true 
}) => {
  return (
    <motion.div
      initial={initialAnimation ? { opacity: 0, x: -20 } : {}}
      animate={initialAnimation ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="lg:col-span-1 space-y-8"
    >
      <motion.div
        initial={initialAnimation ? { opacity: 0, y: 20 } : {}}
        animate={initialAnimation ? { opacity: 1, y: 0 } : {}}
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
        <ContactInfoItem 
          icon={<IconMail className="h-6 w-6" />}
          content={
          <>
          <p className="text-gray-900 font-medium">mail.lagos@latevengineering.com</p>
            <p className="text-gray-900 font-medium">mail.ph@latevengineering.com</p>
            <p className="text-gray-900 font-medium">mail.warri@latevengineering.com</p>
            </>
          }
          
        />
        
        <ContactInfoItem 
          icon={<IconPhone className="h-6 w-6" />}
          content={
            <>
              <p className="text-gray-900 font-medium">+234-818-102-2649</p>
              <p className="text-gray-900 font-medium"> +234- 705-195-7019</p>
              <p className="text-gray-900 font-medium">+234-705-901-9575</p>
              <p className="text-gray-900 font-medium"> +234-705-195-7028</p>
            </>
          }
        />
        
        <ContactInfoItem 
          icon={<IconMapPin className="h-6 w-6" />}
          content={
            <>
          <p className="text-gray-900 font-medium">16B Grace Anjous Drive, Off Adebayo Doherty Street, Off Admiralty Way, Lekki Phase 1, Lagos, Nigeria.</p>
          <br></br>
          <p>4, Agore Close, Off Niemoghe Avenue, Beside PHD Hotel, DDPA Estate, Ugborikoko Effurun, Delta State, Nigeria.</p>
          <br></br>
          <p>Plot 224 Iyowuna Drive, off Odili Road Trans Amadi Port-Harcourt, Rivers State, Nigeria.</p>
          </>
        }
        />
      </div>

      <SocialLinks initialAnimation={initialAnimation} />
    </motion.div>
  );
};

const ContactInfoItem: React.FC<{
  icon: React.ReactNode;
  content: React.ReactNode;
}> = ({ icon, content }) => (
  <div className="flex items-start space-x-4">
    <div className="text-black">{icon}</div>
    <div>{content}</div>
  </div>
);

const SocialLinks: React.FC<{ initialAnimation?: boolean }> = ({ initialAnimation }) => (
  <motion.div
    initial={initialAnimation ? { opacity: 0, y: 20 } : {}}
    animate={initialAnimation ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: 0.6 }}
    className="mt-8"
  >
    <h3 className="font-semibold text-gray-900 text-lg mb-4">Follow Us</h3>
    <div className="flex space-x-4">
      {[
        { Icon: IconBrandTwitter, href: "#" },
        { Icon: IconBrandLinkedin, href: "#" },
        { Icon: IconBrandInstagram, href: "#" },
        { Icon: IconBrandFacebook, href: "#" },
        { Icon: IconBrandTiktok, href: "#" },
      ].map(({ Icon, href }, index) => (
        <motion.a
          key={index}
          href={href}
          whileHover={{ scale: 1.1, y: -2 }}
          className="text-gray-600 hover:text-brand-red transition-colors"
        >
          <Icon className="h-5 w-5" />
        </motion.a>
      ))}
    </div>
  </motion.div>
);