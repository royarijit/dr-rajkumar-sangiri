"use client";

import React from "react";
import styles from "./Expertise.module.css";

interface ServiceItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

export default function Expertise() {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Diabetes & Blood Sugar",
      subtitle: "Endocrine Care",
      description: "Comprehensive care plans for managing hyperglycemia, hypoglycemia, type 1 & 2 diabetes, insulin therapy guidance, and prevention of diabetic complications.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Hypertension & BP",
      subtitle: "Cardiovascular Health",
      description: "Expert diagnostics and customized medical regimes for high/low blood pressure, cardiovascular screening, lifestyle counselling, and long-term heart safety.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Thyroid & Metabolism",
      subtitle: "Hormonal Management",
      description: "Specialized assessment for hyperthyroidism, hypothyroidism, goiter, and metabolic syndrome to restore hormonal balance and improve energy levels.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
          <path d="M9 10h6M9 14h6" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Gastrointestinal & G.I.",
      subtitle: "Digestive Disorders",
      description: "Diagnostics and medical management of chronic acid reflux (GERD), bloating, indigestion, stomach ulcers, colitis, and bowel habit disturbances.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-11-7-11S5 10.7 5 15a7 7 0 0 0 7 7Z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Arthritis & Joint Care",
      subtitle: "Rheumatology & Pain",
      description: "Effective clinical strategies to diagnose and treat Rheumatoid Arthritis, Osteoarthritis, uric acid imbalances (gout), and acute joint inflammations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 18H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
          <path d="M9 22V18M15 22V18M9 6V2M15 6V2" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Respiratory Problems",
      subtitle: "Pulmonology & Asthma",
      description: "In-depth clinical care for persistent cough, asthma, bronchitis, COPD, respiratory tract infections, and seasonal pulmonary allergies.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="reveal">
      <div className={styles.expertise}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.subtitle}>Our Services</span>
            <h2 className={styles.title}>Conditions & Expertise</h2>
            <div className={styles.line}></div>
            <p className={styles.introText}>
              Providing specialized clinical interventions and personalized treatment regimens for a broad spectrum of general medicine concerns.
            </p>
          </div>

          <div className={styles.grid}>
            {services.map((service) => (
              <div key={service.id} className={styles.card}>
                <div className={styles.glow}></div>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{service.icon}</div>
                  <div>
                    <span className={styles.cardSubtitle}>{service.subtitle}</span>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                  </div>
                </div>
                <p className={styles.cardDescription}>{service.description}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.learnMore}>Learn Treatment Scope</span>
                  <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
