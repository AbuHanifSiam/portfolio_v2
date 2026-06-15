'use client';

import styles from './Leadership.module.css';

const leadershipRoles = [
  {
    id: 'lead-basis',
    role: 'Former Convener',
    organization: 'BASIS Students Forum (BRACU Chapter)',
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #ff5f29 0%, #ff8f6b 100%)',
    details: [
      'Orchestrated large-scale technology bootcamps, workshops, and career development forums.',
      'Facilitated student engagement with the Bangladesh Association of Software and Information Services (BASIS).',
      'Developed early skills in project scoping, stakeholder management, and program organization.'
    ]
  },
  {
    id: 'lead-bucc',
    role: 'Former Acting Vice-President',
    organization: 'BRAC University Computer Club (BUCC)',
    icon: '💻',
    gradient: 'linear-gradient(135deg, #3389f2 0%, #7b61ff 100%)',
    details: [
      'Coordinated daily operations, event roadmaps, and agile planning ceremonies for the largest academic club at BRACU.',
      'Led cross-functional student teams of developers, designers, and communications specialists to ship campus initiatives.',
      'Collaborated with university faculty and technology industry partners to bridge academic learning with real industry practices.'
    ]
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header} data-animate="fade-up">
          <h2 className={styles.title}>Leadership & Engagement</h2>
          <p className={styles.subtitle}>
            Fostering collaboration, orchestrating student bodies, and leading agile teams.
          </p>
        </header>

        {/* Roles Grid */}
        <div className={styles.grid}>
          {leadershipRoles.map((role) => (
            <article
              key={role.id}
              id={role.id}
              className={styles.card}
              data-animate="fade-up"
            >
              {/* Card Header area */}
              <div className={styles.cardHeader}>
                <div
                  className={styles.iconWrapper}
                  style={{ background: role.gradient }}
                >
                  <span className={styles.icon} aria-hidden="true">
                    {role.icon}
                  </span>
                </div>
                <div>
                  <span className={styles.roleTitle}>{role.role}</span>
                  <h3 className={styles.orgName}>{role.organization}</h3>
                </div>
              </div>

              {/* Details List */}
              <div className={styles.cardBody}>
                <ul className={styles.detailsList}>
                  {role.details.map((detail, index) => (
                    <li key={index} className={styles.detailItem}>
                      <span className={styles.bullet}>✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
