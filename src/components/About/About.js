'use client';

import styles from './About.module.css';

const competencies = [
  'Product Vision & Roadmap Strategy',
  'Backlog Grooming & Value-Driven Prioritization',
  'Stakeholder Alignment & Expectation Management',
  'User Story Mapping & Behavior-Driven Acceptance Criteria',
  'Cross-Functional Team Orchestration & Flow Optimization'
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      {/* Background decoration */}
      <div className={styles.glowBg} aria-hidden="true" />

      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header} data-animate="fade-up">
          <h2 className={styles.title}>About Myself</h2>
          <p className={styles.subtitle}>
            Bridging the gap between ambitious business vision and technical execution.
          </p>
        </header>

        {/* Content Columns */}
        <div className={styles.grid}>
          {/* Narrative Story (Left Column) */}
          <div className={styles.story} data-animate="fade-up">
            <h3 className={styles.storyTitle}>My Philosophy</h3>
            <p className={styles.paragraph}>
              As a technical project manager and product delivery leader, I believe that building great software requires more than just managing timelines—it demands deep alignment, empathy, and absolute clarity. I specialize in stepping into complex, high-stakes environments, dissecting chaotic backlogs, and structuring processes that empower teams to ship features that users love.
            </p>
            <p className={styles.paragraph}>
              With a background spanning both hands-on development workflows and product management frameworks, I serve as a translator. I help developers understand the "why" behind the business requirements, and help stakeholders appreciate the technical engineering paths necessary to build scalable, long-term platforms.
            </p>
            <p className={styles.paragraph}>
              My methodologies are heavily rooted in Scrum and Agile principles. Whether resolving team bottlenecks, setting WIP limits, or mapping out critical paths, I focus on maximizing flow and cutting out process waste.
            </p>
          </div>

          {/* CSPO Highlight Card (Right Column) */}
          <div className={styles.highlightCard} data-animate="fade-up">
            <div className={styles.glowBorder} />
            <div className={styles.cardContent}>
              {/* CSPO Custom SVG Badge */}
              <div className={styles.badgeWrapper}>
                <div className={styles.badgePulse} />
                <svg
                  width="140"
                  height="140"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.svgBadge}
                  aria-label="Certified Scrum Product Owner (CSPO) Badge Logo"
                >
                  {/* Outer Outer Circle */}
                  <circle cx="100" cy="100" r="95" stroke="rgba(255, 95, 41, 0.2)" strokeWidth="2" />
                  
                  {/* Outer Ring with Gradient */}
                  <circle cx="100" cy="100" r="88" stroke="url(#cspo-grad)" strokeWidth="6" />
                  
                  {/* Inner dark background */}
                  <circle cx="100" cy="100" r="80" fill="#0f172a" />
                  <circle cx="100" cy="100" r="80" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                  
                  {/* Center Design Elements */}
                  <path
                    d="M100 32C62.45 32 32 62.45 32 100C32 137.55 62.45 168 100 168C137.55 168 168 137.55 168 100"
                    stroke="url(#cspo-grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="4 6"
                  />
                  
                  {/* Crown-like Shield representing ownership / leadership */}
                  <path
                    d="M100 55L132 71V103C132 124.6 118.4 144.6 100 151C81.6 144.6 68 124.6 68 103V71L100 55Z"
                    fill="rgba(255, 95, 41, 0.06)"
                    stroke="url(#cspo-grad-strong)"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  
                  {/* Central Star */}
                  <path
                    d="M100 78L106.18 90.53L120 92.54L110 102.28L112.36 116L100 109.5L87.64 116L90 102.28L80 92.54L93.82 90.53L100 78Z"
                    fill="url(#cspo-grad-strong)"
                    filter="drop-shadow(0 2px 8px rgba(255, 95, 41, 0.5))"
                  />
                  
                  {/* Text curved paths / overlays (CSS styled) */}
                  <text x="100" y="145" textAnchor="middle" fill="#ffffff" className={styles.badgeTextMain}>CSPO</text>
                  <text x="100" y="160" textAnchor="middle" fill="#94949e" className={styles.badgeTextSub}>PRODUCT OWNER</text>
                  <text x="100" y="27" textAnchor="middle" fill="#ff7f50" className={styles.badgeTextTop}>SCRUM ALLIANCE</text>

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="cspo-grad" x1="32" y1="32" x2="168" y2="168" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#ff8f6b" />
                      <stop offset="50%" stopColor="#ff5f29" />
                      <stop offset="100%" stopColor="#e03e00" />
                    </linearGradient>
                    <linearGradient id="cspo-grad-strong" x1="68" y1="55" x2="132" y2="151" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#ffa07a" />
                      <stop offset="100%" stopColor="#ff4500" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className={styles.badgeMeta}>
                <span className={styles.certLabel}>SCRUM ALLIANCE CERTIFIED</span>
                <h4 className={styles.certName}>Certified Scrum Product Owner®</h4>
                <p className={styles.certDesc}>
                  Officially credentialed to maximize product value, optimize backlogs, align business objectives with team sprints, and deliver user-centric features.
                </p>
              </div>

              {/* Competency Checklist */}
              <div className={styles.competencies}>
                <h5 className={styles.compTitle}>Product Owner Competencies:</h5>
                <ul className={styles.compList}>
                  {competencies.map((comp, index) => (
                    <li key={index} className={styles.compItem}>
                      <span className={styles.compCheck} aria-hidden="true">✦</span>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
