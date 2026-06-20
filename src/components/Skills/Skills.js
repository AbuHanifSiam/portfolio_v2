'use client';

import Image from 'next/image';
import styles from './Skills.module.css';

const largeCards = [
  {
    id: 'skill-agile',
    icon: '⚡',
    title: 'Agile & Scrum',
    desc: 'Sprint planning, retrospectives, velocity tracking, and continuous delivery pipelines.',
  },
  {
    id: 'skill-stakeholder',
    icon: '🤝',
    title: 'Stakeholder Management',
    desc: 'Translating business needs into technical requirements. Keeping everyone aligned from C-suite to developers.',
  },
];

const mediumCard = {
  id: 'skill-docs',
  icon: '📋',
  title: 'Technical Documentation',
  desc: 'PRDs, technical specs, API documentation, and architecture decision records.',
};

const tools = [
  { id: 'tool-jira', icon: '/images/jira-logo.png', isImage: true, name: 'Jira' },
  { id: 'tool-confluence', icon: '/images/confluence-logo.png', isImage: true, name: 'Confluence' },
  { id: 'tool-github', icon: '/images/github-logo.svg', isImage: true, name: 'GitHub' },
  { id: 'tool-slack', icon: '💬', name: 'Slack' },
  { id: 'tool-figma', icon: '/images/figma-logo.png', isImage: true, name: 'Figma' },
  { id: 'tool-trello', icon: '/images/trello-logo.png', isImage: true, name: 'Trello' },
];


export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header} data-animate="fade-up">
          <h2 className={styles.title}>My Toolkit</h2>
          <p className={styles.subtitle}>
            The methodologies and tools that power my workflow.
          </p>
        </header>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {/* Large Cards */}
          {largeCards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className={`${styles.card} ${styles.cardLarge}`}
              data-animate="fade-up"
            >
              <span className={styles.cardIcon}>{card.icon}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </article>
          ))}

          {/* Medium Card */}
          <article
            id={mediumCard.id}
            className={`${styles.card} ${styles.cardMedium}`}
            data-animate="fade-up"
          >
            <span className={styles.cardIcon}>{mediumCard.icon}</span>
            <h3 className={styles.cardTitle}>{mediumCard.title}</h3>
            <p className={styles.cardDesc}>{mediumCard.desc}</p>
          </article>

          {/* Small Tool Cards */}
          {tools.map((tool) => (
            <article
              key={tool.id}
              id={tool.id}
              className={`${styles.card} ${styles.cardSmall}`}
              data-animate="fade-up"
            >
              <span className={styles.toolIcon}>
                {tool.isImage ? (
                  <Image
                    src={tool.icon}
                    alt={`${tool.name} Logo`}
                    width={40}
                    height={40}
                    className={styles.toolIconImage}
                  />
                ) : (
                  tool.icon
                )}
              </span>
              <span className={styles.toolName}>{tool.name}</span>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
