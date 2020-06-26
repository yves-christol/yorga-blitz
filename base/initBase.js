import * as app  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const initBase = (setGlobalState) => {
  if (!app.apps.length) { // to avoid multiple calls on hot reload
    console.log('Titi');
    app.initializeApp(firebaseConfig);
    //const auth = app.auth();
    const base = app.firestore();
    console.log('Tata');
    setGlobalState('count', 0);
    //setGlobalState('auth', auth);
    setGlobalState('base', base);
    console.log('Tete');
  }
}

export default initBase;

