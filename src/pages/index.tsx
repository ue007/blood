import React from 'react';
import styles from './index.css';

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
        <li>
          <a href="./puzzlecards">puzzlecards</a>
        </li>
        <li>
          <a href="./list">list</a>
        </li>
      </ul>
    </div>
  );
}
