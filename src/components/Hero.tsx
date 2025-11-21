"use client";
import { useEffect, useRef, useState } from "react";


export default function Hero() {
  const slides = [
    {
      video: "/weilding.mp4",
      title: "Building the Future, Transforming Communities",
      button: "Explore Our Work",
    },
    {
      video: "/riging.mp4",
      title: "Engineering Excellence Across Nigeria",
      button: "Discover Our Projects",
    },
    {
      video: "/2048246-hd_1920_1080_24fps.mp4",
      title: "Innovating for a Better Tomorrow",
      button: "Learn More",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState<"A" | "B">("A");

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
      // Once loaded, switch layers
      setActiveVideo(activeVideo === "A" ? "B" : "A");
      setCurrent(nextIndex);
    };
  };

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(goToNext, 7000);
    return () => clearInterval(interval);
  }, [current, activeVideo]);

  return (
    <section className="relative h-screen w-full flex items-center pl-20 overflow-hidden">

      {/* VIDEO A */}
      <video
        ref={videoA}
        autoPlay
        muted
        playsInline
        src={slides[0].video}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          activeVideo === "A" ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* VIDEO B */}
      <video
        ref={videoB}
        autoPlay
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          activeVideo === "B" ? "opacity-100" : "opacity-0"
        }`}
      />

     
      <div className="absolute inset-0 bg-black/60"></div>

      
      <div className="relative z-20 max-w-[230px] transition-opacity duration-700">
        <h1 className="text-4xl md:text-3xl font-bold text-white leading-tight">
          {slides[current].title}
        </h1>

      

        <div className="flex flex-col sm:flex-row gap-4  mt-10">
          <button className="bg-[#b4393c] text-white px-4 w-60 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
            Explore Our Work
          </button>
        </div>
      </div>

     
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              goToNext();
            }}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
