'use client';

import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header} data-animate="fade-up">
          <h2 className={styles.title}>Education</h2>
          <p className={styles.subtitle}>
            Academic foundations that shape my analytical and engineering approach.
          </p>
        </header>

        {/* Academic Card */}
        <div className={styles.card} data-animate="fade-up">
          <div className={styles.cardHeader}>
            <div className={styles.mainInfo}>
              <span className={styles.schoolIcon}>🎓</span>
              <div>
                <h3 className={styles.institution}>BRAC University</h3>
                <p className={styles.degree}>Bachelor of Science in Computer Science</p>
              </div>
            </div>
            <div className={styles.sideInfo}>
              <span className={styles.timeline}>Jun. 2021 – May. 2025</span>
              <span className={styles.gpa}>CGPA: 3.80</span>
            </div>
          </div>

          <div className={styles.cardBody}>
            <h4 className={styles.bodyTitle}>Undergraduate Thesis:</h4>
            <div className={styles.thesisContainer}>
              <span className={styles.thesisTopic}>Yggdrasil</span>
              <p className={styles.thesisDesc}>
                A Dynamic Network Security with Dual-Structured Intrusion Detection and Intrusion Prevention System.
              </p>
            </div>
            
            <ul className={styles.detailsList}>
              <li className={styles.detailItem}>
                <span className={styles.bullet}>✦</span>
                Engineered a comprehensive cybersecurity system designed to actively identify and neutralize network threats in real-time.
              </li>
              <li className={styles.detailItem}>
                <span className={styles.bullet}>✦</span>
                Implemented dual-structured host and network-based intrusion layers (IDS/IPS) to ensure high-accuracy traffic auditing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
