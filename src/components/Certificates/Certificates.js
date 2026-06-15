'use client';

import styles from './Certificates.module.css';

const certificates = [
  {
    id: 'cert-pmp',
    title: 'Project Management Professional (PMP)®',
    issuer: 'Project Management Institute (PMI)',
    date: 'Issued Jun 2025',
    credentialId: 'PMP-3829412',
    icon: '🏆',
    gradient: 'linear-gradient(135deg, #e5a93b 0%, #ff5f29 100%)',
    url: 'https://www.pmi.org/certifications/project-management-pmp',
  },
  {
    id: 'cert-cspo',
    title: 'Certified Scrum Product Owner® (CSPO)',
    issuer: 'Scrum Alliance',
    date: 'Issued Oct 2024',
    credentialId: 'CSPO-00129582',
    icon: '🎯',
    gradient: 'linear-gradient(135deg, #ff5f29 0%, #ff8f6b 100%)',
    url: 'https://www.scrumalliance.org/certifications/cspo-certification',
  },
  {
    id: 'cert-csm',
    title: 'Certified ScrumMaster® (CSM)',
    issuer: 'Scrum Alliance',
    date: 'Issued Sep 2024',
    credentialId: 'CSM-00123958',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #3389f2 0%, #7b61ff 100%)',
    url: 'https://www.scrumalliance.org/certifications/csm-certification',
  },
  {
    id: 'cert-google-pm',
    title: 'Google Project Management Professional Certificate',
    issuer: 'Google (Coursera)',
    date: 'Issued Jan 2024',
    credentialId: 'COURSERA-GPM992',
    icon: '🎓',
    gradient: 'linear-gradient(135deg, #00c9a7 0%, #3389f2 100%)',
    url: 'https://www.coursera.org/professional-certificates/google-project-management',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header} data-animate="fade-up">
          <h2 className={styles.title}>Professional Credentials</h2>
          <p className={styles.subtitle}>
            Certified standards validating project delivery expertise and agile methodologies.
          </p>
        </header>

        {/* Certificates Grid */}
        <div className={styles.grid}>
          {certificates.map((cert) => (
            <article
              key={cert.id}
              id={cert.id}
              className={styles.card}
              data-animate="fade-up"
            >
              {/* Badge visual */}
              <div
                className={styles.badgeArea}
                style={{ background: cert.gradient }}
              >
                <span className={styles.badgeIcon} aria-hidden="true">
                  {cert.icon}
                </span>
              </div>

              {/* Certificate Details */}
              <div className={styles.cardBody}>
                <span className={styles.issuer}>{cert.issuer}</span>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                
                <div className={styles.meta}>
                  <span className={styles.date}>{cert.date}</span>
                  {cert.credentialId && (
                    <span className={styles.credential}>ID: {cert.credentialId}</span>
                  )}
                </div>

                <div className={styles.actions}>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnVerify}
                  >
                    Verify Credential
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles.arrowIcon}
                    >
                      <path
                        d="M5 12H19M19 12L13 6M19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
