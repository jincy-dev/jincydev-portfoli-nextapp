import React from 'react';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.introText}>This is</p>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>
          Andy Ta<br />Hong
        </h1>
        <p className={styles.subtitle}>Entrepreneur and developer</p>
      </div>
      <div className={styles.downloadCV}>
        <div className={styles.circleContainer}>
          {/* Inner static circle */}
          <div className={styles.innerCircle} />
          
          {/* Outer static circle */}
          <div className={styles.outerCircle} />
          
          {/* Rotating arc container */}
          <div className={styles.rotatingContainer}>
            {/* Arc segments */}
            <svg className={styles.arcs} viewBox="0 0 200 200">
              <path 
                d="M 100 20 A 80 80 0 0 1 180 100" 
                className={styles.arcPath}
              />
              <path 
                d="M 180 100 A 80 80 0 0 1 100 180" 
                className={styles.arcPath}
              />
              <path 
                d="M 100 180 A 80 80 0 0 1 20 100" 
                className={styles.arcPath}
              />
              
              {/* Dots at arc endpoints */}
              <circle cx="100" cy="20" r="3" className={styles.dot} />
              <circle cx="180" cy="100" r="3" className={styles.dot} />
              <circle cx="100" cy="180" r="3" className={styles.dot} />
              <circle cx="20" cy="100" r="3" className={styles.dot} />
            </svg>
          </div>

          {/* Center text */}
          <div className={styles.downloadText}>
            &lt;Download CV/&gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;