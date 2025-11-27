"use client";
import Link from "next/link";
import router from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const slides = [
    {
      video: "/videos/weilding.mp4",
      title: "Building the Future, Transforming Communities",
      button: "Explore Our Work",
      link: "/services"
    },
    {
      video: "/videos/riging.mp4",
      title: "Engineering Excellence Across Nigeria",
      button: "Our Projects",
      link: "/projects"
    },
    {
      video: "/videos/building.mp4",
      title: "Innovating for a Better Tomorrow",
      button: "Learn More",
      link: "/about"
    },
  ];

  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState<"A" | "B">("A");
  const [animateButton, setAnimateButton] = useState(false);

  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);

  // Preload
  const goToNext = () => {
    const nextIndex = (current + 1) % slides.length;
    const nextVideo = slides[nextIndex].video;
    const inactiveVideo = activeVideo === "A" ? videoB.current : videoA.current;

    if (!inactiveVideo) return;

    // Load next video on inactive layer
    inactiveVideo.src = nextVideo;
    inactiveVideo.load();

    inactiveVideo.oncanplay = () => {
      setActiveVideo(activeVideo === "A" ? "B" : "A");
      setCurrent(nextIndex);

      // Trigger button animation
      setAnimateButton(true);
      setTimeout(() => setAnimateButton(false), 500);
    };
  };

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(goToNext, 10000);
    return () => clearInterval(interval);
  }, [current, activeVideo]);

  return (
    <section className="relative h-screen w-full flex items-center md:pl-10 lg:pl-20 overflow-hidden">
      {/* VIDEO A */}
      <video
        ref={videoA}
        autoPlay
        muted
        playsInline
        src={slides[0].video}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeVideo === "A" ? "opacity-100" : "opacity-0"
          }`}
      />

      {/* VIDEO B */}
      <video
        ref={videoB}
        autoPlay
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeVideo === "B" ? "opacity-100" : "opacity-0"
          }`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text + button */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="relative z-20 max-w-5xl transition-opacity px-4 md:pl-10 duration-700">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            {slides[current].title}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            {/* Animated Hero Button */}
            <Link href={slides[current].link}>
            <button className="relative cursor-pointer text-base overflow-hidden px-4 w-44 py-3 rounded font-semibold text-white border border-brand-red"
           >
              {slides[current].button}
              
              {/* {slides[current].link} */}
              
              <span
                className={`absolute inset-0 bg-brand-red transition-transform duration-500 ease-in-out z-[-1] ${animateButton ? "translate-x-0" : "-translate-x-full"
                  }`}
              ></span>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bullets */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              goToNext();
            }}
            className={`w-3 h-3 rounded-full transition ${current === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
