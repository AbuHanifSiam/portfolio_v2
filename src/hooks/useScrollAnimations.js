"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimations() {
  useEffect(() => {
    // Small delay to ensure DOM is painted
    const ctx = gsap.context(() => {
      // --- Fade Up animations ---
      gsap.utils.toArray('[data-animate="fade-up"]').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- Fade In ---
      gsap.utils.toArray('[data-animate="fade-in"]').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- Float in from left ---
      gsap.utils.toArray('[data-animate="float-in-left"]').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- Float in from right ---
      gsap.utils.toArray('[data-animate="float-in-right"]').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- Scale In ---
      gsap.utils.toArray('[data-animate="scale-in"]').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- Card Rise (staggered) ---
      const cardGroups = document.querySelectorAll("[data-card-group]");
      cardGroups.forEach((group) => {
        const cards = group.querySelectorAll('[data-animate="card-rise"]');
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: group,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- Standalone card-rise (not in a group) ---
      gsap.utils
        .toArray('[data-animate="card-rise"]')
        .filter((el) => !el.closest("[data-card-group]"))
        .forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });

      // --- Timeline Items (staggered) ---
      const timelineItems = gsap.utils.toArray(
        '[data-animate="timeline-item"]'
      );
      timelineItems.forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // --- Progress Bars ---
      gsap.utils.toArray('[data-animate="progress"]').forEach((el) => {
        const progressValue = el.getAttribute("data-progress") || "0";
        gsap.fromTo(
          el,
          { width: "0%" },
          {
            width: `${progressValue}%`,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // --- Hero specific: stat cards float in with stagger ---
      const heroStats = gsap.utils.toArray("[data-hero-stat]");
      if (heroStats.length) {
        gsap.to(heroStats, {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5,
        });
      }

      // --- Hero process timeline nodes ---
      const processNodes = gsap.utils.toArray("[data-process-node]");
      if (processNodes.length) {
        gsap.to(processNodes, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(2)",
          delay: 1,
        });
      }

      // --- Hero process line ---
      const processLine = document.querySelector("[data-process-line]");
      if (processLine) {
        gsap.fromTo(
          processLine,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power3.inOut",
            delay: 0.8,
            transformOrigin: "left center",
          }
        );
      }

      // --- Hero main content ---
      const heroContent = document.querySelector("[data-hero-content]");
      if (heroContent) {
        gsap.fromTo(
          heroContent,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);
}
