"use client";

import React from "react";
import styles from "./Quote.module.css";

export default function Quote() {
  return (
    <section className={`${styles.quoteSection} reveal`}>
      {/* Subtle decorative radial glow in background */}
      <div className={styles.glow}></div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Decorative double quotes */}
          <div className={styles.quoteMarkLeft}>&ldquo;</div>
          
          <div className={styles.quoteContent}>
            <p className={styles.mainQuote}>
              I believe, medicine is more than a career, it is a love for humanity.
            </p>
            <p className={styles.subQuote}>
              My desire to offer precise diagnosis, compassionate to my patients, want to educate, guide in right direction, and try to be accessible when they really need me in their crisis period.
            </p>
            
            <div className={styles.authorContainer}>
              <div className={styles.line}></div>
              <cite className={styles.author}>
                <span className={styles.name}>Dr. Rajkumar Sangiri</span>
                <span className={styles.title}>MD (General Medicine) &bull; Consultant Physician</span>
              </cite>
            </div>
          </div>
          
          <div className={styles.quoteMarkRight}>&rdquo;</div>
        </div>
      </div>
    </section>
  );
}
