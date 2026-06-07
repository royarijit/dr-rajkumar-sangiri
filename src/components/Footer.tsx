"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
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
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Column 1: Logo & Brief */}
          <div className={styles.infoCol}>
            <div className={styles.logo}>
              <span className={styles.logoText}>DR. RAJKUMAR SANGIRI</span>
              <span className={styles.logoSub}>Consultant Physician</span>
            </div>
            <p className={styles.tagline}>
              Providing high-quality clinical diagnosis and therapies in General Medicine for 19 years in Bankura.
            </p>
            <div className={styles.credentials}>
              <strong>MBBS, MD</strong>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.list}>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "about")}>About Profile</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")}>Expertise Scope</a>
              </li>
              <li>
                <a href="#locations" onClick={(e) => handleScrollTo(e, "locations")}>OPD Chambers</a>
              </li>
              <li>
                <a href="#appointment" onClick={(e) => handleScrollTo(e, "appointment")}>Book Slot</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Main OPD Town</h4>
            <p className={styles.contactDetails}>
              Bankura, West Bengal, India <br />
              <br />
              <span>For appointment booking inquiries, please contact the respective OPD numbers listed in the chamber section.</span>
            </p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Dr. Rajkumar Sangiri. All Rights Reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={styles.backToTop}
            aria-label="Back to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
