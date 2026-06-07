"use client";

import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className="reveal">
      <div className={styles.about}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.subtitle}>Who We Are</span>
            <h2 className={styles.title}>About Dr. Rajkumar Sangiri</h2>
            <div className={styles.line}></div>
          </div>
          <img src="/satisfied-patient.png" alt="Satisfied Patient" className={styles.satisfiedImg} />

          <div className={styles.grid}>
            {/* Left Column: Biography & Philosophy */}
            <div className={styles.bio}>
              <h3 className={styles.bioHeading}>Compassionate Care, Clinical Excellence</h3>
              <p className={styles.bioText}>
                Dr. Rajkumar Sangiri is a senior Consultant Physician with over <strong>19 years of experience</strong> in General Medicine. He is dedicated to providing patient-centered, evidence-based medical treatments for a wide variety of acute and chronic health conditions.
              </p>
              <p className={styles.bioText}>
                His medical practice is founded on trust, transparent communication, and thorough diagnostic assessment. He believes in treating not just the symptoms, but working collaboratively with patients to manage their overall wellness and lifestyle health.
              </p>
              
              <div className={styles.philosophyQuote}>
                <span className={styles.quoteIcon}>“</span>
                <p className={styles.quoteText}>
                  My commitment is to offer precise diagnosis and compassionate, patient-first care, ensuring every individual gets the time and attention they deserve.
                </p>
              </div>
            </div>

            {/* Right Column: Qualifications & Registrations */}
            <div className={styles.details}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" stroke="var(--accent-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 16C15.3137 16 18 18.6863 18 22H6C6 18.6863 8.68629 16 12 16Z" stroke="var(--accent-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className={styles.cardTitle}>Professional Qualifications</h4>
                </div>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <span className={styles.bullet}></span>
                    <div>
                      <strong>MD (General Medicine)</strong>
                      <p className={styles.listSub}>Post Graduate Degree specializing in Internal Medicine</p>
                    </div>
                  </li>
                  <li className={styles.listItem}>
                    <span className={styles.bullet}></span>
                    <div>
                      <strong>MBBS</strong>
                      <p className={styles.listSub}>Bachelor of Medicine, Bachelor of Surgery</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="var(--accent-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h4 className={styles.cardTitle}>Medical Registration</h4>
                </div>
                <div className={styles.regInfo}>
                  <div className={styles.regBoard}>West Bengal Medical Council (WBMC)</div>
                  <p className={styles.regVerify}>Registered and verified medical practitioner for official practice and consultations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
