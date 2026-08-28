"use client";
import { TextEffect } from '@/components/core/text-effect';
import { GraduationCap, BookOpen, Pencil, Globe, Bus, Palette, Sparkles } from "lucide-react";

import SchoolMessageSection from "@/components/ui/school-message-section";

import { ScrollVelocityDemo } from "@/components/ui/scroll-velocity-demo";

import CssImageStacking from "@/components/ui/css-image-stacking";

import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";
import { Footer } from "@/components/ui/footer-section";
import React from "react";
import { AnnouncementBar, SpatialHeader, LogoStripCard, SpatialFeatureSection } from "@/components/ui/themed-spatial-hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import AcademicStructure from "@/components/ui/academic-structure";
import TestimonialsSection from "@/components/ui/community-testimonial";
import ConnectSection from "@/components/ui/connect-section";
import FAQs from "@/components/ui/text-reveal-faqs";
import { NeuralDiagram } from "@/components/originkit/ui/hero-22/neural-diagram";
import { FocusReveal } from "@/components/ui/focus-reveal";
import StarfieldButton from "@/components/ui/starfield-button";
import HowItWorksOrbit from "@/components/ui/how-it-works-orbit";

export default function Home() {
  const communityTestimonialsData = {
  "title": "Parent & Community Reviews",
  "subtitle": "Heartfelt feedback from parents of R.C.M Matriculation Elementary School, Avadi",
  "rows": [
    {
      "id": "row1",
      "speed": "45s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t1",
          "quote": "R.C.M Elementary provides a gentle, child-friendly environment for early education. The best primary school in Avadi!",
          "authorName": "K. Saravanan",
          "authorTitle": "Parent of Class 5 Student"
        },
        {
          "id": "t2",
          "quote": "Primary teachers pay attention to reading fluency, handwriting, and basic arithmetic with immense patience.",
          "authorName": "Mary Stella",
          "authorTitle": "Parent of Class 2 Student"
        },
        {
          "id": "t3",
          "quote": "My child joined in UKG and the foundational grounding in numbers and phonics has been remarkable.",
          "authorName": "M. Divya",
          "authorTitle": "Parent of UKG Pupil"
        }
      ]
    },
    {
      "id": "row2",
      "speed": "35s",
      "direction": "right",
      "testimonials": [
        {
          "id": "t4",
          "quote": "Safe play areas, bright classrooms, and dedicated primary staff. Little steps really lead to big futures here.",
          "authorName": "Syed Ibrahim",
          "authorTitle": "Parent Forum Member"
        },
        {
          "id": "t5",
          "quote": "The school focuses on building confidence and good habits without imposing heavy academic stress on young minds.",
          "authorName": "R. Jayashree",
          "authorTitle": "Parent of Class 4 Student"
        },
        {
          "id": "t6",
          "quote": "Very supportive teachers who communicate kindly with parents. A wonderful start for any young learner.",
          "authorName": "S. Thirunavukkarasu",
          "authorTitle": "Parent of Class 1 Student"
        }
      ]
    },
    {
      "id": "row3",
      "speed": "50s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t7",
          "quote": "I studied at R.C.M years ago and now I am proud to enroll my daughter here. Quality primary care remains unchanged.",
          "authorName": "V. Gayatri",
          "authorTitle": "Alumna Parent"
        },
        {
          "id": "t8",
          "quote": "Clean, hygienic campus with attentive helpers and secure gates. We feel completely relaxed sending our kids.",
          "authorName": "T. Kumaran",
          "authorTitle": "Parent Representative"
        },
        {
          "id": "t9",
          "quote": "Storytelling, drawing, and outdoor games make primary school a joyful daily experience for our children.",
          "authorName": "B. Menaka",
          "authorTitle": "Parent of LKG Pupil"
        }
      ]
    }
  ]
};

  return (
    <main className="min-h-screen bg-[#f8f9fb] text-[#476788] antialiased selection:bg-[#006bff] selection:text-white font-body">
      {/* Spatial Header */}
      <SpatialHeader />

      {/* Upper-Middle Hero Velocity Ribbon */}
      
      
      {/* School Specific Animated Hero Section with Campus Background & Floating Elementary Badges */}
      <AuroraBackground showRadialGradient={true}>
        {/* Background School Campus Photo Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-25 transition-opacity duration-500"
          style={{ backgroundImage: `url('/campus-hero-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fb]/90 via-[#f8f9fb]/75 to-[#f8f9fb]/95 backdrop-blur-[1px] pointer-events-none" />

        {/* Floating Elementary School Icon Tiles (Matching Floating Icon Style) */}
        {/* 1. Top Left Tile: Graduation Cap */}
        <div className="absolute top-12 left-4 sm:left-14 z-20 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-[#e2e8f0] shadow-md flex items-center justify-center text-[#006bff] hover:shadow-lg transition-all animate-bounce [animation-duration:4s]">
          <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7" />
        </div>

        {/* 2. Top Right Tile: Book Open */}
        <div className="absolute top-16 right-4 sm:right-16 z-20 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-[#e2e8f0] shadow-md flex items-center justify-center text-[#006bff] hover:shadow-lg transition-all animate-pulse [animation-duration:3.5s]">
          <BookOpen className="w-5 h-5 sm:w-7 sm:h-7" />
        </div>

        {/* 3. Center Right Tile: Globe */}
        <div className="absolute top-1/3 right-3 sm:right-10 z-20 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-[#e2e8f0] shadow-md flex items-center justify-center text-[#006bff] hover:shadow-lg transition-all animate-bounce [animation-duration:5s]">
          <Globe className="w-5 h-5 sm:w-7 sm:h-7" />
        </div>

        {/* 4. Bottom Left Tile: Pencil */}
        <div className="absolute bottom-16 left-6 sm:left-20 z-20 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-[#e2e8f0] shadow-md flex items-center justify-center text-[#006bff] hover:shadow-lg transition-all animate-pulse [animation-duration:4s]">
          <Pencil className="w-5 h-5 sm:w-7 sm:h-7" />
        </div>

        {/* 5. Bottom Right Tile: School Bus */}
        <div className="absolute bottom-14 right-6 sm:right-24 z-20 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-[#e2e8f0] shadow-md flex items-center justify-center text-[#006bff] hover:shadow-lg transition-all animate-bounce [animation-duration:3.8s]">
          <Bus className="w-5 h-5 sm:w-7 sm:h-7" />
        </div>

        {/* 6. Mid Left Tile: Creative Palette */}
        <div className="hidden sm:flex absolute top-1/2 left-6 z-20 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-[#e2e8f0] shadow-md items-center justify-center text-[#006bff] hover:shadow-lg transition-all animate-pulse [animation-duration:4.5s]">
          <Palette className="w-5 h-5 sm:w-7 sm:h-7" />
        </div>

        <div className="relative z-10 max-w-[1250px] mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-16 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left font-heading w-full max-w-full overflow-hidden">
            <span className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-[8px] bg-[#e6f0ff] text-[#006bff] text-[11px] sm:text-xs font-semibold uppercase tracking-wider font-body max-w-full truncate shadow-xs">
              📍 Vivekananda Nagar, Avadi • Rating 4.6★
            </span>
            <FocusReveal
              text="Gentle Beginnings That Shape a Lifetime of Learning"
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b3558] leading-tight font-heading max-w-full break-words"
            />
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base sm:text-xl text-[#476788] max-w-xl font-body leading-relaxed break-words">
              Nurturing early curiosity, foundational literacy, and arithmetic clarity in a safe, warm, and encouraging elementary school environment.
            </TextEffect>
            
            {/* Hero Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4 font-body">
              <a
                href="#connect"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-b from-[#006bff] to-[#0052cc] text-white text-sm font-bold shadow-[0_8px_20px_-4px_rgba(0,107,255,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:shadow-[0_12px_25px_-4px_rgba(0,107,255,0.5)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>Apply Now</span>
                <span className="text-sm font-bold">→</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#d4e0ed] text-[#0b3558] text-sm font-bold shadow-xs hover:shadow-md hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                <span>Explore Curriculum</span>
              </a>
            </div>

            {/* Mobile Elementary Learning Badges Strip (Visible on Mobile) */}
            <div className="flex sm:hidden flex-wrap items-center gap-2 pt-2 font-body">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-blue-200/80 shadow-xs text-xs font-bold text-[#0b3558]">
                <span>🔤</span>
                <span>Phonics & Reading</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-amber-200/80 shadow-xs text-xs font-bold text-[#0b3558]">
                <span>🎨</span>
                <span>Creative Arts</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-emerald-200/80 shadow-xs text-xs font-bold text-[#0b3558]">
                <span>🧩</span>
                <span>Activity Play</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 border border-purple-200/80 shadow-xs text-xs font-bold text-[#0b3558]">
                <span>⭐</span>
                <span>Safe Campus</span>
              </div>
            </div>
          </div>

          {/* Right Column (Top Right Position): 3D Brain & Neural Particle Visual */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[340px] xs:min-h-[380px] sm:min-h-[420px] my-2 sm:my-0">
            <NeuralDiagram />
          </div>
        </div>
      </AuroraBackground>

            
                        {/* Student Achievement Strip Card */}
      <LogoStripCard />

      {/* Infinite Ribbon Banner */}
      <InfiniteRibbon duration={35} className="bg-white text-[#0b3558] border-y border-[#d4e0ed] py-4 text-sm sm:text-base font-semibold tracking-wide font-body shadow-sm">
        <span className="text-[#006bff]">✦</span> Gentle Primary Education
        <span className="text-[#006bff]">✦</span> Activity-Based Learning
        <span className="text-[#006bff]">✦</span> Foundational Literacy & Math
        <span className="text-[#006bff]">✦</span> Loving & Caring Faculty
        <span className="text-[#006bff]">✦</span> Safe Elementary Campus
        <span className="text-[#006bff]">✦</span> Admissions Open LKG to Class 5
      </InfiniteRibbon>

      {/* Alternating Feature Block */}
      <SpatialFeatureSection />

      {/* Clean Frameless Middle Image Velocity Strip */}
      <ScrollVelocityDemo />

      {/* Academic Structure Section (Elementary Level Only) */}
      <AcademicStructure
        secondaryColor="#006bff"
        title="Elementary Journey"
        subtitle="Foundational Primary & Early Childhood Education"
        description="A gentle, activity-based elementary learning path fostering core literacy, arithmetic confidence, and positive learning habits for children from LKG to Class 5."
        cards={[
          {
            tag: "LKG & UKG",
            title: "Kindergarten & Early Foundation",
            description: "A gentle, play-integrated early years curriculum focusing on phonics, numbers, sensory games, motor skills, and social confidence.",
            buttonText: "Explore Early Years",
          },
          {
            tag: "Classes 1 & 2",
            title: "Primary Stage 1 (Foundational)",
            description: "Building early reading fluency, handwriting skills, basic arithmetic, and environmental awareness through interactive activities.",
            buttonText: "Stage 1 Details",
          },
          {
            tag: "Classes 3 & 4",
            title: "Primary Stage 2 (Developmental)",
            description: "Strengthening concept clarity in English, Mathematics, Science, and regional languages through hands-on learning and practical exploration.",
            buttonText: "View Curriculum",
          },
          {
            tag: "Class 5",
            title: "Primary Completion Stage",
            description: "Preparing students for smooth transition into middle school with strong self-study habits, logical reasoning, and confidence.",
            buttonText: "Class 5 Program",
            isHighlighted: true,
          },
          {
            tag: "Co-Curricular",
            title: "Elementary Activities & Sports",
            description: "Balancing core academics with physical games, storytelling, music, art, and value-based moral education.",
            buttonText: "Activity Highlights",
          },
        ]}
      />

      {/* Interactive Orbit How-It-Works Section */}
      <HowItWorksOrbit
        title="Elementary Admission Process"
        subtitle="A gentle, structured pathway to nurture young minds at Avadi."
        steps={[
          { title: "Campus Visit", description: "Tour our child-friendly campus in Vivekananda Nagar, Avadi.", color: "#006bff" },
          { title: "Submit Application", description: "Submit child's birth certificate & admission details.", color: "#3b82f6" },
          { title: "Child Interaction", description: "Gentle, stress-free interaction for foundation level entry.", color: "#a855f7" },
          { title: "Seat Allocation", description: "Formal seat allotment & fee structure guidance.", color: "#f97316" },
          { title: "First Day at R.C.M", description: "Welcome to a caring, foundational elementary journey!", color: "#10b981" },
        ]}
      />

      {/* Testimonials Section */}
      {/* CSS Image Stacking Gallery Showcase */}
      <CssImageStacking />

      <section id="testimonials" className="py-16 bg-[#f8f9fb] border-t border-[#d4e0ed]">
        <TestimonialsSection data={communityTestimonialsData} />
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQs />

      {/* Connect & Admission Inquiry Form */}
      <ConnectSection />

      {/* Light Clean Footer */}
      {/* Leadership Message to Parents & Students */}
      <SchoolMessageSection />

      <Footer />
    </main>
  );
}