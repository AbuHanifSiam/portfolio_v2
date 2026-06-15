"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Journey from "@/components/Journey/Journey";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Skills from "@/components/Skills/Skills";
import Certificates from "@/components/Certificates/Certificates";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  useScrollAnimations();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Journey />
        <CaseStudies />
        <Skills />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
