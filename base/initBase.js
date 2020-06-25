import * as app  from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './firebaseConfig';


if (!app.apps.length) {
    console.log('Titi');
    app.initializeApp(firebaseConfig);
}

const initBase = (setGlobalState) => {
  console.log('Tata');
  setGlobalState('auth', app.auth());
  setGlobalState('base', app.firestore());
  setGlobalState('count', 22);
}

export default initBase;

