"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Journey from "@/components/Journey/Journey";
import Education from "@/components/Education/Education";
import Leadership from "@/components/Leadership/Leadership";
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
        <About />
        <Journey />
        <CaseStudies />
        <Certificates />
        <Skills />
        <Education />
        <Leadership />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}
