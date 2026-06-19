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
            <h3 className={styles.storyTitle}>I&apos;m Md. Abu Hanif Siam</h3>
            <p className={styles.paragraph}>
              As a project manager and product delivery leader, I believe that building great software requires more than just managing timelines—it demands deep alignment, empathy, and absolute clarity. I specialize in stepping into complex, high-stakes environments, dissecting chaotic backlogs, and structuring processes that empower teams to ship features that users love.
            </p>
            <p className={styles.paragraph}>
              With a background spanning both hands-on development workflows and product management frameworks, I serve as a translator. I help developers understand the &quot;why&quot; behind the business requirements, and help stakeholders appreciate the technical engineering paths necessary to build scalable, long-term platforms.
            </p>
            <p className={styles.paragraph}>
              My methodologies are heavily rooted in Scrum and Agile principles. Whether resolving team bottlenecks, setting WIP limits, or mapping out critical paths, I focus on maximizing flow and cutting out process waste.
            </p>
          </div>

          {/* CSPO Highlight Card (Right Column) */}
          <div className={styles.highlightCard} data-animate="fade-up">
            <div className={styles.glowBorder} />
            <div className={styles.cardContent}>
              {/* CSPO Official Badge */}
              <div className={styles.badgeWrapper}>
                <div className={styles.badgePulse} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/cspo-badge.png"
                  alt="Certified Scrum Product Owner® (CSPO)"
                  className={styles.cspoBadge}
                />
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
