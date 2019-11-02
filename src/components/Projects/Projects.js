import React from 'react';
import styles from './Projects.module.css';

function Projects() {
  return (
      <section className={styles.projects}>
        <div className="container">
          <h2>Мои работы</h2>
          <div className={"line"}></div>
          <div className={styles.projectsList}>
            <div className={styles.project}>
              <div className={styles.icon}>
                <button>Смотреть</button>
              </div>
              <div>
                <span className={styles.title}>Название проекта</span>
                <p className={styles.description}>Краткое описание</p>
              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.icon}>
                <button>Смотреть</button>
              </div>
              <div>
                <span className={styles.title}>Название проекта</span>
                <p className={styles.description}>Краткое описание</p>
              </div>
            </div>
            <div className={styles.project}>
              <div className={styles.icon}>
                <button>Смотреть</button>
              </div>
              <div>
                <span className={styles.title}>Название проекта</span>
                <p className={styles.description}>Краткое описание</p>
              </div>
            </div>

          </div>
        </div>

      </section>
  );
}

export default Projects;
