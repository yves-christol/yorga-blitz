import * as app  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';


const initBase = (setGlobalState) => {
  if (!app.apps.length) { // to avoid multiple calls on hot reload
    console.log('Init base for '+firebaseConfig.projectId);
    app.initializeApp(firebaseConfig);
    const auth = app.auth();
    const base = app.firestore();
    setGlobalState('auth', auth);
    setGlobalState('base', base);
  } else {
    console.log('Base already initialized');
  }
}

export default initBase;

