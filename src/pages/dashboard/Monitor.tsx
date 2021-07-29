import React from 'react';
import styles from './index.css';
// Monitor.js

export default () => {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <h1>Monitor Page</h1>
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
