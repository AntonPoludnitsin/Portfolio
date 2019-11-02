import React from 'react';
import './../../App.css';
import styles from './Main.module.css';

function Main() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles.alignment}`}>
        <div className={styles.greeting}>
          <span>Привет!</span>
          <span>Я Антон <span>Полудницин</span></span>
          <h1>Я front-end разработчик</h1>
        </div>
        <div className={styles.photo}>
          <div className={styles.image}></div>
          
        </div>
      </div>

    </main>
  );
}

export default Main;
