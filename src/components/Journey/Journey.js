'use client';

import styles from './Journey.module.css';

const milestones = [
  {
    year: '2025-Present',
    title: 'Associate Project Coordinator',
    company: '6sense HQ',
    bullets: [
      'Supported application roadmap execution by preparing PRDs, user stories, and change requests',
      'Coordinated with engineering, design, and QA teams using Jira & ClickUp to maintain timely delivery of releases',
      'Tracked sprint progress, risk flags, and dependency issues to support service governance',
      'Assisted in QA validation, test case design, and release readiness checks',
    ],
  },
  {
    year: '2024-2025',
    title: 'Teacher Assistant',
    company: 'BRAC University',
    bullets: [
      'Checked lab files, assignments, and student project submissions',
      'Conducted regular consultation sessions to address student queries and clarify topics',
      'Prepared quiz/exam questions and graded answer scripts',
      'Helped students understand complex academic topics and course concepts',
    ],
  },
];

export default function Journey() {
  return (
    <section id="journey" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          <h2 className={styles.title} data-animate="section-title">
            My Journey
          </h2>
          <p className={styles.subtitle} data-animate="section-subtitle">
            Every career is a story. Here&apos;s mine.
          </p>
        </header>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} aria-hidden="true" />

          {milestones.map((milestone, index) => (
            <article
              key={milestone.year}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right
                }`}
              data-animate="timeline-item"
            >
              {/* Glowing Node */}
              <div className={styles.timelineNode} aria-hidden="true">
                <span className={styles.nodeGlow} />
                <span className={styles.nodeDot} />
              </div>

              {/* Card */}
              <div className={styles.card}>
                <span className={styles.yearBadge}>{milestone.year}</span>
                <h3 className={styles.cardTitle}>{milestone.title}</h3>
                {milestone.company && (
                  <div className={styles.cardCompany}>{milestone.company}</div>
                )}
                {milestone.description && (
                  <p className={styles.cardDesc}>{milestone.description}</p>
                )}
                {milestone.bullets && (
                  <ul className={styles.bulletList}>
                    {milestone.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
