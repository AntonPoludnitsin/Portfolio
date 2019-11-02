import React from 'react';
import styles from './Skills.module.css';
import Title from "../Title/Title";

function Skills() {

  return (
    <section className={styles.content}>
      <div className="container">
        <h2>Мои скиллы</h2>
        <div className={"line"}></div>

        <div className={styles.skills}>
          <div className={styles.skill}>
            <div className={styles.icon}>
              <img src="" alt="" />
            </div>
            <h3 className={styles.skillTitle}>Html & Css</h3>
            <p className={styles.description}>Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.icon}>
              <img src="" alt="" />
            </div>
            <h3 className={styles.skillTitle}>JavaScript</h3>
            <p className={styles.description}>Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.icon}>
              <img src="" alt="" />
            </div>
            <h3 className={styles.skillTitle}>React</h3>
            <p className={styles.description}>Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
