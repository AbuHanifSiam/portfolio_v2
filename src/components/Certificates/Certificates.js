import { useRef } from 'react';
import styles from './Certificates.module.css';

const certificates = [
  {
    id: 'cert-google-pm',
    title: 'Google Project Management Professional Certificate',
    issuer: 'Google (via Coursera)',
    date: 'Issued Mar 2026',
    credentialId: 'GG8RLJEGA5JZ',
    image: '/images/cert-google-pm.jpg',
    gradient: 'linear-gradient(135deg, #4285f4 0%, #34a853 100%)',
    url: 'https://coursera.org/verify/professional-cert/GG8RLJEGA5JZ',
  },
  {
    id: 'cert-google-ai',
    title: 'Google AI Professional Certificate',
    issuer: 'Google (via Coursera)',
    date: 'Issued Mar 2026',
    credentialId: 'ES7E6ZK499MD',
    image: '/images/cert-google-ai.jpg',
    gradient: 'linear-gradient(135deg, #fbbc05 0%, #ea4335 100%)',
    url: 'https://coursera.org/verify/professional-cert/ES7E6ZK499MD',
  },
  {
    id: 'cert-cspo',
    title: 'Certified Scrum Product Owner® (CSPO)',
    issuer: 'Scrum Alliance',
    date: 'Issued Oct 2024',
    credentialId: 'CSPO-00129582',
    image: '/images/cspo-badge.png',
    gradient: 'linear-gradient(135deg, #ff5f29 0%, #ff8f6b 100%)',
    url: 'https://www.scrumalliance.org/certifications/cspo-certification',
  },
  {
    id: 'cert-jira-agile',
    title: 'Agile with Atlassian Jira',
    issuer: 'Atlassian (via Coursera)',
    date: 'Issued Apr 2025',
    credentialId: '5TIMHFFNBMEY',
    image: '/images/cert-jira-agile.jpg',
    gradient: 'linear-gradient(135deg, #0052cc 0%, #2684ff 100%)',
    url: 'https://coursera.org/verify/5TIMHFFNBMEY',
  },
  {
    id: 'cert-jira-automation',
    title: 'Automate Tasks and Processes with Jira',
    issuer: 'Atlassian (via Coursera)',
    date: 'Issued Apr 2025',
    credentialId: 'BRQQ6ODX3WU7',
    image: '/images/cert-jira-automation.jpg',
    gradient: 'linear-gradient(135deg, #0052cc 0%, #00c9a7 100%)',
    url: 'https://coursera.org/verify/BRQQ6ODX3WU7',
  },
  {
    id: 'cert-thm-security',
    title: 'Cyber Security 101 Learning Path',
    issuer: 'TryHackMe',
    date: 'Issued Mar 2025',
    credentialId: 'THM-2CAB3EXPNA',
    image: '/images/cert-thm-security.jpg',
    gradient: 'linear-gradient(135deg, #1f2023 0%, #ef4444 100%)',
    url: 'https://tryhackme.com/r/certificate/THM-2CAB3EXPNA',
  },
];

export default function Certificates() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="certificates" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header with Navigation Arrows */}
        <header className={styles.headerRow} data-animate="fade-up">
          <div className={styles.headerText}>
            <h2 className={styles.title}>Professional Credentials</h2>
            <p className={styles.subtitle}>
              Certified standards validating project delivery expertise and agile methodologies.
            </p>
          </div>
          <div className={styles.navArrows}>
            <button
              className={styles.navArrow}
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className={styles.navArrow}
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </header>

        {/* Scrollable Certificates Container */}
        <div className={styles.scrollTrack} ref={scrollRef}>
          {certificates.map((cert) => (
            <article
              key={cert.id}
              id={cert.id}
              className={styles.card}
              data-animate="fade-up"
            >
              {/* Certificate Image Preview */}
              <div className={styles.badgeArea}>
                <div
                  className={styles.badgeGradientOverlay}
                  style={{ background: cert.gradient }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className={styles.certImage}
                  loading="lazy"
                />
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
