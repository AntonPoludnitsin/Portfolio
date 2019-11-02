import React from 'react';
import styles from './Slogan.module.css';

function Slogan() {
  return (
      <section className={styles.slogan}>
        <div className="container">
          <p>Рассматриваю вариант удаленной работы</p>
          <div className={"button"}><button>Нанять меня</button></div>
        </div>


      </section>
  );
}

export default Slogan;
