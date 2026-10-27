"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-head > *",
  ".service-card",
  ".advantage-card",
  ".process-item",
  ".contact-title",
  ".contact-section form",
  ".cases-hero > *",
  ".case-item",
  ".prices-hero > *",
  ".full-price-heading",
  ".core-price-card",
  ".extras-section .section-head > *",
  ".extra-card",
  ".comparison-section .section-head > *",
  ".comparison-row",
  ".comparison-section > .button",
  ".price-note-section > *",
  ".cta-content > *",
].join(",");

export function MotionEnhancer() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", `${max > 0 ? window.scrollY / max : 0}`);
      document.body.classList.toggle("has-scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    elements.forEach((element) => {
      element.classList.add("ux-reveal");
      const siblings = element.parentElement
        ? Array.from(element.parentElement.children).filter((child) => child.matches(revealSelector))
        : [];
      const index = Math.max(0, siblings.indexOf(element));
      element.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 65}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
