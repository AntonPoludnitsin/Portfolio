import React from 'react';
import styles from './Title.module.css';

function Title() {
  return (
      <section className={styles.slogan}>
        <h2 className={styles.title}></h2>
        <div className={styles.line}></div>
      </section>
  );
}

export default Title;
