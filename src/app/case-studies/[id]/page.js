'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export default function CaseStudyDetail({ params }) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.id);

  const [activeTab, setActiveTab] = useState(() => {
    if (project?.websiteImages?.length > 0) return 'website';
    if (project?.mobileImages?.length > 0) return 'mobile';
    return 'website';
  });

  if (!project) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundCard}>
          <span className={styles.notFoundIcon} aria-hidden="true">⚠️</span>
          <h1 className={styles.notFoundTitle}>Case Study Not Found</h1>
          <p className={styles.notFoundDesc}>
            The case study you are looking for does not exist or has been relocated.
          </p>
          <Link href="/" className={styles.backHomeBtn}>
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Background layers */}
      <div className={styles.bgGradient} aria-hidden="true" />
      <div className={styles.bgGrid} aria-hidden="true" />

      {/* Navigation Header */}
      <nav className={styles.nav} aria-label="Detail page navigation">
        <div className={styles.navContainer}>
          <Link href="/" className={styles.backBtn}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.backIcon}
            >
              <path
                d="M19 12H5M5 12L12 19M5 12L12 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>
          <span className={styles.navBrand}>Case Study Deep-Dive</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero} style={{ '--project-gradient': project.gradient }}>
        <div className={styles.heroContainer}>
          <div className={styles.iconWrapper}>
            {project.logo ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={project.logo}
                alt={`${project.name} Logo`}
                className={styles.heroLogo}
              />
            ) : (
              <span className={styles.heroIcon}>{project.icon}</span>
            )}
          </div>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.desc}>{project.description}</p>

          {/* Quick Metrics */}
          <div className={styles.metricsRow}>
            {project.metrics.map((metric) => (
              <span key={metric} className={styles.metricBadge}>
                {metric}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          {/* Narrative Body (Left side on Desktop, wider ratio) */}
          <section className={styles.body}>
            {/* The Challenge */}
            <article className={styles.sectionCard}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionIndex}>01.</span> The Challenge
              </h2>
              <p className={styles.sectionText}>{project.challenge}</p>
            </article>

            {/* The Strategy & Actions */}
            <article className={styles.sectionCard}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionIndex}>02.</span> Project Management Strategy
              </h2>
              <p className={styles.sectionText}>{project.strategy}</p>
            </article>

            {/* The Results */}
            <article className={styles.sectionCard}>
              <h2 className={styles.sectionHeading}>
                <span className={styles.sectionIndex}>03.</span> Business Impact & Results
              </h2>
              <p className={styles.sectionText}>{project.results}</p>
            </article>
          </section>

          {/* Metadata Sidebar (Mobile: bottom/top, Desktop: right side) */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarCard}>
              <h2 className={styles.sidebarTitle}>Project Overview</h2>

              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>{project.role}</span>
              </div>

              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>

              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Duration</span>
                <span className={styles.metaValue}>{project.duration}</span>
              </div>

              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Team Size</span>
                <span className={styles.metaValue}>{project.teamSize}</span>
              </div>

              <div className={styles.deliverablesSection}>
                <h3 className={styles.deliverablesTitle}>Key Deliverables</h3>
                <ul className={styles.deliverablesList}>
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className={styles.deliverableItem}>
                      <span className={styles.bullet}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Product Showcase (Separate Full-Width Section below content columns) */}
        {((project.websiteImages && project.websiteImages.length > 0) ||
          (project.mobileImages && project.mobileImages.length > 0)) && (
            <section className={styles.showcaseSection}>
              <div className={styles.showcaseHeader}>
                <h2 className={styles.showcaseTitle}>
                  <span className={styles.showcaseTitleIndex}>04.</span> Product Showcase
                </h2>
                <div className={styles.tabButtons}>
                  {project.websiteImages && project.websiteImages.length > 0 && (
                    <button
                      className={activeTab === 'website' ? styles.tabBtnActive : styles.tabBtn}
                      onClick={() => setActiveTab('website')}
                    >
                      Live Website UI
                    </button>
                  )}
                  {project.mobileImages && project.mobileImages.length > 0 && (
                    <button
                      className={activeTab === 'mobile' ? styles.tabBtnActive : styles.tabBtn}
                      onClick={() => setActiveTab('mobile')}
                    >
                      Mobile Application UI
                    </button>
                  )}
                </div>
              </div>

              <div className={styles.galleryContent}>
                {activeTab === 'website' && project.websiteImages && (
                  <div className={styles.desktopGrid}>
                    {project.websiteImages.map((img, idx) => (
                      <div key={idx} className={styles.desktopMockupCard}>
                        <div className={styles.browserBar}>
                          <div className={styles.browserDotRed}></div>
                          <div className={styles.browserDotYellow}></div>
                          <div className={styles.browserDotGreen}></div>
                          <div className={styles.browserAddress}>https://{project.id}.live/page-{idx + 1}</div>
                        </div>
                        <div className={styles.desktopScreen}>
                          <img
                            src={img}
                            alt={`${project.name} Desktop UI ${idx + 1}`}
                            className={styles.mockupImage}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'mobile' && project.mobileImages && (
                  <div className={styles.mobileGrid}>
                    {project.mobileImages.map((img, idx) => (
                      <div key={idx} className={styles.phoneMockupCard}>
                        <div className={styles.phoneScreen}>
                          <img
                            src={img}
                            alt={`${project.name} Mobile UI ${idx + 1}`}
                            className={styles.mockupImage}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}
      </main>

      {/* Footer CTA */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p className={styles.footerText}>
            Want to discuss how I can achieve similar results for your team?
          </p>
          <div className={styles.footerBtns}>
            <Link href="/#contact" className={styles.contactBtn}>
              Start a Conversation
            </Link>
            <Link href="/" className={styles.outlineBtn}>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
