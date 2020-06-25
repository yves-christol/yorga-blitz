import React from 'react';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';


const initBase = (setGlobalState) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    setGlobalState('auth', firebase.auth());
    setGlobalState('base', firebase.firestore());
  }
}

export default initBase;

