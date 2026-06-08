"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const AnimatedCounter = ({ end, suffix = "", duration = 2000, startCounting }: { end: number; suffix?: string; duration?: number; startCounting: boolean }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startCounting || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function (easeOutQuad)
      const easeOutQuad = percentage * (2 - percentage);
      
      setCount(Math.floor(easeOutQuad * end));

      if (progress < duration) {
        rafId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [startCounting, end, duration]);

  // Format numbers with commas (e.g. 10,000) for better readability
  const formattedCount = count >= 1000 ? count.toLocaleString() : count;

  return (
    <>
      {formattedCount}
      {suffix}
    </>
  );
};

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const statsEl = statsRef.current;
    if (!statsEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -25% 0px",
        threshold: 0.1
      }
    );

    observer.observe(statsEl);

    return () => observer.disconnect();
  }, []);

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
    <section id="hero" className={`${styles.hero} reveal`}>
      {/* Decorative Gradients */}
      <div className={styles.glow1}></div>
      <div className={styles.glow2}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badgeContainer}>
            <span className={styles.badge}>MD (General Medicine)</span>
          </div>

          <div className={styles.prefixContainer}>
            <span className={styles.prefix}>Trusted Care for a Healthier Life</span>
          </div>

          {/* Mobile Profile Photo - visible only on mobile/tablet */}
          <div className={styles.mobileImageContainer}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBg}></div>
              <Image 
                src="/doctor-profile-pic.png" 
                alt="Dr. Rajkumar Sangiri Profile Picture" 
                width={360} 
                height={480} 
                priority
                className={styles.image}
              />
            </div>
          </div>

          <h1 className={styles.title}>
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

          <div className={styles.stats} ref={statsRef}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter end={19} suffix="+" startCounting={statsVisible} />
              </span>
              <span className={styles.statLabel}>Years of Experience</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter end={4} suffix="+" startCounting={statsVisible} />
              </span>
              <span className={styles.statLabel}>OPD Locations</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter end={10} suffix="K+" startCounting={statsVisible} />
              </span>
              <span className={styles.statLabel}>Satisfied Patients</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter end={100} suffix="%" startCounting={statsVisible} />
              </span>
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
