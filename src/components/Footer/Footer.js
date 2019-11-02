import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
      <section className={styles.footer}>
        <div className="container">
          <h2>Полудницин Антон</h2>

          <div className={styles.social}>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
            <div className={styles.item}></div>
          </div>

          <div className={styles.copyright}>2019 Все права защищены</div>
        </div>

      </section>
  );
}

export default Footer;
