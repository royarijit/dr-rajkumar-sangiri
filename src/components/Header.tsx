"use client";

import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is active in the viewport
      const sections = ["hero", "about", "services", "locations", "appointment"];
      const scrollPosition = window.scrollY + 120; // offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
    setActiveSection(targetId);

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90; // height of floating header + padding
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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={(e) => handleLinkClick(e, "hero")}>
          <img src="/doctor-logo.png" alt="Doctor Logo" className={styles.logoIcon} />
          <div className={styles.logoTextWrapper}>
            <span className={styles.logoText}>Dr. Rajkumar Sangiri</span>
            <span className={styles.logoSub}>Consultant Physician</span>
          </div>
        </a>

        <a 
          href="#appointment" 
          className={styles.navAppointmentBtnMobile} 
          onClick={(e) => handleLinkClick(e, "appointment")}
        >
          Get Appointment
        </a>

        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          <a 
            href="#about" 
            className={`${styles.navLink} ${activeSection === "about" ? styles.activeNavLink : ""}`} 
            onClick={(e) => handleLinkClick(e, "about")}
          >
            About
          </a>
          <a 
            href="#services" 
            className={`${styles.navLink} ${activeSection === "services" ? styles.activeNavLink : ""}`} 
            onClick={(e) => handleLinkClick(e, "services")}
          >
            Services
          </a>
          <a 
            href="#locations" 
            className={`${styles.navLink} ${activeSection === "locations" ? styles.activeNavLink : ""}`} 
            onClick={(e) => handleLinkClick(e, "locations")}
          >
            OPD Locations
          </a>
          <a 
            href="#appointment" 
            className={`${styles.appointmentBtn} ${activeSection === "appointment" ? styles.activeAppointmentBtn : ""}`} 
            onClick={(e) => handleLinkClick(e, "appointment")}
          >
            Book Appointment
          </a>
        </nav>

        {/* Hamburger Menu Icon */}
        <button 
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerActive : ""}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay (Moved outside container to avoid containment clipping) */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <div className={styles.mobileMenuLogoContainer}>
            <img src="/sthethoscope.jpg" alt="Stethoscope Logo" className={styles.mobileMenuStethoscope} />
          </div>
          <a 
            href="#about" 
            className={`${styles.mobileNavLink} ${activeSection === "about" ? styles.mobileActiveNavLink : ""}`} 
            onClick={(e) => handleLinkClick(e, "about")}
          >
            About Dr. Sangiri
          </a>
          <a 
            href="#services" 
            className={`${styles.mobileNavLink} ${activeSection === "services" ? styles.mobileActiveNavLink : ""}`} 
            onClick={(e) => handleLinkClick(e, "services")}
          >
            Expertise & Treatments
          </a>
          <a 
            href="#locations" 
            className={`${styles.mobileNavLink} ${activeSection === "locations" ? styles.mobileActiveNavLink : ""}`} 
            onClick={(e) => handleLinkClick(e, "locations")}
          >
            OPD Clinics
          </a>
          <a 
            href="#appointment" 
            className={`${styles.mobileAppointmentBtn} ${activeSection === "appointment" ? styles.mobileActiveAppointmentBtn : ""}`} 
            onClick={(e) => handleLinkClick(e, "appointment")}
          >
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}

