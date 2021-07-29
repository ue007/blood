import React from 'react';
import styles from './app.css';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          <a href="./hello">Hello</a>
        </li>
        <li>
          <a href="./learning">Learning</a>
        </li>
      </ul>
    </div>
  );
}
