'use client';

import styles from './SpecializedSolutions.module.css';

const solutions = [
  {
    id: 'solution-agile',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="6" cy="19" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="M12 7.5v6.5M12 14H6v2.5M12 14h6v2.5" />
      </svg>
    ),
    title: 'Agile Workspace Setup',
    description: 'Organize development chaos by configuring high-velocity Jira or Trello dashboards, standardizing workflows, and setting up sprint planning templates.',
    features: [
      'Jira/Trello Configuration',
      'Workflow Customization',
      'Sprint Reporting Dashboards',
      'Ceremony Templates'
    ],
    buttonText: 'Request Setup',
    buttonLink: 'https://calendly.com/mdabuhanifsiam/30min'
  },
  {
    id: 'solution-discovery',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Technical Discovery',
    description: 'Translate complex feature ideas into rigorous, developer-ready Software Requirements Specifications (SRS) that engineering teams can execute immediately.',
    features: [
      'ISO 29148 Standard SRS',
      'Functional Requirements',
      'Acceptance Criteria Mapping',
      'Architecture Flowcharts'
    ],
    buttonText: 'Start Discovery',
    buttonLink: 'https://calendly.com/mdabuhanifsiam/30min'
  },
  {
    id: 'solution-rescue',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Project Rescue & Audit',
    description: 'Audit stalled development projects, evaluate legacy codebases, mitigate technical risks, and manage handoffs when transitioning to new teams.',
    features: [
      'Codebase Health Audit',
      'Technical Risk Assessment',
      'Repository Management',
      'Recovery Sprint Roadmap'
    ],
    buttonText: 'Audit My Project',
    buttonLink: '#work'
  }
];

export default function SpecializedSolutions() {
  return (
    <section id="specialized-solutions" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header} data-animate="fade-up">
          <span className={styles.tagline}>Fractional PM Services</span>
          <h2 className={styles.title}>Specialized Solutions</h2>
          <p className={styles.subtitle}>
            Standard-compliant deliverables and operational frameworks tailored for startups, technical founders, and agency owners.
          </p>
        </header>

        {/* Solutions Grid */}
        <div className={styles.grid} data-card-group>
          {solutions.map((solution) => (
            <article
              key={solution.id}
              className={styles.card}
              data-animate="card-rise"
            >
              <div className={styles.iconWrapper}>
                {solution.icon}
              </div>
              <h3 className={styles.cardTitle}>{solution.title}</h3>
              <p className={styles.cardDesc}>{solution.description}</p>
              
              <ul className={styles.featureList}>
                {solution.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.dot} />
                    <span className={styles.featureText}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={solution.buttonLink}
                className={styles.ctaButton}
                target={solution.buttonLink.startsWith('#') ? undefined : "_blank"}
                rel={solution.buttonLink.startsWith('#') ? undefined : "noopener noreferrer"}
                onClick={(e) => {
                  if (solution.buttonLink.startsWith('#')) {
                    e.preventDefault();
                    document
                      .querySelector(solution.buttonLink)
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>{solution.buttonText}</span>
                <span className={styles.arrow}>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
