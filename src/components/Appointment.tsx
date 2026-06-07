"use client";

import React, { useState } from "react";
import styles from "./Appointment.module.css";

interface FormData {
  name: string;
  phone: string;
  clinic: string;
  date: string;
  timeSlot: string;
  notes: string;
}

export default function Appointment() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    clinic: "",
    date: "",
    timeSlot: "",
    notes: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const clinicsList = [
    "Meditrust Medicare, Bankura",
    "Sristi Diagnostic Centre, Bankura",
    "Bankura Nursing Home, Bankura",
    "Keerteni Medipoint, Bankura"
  ];

  const timeSlots = [
    "Morning (11:00 AM - 01:00 PM)",
    "Afternoon (02:00 PM - 04:00 PM)",
    "Evening (04:00 PM - 06:00 PM)",
    "Night (06:30 PM - 08:30 PM)"
  ];

  const validate = () => {
    const tempErrors: Partial<FormData> = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-+]/g, ""))) {
      tempErrors.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.clinic) tempErrors.clinic = "Please select a clinic location";
    if (!formData.date) tempErrors.date = "Please select an appointment date";
    if (!formData.timeSlot) tempErrors.timeSlot = "Please select a preferred slot";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitted(true);
      }, 600);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      clinic: "",
      date: "",
      timeSlot: "",
      notes: ""
    });
    setIsSubmitted(false);
  };

  return (
    <section id="appointment" className="reveal">
      <div className={styles.appointment}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.subtitle}>Direct Consultation</span>
            <h2 className={styles.title}>Book a Consultation Slot</h2>
            <div className={styles.line}></div>
            <p className={styles.introText}>
              Fill in your details to schedule a tentative appointment. Our team will contact you shortly to confirm the exact slot.
            </p>
          </div>

          <div className={styles.formWrapper}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Patient&apos;s Full Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Contact Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                      placeholder="9876543210"
                    />
                    {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="clinic" className={styles.label}>Select OPD Location *</label>
                    <select 
                      id="clinic"
                      name="clinic"
                      value={formData.clinic}
                      onChange={handleInputChange}
                      className={`${styles.select} ${errors.clinic ? styles.inputError : ""}`}
                    >
                      <option value="">-- Choose Chamber --</option>
                      {clinicsList.map((clinic) => (
                        <option key={clinic} value={clinic}>{clinic}</option>
                      ))}
                    </select>
                    {errors.clinic && <span className={styles.errorText}>{errors.clinic}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="date" className={styles.label}>Preferred Date *</label>
                    <input 
                      type="date" 
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.date ? styles.inputError : ""}`}
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {errors.date && <span className={styles.errorText}>{errors.date}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="timeSlot" className={styles.label}>Preferred Time Slot *</label>
                    <select 
                      id="timeSlot"
                      name="timeSlot"
                      value={formData.timeSlot}
                      onChange={handleInputChange}
                      className={`${styles.select} ${errors.timeSlot ? styles.inputError : ""}`}
                    >
                      <option value="">-- Choose Time Window --</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                    {errors.timeSlot && <span className={styles.errorText}>{errors.timeSlot}</span>}
                  </div>

                  <div className={styles.formGroupFull}>
                    <label htmlFor="notes" className={styles.label}>Brief Description of Symptoms / Medical Notes (Optional)</label>
                    <textarea 
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className={styles.textarea}
                      placeholder="E.g., consultation for high blood sugar tracking, general physical exam, cold..."
                    />
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <span>Request Booking Slot</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            ) : (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Booking Request Received!</h3>
                <p className={styles.successText}>
                  Thank you, <strong>{formData.name}</strong>. Your appointment request has been submitted for review.
                </p>

                <div className={styles.summaryBox}>
                  <h4 className={styles.summaryTitle}>Appointment Summary</h4>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Clinic:</span>
                    <span className={styles.summaryValue}>{formData.clinic}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Preferred Date:</span>
                    <span className={styles.summaryValue}>{formData.date}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Time Window:</span>
                    <span className={styles.summaryValue}>{formData.timeSlot}</span>
                  </div>
                  <div className={styles.summaryRow}>
                    <span className={styles.summaryLabel}>Contact Phone:</span>
                    <span className={styles.summaryValue}>{formData.phone}</span>
                  </div>
                </div>

                <p className={styles.confirmationNotice}>
                  A staff member from the selected clinic will call you shortly on <strong>{formData.phone}</strong> to confirm the exact appointment time.
                </p>

                <button onClick={handleReset} className={styles.resetBtn}>
                  Book Another Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
