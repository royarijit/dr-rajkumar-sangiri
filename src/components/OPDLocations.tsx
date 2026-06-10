"use client";

import React from "react";
import styles from "./OPDLocations.module.css";

interface ClinicItem {
  id: number;
  name: string;
  location: string;
  phone: string;
  phoneDisplay: string;
  timings: string;
  days: string;
  mapUrl: string;
  image: string; // path to image in public/opds
}

export default function OPDLocations() {
  const clinics: ClinicItem[] = [
    {
      id: 1,
      name: "Meditrust Medicare Pvt Ltd",
      location: "Bankura Town, West Bengal",
      phone: "8001224488",
      phoneDisplay: "80012 24488",
      timings: "5:00 PM",
      days: "Mon, Wed, Thu, Fri",
      mapUrl: "https://maps.app.goo.gl/HKoVhEkg8vuc2tLG9",
      image: "meditrust.png"
    },
    {
      id: 2,
      name: "Shristi Diagnostic Centre",
      location: "Lalbazar, Bankura, West Bengal",
      phone: "8293837709",
      phoneDisplay: "82938 37709",
      timings: "Tue, Fri: 9:00 AM | Thu: 4:00 PM",
      days: "Tue, Thu, Fri",
      mapUrl: "https://maps.app.goo.gl/XRS1ZDfceZEUM68u9",
      image: "shristi.png"
    },
    {
      id: 3,
      name: "Bankura Nursing Home",
      location: "Nutanchati, Bankura, West Bengal",
      phone: "9564280791",
      phoneDisplay: "95642 80791",
      timings: "11:00 AM",
      days: "Mon, Thu, Fri",
      mapUrl: "https://maps.app.goo.gl/GUFy5h2N5zfaGhYc7",
      image: "bankura-nursing-home.png"
    },
    {
      id: 4,
      name: "Keerthi Medi Point Pvt Ltd",
      location: "Katjuridanga, Bankura, West Bengal",
      phone: "6294575347",
      phoneDisplay: "62945 75347",
      timings: "6:30 PM",
      days: "Mon, Wed, Thu, Fri",
      mapUrl: "https://maps.app.goo.gl/T5wnC9L1LbtjgLe26",
      image: "keerthi.png"
    }
  ];

  return (
    <section id="locations" className="reveal">
      <div className={styles.locations}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.subtitle}>Chamber Details</span>
            <h2 className={styles.title}>OPD Locations & Timing</h2>
            <div className={styles.line}></div>
            <p className={styles.introText}>
              Dr. Rajkumar Sangiri is available for consultation at the following chambers in Bankura. Please check the schedule and call to book.
            </p>
          </div>

          <div className={styles.grid}>
            {clinics.map((clinic) => (
              <div key={clinic.id} className={styles.card}>
                <div className={styles.cardContent}>
                  <img src={`/opds/${clinic.image}`} alt={clinic.name} className={styles.clinicImage} />
                  <div className={styles.clinicInfo}>
                    <div className={styles.locationPin}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="var(--accent-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="var(--accent-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.clinicName}>{clinic.name}</h3>
                      <p className={styles.clinicLocation}>{clinic.location}</p>
                      <p className={styles.clinicPhone}>Phone: {clinic.phoneDisplay}</p>
                    </div>
                  </div>

                  <div className={styles.timingBox}>
                    <div className={styles.timingItem}>
                      <span className={styles.timingLabel}>Days:</span>
                      <span className={styles.timingValue}>{clinic.days}</span>
                    </div>
                    <div className={styles.timingItem}>
                      <span className={styles.timingLabel}>Timings:</span>
                      <span className={styles.timingValue}>{clinic.timings}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <a href={`tel:+91${clinic.phone}`} className={styles.callBtn}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V21C22 21.5523 21.5523 22 21 22C11.611 22 4 14.389 4 5C4 4.44772 4.44772 4 5 4H9.09C9.57462 3.99612 10.0224 4.23887 10.28 4.65L12.07 7.64C12.31 8.04 12.28 8.55 12 8.92L10.29 11C11.5168 13.1613 13.2758 14.9202 15.437 16.146L17.51 14.07C17.88 13.79 18.39 13.76 18.79 14L21.78 15.79C22.1911 16.0476 22.4339 16.4954 22.43 16.98V16.92Z" fill="currentColor"/>
                    </svg>
                    <span>Call Chamber</span>
                  </a>
                  <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.mapBtn}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                    </svg>
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.notice}>
            <div className={styles.noticeIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0377 2.66667 10.2679 4L3.33975 16C2.56995 17.3333 3.53225 19 5.07183 19Z" stroke="var(--accent-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className={styles.noticeText}>
              <strong>Note:</strong> OPD timings are subject to change during emergencies or holidays. It is highly recommended to call the clinics beforehand to confirm the availability of slots.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
