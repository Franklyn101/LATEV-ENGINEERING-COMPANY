"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const videos = [
    "/1197802-hd_1920_1080_25fps.mp4",
    "/11996993_3840_2160_30fps.mp4",
    "/2048246-hd_1920_1080_24fps.mp4",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center pl-20 overflow-hidden">
      
     
      <video
        key={current}  
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videos[current]} type="video/mp4" />
      </video>

     
      <div className="absolute inset-0 bg-black/60"></div>

     
      <div className="relative z-10  px-1">
        <h1 className="text-4xl md:text-3xl font-bold text-white leading-tight">
          Building the Future, <br /> Transforming Communities
        </h1>

      

        <div className="flex flex-col sm:flex-row gap-4  mt-10">
          <button className="bg-[#b4393c] text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
            Explore Our Work
          </button>
        
        </div>
      </div>
    </section>
  );
}
