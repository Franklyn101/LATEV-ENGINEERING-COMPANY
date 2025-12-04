export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  toolsUsed: string[];
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    position: 'Operations Manager',
    company: 'Gulf Coast Energy',
    content: 'LATEV Engineering\'s coiled tubing tools revolutionized our well intervention operations. The live well capability allowed us to perform maintenance without production loss, saving us over 40% in downtime costs. The bridge plugs performed flawlessly under high pressure.',
    toolsUsed: ['Bridge Plugs', 'Live Well Tools']
  },
  {
    id: 2,
    name: 'Sarah Chen',
    position: 'Offshore Supervisor',
    company: 'Deepwater Drilling Corp',
    content: 'Working in tight offshore spaces requires compact, reliable tools. LATEV\'s CT downhole tools exceeded expectations. Their fishing tools retrieved a stuck BHA in record time, and the pressure control features ensured complete safety throughout the operation.',
    toolsUsed: ['Fishing Tools', 'Pressure Control']
  },
  {
    id: 3,
    name: 'James Okafor',
    position: 'Well Intervention Lead',
    company: 'African Energy Solutions',
    content: 'The customizable nature of LATEV\'s tool line allowed us to adapt to our unique geological challenges. Their mills cleared obstructions that had plagued us for months, and the impression tools provided crucial data for future operations.',
    toolsUsed: ['Mills', 'Impression Tools', 'Custom Solutions']
  },
  {
    id: 4,
    name: 'Elena Petrova',
    position: 'Safety Director',
    company: 'Arctic Drilling Ltd',
    content: 'In extreme environments, safety is non-negotiable. LATEV Engineering\'s pressure-controlled tools and high-integrity connectors provided the reliability we needed. Zero incidents across 15 consecutive interventions speaks volumes about their quality.',
    toolsUsed: ['Connectors', 'Pressure Control Tools']
  },
  {
    id: 5,
    name: 'David Wilson',
    position: 'Field Operations Director',
    company: 'Permian Basin Services',
    content: 'Cost efficiency is critical in today\'s market. LATEV\'s basic tools and connectors reduced our average intervention time by 35%. The tool string functionality improvements alone justified the investment within the first quarter.',
    toolsUsed: ['Basic Tools', 'Connectors']
  },
  {
    id: 6,
    name: 'Lisa Takahashi',
    position: 'Technical Manager',
    company: 'Asia Pacific Energy',
    content: 'The versatility of LATEV\'s coiled tubing tool line is unmatched. We successfully deployed tools across both onshore and offshore operations with consistent performance. Their technical support team was instrumental in optimizing our workflows.',
    toolsUsed: ['Complete Tool Line', 'Technical Support']
  },
];