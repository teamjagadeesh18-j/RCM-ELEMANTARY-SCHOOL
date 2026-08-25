"use client";

import { TextEffect } from '@/components/core/text-effect';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'What grade levels are taught at R.C.M Matriculation Elementary School?',
      answer: 'We specialize in early childhood and elementary education, serving young learners from Kindergarten (LKG & UKG) through Primary grades.',
    },
    {
      id: 'item-2',
      question: 'How does R.C.M Elementary School foster early childhood learning?',
      answer: 'We utilize play-based learning, phonics, storytelling, interactive math games, and creative art projects to make early education engaging.',
    },
    {
      id: 'item-3',
      question: 'What safety measures are in place for young elementary children?',
      answer: 'Our campus features child-friendly infrastructure, gentle caring staff, female class attendants, and secure gated entry.',
    },
    {
      id: 'item-4',
      question: 'How does the school prepare children for middle school transition?',
      answer: 'We build strong foundational skills in languages, mathematics, environmental science, and social interaction.',
    },
    {
      id: 'item-5',
      question: 'How do I enroll my child at R.C.M Matriculation Elementary School?',
      answer: 'Admissions are open! Parents can visit our campus or connect via the contact form on our website to secure a seat.',
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#ffffff] border-t border-[#d4e0ed] font-body">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block px-3.5 py-1 rounded-[24px] bg-[#e6f0ff] text-[#006bff] border border-[#d4e0ed] text-xs font-semibold tracking-wide uppercase font-body mb-3">
              HELP & ADMISSIONS
            </span>
            <TextEffect as="h2" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#0b3558] text-3xl md:text-4xl font-bold font-heading">Frequently Asked Questions</TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#476788] mt-4 text-balance text-base md:text-lg">
              Everything you need to know about R.C.M Matriculation Elementary School.
            </TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#476788] mt-6 hidden md:block text-sm">
              Can’t find what you’re looking for? Reach out to our{' '}
              <Link
                href="#connect"
                className="text-[#006bff] font-semibold hover:underline"
              >
                admissions support team
              </Link>{' '}
              for assistance.
            </TextEffect>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-[#d4e0ed]">
                  <AccordionTrigger className="cursor-pointer text-left text-base font-semibold text-[#0b3558] hover:text-[#006bff] hover:no-underline font-heading">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#476788]">
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-[#476788] mt-6 md:hidden text-sm">
            Can't find what you're looking for? Contact our{' '}
            <Link
              href="#connect"
              className="text-[#006bff] font-semibold hover:underline">
              admissions team
            </Link>
          </TextEffect>
        </div>
      </div>
    </section>
  )
}

export const BlurredStagger = ({
  text,
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <div className="w-full pt-1">
      <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm md:text-base text-[#476788] leading-relaxed break-words whitespace-normal font-body"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </TextEffect>
    </div>
  );
};
