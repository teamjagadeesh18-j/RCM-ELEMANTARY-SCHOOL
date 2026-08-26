"use client";
import { TextEffect } from '@/components/core/text-effect';

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
      
      
      {/* School Specific Animated Hero Section with 3D Neural Brain Visual */}
      <AuroraBackground showRadialGradient={true}>
        <div className="relative z-10 max-w-[1250px] mx-auto px-4 sm:px-6 py-6 sm:py-12 lg:py-16 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left font-heading w-full max-w-full overflow-hidden">
            <span className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-[8px] bg-[#e6f0ff] text-[#006bff] text-[11px] sm:text-xs font-semibold uppercase tracking-wider font-body max-w-full truncate">
              📍 Vivekananda Nagar, Avadi • Rating 4.6★
            </span>
            <FocusReveal
              text="Gentle Beginnings That Shape a Lifetime of Learning"
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b3558] leading-tight font-heading max-w-full break-words"
            />
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base sm:text-xl text-[#476788] max-w-xl font-body leading-relaxed break-words">
              Nurturing early curiosity, foundational literacy, and arithmetic clarity in a safe, warm, and encouraging elementary school environment.
            </TextEffect>
            <div className="pt-2 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 font-body w-full sm:w-auto">
              <StarfieldButton
                label="Apply Now"
                link="#connect"
                colors={{ fill: "#006bff", textColor: "#ffffff" }}
                stroke={{ color: "#4795ff", count: 1, size: 96, speed: 50 }}
                pixel={{ color: "#4795ff", size: 4, density: 50, brightness: 100 }}
              />
              <a href="#about" className="px-6 py-3.5 rounded-[8px] border border-[#d4e0ed] text-[#0b3558] bg-white text-base font-medium hover:bg-slate-50 transition-all text-center">
                Explore Curriculum
              </a>
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