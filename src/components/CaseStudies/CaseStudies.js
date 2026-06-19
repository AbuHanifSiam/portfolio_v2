'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './CaseStudies.module.css';

export default function CaseStudies() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header}>
          <h2 className={styles.title} data-animate="section-title">
            Case Studies
          </h2>
          <p className={styles.subtitle} data-animate="section-subtitle">
            Every project tells a story of problems solved.
          </p>
        </header>

        {/* Project Grid */}
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/case-studies/${project.id}`}
              id={project.id}
              className={styles.card}
              data-animate="card-rise"
            >
              {/* Preview Area */}
              <div
                className={styles.preview}
                style={{ background: '#ffffff' }}
              >
                {project.logo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={project.logo}
                    alt={`${project.name} Logo`}
                    className={styles.previewLogo}
                  />
                ) : (
                  <span className={styles.previewIcon} aria-hidden="true">
                    {project.icon}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                <p className={styles.cardDesc}>{project.description}</p>

                {/* Metric Badges */}
                <div className={styles.metrics}>
                  {project.metrics.map((metric) => (
                    <span key={metric} className={styles.badge}>
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
