"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Decorative Gradients */}
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badgeContainer}>
            <span className={styles.badge}>MD (General Medicine)</span>
          </div>

          <h1 className={styles.title}>
            <span className={styles.prefix}>Trusted Care for a Healthier Life</span>
            <span className={styles.name}>Dr. Rajkumar Sangiri</span>
          </h1>

          <p className={styles.tagline}>
            Senior Consultant Physician specializing in comprehensive internal medicine, diagnosis, and chronic condition management with 19 years of clinical excellence.
          </p>

          <div className={styles.ctas}>
            <a 
              href="#appointment" 
              className={styles.primaryBtn} 
              onClick={(e) => handleScrollTo(e, "appointment")}
            >
              Book an Appointment
            </a>
            <a 
              href="#about" 
              className={styles.secondaryBtn} 
              onClick={(e) => handleScrollTo(e, "about")}
            >
              Explore Profile
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>19+</span>
              <span className={styles.statLabel}>Years of Experience</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>4+</span>
              <span className={styles.statLabel}>OPD Locations</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Dedicated Patient Care</span>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageBg}></div>
            <Image 
              src="/doctor-profile-pic.png" 
              alt="Dr. Rajkumar Sangiri Profile Picture" 
              width={450} 
              height={600} 
              priority
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
