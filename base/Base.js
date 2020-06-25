import React from 'react';
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';


if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}

const Base = {
  auth: firebase.auth(),
  db: firebase.firestore(),
  subscriptions: {}
}

const BaseContext = React.createContext(Base)

export default BaseContext;

