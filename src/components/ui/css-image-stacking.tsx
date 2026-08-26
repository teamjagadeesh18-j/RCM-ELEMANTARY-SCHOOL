"use client";
import { TextEffect } from '@/components/core/text-effect';
import React from "react";

export default function CssImageStacking() {
  const bubbles = [
    { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=480&q=75&auto=format&fit=crop", title: "Joyful Primary Reading", category: "FOUNDATION" },
    { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=480&q=75&auto=format&fit=crop", title: "Playground Outdoor Fun", category: "SPORTS" },
    { src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=480&q=75&auto=format&fit=crop", title: "Stage Rhymes & Music", category: "CULTURAL" },
    { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=480&q=75&auto=format&fit=crop", title: "Activity Science Lab", category: "PRACTICALS" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=480&q=75&auto=format&fit=crop", title: "Picture Story Corner", category: "LIBRARY" },
    { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=480&q=75&auto=format&fit=crop", title: "Green School Yard", category: "INFRASTRUCTURE" },
  ];

  return (
    <section className="w-full bg-[#f0fdfa] py-24 px-6 border-t border-teal-200">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 border border-teal-300 font-body">
          PLAYFUL FLOATING CLOUD
        </span>
        <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-3xl sm:text-5xl font-extrabold text-[#115e59] mt-4 font-heading leading-tight">
          Little Steps at R.C.M Elementary
        </TextEffect>
        <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-teal-800/80 text-base sm:text-lg mt-3 font-body">
          Playful foundational learning moments captured across our primary campus.
        </TextEffect>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bubbles.map((item, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center transition-all duration-500 hover:-translate-y-2"
          >
            <div className="w-full h-80 rounded-[35px] overflow-hidden shadow-[0_15px_35px_rgba(15,118,110,0.1)] relative">
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-[10px] font-bold text-[#115e59] uppercase tracking-widest font-body shadow-sm">
                {item.category}
              </span>
            </div>
            <TextEffect as="h3" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="mt-3 text-base font-bold text-[#115e59] font-heading text-center">
              {item.title}
            </TextEffect>
          </div>
        ))}
      </div>
    </section>
  );
}
