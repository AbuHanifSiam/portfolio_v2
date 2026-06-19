'use client';

import styles from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <section id="contact" className={styles.section}>
        <div className={styles.bgShift} aria-hidden="true" />

        <div className={styles.container}>
          {/* Heading */}
          <h2 className={styles.heading} data-animate="scale-in">
            <span className={styles.headingLine}>Let&apos;s Build Something</span>
            <span className={styles.headingLine}>Great Together</span>
          </h2>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Whether you need a PM to rescue a project, launch a new product, or
            level up your delivery process — let&apos;s talk.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctas}>
            <a
              id="cta-email"
              href="mailto:mdabuhanifsiam@gmail.com"
              className={styles.btnPrimary}
            >
              Get In Touch
            </a>
            <a
              id="cta-resume"
              href="#"
              className={styles.btnOutline}
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className={styles.socials}>
            {/* LinkedIn */}
            <a
              id="social-linkedin"
              href="https://www.linkedin.com/in/ahsiam11/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="LinkedIn"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              id="social-github"
              href="https://github.com/AbuHanifSiam"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              id="social-email"
              href="mailto:mdabuhanifsiam@gmail.com"
              className={styles.socialBtn}
              aria-label="Email"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M22 6l-10 7L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLine} aria-hidden="true" />
        <p className={styles.footerText}>
          © 2024 Md. Abu Hanif Siam. Crafted with passion.
        </p>
      </footer>
    </>
  );
}
