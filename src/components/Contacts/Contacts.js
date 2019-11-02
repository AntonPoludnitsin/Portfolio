import React from 'react';
import styles from './Contacts.module.css';

function Contacts() {
  return (
      <section className={styles.contacts}>
        <div className="container">
          <h2>Контакты</h2>
          <form action="">
            <input type="text" placeholder="Имя" /><br/>
            <input type="text" placeholder="e-mail"/><br/>
            <textarea name="" placeholder="Сообщение"></textarea>
            <button>Отправить</button>
          </form>

        </div>

      </section>
  );
}

export default Contacts;
