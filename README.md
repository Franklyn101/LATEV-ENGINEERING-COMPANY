# Latev Engineering Services - Corporate Website

A modern, high-performance corporate website for Latev Engineering Services Ltd, an oilfield services and engineering company specializing in coiled tubing downhole tools, well intervention, and engineering solutions.

## 🚀 Overview

This project delivers a professional brand presence and lead-generation platform for Latev Engineering, showcasing their expertise in oilfield services, construction management, and engineering solutions. The website features a responsive design, smooth animations, and comprehensive service presentations.

## ✨ Key Features

- **Hero Section** with dynamic service icons and brand messaging
- **Interactive FAQ Page** with category filtering and accordion animations
- **Contact Page** with form validation, map integration, and social links
- **Service Grid** showcasing 6 core service offerings
- **Testimonial Carousel** with client success stories
- **Performance Metrics** with animated counters (10+ years expertise, 50+ tools delivered, etc.)
- **Project Highlights** section for case studies
- **Responsive Navigation** optimized for all device sizes
- **Cookie Consent** system for GDPR compliance
- **Modern Contact Form** with validation and toast notifications

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Tabler Icons
- **UI Components:** Custom component library (RippleButton, InputField)
- **Notifications:** Sonner (toasts)
- **Form Handling:** React Hook Form + custom validation

## 🏗️ Architecture

The project follows a modular component-based architecture:

src/
├── app/ # Next.js app router pages
├── components/ # Reusable UI components
│ ├── faq/ # FAQ-specific components
│ ├── shared/ # Shared UI components
│ └── contact/ # Contact page components
├── data/ # Static data files (faqData, etc.)
├── types/ # TypeScript type definitions
└── styles/ # Global styles and Tailwind config

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
