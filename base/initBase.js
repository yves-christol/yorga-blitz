import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

const initBase = (setGlobalState) => {
  console.log('Tata');
  if (!firebase.apps.length) {
    console.log('Titi');
    firebase.initializeApp(firebaseConfig);
    setGlobalState('auth', firebase.auth());
    setGlobalState('base', firebase.firestore());
  }
}

export default initBase;

