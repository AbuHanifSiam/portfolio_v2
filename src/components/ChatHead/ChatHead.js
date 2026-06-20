'use client';

import { useState } from 'react';
import styles from './ChatHead.module.css';

export default function ChatHead() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(false);
    setIsHovered(false);
  };

  const handleOpenClick = (e) => {
    e.preventDefault();
    setIsExpanded(true);
  };

  const showExpanded = isExpanded || isHovered;

  return (
    <div
      className={`${styles.widgetWrapper} ${showExpanded ? styles.expanded : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Minimized Google Meet Trigger Button */}
      <button
        id="chathead-minimized"
        type="button"
        className={styles.minimizedTrigger}
        onClick={handleOpenClick}
        aria-label="Open scheduling invitation"
      >
        <div className={styles.meetIconWrapper}>
          <svg
            className={styles.meetIcon}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
          >
            <title>Google Meet</title>
            <path
              d="M5.53 2.13 0 7.75h5.53zm.398 0v5.62h7.608v3.65l5.47-4.45c-.014-1.22.031-2.25-.025-3.46-.148-1.09-1.287-1.47-2.236-1.36zM23.1 4.32c-.802.295-1.358.995-2.047 1.49-2.506 2.05-4.982 4.12-7.468 6.19 3.025 2.59 6.04 5.18 9.065 7.76 1.218.671 1.428-.814 1.328-1.64v-13a.828.828 0 0 0-.877-.825zM.038 8.15v7.7h5.53v-7.7zm13.577 8.1H6.008v5.62c3.864-.006 7.737.011 11.58-.009 1.02-.07 1.618-1.12 1.468-2.07v-2.51l-5.47-4.68v3.65zm-13.577 0c.02 1.44-.041 2.88.033 4.31.162.948 1.158 1.43 2.047 1.31h3.464v-5.62z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <span className={styles.tooltip}>Let's Meet</span>
      </button>

      {/* Expanded Scheduling Card */}
      <div id="chathead-expanded" className={styles.cardContainer}>
        <a
          href="https://calendly.com/mdabuhanifsiam/30min"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          {/* Top Section */}
          <div className={styles.cardHeader}>
            <div className={styles.avatarWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile.jpg"
                alt="Md. Abu Hanif Siam"
                className={styles.avatar}
              />
              <span className={styles.statusDot} />
            </div>
            <div className={styles.titleWrapper}>
              <span className={styles.title}>Let's Meet</span>
            </div>
          </div>

          {/* Separator Line */}
          <div className={styles.separator} />

          {/* Bottom Section */}
          <div className={styles.cardFooter}>
            <div className={styles.ctaWrapper}>
              <span className={styles.ctaText}>Book a Slot</span>
              <span className={styles.ctaArrow}>→</span>
            </div>
            <div className={styles.brandWrapper}>
              <svg
                className={styles.calendlyIcon}
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <title>Calendly</title>
                <path
                  d="M19.655 14.262c.281 0 .557.023.828.064 0 .005-.005.01-.005.014-.105.267-.234.534-.381.786l-1.219 2.106c-1.112 1.936-3.177 3.127-5.411 3.127h-2.432c-2.23 0-4.294-1.191-5.412-3.127l-1.218-2.106a6.251 6.251 0 0 1 0-6.252l1.218-2.106C6.736 4.832 8.8 3.641 11.035 3.641h2.432c2.23 0 4.294 1.191 5.411 3.127l1.219 2.106c.147.252.271.519.381.786 0 .004.005.009.005.014-.267.041-.543.064-.828.064-1.816 0-2.501-.607-3.291-1.306-.764-.676-1.711-1.517-3.44-1.517h-1.029c-1.251 0-2.387.455-3.2 1.278-.796.805-1.233 1.904-1.233 3.099v1.411c0 1.196.437 2.295 1.233 3.099.813.823 1.949 1.278 3.2 1.278h1.034c1.729 0 2.676-.841 3.439-1.517.791-.703 1.471-1.306 3.287-1.301Zm.005-3.237c.399 0 .794-.036 1.179-.11-.002-.004-.002-.01-.002-.014-.073-.414-.193-.823-.349-1.218.731-.12 1.407-.396 1.986-.819 0-.004-.005-.013-.005-.016-.277.018-.553.028-.829.028-1.554 0-2.221-.497-2.994-1.071-.782-.581-1.637-1.217-3.254-1.217h-1.332c-1.823 0-3.3 1.477-3.3 3.3v.266c0 1.823 1.477 3.3 3.3 3.3h1.337c1.612 0 2.467-.636 3.254-1.217.768-.574 1.435-1.071 2.989-1.071.286 0 .571.01.859.032.001-.005.006-.01.006-.015a6.452 6.452 0 0 0 .344-1.218c.002-.004.002-.01.002-.014-.385-.074-.78-.11-1.179-.11Z"
                  fill="#006BFF"
                />
              </svg>
              <span className={styles.calendlyText}>Calendly</span>
            </div>
          </div>
        </a>

        {/* Absolute Close Action Button */}
        <button
          id="chathead-close"
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Minimize scheduling invitation"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
