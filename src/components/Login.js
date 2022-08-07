import React from "react";
import firebase from "firebase/app";
import { auth } from "../firebase"

//Icons
import GoogleIcon from "../asset/Google_Logo.svg";

//Style
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h3 className={styles.header}>Welcome to Newgram!</h3>
        <div 
          className={styles.loginButton}
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <img src={GoogleIcon} alt="G" /> Log in with Gmail
        </div>
      </div>
    </div>
  );
};

export default Login;
