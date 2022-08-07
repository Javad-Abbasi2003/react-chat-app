import firebase from "firebase/app";
import "firebase/auth"

// Configuration
export const auth = firebase.initializeApp({
  apiKey: "AIzaSyA1RrkWEg2KkAe4n9SwIEJIveTsFGcSP7k",
  authDomain: "newgram-7edd3.firebaseapp.com",
  projectId: "newgram-7edd3",
  storageBucket: "newgram-7edd3.appspot.com",
  messagingSenderId: "217893773055",
  appId: "1:217893773055:web:4b7adf88b349f9917bf6ca"
}).auth();
