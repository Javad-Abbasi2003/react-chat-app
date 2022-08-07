import React from 'react';

// Style
import styles from './Navbar.module.css'

const Navbar = ({logoutHandler}) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>Newgram</span>
      <button onClick={logoutHandler} className={styles.logout}>Logout</button>
    </div>
  );
};

export default Navbar;