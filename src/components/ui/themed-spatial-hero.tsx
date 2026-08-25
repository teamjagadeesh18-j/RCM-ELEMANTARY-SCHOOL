'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import StarfieldButton from '@/components/ui/starfield-button';

export function AnnouncementBar() {
  return (
    <div className="bg-[#006bff] text-white py-2 px-4 text-xs font-medium font-body relative text-center">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-white/90" />
        <span>✨ Admissions Open for New Academic Session • R.C.M Matriculation Elementary School</span>
      </div>
    </div>
  );
}

export function SpatialHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[#f8f9fb]/90 backdrop-blur-md border-b border-[#d4e0ed] font-body">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 min-h-[60px] sm:h-16 flex items-center justify-between gap-2 text-sm text-[#0b3558]">
        <a href="/" className="hover:opacity-90 transition-opacity min-w-0 shrink"><div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#006bff] text-white flex items-center justify-center font-bold font-heading shadow-sm shrink-0">
            R
          </div>
          <div className="min-w-0">
            <span className="font-bold text-xs sm:text-base text-[#0b3558] font-heading tracking-tight block truncate max-w-[160px] xs:max-w-[240px] sm:max-w-none">
              R.C.M Matriculation Elementary School
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#476788] block -mt-0.5 font-medium truncate">Matriculation Campus</span>
          </div>
        </div></a>

        <nav className="hidden md:flex items-center gap-6 font-medium text-xs lg:text-sm">
          <a href="/about" className="whitespace-nowrap hover:text-[#006bff] transition-colors">About Us</a>
          <a href="/academics" className="whitespace-nowrap hover:text-[#006bff] transition-colors">Learning</a>
          <a href="/facilities" className="whitespace-nowrap hover:text-[#006bff] transition-colors">Play Zones</a>
          <a href="/gallery" className="whitespace-nowrap hover:text-[#006bff] transition-colors">Kids Gallery</a>
          <a href="/#testimonials" className="whitespace-nowrap hover:text-[#006bff] transition-colors">Parent Reviews</a>
          <a href="/contact" className="whitespace-nowrap hover:text-[#006bff] transition-colors">Connect</a>
        </nav>

        <div className="flex items-center gap-3">
          <StarfieldButton
            label="Apply Now"
            link="/apply"
            padding="6px 14px 6px 14px"
            font={{ fontSize: 14, fontWeight: 700 }}
            colors={{ fill: "#006bff", textColor: "#ffffff" }}
            stroke={{ color: "#4795ff", count: 1, size: 70, speed: 50 }}
            pixel={{ color: "#4795ff", size: 3, density: 50, brightness: 100 }}
          />
        </div>
      </div>
    </header>
  );
}

export function LogoStripCard() {
  const logos = [
    { name: "State Board Approved", badge: "Tamil Nadu Board" },
    { name: "STEM Learning Initiative", badge: "Practical Science" },
    { name: "Digital Learning Portal", badge: "Smart Classrooms" },
    { name: "Sports & Fitness Hub", badge: "Athletics First" },
    { name: "Student Project Hub", badge: "Hands-on Learning" },
    { name: "Excellence Awards", badge: "Rank Holders" },
  ];

  return (
    <section className="bg-[#ffffff] py-10 border-b border-[#d4e0ed]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="p-4 rounded-[24px] border border-[#d4e0ed] bg-[#f8f9fb] text-center shadow-sm">
              <p className="font-bold text-xs text-[#0b3558] font-heading">{logo.name}</p>
              <p className="text-[11px] text-[#006bff] font-medium font-body mt-1">{logo.badge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SpatialFeatureSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#f8f9fb]">
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3.5 py-1 rounded-[24px] bg-[#e6f0ff] text-[#006bff] border border-[#d4e0ed] text-xs font-semibold tracking-wide uppercase font-body mb-4">
            DISCIPLINED LEARNING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#0b3558] tracking-tight leading-[1.3] font-heading mb-4">
            Why Parents Choose R.C.M Matriculation Elementary School
          </h2>
          <p className="text-base sm:text-lg text-[#476788] leading-[1.56] font-body">
            Delivering structured, values-based Matriculation education with dedicated teachers, safe campus facilities, and clear academic guidance for every student.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-[24px] border border-[#d4e0ed] bg-[#ffffff] text-[#006bff] text-sm font-semibold font-body shadow-sm">
              Core Foundations
            </span>
            <h3 className="text-2xl lg:text-[32px] font-semibold text-[#0b3558] leading-[1.3] font-heading">
              Structured Routines & Individual Attention
            </h3>

            <div className="space-y-4 font-body pt-2">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#006bff] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#0b3558]">Structured Daily Routines</h4>
                  <p className="text-sm text-[#476788] leading-relaxed">Building clear study habits, focus, and self-discipline for young minds.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#006bff] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#0b3558]">Matriculation Board Rigor</h4>
                  <p className="text-sm text-[#476788] leading-relaxed">Comprehensive State Board curriculum fostering core subject clarity in Science and Math.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#006bff] shrink-0 mt-2"></span>
                <div>
                  <h4 className="text-base font-semibold text-[#0b3558]">Holistic Co-Curricular Wellbeing</h4>
                  <p className="text-sm text-[#476788] leading-relaxed">Nurturing physical health, outdoor games, teamwork, and confidence.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#d4e0ed]">
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#0b3558] font-heading">100%</p>
                <p className="text-xs lg:text-[14px] text-[#476788] font-body">Pass Rate</p>
              </div>
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#0b3558] font-heading">25+ Yrs</p>
                <p className="text-xs lg:text-[14px] text-[#476788] font-body">Trust History</p>
              </div>
              <div>
                <p className="text-2xl lg:text-[24px] font-bold text-[#0b3558] font-heading">1:15</p>
                <p className="text-xs lg:text-[14px] text-[#476788] font-body">Teacher Ratio</p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-[#ffffff] border border-[#d4e0ed] overflow-hidden shadow-lg p-3">
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" 
              alt="Classroom Learning at R.C.M Matriculation Elementary School" 
              className="w-full h-[360px] object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
