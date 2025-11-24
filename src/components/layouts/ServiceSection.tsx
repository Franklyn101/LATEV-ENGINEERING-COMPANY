import React from "react";

export const serviceItems = [
  {
    title: "Oilfield Construction & Infrastructure Development",
    description:
      "We deliver complete oilfield construction solutions engineered for demanding field conditions. From land preparation to full facility build-outs, our work meets the highest safety and reliability standards.",
    image: "/images/spiralduct.jpg",
  },
  {
    title: "Pipeline Construction & Maintenance",
    description:
      "We provide precision pipeline installation, welding, testing, and long-term maintenance to ensure safe and efficient transport of oil and gas across all terrains.",
    image: "/images/spiralduct2.jpg",
  },

  {
    title: "Pipeline Construction & Maintenance",
    description:
      "We provide precision pipeline installation, welding, testing, and long-term maintenance to ensure safe and efficient transport of oil and gas across all terrains.",
    image: "/images/spiralduct2.jpg",
  },

  {
    title: "Pipeline Construction & Maintenance",
    description:
      "We provide precision pipeline installation, welding, testing, and long-term maintenance to ensure safe and efficient transport of oil and gas across all terrains.",
    image: "/images/spiralduct2.jpg",
  },
  {
    title: "Pipeline Construction & Maintenance",
    description:
      "We provide precision pipeline installation, welding, testing, and long-term maintenance to ensure safe and efficient transport of oil and gas across all terrains.",
    image: "/images/spiralduct2.jpg",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-20 space-y-24">
      {serviceItems.map((item, index) => {
        const isReversed = index % 2 === 1; 

        return (
          <div
            key={index}
            className={`container p-3 mx-auto flex flex-col md:flex-row items-center gap-14 ${
              isReversed ? "md:flex-row-reverse" : ""
            }`}
          >
           
            <div className="md:w-1/2 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl shadow-xl w-full object-cover h-[350px] md:h-[420px]"
              />
            </div>

            
            <div className="md:w-1/2 w-full">
              <h2 className="text-4xl font-serif font-bold mb-5 text-gray-800 leading-tight">
                {item.title}
              </h2>

              <p className="text-lg text-gray-600 font-sans mb-6 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
