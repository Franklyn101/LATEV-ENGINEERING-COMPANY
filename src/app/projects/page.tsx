import ProjectPageContainer from '@/components/containers/ProjectPageContainer'
import { createMetadata } from '@/lib/metadata';
import React from 'react'


export const metadata = createMetadata({
  title: "Projects – Latev Engineering Services Ltd",
  description:
    "Get in touch with Latev Engineering Services Ltd for professional oilfield services, coiled tubing solutions, and engineering support. Reach our team for inquiries, project consultations, or partnership opportunities.",
  keywords: [
    "service Latev Engineering",
    "oilfield service support",
    "coiled tubing tools",
    "engineering services",
    "well intervention support",
    "Latev Engineering contact"
  ],
  url: "https://latevengineering.com/projects",
  image: "/og-image.png",
});


export default function  servicePage () { return <ProjectPageContainer /> }