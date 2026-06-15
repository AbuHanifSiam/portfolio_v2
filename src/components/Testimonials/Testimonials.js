import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 'testimonial-1',
    quote:
      'Siam turned our chaotic backlog into a well-oiled delivery machine. Sprint velocity doubled in 3 months.',
    name: 'Sarah Chen',
    role: 'Engineering Lead, TechCorp',
    avatarColor: '#3389f2',
    initials: 'SC',
  },
  {
    id: 'testimonial-2',
    quote:
      "The best PM I've worked with. He doesn't just manage tasks — he removes obstacles before you even see them.",
    name: 'James Rodriguez',
    role: 'CTO, FinFlow Inc.',
    avatarColor: '#ff5f29',
    initials: 'JR',
  },
  {
    id: 'testimonial-3',
    quote:
      'When our project was 3 months behind and the client was furious, Siam came in and delivered in 90 days. Remarkable.',
    name: 'Anika Patel',
    role: 'VP Product, HealthSync',
    avatarColor: '#00c9a7',
    initials: 'AP',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <header className={styles.header} data-animate="fade-up">
          <h2 className={styles.title}>What Teams Say</h2>
          <p className={styles.subtitle}>
            The best measure of a PM is the team&apos;s trust.
          </p>
        </header>

        {/* Cards Row */}
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <article
              key={t.id}
              id={t.id}
              className={styles.card}
              data-animate="fade-up"
            >
              {/* Decorative Quote Mark */}
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className={styles.quote}>
                <p>{t.quote}</p>
              </blockquote>

              {/* Divider */}
              <div className={styles.divider} />

              {/* Person Info */}
              <div className={styles.person}>
                <div
                  className={styles.avatar}
                  style={{ background: t.avatarColor }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className={styles.personInfo}>
                  <span className={styles.personName}>{t.name}</span>
                  <span className={styles.personRole}>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
