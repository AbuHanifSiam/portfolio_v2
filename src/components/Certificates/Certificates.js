'use client';

import styles from './Certificates.module.css';

const certificates = [
  {
    id: 'cert-google-pm',
    title: 'Google Project Management Professional Certificate',
    issuer: 'Google (via Coursera)',
    date: 'Issued Mar 2026',
    credentialId: 'GG8RLJEGA5JZ',
    icon: '🏆',
    gradient: 'linear-gradient(135deg, #4285f4 0%, #34a853 100%)',
    url: 'https://coursera.org/verify/professional-cert/GG8RLJEGA5JZ',
  },
  {
    id: 'cert-google-ai',
    title: 'Google AI Professional Certificate',
    issuer: 'Google (via Coursera)',
    date: 'Issued Mar 2026',
    credentialId: 'ES7E6ZK499MD',
    icon: '🧠',
    gradient: 'linear-gradient(135deg, #fbbc05 0%, #ea4335 100%)',
    url: 'https://coursera.org/verify/professional-cert/ES7E6ZK499MD',
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
    id: 'cert-jira-agile',
    title: 'Agile with Atlassian Jira',
    issuer: 'Atlassian (via Coursera)',
    date: 'Issued Apr 2025',
    credentialId: '5TIMHFFNBMEY',
    icon: '🔷',
    gradient: 'linear-gradient(135deg, #0052cc 0%, #2684ff 100%)',
    url: 'https://coursera.org/verify/5TIMHFFNBMEY',
  },
  {
    id: 'cert-jira-automation',
    title: 'Automate Tasks and Processes with Jira',
    issuer: 'Atlassian (via Coursera)',
    date: 'Issued Apr 2025',
    credentialId: 'BRQQ6ODX3WU7',
    icon: '⚙️',
    gradient: 'linear-gradient(135deg, #0052cc 0%, #00c9a7 100%)',
    url: 'https://coursera.org/verify/BRQQ6ODX3WU7',
  },
  {
    id: 'cert-thm-security',
    title: 'Cyber Security 101 Learning Path',
    issuer: 'TryHackMe',
    date: 'Issued Mar 2025',
    credentialId: 'THM-2CAB3EXPNA',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, #1f2023 0%, #ef4444 100%)',
    url: 'https://tryhackme.com/r/certificate/THM-2CAB3EXPNA',
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
