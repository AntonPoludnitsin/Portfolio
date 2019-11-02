import React from 'react';
import './../../App.css';
import styles from './Header.module.css';
import NavMenu from '../NavMenu/NavMenu';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container`}>
        <div className={styles.alignment}>

          <NavMenu />
        </div>

        </div>
      

    </header>
  );
}

export default Header;
