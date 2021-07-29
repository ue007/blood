import React from 'react';
import styles from './index.css';
// Workplace.js

export default () => {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <h1>Workplace Page</h1>
      <ul className={styles.list}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/learning">Learning</a>
        </li>
      </ul>
    </div>
  );
};
