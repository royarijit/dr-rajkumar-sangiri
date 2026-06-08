"use client";

import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import OPDLocations from "@/components/OPDLocations";
import Appointment from "@/components/Appointment";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Setup intersection observer for scroll reveal animations
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Unobserve after animating once to keep performance optimal
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is in view
        rootMargin: "0px 0px -40px 0px" // Slight offset for smoother entrance
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <Quote />
        <About />
        <Expertise />
        <OPDLocations />
        <Appointment />
      </main>
      <Footer />
    </>
  );
}
