'use client';

import styles from './Hero.module.css';

const TIMELINE_PHASES = ['Discovery', 'Planning', 'Execution', 'Launch'];

const STAT_CARDS = [
  { id: 'stat-projects', value: '15+', label: 'Projects Delivered', position: 'topRight' },
  { id: 'stat-delivery', value: '98%', label: 'On-Time Delivery', position: 'midRight' },
  { id: 'stat-budget', value: '$2M+', label: 'Budget Managed', position: 'bottomRight' },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      {/* Background layers */}
      <div className={styles.bgGradient} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      <div className={styles.container}>
        {/* Main Content Column (Left on Desktop) */}
        <div className={styles.content} data-animate="fade-up">
          {/* Role Label */}
          <span className={styles.roleLabel}>SOFTWARE PROJECT MANAGER</span>

          {/* Headline */}
          <h1 className={styles.headline}>
            I Turn Chaos Into
            <br />
            <span className={styles.headlineGradient}>Shipped Products</span>
          </h1>

          {/* Sub-headline */}
          <p className={styles.subheadline}>
            Agile leader specializing in rescuing stalled projects, aligning
            cross-functional teams, and delivering software that matters — on
            time, every time.
          </p>

          {/* Process Timeline */}
          <div className={styles.timeline} aria-label="Process timeline">
            <div className={styles.timelineLine} aria-hidden="true" />
            {TIMELINE_PHASES.map((phase, i) => (
              <div className={styles.timelineNode} key={phase}>
                <div className={styles.timelineDot}>
                  <span className={styles.timelineDotInner} />
                </div>
                <span className={styles.timelineLabel}>{phase}</span>
                {i < TIMELINE_PHASES.length - 1 && (
                  <span className={styles.timelineArrow} aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaRow}>
            <a
              id="cta-view-work"
              href="#work"
              className={styles.ctaPrimary}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#work')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work
            </a>
            <a
              id="cta-contact"
              href="#contact"
              className={styles.ctaOutline}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Photo & Stat Cards Column (Right on Desktop) */}
        <div className={styles.photoContainer} data-animate="fade-in">
          <div className={styles.photoFrame}>
            <div className={styles.photoGlow} />
            <div className={styles.photoInner}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="Md. Abu Hanif Siam"
                className={styles.photo}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className={styles.photoFallback}>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.fallbackIcon}
                >
                  <path
                    d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
                <span className={styles.fallbackText}>MD. ABU HANIF SIAM</span>
              </div>
            </div>
          </div>

          {/* Floating Stat Cards around the photo (Desktop) */}
          {STAT_CARDS.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className={`${styles.statCard} ${styles[card.position]}`}
              data-animate="float-in"
            >
              <span className={styles.statValue}>{card.value}</span>
              <span className={styles.statLabel}>{card.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Stat Cards (rendered separately for layout on mobile) */}
      <div className={styles.mobileStats}>
        {STAT_CARDS.map((card) => (
          <div
            key={`mobile-${card.id}`}
            className={styles.mobileStatCard}
            data-animate="float-in"
          >
            <span className={styles.statValue}>{card.value}</span>
            <span className={styles.statLabel}>{card.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
