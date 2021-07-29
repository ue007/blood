import React from 'react';
import styles from './index.css';

const BasicLayout: React.FunctionComponent = props => {
  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <a className={styles.logo} href="./"></a>
        <div className={styles.nav}>
          <a className={styles.href} href="./">
            首页
          </a>
          <a className={styles.href} href="./learning">
            模型
          </a>
          <a className={styles.href} href="./puzzlecards">
            帮助
          </a>
        </div>
        <div className={styles.login}>
          <a className={styles.href} href="./list">
            登录
          </a>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default BasicLayout;
