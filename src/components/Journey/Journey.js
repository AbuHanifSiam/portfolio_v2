'use client';

import styles from './Journey.module.css';

const milestones = [
  {
    year: '2020',
    title: 'The Beginning',
    description:
      'Started my career in tech, diving deep into software development lifecycle and discovering my passion for organizing chaos.',
  },
  {
    year: '2021',
    title: 'First Leadership Role',
    description:
      'Stepped into Scrum Master responsibilities. Learned that the best code ships when teams are heard, not just managed.',
  },
  {
    year: '2022',
    title: 'Cross-Functional Command',
    description:
      'Led a 12-person cross-functional team across 3 time zones. Delivered a $500K platform migration 2 weeks ahead of schedule.',
  },
  {
    year: '2023',
    title: 'The Rescue Mission',
    description:
      'Took over a stalled enterprise project bleeding $50K/month. Restructured the roadmap, re-engaged stakeholders, and shipped in 90 days.',
  },
  {
    year: '2024-Present',
    title: 'Scaling Impact',
    description:
      'Managing multiple product lines simultaneously. Building PM practices and mentoring junior project managers.',
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
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
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
                <p className={styles.cardDesc}>{milestone.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
